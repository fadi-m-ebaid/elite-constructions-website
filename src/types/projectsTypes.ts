import { BaseType } from "./baseTypes";

export enum ProjectCategoryEnum {
  Construction = 1,
  Finishing = 2,
}

export interface ProjectType extends BaseType {
  title: string;
  description: string;
  projectCategory: string;
  projectDetails: {
    location: string;
    owner: string;
    consultant: string;
    contractor: string;
  };
  img: string;
  bgImg?: string;
  imgGallery?: string[];
  clientsIds?: string[];
  servicesIds?: string[];
}
