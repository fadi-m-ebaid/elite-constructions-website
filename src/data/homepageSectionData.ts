import { HomepageHoverDataType } from "@/types/homepageSectionTypes";
import { HomepageSectionDataType } from "@/types/homepageSectionTypes";

export const hoverZonesData: HomepageHoverDataType[] = [
  {
    id: "hvacIn",
    onHoverTitle: "/homepage-popups-2/hvacIn.webm",
    title: "HVAC In-Door",
    content:
      "HVAC stands for Heating, Ventilation, and Air Conditioning. It is a term used to describe the technology and systems involved in providing indoor climate control within buildings. HVAC systems are designed to ensure comfort, maintain air quality, and regulate temperature and humidity levels in residential, commercial, and industrial spaces. The components of HVAC work together to create a controlled and comfortable environment by addressing heating, ventilation, and air conditioning needs. Here at Elite, we offer the following regarding HVAC.",
  },
  {
    id: "hvacOut",
    onHoverTitle: "/homepage-popups-2/hvacOut.webm",
    title: "HVAC Out-Door",
    content:
      "HVAC stands for Heating, Ventilation, and Air Conditioning. It is a term used to describe the technology and systems involved in providing indoor climate control within buildings. HVAC systems are designed to ensure comfort, maintain air quality, and regulate temperature and humidity levels in residential, commercial, and industrial spaces. The components of HVAC work together to create a controlled and comfortable environment by addressing heating, ventilation, and air conditioning needs. Here at Elite, we offer the following regarding HVAC.",
  },
  {
    id: "garbage-chute",
    onHoverTitle: "/homepage-popups-2/Garbage-chute.webm",
    title: "Garbage Chute",
    content:
      "Our commitment to waste management extends to providing top-notch garbage chute solutions: We are the premier garbage chute provider, offering a diverse range that includes standard chutes and innovative smart solutions. We go beyond basic disposal and include monitoring, sorting capabilities, and seamless integration with Building Management Systems (BMS) and fire alarm systems. We deliver advanced solutions that enhance efficiency and contribute to a smarter waste management approach.",
  },
  {
    id: "led-lighting",
    onHoverTitle: "/homepage-popups-2/LED.webm",
    title: "LED Lighting",
    content:
      "Installing smart lighting systems that allow for remote control, automation, and energy efficiency, incorporating features such as motion sensors, dimming controls, and customizable lighting scenes.",
  },
  {
    id: "infrastructure",
    onHoverTitle: "/homepage-popups-2/Infrastructure.webm",
    title: "Infrastructure",
    content:
      "Infrastructure is the fundamental physical and organizational structures, facilities, and systems needed for the operation of a project or the construction industry as a whole. It encompasses a wide range of elements that support and facilitate construction activities, ensuring the smooth functioning of projects. At Elite Group, infrastructure usually refers to supplying the main networks for projects, buildings, or residential complexes.",
  },
  {
    id: "exterior-finishing",
    onHoverTitle: "/homepage-popups-2/Exterior.webm",
    title: "Exterior Finishing",
    content:
      "Elite excels in a variety of facade types, ensuring a blend of architectural elegance and functional excellence. Some of the facade types we specialize in include curtain wall facades, aluminum panel facades, stone cladding facades, glass facades, and ventilated facades.",
  },
  {
    id: "interior-finishing",
    onHoverTitle: "/homepage-popups-2/Interior.webm",
    title: "Interior Finishing",
    content:
      "We excel in fit-out projects, transforming spaces into functional and appealing environments. We collaborate closely with clients to understand their vision, ensuring a tailored approach. Our expertise includes visualizing concepts, handling interior designs, furniture selection, space optimization, and providing fit-out solutions to enhance the functionality of commercial and residential spaces, leading to seamless project completion.",
  },
  {
    id: "light-systems",
    onHoverTitle: "/homepage-popups-2/Light.webm",
    title: "Light Systems",
    content:
      "Adding the right lighting can transform your space, and here at Elite, we handle all aspects of lighting, from design and selection to installation.",
  },
  {
    id: "hospitality",
    onHoverTitle: "/homepage-popups-2/Hospitality.webm",
    title: "Hospitality",
    content:
      "Providing exceptional hotel services with comprehensive comfort and entertainment options, ensuring a unique and distinguished hospitality experience for guests.",
  },
  {
    id: "fit-out-projects",
    onHoverTitle: "/homepage-popups-2/Fitout.webm",
    title: "Fit-out Projects",
    content:
      "“Fit out” refers to the process of making an interior space ready for occupation. As a common practice, when constructing commercial buildings, the spaces inside are left bare for the occupants to determine the level of refurbishment needed (or fitting out).",
  },
  {
    id: "pilar-Caf",
    onHoverTitle: "/homepage-popups-2/pilarCaf.webm",
    title: "Pilar Caf",
    content:
      "Elevate the coffee experience by combining traditional brewing methods with modern innovation. Our team dedicates itself to educating customers about coffee cultivation, roasting, and preparation while serving drinks that exceed expectations and  lead the transformation of coffee culture by setting new standards in quality, sustainability, and customer education, making premium coffee accessible and enjoyable for everyone.",
  },
  {
    id: "fire-safety",
    onHoverTitle: "/homepage-popups-2/Fire.webm",
    title: "Fire & Safety",
    content:
      "We specialize in designing and implementing firefighting infrastructure network systems, adhering to NFPA standards, Saudi Code, and rigorous safety standards. Our solutions include firefighting pumping stations, storage tanks, a network of pipes and accessories, fire hydrants, and valve chambers.",
  },
  {
    id: "construction",
    onHoverTitle: "/homepage-popups-2/constructions.webm",
    title: "Construction",
    content:
      "We offer end-to-end construction project solutions, including villas, residential buildings, towers, hotels, and commercial buildings, from inception to handover. Our services include assisting in designs, legal documentation and project initiation, staying within the planned budget, and delivering high-quality results.",
  },
  {
    id: "steelWork",
    onHoverTitle: "/homepage-popups-2/steelWork.webm",
    title: "Steel Work",
    content:
      "We offer end-to-end construction project solutions, including villas, residential buildings, towers, hotels, and commercial buildings, from inception to handover. Our services include assisting in designs, legal documentation and project initiation, staying within the planned budget, and delivering high-quality results.",
  },
  {
    id: "bmu-worker",
    onHoverTitle: "/homepage-popups-2/Fitout.webm",
    title: "BMU Worker",
    content:
      "Ensuring safe and efficient maintenance for high-rise buildings involves a comprehensive approach to preserving structural integrity, enhancing safety, and optimizing functionality. Proper maintenance includes routine inspections, preventive measures, and timely repairs to ensure compliance with safety standards and building regulations.",
  },
  {
    id: "pneumatic",
    onHoverTitle: "/homepage-popups-2/pneumatic.webm",
    title: "Pneumatic Waste Collection",
    content:
      "Elite offers advanced pneumatic waste collection systems designed for seamless, automated, and eco-friendly waste management. Our solutions ensure efficiency, hygiene, and sustainability by optimizing waste disposal in residential, commercial, and industrial spaces.",
  },
];

export const hoverZonesDataById = hoverZonesData.reduce((acc, item) => {
  if (item.id) {
    acc[item.id] = item;
  }
  return acc;
}, {} as Record<string, HomepageHoverDataType>);

export const homepageSectionData: HomepageSectionDataType[] = [
  {
    id: "about",
    title: "About Us",
    content:
      "Our ultimate aim is to become “The nation's top and most chosen contractor” as we have a resolute dedication to delivering unmatched results.",
    backgroundWebm: "/BGs/about.webm",
    backgroundMp4: "/BGs/about.mp4",
    layout: "centered",
    type: "about",
  },
  {
    id: "maintenance",
    title: "Building Maintenance Unit (BMU)",
    content: hoverZonesDataById["bmu-worker"].content,
    backgroundWebm: "/BGs/maintainance.webm",
    backgroundMp4: "/BGs/maintainance.mp4",
    layout: "right-aligned",
    sectionDetailRelatedId: "service-1",
    type: "services",
    hoverZones: [
      {
        id: "hvacOut",
        zoneDataId: "hvacOut",
        position: {
          top: "18%",
          left: "71%",
          width: "15%",
          height: "25%",
        },
      },
      {
        id: "garbage-chute",
        zoneDataId: "garbage-chute",
        position: {
          top: "23%",
          left: "96%",
          width: "10%",
          height: "20%",
        },
      },
      {
        id: "ventilation-system",
        zoneDataId: "fire-safety", // Assuming ventilation relates to fire safety
        position: {
          top: "28%",
          left: "52%",
          width: "15%",
          height: "15%",
        },
      },
      {
        id: "bmu-worker",
        zoneDataId: "bmu-worker", // Assuming BMU relates to construction
        position: {
          top: "65%",
          left: "65%",
          width: "30%",
          height: "50%",
        },
      },
    ],
  },

  {
    id: "garbage",
    title: "Elite Garbage Chute",
    content: hoverZonesDataById["garbage-chute"].content,
    backgroundWebm: "/BGs/garbage.webm",
    backgroundMp4: "/BGs/garbage.mp4",
    type: "services",
    sectionDetailRelatedId: "service-2",
    layout: "left-aligned",
    hoverZones: [
      {
        id: "garbage-chute",
        zoneDataId: "garbage-chute",
        position: {
          top: "15%", // Positioning based on the garbage chute location
          left: "78%",
          width: "12%",
          height: "30%",
        },
      },
      {
        id: "catering-services",
        zoneDataId: "hospitality", // Related to food service and hospitality
        position: {
          top: "43%", // Positioning near the kitchen counter
          left: "60%",
          width: "15%",
          height: "15%",
        },
      },
    ],
  },
  {
    id: "ac",
    title: "Central AC Unit",
    content: hoverZonesDataById["hvacIn"].content,
    backgroundWebm: "/BGs/HVAC.webm",
    backgroundMp4: "/BGs/HVAC.mp4",
    type: "services",
    sectionDetailRelatedId: "service-2",
    layout: "right-aligned",
    hoverZones: [
      {
        id: "hvac-indoor-unit",
        zoneDataId: "hvacIn",
        position: {
          top: "10%", // Positioned near the AC unit
          left: "58%",
          width: "14%",
          height: "15%",
        },
      },
      {
        id: "fire-safety",
        zoneDataId: "fire-safety",
        position: {
          top: "5%", // Positioned near the fire safety system
          left: "85%",
          width: "15%",
          height: "10%",
        },
      },
      {
        id: "furnishing",
        zoneDataId: "interior-finishing",
        position: {
          top: "70%", // Positioned near the office chair
          left: "82%",
          width: "20%",
          height: "15%",
        },
      },
    ],
  },
  {
    id: "lighting",
    title: "Lighting Unit",
    content: hoverZonesDataById["light-systems"].content,
    backgroundWebm: "/BGs/lighting.webm",
    backgroundMp4: "/BGs/lighting.mp4",
    sectionDetailRelatedId: "service-3",
    layout: "left-aligned",
    hoverZones: [
      {
        id: "lighting-systems",
        zoneDataId: "light-systems",
        position: {
          top: "12%", // Positioned near the lighting board indoors
          left: "70%",
          width: "15%",
          height: "15%",
        },
      },
      {
        id: "led-systems",
        zoneDataId: "led-lighting",
        position: {
          top: "35%", // Positioned near the billboard lighting
          left: "115%",
          width: "25%",
          height: "25%",
        },
      },
      {
        id: "interior-finishing",
        zoneDataId: "interior-finishing",
        position: {
          top: "95%", // Positioned near the painter
          left: "53%",
          width: "10%",
          height: "10%",
        },
      },
      {
        id: "fitout-projects",
        zoneDataId: "fit-out-projects",
        position: {
          top: "92%", // Positioned near the screen
          left: "70%",
          width: "10%",
          height: "10%",
        },
      },
      {
        id: "exterior-finishing",
        zoneDataId: "exterior-finishing",
        position: {
          top: "100%", // Positioned near the workers handling exterior finishing
          left: "90%",
          width: "15%",
          height: "10%",
        },
      },
    ],
  },
  {
    id: "construction",
    title: "Construction",
    content: hoverZonesDataById["construction"].content,
    backgroundWebm: "/BGs/steel-1.webm",
    backgroundMp4: "/BGs/steel-1.mp4",
    type: "projects",
    sectionDetailRelatedId: "project-1",
    layout: "right-aligned",
    hoverZones: [
      {
        id: "hospitality",
        zoneDataId: "hospitality",
        position: {
          top: "90%", // Positioned near the crane hook lifting steel
          left: "68%",
          width: "25%",
          height: "25%",
        },
      },
      {
        id: "construction",
        zoneDataId: "construction",
        position: {
          top: "5%", // Positioned near the crane hook lifting steel
          left: "20%",
          width: "25%",
          height: "25%",
        },
      },
      {
        id: "steelWork",
        zoneDataId: "steelWork",
        position: {
          top: "10%", // Positioned near the crane hook lifting steel
          left: "68%",
          width: "25%",
          height: "25%",
        },
      },
    ],
  },
  {
    id: "pilar-Caf",
    title: "Pilar Caf",
    content: hoverZonesDataById["pilar-Caf"].content,
    backgroundWebm: "/BGs/steel-2.webm",
    backgroundMp4: "/BGs/steel-2.mp4",
    layout: "left-aligned",
    type: "services",
    hoverZones: [
      {
        id: "pilar-Caf",
        zoneDataId: "pilar-Caf",
        position: {
          top: "-5%", // Positioned near the crane hook lifting steel
          left: "60%",
          width: "30%",
          height: "30%",
        },
      },
      {
        id: "pneumatic",
        zoneDataId: "pneumatic",
        position: {
          top: "115%", // Positioned near the crane hook lifting steel
          left: "25%",
          width: "18%",
          height: "20%",
        },
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    content:hoverZonesDataById["infrastructure"].content,
    backgroundWebm: "/BGs/steel-3.webm",
    backgroundMp4: "/BGs/steel-3.mp4",
    layout: "centered",
    type: "services",
    hoverZones: [
      {
        id: "infrastructure",
        zoneDataId: "infrastructure",
        position: {
          top: "0%", // Positioned near the crane hook lifting steel
          left: "68%",
          width: "10%",
          height: "15%",
        },
      },
    ],
  },
];
