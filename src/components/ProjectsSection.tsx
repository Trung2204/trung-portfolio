"use client";

import React, { useRef, useState } from "react";
import { ProjectsDataType } from "../types";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website, built with Next.js framework",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Trung2204/trung-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Messenger Clone Website",
    description:
      "A real-time chat application inspired by Messenger, built with Next.js framework",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Trung2204/messenger-clone",
    previewUrl: "https://messenger-clone-trung.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A modern e-commerce website, built with Next.js framework",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Trung2204/ecommerce-website",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pick and Place Project",
    description:
      "A robot arm performs object picking and placing with MoveIt Motion Planning",
    image: "/images/projects/4.png",
    tag: ["All", "Robotic"],
    gitUrl: "https://github.com/Trung2204/ur10e_rg2_PickAndPlace",
    previewUrl:
      "https://github.com/Trung2204/ur10e_rg2_PickAndPlace/blob/master/Image/expected_outcome.gif",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Network"
          isSelected={tag === "Network"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Robotic"
          isSelected={tag === "Robotic"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
