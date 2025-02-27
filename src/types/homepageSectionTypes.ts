// This file contains the types for the homepage sections data.

import { BaseType } from "./baseTypes";
import { ProjectType } from "./projectsTypes";
import { ServiceType } from "./servicesTypes";

export interface HomepageHoverDataType extends BaseType{
  onHoverTitle: string;
  title: string;
  content: string;
}

export interface HoverZoneDataType extends BaseType{
  zoneDataId: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export interface HomepageSectionDataType extends BaseType{
  title: string;
  content: string;
  backgroundWebm: string;
  backgroundMp4: string;
  layout: "centered" | "left-aligned" | "right-aligned";
  sectionDetailRelatedId?: ServiceType["id"] | ProjectType["id"];
  hoverZones?: HoverZoneDataType[];
  poster?: string;
}
