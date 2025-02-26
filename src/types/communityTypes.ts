import { BaseType } from "./baseTypes";

export enum CommunityCategoryEnum {
  GARBAGE_CHUTES = "Garbage chutes",
  WASTE_MANAGEMENT = "Waste Management",
  MECHANICAL_WORK = "Mechanical Works",
  CONSTRUCTION = "Construction",
  DERBIS_CHUTE = "Derbis Chute"
}


export interface CommunityType extends BaseType {
  title: string;
  content: string;
  author: {
    img: string;
    name: string;
  };
  publishDate: Date;
  img: string;
  bgImg?: string;
  publishCategory:string;
  tags?: string[];
  imgGallery?: string[];
  clientsIds?: string[];
  servicesIds?: string[];
}
