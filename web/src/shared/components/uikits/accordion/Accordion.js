import React, { useState } from "react";
import "./Accordion.scss";

// const accordionData = [
//   {
//     heading: "Will my license be automatically renewed?",
//     content:
//       "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
//   },
//   {
//     heading: "Can I upgrade my license?",
//     content:
//       "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
//   },
//   {
//     heading: "Do you provide email support if I need help?",
//     content:
//       "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
//   },
// ];

//  <ul className="accordion">
//    {accordionData.map(({ heading, content }) => (
//      <Accordion heading={heading} content={content} />
//    ))}
//  </ul>;

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;
