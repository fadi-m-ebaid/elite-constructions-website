import { BaseType } from "./baseTypes";


export interface ClientType extends BaseType {
  name?: string;
  img: string;
  imgGallery?: string[];
  description?: string;
  servicesIds?: string[];
  projectsIds?: string[];
}
