import { BaseType } from "./baseTypes";

export enum serviceCategoryEnum {
  WasteManagement = 1,
  InfrastructureWorks = 2,
  ElectricalWorks = 3,
  MechanicalWorks = 4,
  MetalWorks = 5,
  InteriorAndExteriorFinishes = 6,
}

export interface ServiceType extends BaseType {
  title: string;
  projectCategory?: string;
  longDesc: string;
  shortDesc: string;
  serviceActionList?: string[];
  bgImg?: string;
  img: string;
  img2?: string;
  imgGallery?: string[];
  clientsIds?: string[];
  projectsIds?: string[];
  pdfUrl?:string;
}
