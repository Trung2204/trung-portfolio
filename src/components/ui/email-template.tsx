import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h1>Hi, {firstName}!</h1>
    <p>Thank you for reaching out to me. I have received your message:</p>
    <blockquote className="italic text-gray-600">
      &quot;{message}&quot;
    </blockquote>
    <p>I will get back to you as soon as possible.</p>
    <p>Best regards,</p>
    <p>Trung, Doan Minh</p>
  </div>
);
