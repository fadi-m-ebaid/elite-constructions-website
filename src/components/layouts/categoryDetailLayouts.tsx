"use client";
import React from "react";
import { ProjectType } from "@/types/projectsTypes";
import { ServiceType } from "@/types/servicesTypes";
import Slider from "../common/Slider";
import { CommunityType } from "@/types/communityTypes";
import Link from "next/link";
import { Button } from "react-bootstrap";

export const CategoryDetailLayouts: Record<
  string,
  {
    detailContainerClass: string;
    renderDetail: (item: any) => React.ReactNode;
  }
> = {
  projects: {
    detailContainerClass: "project-detail-container",
    renderDetail: (project: ProjectType) => (
      <div key={project.id} className="project-detail">
        <div className="project-detail-slider-container">
          <Slider
            items={project.imgGallery?.map((img) => ({ img })) ?? []}
            style={{ className: "project-detail-slider", interval: 6000 }}
          ></Slider>
        </div>
      </div>
    ),
  },
  services: {
    detailContainerClass: "service-detail-container",
    renderDetail: (service: ServiceType) => (
      <div className="project-detail-slider-container">
        <Slider
          items={service.imgGallery?.map((img) => ({ img })) ?? []}
          style={{ className: "project-detail-slider", interval: 6000 }}
        ></Slider>
      </div>
    ),
  },
  community: {
    detailContainerClass: "community-detail-container",
    renderDetail: (community: CommunityType) => (
      <div className="community-article-contianer">
        <div className="community-article-detail">
          {/* Hero Section */}
          {community.id === "garbage-chute-article" && (
            <div className="community-article-content container">
              <p>
                Installing garbage chute in residential towers has its benefits,
                and there are many types, but it usually goes through several
                phases. In the following paragraphs, we are going to talk about
                this kind of garbage chute in detail.
              </p>
              <h2>Garbage chute designing phases</h2>
              <p>
                Designing&nbsp;
                <Link className= "hyper-link" href="/community/garbage-chutes/">
                  garbage chute
                </Link>
                &nbsp;in residential towers goes through several phases. They
                include:
              </p>
              <h3>1- Planning of special spaces</h3>
              <p>
                Designing the garbage chutes inside residential towers starts
                with careful planning for special spaces, then several factors
                are to be considered:
              </p>
              <ul>
                <li>Required waste capacity.</li>
                <li>Waste types.</li>
                <li>
                  Garbage chute system impact on the building design &amp;
                  construction.
                </li>
                <li>
                  Thorough inspection for waste production inside residential
                  units.
                </li>
                <li>
                  Designing paths to guarantee easy access to waste collection
                  centers.
                </li>
              </ul>
              <h3>2- Handling the waste:</h3>
              <p>
                After planning the place and space of garbage chute in
                residential towers, environmental and healthy options to handle
                the waste are studied, and the following factors are considered:
              </p>
              <ul>
                <li>
                  Proper collection and sorting methods for waste are
                  identified.
                </li>
                <li>
                  Using Eco-friendly systems to decrease waste bad smells and
                  lower negative environmental impact.
                </li>
                <li>
                  Using proper materials for chutes and choosing effective
                  ventilation systems.
                </li>
                <li>
                  Applying specific strategies to decrease waste actual size
                  like recycling and wise usage of materials.
                </li>
              </ul>
              <h2>Importance of Garbage chute in residential towers</h2>
              <p>
                Inserting garbage chutes in residential towers can have many
                benefits:
              </p>
              <h3>1- Clean environment:</h3>
              <p>
                When installing garbage chute in residential towers efficiently
                can help improve the environment and overall cleanliness
                significantly, as it can help decrease waste at unwanted
                locations and maintain the good appearance of internal and
                external towers.
              </p>
              <p>
                The garbage chute system also helps residents get rid of garbage
                without leaving the building, and it can also help prevent
                accidents related to waste like fires and pollution.
              </p>
              <p>
                Read more:&nbsp;
                <Link className= "hyper-link" href="/community/what-is-waste-management/">
                  All you need to know about Waste Management
                </Link>
              </p>
              <h3>2- Less bad odors and insect spread:</h3>
              <p>
                One of the major benefits of garbage chutes in residential
                towers is the ability to reduce bad odors that come from
                accumulating waste in open areas, as the garbage controls waste
                flow through closed pipes and it has enough ventilation, which
                decreases bad odors.
              </p>
              <p>
                The garbage system also helps prevent insects and rodents feed
                on waste, which limits diseases spread inside residential towers
                and enhances the surrounding environment.
              </p>
              <h3>3- Increase real estate value:</h3>
              <p>
                Well-studied and effective garbage chute is considered an
                influential factor on real estate value, as providing a clean
                and healthy environment through better management of waste can
                enhance the targeted area&rsquo;s reputation and lore both
                investors and residents.
              </p>
              <p>
                Having a well-run garbage chute system can reflect
                infrastructure care, and this also reflects positively on real
                estate value, stability, and growth.
              </p>
              <h2>Garbage chute system types</h2>
              <p>
                The most popular types of garbage chute in residential towers
                include:
              </p>
              <h3>1- Air suction system:</h3>
              <p>
                It depends on a technique used to move waste through a network
                of pipes run through the building, where waste is collected from
                specific points and is suctioned by air to a main collecting
                point. This type limits the chances of touching the waste and
                decreases any noise that could happen during the regular
                waste-collecting process.
              </p>
              <h3>2- Waste dropping system:</h3>
              <p>
                In this system vertical passages inside the building are used,
                where residents can drop waste from different floors to a
                specific collecting point downstairs. This system is simpler and
                less expensive regarding installation and maintenance, compared
                to the previously mentioned system, but other issues can happen
                like blockage and the difficulty controlling odors.
              </p>
              <p>
                We should mention that each system has its application and each
                of it represents solutions to specific challenges faced by
                residential towers&rsquo; developers and residents. And it is
                important to choose the right system to guarantee system
                efficiency and sustainability.
              </p>
              <h2>Garbage chute-choosing factors</h2>
              <p>
                ِAfter knowing the most important details about garbage chute in
                residential towers, you should know that other factors are also
                considered when choosing the right system to install like:
              </p>
              <h3>1- Size and storage capacity:</h3>
              <p>
                When choosing garbage chute in residential towers, it is
                essential to consider the unit size and storage capacity, and
                the unit to be able to contain the amount of waste produced by
                the area without reaching its full capacity to guarantee the
                safety and efficiency of the storage and emptying process.
              </p>
              <h3>2- Cost and Maintenance:</h3>
              <p>
                The unit&rsquo;s overall cost and follow-up maintenance cost
                should also be considered, as the cost should be reasonable and
                aligned with the project budget.
              </p>
              <h3>3- Easy Maintenance:</h3>
              <p>
                The unit chosen to be installed should have easy and short
                maintenance operations to ensure the system&rsquo;s efficiency.
                It should be mentioned that continuous and daily maintenance is
                essential to ensure the garbage chute&rsquo;s ability to work.
              </p>
              <p>
                Continuous maintenance also helps with the early detection of
                any problems and solving them. This includes checking collecting
                stations and suction pipes and systems to ensure no leakage or
                hindrance and removing any foreign materials that cause bad
                odors.
              </p>
            </div>
          )}

          {/* what-are-mechanical-works article */}

          {community.id === "what-are-mechanical-works" && (
            <div className="community-article-content container">
              <p>&nbsp;</p>
              <p>
                When we say &ldquo;mechanical works&rdquo; a lot of people tend
                to think of tools and engines, but what does this word mean in
                the construction field? Let&rsquo;s find out from the following
                paragraphs, and what Elite Group offers and its services in this
                area.
              </p>
              <h2>What are mechanical works?</h2>
              <p>
                When we say mechanical works, we usually refer to any process
                involving the installation of complex or semi-complex equipment
                in any establishment that requires the presence of a specialized
                expert for its execution and often requires specific tools to
                handle small and precise components.
              </p>
              <p>
                At Elite we have a skilled team of engineers overseeing the
                execution of these works through many stages:
              </p>
              <h3>1- Design</h3>
              <p>
                A pre-construction process where all mechanical requirements of
                the building are identified. Mechanical components are designed
                in advance and then installed once on-site.
              </p>
              <p>
                Mechanical construction requirements are defined, and their
                design basis is established based on owner requirements,
                regulations, and standards.
              </p>
              <h3>2- Execution and Installation</h3>
              <p>
                This is the stage where the actual construction takes place
                based on the design. The design is studied, and the work is
                implemented on-site.
              </p>
              <h3>3- Operation and Maintenance</h3>
              <p>
                it occurs after the completion of the execution stage. The team
                is required to monitor the building&rsquo;s performance and
                regular preventive maintenance must be carried out according to
                requirements.
              </p>
              <h2>What are Elite Mechanical works?</h2>
              <p>
                At Elite Group we handle a big scope of mechanical works like:
              </p>
              <h3>1- HVAC</h3>
              <p>
                HVAC stands for Heating, Ventilation, and Air Conditioning. It
                is a term used to describe the technology and systems involved
                in providing indoor climate control within buildings.
              </p>
              <p>
                HVAC systems are designed to ensure comfort, maintain air
                quality, and regulate temperature and humidity levels in
                residential, commercial, and industrial spaces. Elite HVAC
                systems include:
              </p>
              <p>
                <strong>1- Air conditioners:</strong>
              </p>
              <p>
                Air conditioners maintain the room&rsquo;s temperature by either
                cooling or heating the air like Chillers (Air-cooled Chiller
                &amp; Water-cooled Chiller), VRF (Variable Refrigerant Flow) and
                Packaged Air Conditioners:
              </p>
              <p>
                <strong>2- Ventilation:</strong>
              </p>
              <p>
                Ventilation refers to the process of providing a continuous
                exchange of air within a building or a confined space to ensure
                the removal of pollutants, odors, moisture, and stale air while
                introducing fresh outdoor air. At Elite we provide the following
                regarding ventilation:
              </p>
              <ul>
                <li>Exhaust Fans</li>
                <li>Pressurization fans</li>
                <li>Smoke Management Fans.</li>
                <li>Air Compressors</li>
              </ul>
              <h3>2- Plumbing and sanitation:</h3>
              <p>
                This includes tanks and fixtures that control the
                building&rsquo;s water filtration and sanitation like:
              </p>
              <ul>
                <li>Water upper tanks</li>
                <li>Cisterns (Water ground storage tanks)</li>
                <li>
                  Fire Fighting systems like:
                  <ul>
                    <li>Sprinkler Systems</li>
                    <li>Fire Hydrant</li>
                    <li>Fire Alarm System</li>
                    <li>Fire Hose Reel System</li>
                  </ul>
                </li>
              </ul>
              <h2>3- Elevators and escalators:</h2>
              <p>
                At Elite we understand the pivotal role elevators and escalators
                play in enhancing the overall functionality and accessibility of
                modern buildings. Our comprehensive construction services
                include the expert installation, maintenance, and customization
                of elevators and escalators tailored to the unique needs of each
                project.
              </p>
              <p>Some types include:</p>
              <ul>
                <li>Traction elevators.</li>
                <li>Machine Room-less Elevators.</li>
                <li>Passenger elevators.</li>
                <li>Elevators for hospitals.</li>
                <li>Electric AC lift.</li>
                <li>Heavy-duty freight elevators</li>
              </ul>
              <h2>Why choose Elite for mechanical services?</h2>
              <p>
                At Elite we are backed by years of experience in the
                construction industry, our team possesses the expertise to
                handle different mechanical scopes for construction projects.
              </p>
              <p>
                We source and install this equipment from reputable
                manufacturers, ensuring top-notch quality and reliability.
              </p>
              <p>
                We value open communication and collaboration with our clients,
                ensuring that their specific needs and preferences are
                integrated into the design and installation process.
              </p>
            </div>
          )}

          {/* DERBIS_CHUTE article */}

          {community.id === "elite-debris-chute" && (
            <div className="community-article-content container">
              <p>
                Elite Group is one of the main manufacturers and suppliers of
                Debris Chutes in Saudi Arabia. When it comes to reducing
                construction time and costs, Elite Debris Chute is the most
                efficient and cost-effective solution available. Our debris
                chute eliminates dust and reduces the danger of flying debris on
                site, thus providing occupation safety to all on-site.
              </p>
              <p>
                Getting the debris off-site can be a problem that not only
                results in loss of time and cost but is a nightmare for project
                engineers, so you need to go with a much safer choice. Here is
                what you need to know about Elite debris chute.
              </p>
              <h2>What is Debris Chute?</h2>
              <p>
                A debris chute is a temporary structure used to safely and
                efficiently remove debris, rubble, and waste materials from
                higher levels of a construction site to a lower level or
                directly into a dumpster or container.
              </p>
              <p>
                It typically consists of a large, funnel-shaped chute made of
                sturdy materials such as metal or plastic, supported by a
                framework or scaffolding.
              </p>
              <p>
                Construction workers can deposit debris into the chute from
                upper floors or elevated areas, allowing it to slide down to a
                collection point below. Debris chutes are commonly used in
                high-rise construction projects or renovation works where
                there&rsquo;s a need to remove large quantities of waste
                materials from upper floors in a controlled and safe manner.
              </p>
              <h2>Debris Chute Dimensions</h2>
              <ul>
                <li>
                  Debris chutes are commonly made of durable materials such as
                  high-density polyethylene (HDPE) which are lightweight and
                  resistant to corrosion or metal that offers greater durability
                  and strength
                </li>
                <li>
                  A debris chute typically consists of multiple interlocking
                  sections that are assembled to form a continuous chute. Each
                  section is usually around 1 meter to 1.2 meters (3 to 4 feet)
                  in length. The number of sections needed depends on the height
                  of the building or structure and the desired length of the
                  chute.
                </li>
                <li>
                  The diameter of the chute can vary, but it is commonly around
                  50 centimeters to 80 centimeters (20 to 32 inches). Larger
                  diameter chutes allow for easier passage of bulky or
                  irregularly shaped debris.
                </li>
                <li>
                  The chute is supported by a frame or scaffolding structure
                  attached to the building or positioned independently. The
                  frame provides stability and ensures that the chute remains
                  securely in place during use. It may also include safety
                  features such as guardrails and toe boards to prevent falls.
                </li>
                <li>
                  At the top of the chute, there is typically an entry hopper or
                  funnel-shaped opening where construction workers can deposit
                  debris. The entry hopper may include a locking mechanism or
                  safety grate to prevent unauthorized access and minimize the
                  risk of debris falling back out.
                </li>
                <li>
                  At the bottom of the chute, there is a discharge end where
                  debris exits the chute and is collected for disposal. This may
                  involve directing the debris into a dumpster or container on
                  the ground or into a designated collection area.
                </li>
                <li>
                  To enhance safety, debris chutes may incorporate additional
                  features such as fire-resistant materials, anti-static
                  properties, and warning signs or labels indicating proper
                  usage and maximum load capacity.
                </li>
              </ul>
              <h2>Elite Debris Chute Benefits</h2>
              <ul>
                <li>
                  They significantly reduce the risk of accidents and injuries
                  associated with manually carrying or throwing debris down
                  stairwells or through elevators.
                </li>
                <li>
                  Quick disposal of debris from upper levels helps to save time
                  and labor costs on construction projects.
                </li>
                <li>
                  Containing debris within the chute helps maintain a cleaner
                  and more organized construction site.
                </li>
                <li>
                  Debris chutes help prevent damage to the building structure
                  and surrounding areas by safely directing debris to designated
                  collection points.
                </li>
                <li>
                  Debris chutes facilitate the collection and disposal of
                  construction waste in a controlled manner, ensuring compliance
                  with regulations and minimizing the environmental impact of
                  the project.
                </li>
                <li>
                  Debris Chutes&rsquo; efficiency in waste removal can lead to
                  cost savings by reducing labor expenses, speeding up
                  construction timelines, and minimizing the potential for
                  costly accidents or damage.
                </li>
              </ul>
              <p>&nbsp;</p>
              <p>
                Read more:&nbsp;
                <Link className= "hyper-link" href="/community/what-is-waste-management/">
                  Everything you need to know about Waste Management&nbsp;
                </Link>
              </p>
            </div>
          )}

          {/* garbage-chutes article */}
          {community.id === "garbage-chutes" && (
            <div className="community-article-content container">
              <p>
                Elite Group for Construction is one of the main suppliers of
                garbage chutes in Saudi Arabia, they specialize in manufacturing
                and installing them in different residential and commercial
                projects. Let&rsquo;s take a deep look into the details of these
                chutes.
              </p>
              <h2>What are garbage chutes?</h2>
              <p>
                Garbage chutes are vertical or inclined passages designed to
                efficiently dispose of waste materials from multiple floors of a
                building to a central collection point. They provide a
                convenient and centralized system for residents or occupants to
                dispose of their garbage without having to carry it down
                multiple flights of stairs.
              </p>
              <p>
                These chutes are usually constructed of metal or fire-resistant
                materials and are designed to handle various types of waste,
                including general household trash, recyclables, and sometimes
                even compostable materials.
              </p>
              <p>
                They also can contribute to&nbsp;
                <Link className= "hyper-link" href="/community/what-is-waste-management/">
                  better waste management practices
                </Link>
                &nbsp;by facilitating the separation of recyclable materials and
                promoting cleanliness and hygiene within the building
                environment.
              </p>
              <h2>What are their technical specifications?</h2>
              <p>
                Garbage chutes are usually constructed from durable and
                fire-resistant materials, such as metal or fire-rated plastic.
                The materials used should comply with safety and building codes.
              </p>
              <ul>
                <li>
                  The dimensions of a garbage chute can vary based on the
                  specific design of the building and the requirements of the
                  waste management system. However, typical chute diameters
                  range from around 16 inches (40 cm) to 24 inches (60 cm).
                </li>
                <li>
                  Chute doors are typically part of the garbage chute entry
                  points on each floor. These doors are designed to be
                  self-closing to minimize odors and enhance fire safety. They
                  are usually labeled to indicate their purpose.
                </li>
                <li>
                  They often incorporate features to control odors, such as
                  sealing systems on chute doors. Additionally, some systems may
                  include ventilation to promote air circulation and minimize
                  unpleasant smells within the building.
                </li>
              </ul>
              <h2>How do they work?</h2>
              <p>
                Garbage chutes work by providing a convenient and efficient
                method for disposing of waste materials from the upper floors of
                buildings to a central collection point at ground level.
                Here&rsquo;s how they typically work:
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <figure id="attachment_11326" className="wp-caption alignleft">
                  <img loading="lazy"
                    className="size-medium wp-image-11326"
                    title="What are garbage chutes? and how do they work? 2"
                    src="/community/garbage-chute-in-article.jpeg"
                    sizes="(max-width: 300px) 100vw, 300px"
                    alt="garbage chute"
                    width="300"
                    height="300"
                  />
                  <figcaption
                    id="caption-attachment-11326"
                    className="wp-caption-text"
                  >
                    garbage chute
                  </figcaption>
                </figure>
                <ul>
                  <li>
                    They are accessed through doors located on each floor of the
                    building. These doors are usually equipped with a latch or
                    handle that residents or occupants can use to open them.
                  </li>
                  <li>
                    Once the access door is opened, occupants can access the
                    opening of the garbage chute. This opening is typically
                    covered with a hinged or sliding door that prevents odors
                    and debris from escaping when the chute is not in use.
                  </li>
                  <li>
                    Users can then deposit their waste materials, such as trash
                    bags or recyclables, into the chute opening. It&rsquo;s
                    important to follow any guidelines or instructions provided
                    to ensure that only acceptable materials are disposed of in
                    the chute.
                  </li>
                  <li>
                    Once the waste is deposited into the chute opening, gravity
                    helps to carry it downward through the chute channel. The
                    inclined or vertical design of the chute allows the waste to
                    slide or fall freely toward the collection point at the
                    bottom of the building.
                  </li>
                  <li>
                    At the base of the building, the garbage chute typically
                    empties into a collection bin, dumpster, compactor, or other
                    receptacle designed to hold the waste until it can be
                    properly disposed of or removed by waste management
                    services.
                  </li>
                  <li>
                    They are typically installed in multi-story buildings,
                    including residential complexes, office buildings, hotels,
                    and hospitals. They are commonly found in areas where a
                    centralized waste disposal system is preferred to make waste
                    management more convenient for occupants.
                  </li>
                </ul>
              </div>
              <h2>How they are manufactured?</h2>
              <p>
                Garbage chutes are typically manufactured using a combination of
                materials such as metal, plastic, or fire-resistant materials
                like concrete or fiberglass. The manufacturing process involves
                several steps:
              </p>
              <ol>
                <li>
                  Designing the chute system according to the specific
                  requirements of the building. Factors such as the height and
                  layout of the building, the volume of waste generated, and
                  local building codes and regulations are taken into
                  consideration during the design phase.
                </li>
                <li>
                  Depending on the design specifications and requirements, the
                  appropriate materials are selected for constructing the
                  garbage chute components. For example, the chute itself may be
                  made of stainless steel, galvanized steel, aluminum, or
                  high-density polyethylene (HDPE), while the access doors and
                  other fittings may be made of plastic or metal.
                </li>
                <li>
                  The chute sections are typically fabricated in Elite&rsquo;s
                  factory. For metal chutes, sheets of the chosen metal are cut,
                  bent, and welded together to form the individual chute
                  sections. For plastic or composite chutes, molding or
                  extrusion processes may be used to create the desired shapes
                  and dimensions.
                </li>
                <li>
                  Once the individual chute sections are fabricated, they are
                  assembled to create the complete garbage chute system. This
                  may involve connecting the sections using bolts, screws, or
                  welding, depending on the materials and design specifications.
                </li>
                <li>
                  In addition to the chute sections themselves, various
                  installation components such as access doors, support
                  brackets, fire dampers, and safety features are also
                  manufactured separately and assembled as part of the overall
                  chute system.
                </li>
                <li>
                  Throughout the manufacturing process, quality control measures
                  are implemented to ensure that the garbage chutes meet the
                  required standards for safety, durability, and performance.
                  This may involve conducting inspections, tests, and
                  certifications to verify compliance with relevant regulations
                  and specifications.
                </li>
                <li>
                  Once the garbage chute components are manufactured and
                  assembled, they are packaged securely for transportation to
                  the construction site.
                </li>
                <li>
                  Finally, the garbage chute system is installed in the building
                  according to the design plans and specifications. This
                  typically involves attaching the chute sections to the
                  building structure, connecting them to the access doors on
                  each floor, and integrating any necessary support or safety
                  features.
                </li>
              </ol>
            </div>
          )}

          {/* what-is-waste-management article */}
          {community.id === "what-is-waste-management" && (
            <div className="community-article-content container">
              <p>
                Waste Management is considered one of the major specialties at
                Elite Group, as we believe that efficient waste management is
                crucial for compliance with environmental regulations,
                maintaining a safe and clean work environment, and contributing
                to sustainability goals, which are important objectives for the
                company.
              </p>
              <h2>What is Waste Management?</h2>
              <p>
                Waste management usually refers to the planning, monitoring, and
                implementation of strategies to minimize the generation of
                waste, properly handle and dispose of waste materials, and
                promote recycling and reuse practices throughout the
                construction process.
              </p>
              <h2>The Importance of Waste Management</h2>
              <p>
                Applying waste management practices can offer the following
                points:
              </p>
              <ul>
                <li>
                  Waste management keeps air, water, and soil clean by stopping
                  harmful stuff from getting into them. This helps animals and
                  plants stay safe.
                </li>
                <li>
                  Handling waste well and by professionals can help stop
                  diseases spread which will help keep everyone safe &amp;
                  healthy.
                </li>
                <li>
                  Handling waste efficiently can save money by lowering waste
                  disposal costs, and making better use of resources.
                </li>
                <li>
                  Some waste management methods can help fight climate change by
                  cutting down on pollution.
                </li>
              </ul>
              <h2>What are Waste Management services in Elite?</h2>
              <p>
                To be one of the best in the waste management field, Elite Group
                offers the following services or products:
              </p>
              <h3>1- Garbage Chute</h3>
              <p>
                A garbage chute is a vertical passage used to efficiently
                dispose of waste materials from different floors of the same
                building to a center point.
              </p>
              <p>
                It is used to help get rid of garbage without having to carry it
                through many floors and stairs. The garbage chute is usually
                made of metal or fire-rated plastic, materials that comply with
                safety and building codes.
              </p>
              <h3>2- Debris Chute</h3>
              <p>
                A debris chute is a special tool in construction used to move
                debris like concrete and rubble from high places to lower ones
                for disposal. It&rsquo;s often used in tall buildings to make it
                easier to get rid of waste from building, renovating, or tearing
                down structures.
              </p>
              <h3>3- PWCS</h3>
              <p>
                Pneumatic Waste Collection System (PWCS) is a modern and
                automated waste management solution that uses a network of
                underground pipes and pneumatic technology to transport waste
                from various locations within a building or urban area to a
                central collection point. This system is designed to replace
                traditional methods of waste collection, such as manual
                collection or the use of conventional waste chutes. Pneumatic
                waste collection systems are often implemented in large
                buildings, residential complexes, commercial areas, or smart
                cities.
              </p>
              <h3>4- Centralized vacuum system</h3>
              <p>
                A centralized vacuum system is a household or commercial
                cleaning system consisting of a network of tubing installed
                within the walls or floors of the building. This tubing is
                connected to a central power unit, typically located in a
                garage, basement, or utility room.
              </p>
              <p>
                To use it, the user plugs a lightweight hose into wall or floor
                inlet valves throughout the building. When the vacuum is turned
                on, suction is generated at the inlet valve, and dirt, dust, and
                debris are pulled through the tubing into the central power unit
                for collection. The collected debris is typically stored in a
                large canister or bag within the central unit, which needs to be
                emptied periodically.
              </p>
              <h3>5- Compacting Bin</h3>
              <p>
                A compacting bin, also called a trash compactor, is a special
                trash container that squashes garbage to make it take up less
                space. It has a mechanism inside that presses down on the waste.
                These bins are often used for household trash, recycling, or
                industrial waste. They use a ram or press to push the waste
                together, making it smaller. Compact bins are usually powered by
                electricity or hydraulic systems. They have lids and seals to
                trap smells and keep the squashed waste inside. Some newer ones
                even have sensors to know when to squash the trash
                automatically. You can use them automatically or manually,
                depending on your needs. This can save money because it reduces
                the number of times you need to empty the bin.
              </p>
            </div>
          )}

          <div className="article-tags">
            <p className="tags-text">Tags:</p>
            {community.tags?.map((tag) => (
              <Link className= "hyper-link"
                href={`/community?tag=${encodeURIComponent(tag)}`}
                key={tag}
                passHref
              >
                <Button className="tags-btn">{tag}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    ),
  },
};
