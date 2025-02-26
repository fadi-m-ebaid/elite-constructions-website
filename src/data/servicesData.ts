import { ServiceType } from "@/types/servicesTypes";

// const services = [
//   { category: "services", id: "waste-management", name: "Waste Management" },
//   { category: "services", id: "infrastructure", name: "Infrastructure Works" },
//   { category: "services", id: "electrical", name: "Electrical Works" },
//   { category: "services", id: "mechanical", name: "Mechanical Works" },
//   { category: "services", id: "metal", name: "Metal Works" },
//   {
//     category: "services",
//     id: "interior-exterior",
//     name: "Interior & Exterior Finishes",
//   },
// ];

export const ServicesData: ServiceType[] = [
  {
    id: "waste-management",
    title: "Waste Management",
    type:"services",
    img: "/services/wast-management-main.png",
    img2: "waste-2.png",
    bgImg: "/services/waste-bg.jpeg",
    shortDesc:
      "Waste Management is considered one of the major specialties at Elite Group.",
    longDesc:
      "Waste Management is considered one of the major specialties at Elite Group. It involves the systematic handling, collection, transportation, and disposal of various types of waste generated during construction, demolition, or renovation projects. We believe that efficient waste management is crucial for compliance with environmental regulations, maintaining a safe and clean work environment, and contributing to sustainability goals, so we offer the following products:",
    serviceActionList: [
      "Garbage Chute",
      "Linen Chute",
      "Debris Chute",
      "Pneumatic Waste Collection System (PWCS)",
      "Dust collection system",
      "Compacting Bin",
    ],
    imgGallery: [
      "/services/wast-management-main.png",
      "/services/waste-1-slider.jpg",
      "/services/waste-2-slider.jpg",
    ],
    pdfUrl:"/services/Elite Waste Management.pdf"
  },
  {
    id: "infrastructure",
    title: "Infrastructure Works",
    type:"services",
    img: "/services/infrastructure-main.png",
    img2: "/services/infrastructure-2.png",
    bgImg: "/services/infrastructure-bg.jpeg",
    shortDesc:
      "Infrastructure is the fundamental physical and organizational structures.",
    longDesc:
      "Infrastructure is the fundamental physical and organizational structures, facilities, and systems needed for the operation of a project or the construction industry as a whole. It encompasses a wide range of elements that support and facilitate construction activities, ensuring the smooth functioning of projects. At Elite Group Infrastructure usually refers to supplying the main networks for projects, buildings, or residential complexes through the following services:",
    serviceActionList: [
      "Drilling",
      "Backfilling",
      "Debris Chute",
      "Electrical cables’ installations",
      "Pipes’ Installation",
      "Finishes",
    ],
    imgGallery: [
      "/services/infra-1-slider.jpeg",
      "/services/infra-2-slider.jpeg",
      "/services/infra-3-slider.jpeg",
    ],
     pdfUrl:"/services/Elite infrastructure.pdf"
  },
  {
    id: "electrical",
    title: "Electrical Works",
    type:"services",
    img: "/services/electrical-main.png",
    img2: "/services/electrical-2.png",
    bgImg: "/services/electrical-bg.jpg",
    shortDesc:
      "From design to installation, we specialize in delivering reliable and efficient electrical systems",
    longDesc:
      "From design to installation, we specialize in delivering reliable and efficient electrical systems for residential, commercial, and industrial projects. Our skilled team of electricians ensures safety, compliance, and top-notch craftsmanship in every aspect of electrical construction. Explore a spectrum of services, including wiring, lighting installations, power distribution, smart systems integration, and more. At Elite Group, we power your vision with excellence in electrical works through:",
    serviceActionList: [
      "Electrical Panels",
      "Smart Homes",
      "Building Management System (BMS)",
      "Medium Voltage works",
      "Lighting design and installation",
    ],
    imgGallery: [
      "/services/electrical-1-slider.jpg",
      "/services/electrical-2-slider.jpg",
      "/services/electrical-3-slider.jpg",
    ],
     pdfUrl:"/services/Elite Electrical.pdf"
  },
  {
    id: "mechanical",
    title: "Mechanical Works",
    type:"services",
    img: "/services/mechanical-main.png",
    img2: "/services/mechanical-2.jpeg",
    bgImg: "/services/mechanical-bg.jpg",
    shortDesc: "Mechanical works in the field of construction refer to any process involving the installation of complex or semi-complex equipment.",
    longDesc:
      "Mechanical works in the field of construction refer to any process involving the installation of complex or semi-complex equipment in any establishment that requires the presence of a specialized expert for its execution and often requires specific tools to handle small and precise components. Our scope covers:",
    serviceActionList: [
      "Air conditioners",
      "Ventilation",
      "Plumbing and sanitation",
      "Elevators and escalators",
    ],
    imgGallery: [
      "/services/mechanical-1-slider.jpg",
      "/services/mechanical-2-slider.jpg",
      "/services/mechanical-3-slider.jpg",
    ],
     pdfUrl:"/services/Elite Mechanical Works.pdf"
  },
  {
    id: "metal",
    title: "Metal Works",
    type:"services",
    img: "/services/metal-main.jpeg",
    img2: "/services/metal-2.jpeg",
    bgImg: "/services/metal-bg.jpg",
    shortDesc:
      "Our comprehensive metal works services are tailored to meet the diverse needs of modern construction.",
    longDesc:
      "Our comprehensive metal works services are tailored to meet the diverse needs of modern construction projects, offering a one-stop solution for crafting robust frameworks, intricate designs, and functional components. As a reliable partner in construction endeavors, our metal works services encompass a wide spectrum of offerings, ensuring excellence in every aspect of metal fabrication and installation. We offer:",
    serviceActionList: [
      "Steel Structure",
      "Metal Fabrication",
      "Stainless Steel Fabrication",
      "Hot-dip Galvanized Fabrications",
      "Portable cabins",
    ],
    imgGallery: [
      "/services/metal-1-slider.jpg",
      "/services/metal-2-slider.jpg",
      "/services/metal-3-slider.jpg",
    ],
     pdfUrl:"/services/Elite Metal Works.pdf"
  },
  {
    id: "interior-exterior",
    title: "Interior & Exterior Finishes",
    type:"services",
    img: "/services/Interior-Exterior-Finishes-main.jpeg",
    img2: "/services/Interior-Exterior-Finishes-main.jpeg",
    bgImg: "/services/Interior-Exterior-Finishes-bg.jpeg",
    shortDesc:
      "At Elite we understand that the true beauty and functionality of a building lie in the details.",
    longDesc: 'At Elite we understand that the true beauty and functionality of a building lie in the details. As a leading force in the construction industry, we take immense pride in our specialized "Interior & Exterior Finishes" services, elevating spaces to unparalleled levels of sophistication and functionality. We go beyond construction; we create living and working environments that inspire, as we offer the following:',
    serviceActionList: [
      "Fit-out projects",
      "Gypsum board",
      "Glass Reinforced Concrete (GRC)",
      "Aluminum, steel & cladding CNC decorations",
      "Exterior Facades",
    ],
    imgGallery: [
      "/services/Interior-Exterior-Finishes-1-slider.jpg",
      "/services/Interior-Exterior-Finishes-2-slider.jpg",
      "/services/Interior-Exterior-Finishes-3-slider.jpg",
    ],
  }
];
