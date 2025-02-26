import React from "react";
import Card from "../common/cardRender";
import { ProjectType } from "@/types/projectsTypes";
import { ServiceType } from "@/types/servicesTypes";
import { CommunityType } from "@/types/communityTypes";
import ApplyNow from "../pages/ApplyNow";
import ContactPage from "../pages/ContactUs";
import AboutPage from "../pages/About";
import { CareersType } from "@/types/careersType";
import { ContactType } from "@/types/contactUsType";
import { AboutType } from "@/types/aboutType";

export const categoryLayouts: Record<
  string,
  {
    containerClass: string;
    renderCard: (item: any) => React.ReactNode;
  }
> = {
  projects: {
    containerClass: "projects-container",
    renderCard: (project: ProjectType) => (
      <Card
        key={project.id}
        id={project.id}
        title={project.title}
        img={project.img}
        projectCategory={project.projectCategory}
        category="projects"
      />
    ),
  },
  services: {
    containerClass: "services-container",
    renderCard: (service: ServiceType) => (
      <Card
        key={service.id}
        id={service.id}
        title={service.title}
        img={service.img}
        shortDesc={service.shortDesc}
        category={service.type}
      />
    ),
  },
  community: {
    containerClass: "community-container",
    renderCard: (community: CommunityType) => (
      <Card
        key={community.id}
        id={community.id}
        title={community.title}
        img={community.img}
        shortDesc={community.title}
        category="community"
        type={community.type}
      />
    ),
  },
  careers: {
    containerClass: "careers-container",
    renderCard: () => <ApplyNow></ApplyNow>,
  },
  contact: {
    containerClass: "contact-container",
    renderCard: () => <ContactPage />,
  },
  about: {
    containerClass: "about-container",
    renderCard: () => <AboutPage />,
  },
};
