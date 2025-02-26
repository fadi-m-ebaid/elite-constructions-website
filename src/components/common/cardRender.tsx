"use client"

import { useRouter } from "next/navigation";
import React from "react";


interface CardProps {
  id?: string | number;
  title: string;
  img: string;
  shortDesc?: string;
  category?: string;
  type?: string;
  projectCategory?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  img,
  type,
  projectCategory,
  shortDesc,
  category,
}) => {
  const router = useRouter(); // ✅ Initialize Next.js router

  const handleNavigation = () => {
    router.push(`/${category || type}/${id}`); // ✅ Navigate dynamically
  };
  return (
    <div key={id} className={`${category || type}-card`}>
      <div className={`${category || type}-image`}>
        <img src={img} alt={title} />
        {(category === "services" ||
          category === "projects" ||
          type === "services" ||
          type === "projects") && (
          <h3 className={`${category || type}-title`}>{title}</h3>
        )}
      </div>

      <div className={`${category || type}-details`}>
        {(category === "services" || type === "services") && <p>{shortDesc}</p>}
        {(category === "projects" || type === "projects") && (
          <p>{projectCategory}</p>
        )}
        {(category === "community" || type === "community") && <p>{title}</p>}
      </div>

      {/* Use a button instead of <Link> to prevent nesting issues */}
      <div className={`${category || type}-footer`}>
        <button onClick={handleNavigation} className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};


export default Card;
