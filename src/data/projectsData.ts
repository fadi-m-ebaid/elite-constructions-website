import { ProjectCategoryEnum, ProjectType } from "@/types/projectsTypes";

export const ProjectsData: ProjectType[] = [
  {
    id: "raffels",
    type:"projects",
    title: "Raffles Residences & Hotel",
    projectCategory: ProjectCategoryEnum[ProjectCategoryEnum.Construction],
    img: "/projects/raffles-main.png",
    bgImg: "/projects/projectTitleBG.jpg",
    imgGallery: [
      "/projects/pro-single1.jpg",
      "/projects/pro-single2.jpg",
      "/projects/pro-single3.jpg",
    ],
    projectDetails: {
      location: "JEDDAH",
      owner: "Ladun Investment Company",
      consultant: "OTCS SAUDI",
      contractor: "Built Contracting Company",
    },
    description:
      "Raffles Residences & Hotel, located in Jeddah, is part of the Crown Prince Court project and is designed as a world-class destination for residents and guests. We worked on major projects such as Raffles Residences & Hotel, as well as other hotels across Saudi Arabia.",
  },
  {
    id: "KingAbdullah",
    type:"projects",
    title: "King Abdullah Financial District",
    projectCategory: ProjectCategoryEnum[ProjectCategoryEnum.Construction],
    img: "/projects/KingAbdullah-main.png",
    bgImg: "/projects/projectTitleBG.jpg",
    imgGallery: [
      "/projects/pro-single1.jpg",
      "/projects/pro-single2.jpg",
      "/projects/pro-single3.jpg",
    ],
    projectDetails: {
      location: "RIYADH",
      owner: "Ladun Investment Company",
      consultant: "OTCS SAUDI",
      contractor: "Built Contracting Company",
    },

    description:
      "We worked on major projects like King Abdullah Financial District (KAFD) that comprises of a cluster of new financial centers in the heart of Riyadh. With its central location, high quality design and flexible layouts, this is one of the most important projects that we were honored to work on.",
  },
  {
    id: "Venan",
    type:"projects",
    title: "Venan Housing Project",
    projectCategory: ProjectCategoryEnum[ProjectCategoryEnum.Construction],
    img: "/projects/venan-main.png",
    bgImg: "/projects/projectTitleBG.jpg",
    imgGallery: [
      "/projects/pro-single1.jpg",
      "/projects/pro-single2.jpg",
      "/projects/pro-single3.jpg",
    ],
    projectDetails: {
      location: "JEDDAH",
      owner: "Ladun Investment Company",
      consultant: "OTCS SAUDI",
      contractor: "Built Contracting Company",
    },
    description:
      "Venan Housing Project is part of the massive Al Khobar district development. It aims to provide a new residential area with a cluster of housing units, shops, offices and leisure areas for residential dwellers. We aimed to deliver our products and services perfectly to meet the standards of such a huge project like Venan Housing Project.",
  },
];
