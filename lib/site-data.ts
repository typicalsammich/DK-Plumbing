export const business = {
  name: "DK Plumbing & Heating LLC",
  phone: "720-527-4557",
  phoneHref: "tel:+17205274557",
  email: "dkplumbingandheating@icloud.com",
  address: "6993 Cobblecreek Dr, Colorado Springs, CO 80922",
  license: "PC.0005620",
  facebook:
    "https://www.facebook.com/p/DK-plumbing-and-heating-61584507935255/",
  instagram: "https://www.instagram.com/dkplumbingandheatingllc/",
  googleMaps:
    "https://www.google.com/maps/place/Dk+Plumbing+and+Heating/data=!4m2!3m1!1s0x0:0x2ad68f98f5fb3b92",
  googleReviews:
    "https://search.google.com/local/reviews?placeid=ChIJL8GwMnmQlg4Rkjv79ZiP1io",
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  intro: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "plumbing",
    title: "Plumbing",
    shortTitle: "Plumbing",
    intro: "Repairs, diagnostics and installations for homes, businesses and active construction sites.",
    description:
      "DK provides residential and commercial plumbing across the Colorado Front Range. Work includes leak diagnostics, repairs, pipefitting, drain service, water-line work and complete plumbing installations, all led by a licensed Master Plumber.",
    items: [
      "Pipefitting",
      "Leak detection and repair",
      "Slab, pinhole and wall leak diagnostics",
      "Underground water-line repair",
      "Drain cleaning and clog removal",
      "Residential and commercial plumbing repair",
    ],
    image: "/images/sink-drain-work.webp",
    imageAlt: "Completed sink drain and disposal plumbing by DK Plumbing & Heating",
    related: ["drain-sewer-services", "water-line-services", "emergency-plumbing-services"],
  },
  {
    slug: "heating-solutions",
    title: "Heating Solutions",
    shortTitle: "Heating",
    intro: "Water heaters and water-based heating systems built for Colorado conditions.",
    description:
      "DK focuses on water heaters, boilers and hydronic systems rather than general furnace and air-conditioning work. The team diagnoses inconsistent heat, no-hot-water calls and circulation issues, then completes safe, code-compliant repairs or replacement.",
    items: [
      "Water heater replacement",
      "Water heater installation",
      "Water heater repair",
      "Hydronic heat diagnostics",
      "Radiant heating service",
      "Boiler system support",
    ],
    image: "/images/dual-tankless-installation.webp",
    imageAlt: "Dual Rinnai tankless water heater installation completed by DK Plumbing & Heating",
    related: ["boiler-hydronic-services", "hot-water-heater-replacement", "preventative-maintenance"],
  },
  {
    slug: "drain-sewer-services",
    title: "Drain & Sewer Services",
    shortTitle: "Drain & Sewer",
    intro: "Practical diagnostics and repairs that restore flow and prevent repeat backups.",
    description:
      "From a slow kitchen drain to a damaged main sewer line, DK identifies the source before recommending work. Services cover cleaning, camera inspection, root removal, localized repair and complete line replacement when needed.",
    items: [
      "Drain cleaning and main-line cabling",
      "Hydro jetting",
      "Camera inspection",
      "Sewer line and spot repair",
      "Root intrusion removal",
      "Cleanout and backwater-valve installation",
      "Sewer excavation and trenchless replacement",
      "Sewer odor diagnostics",
    ],
    image: "/images/drain-line-replacement.webp",
    imageAlt: "Drain line replacement work completed by DK Plumbing & Heating",
    related: ["sump-sewage-systems", "water-line-services", "emergency-plumbing-services"],
  },
  {
    slug: "water-line-services",
    title: "Water Line Services",
    shortTitle: "Water Lines",
    intro: "Water service repairs, upgrades and reroutes from the curb connection inward.",
    description:
      "DK repairs and replaces damaged water lines, upgrades undersized service and installs the valves and controls needed to protect pressure and flow. Work is coordinated with local utilities and permitting requirements when required.",
    items: [
      "Main water-line replacement",
      "Water-service upgrades",
      "Shutoff valve replacement",
      "Curb-stop coordination",
      "Pressure-regulator installation",
      "Frost-free hose bibs and yard hydrants",
      "Irrigation feeds",
      "Water-line reroutes",
    ],
    image: "/images/rough-in-plumbing.webp",
    imageAlt: "Water supply and drainage rough-in completed by DK Plumbing & Heating",
    related: ["plumbing", "pipe-installation-repiping", "inspection-code-compliance"],
  },
  {
    slug: "fixture-services",
    title: "Fixture Services",
    shortTitle: "Fixtures",
    intro: "Clean installation and reliable repair for the fixtures used every day.",
    description:
      "DK installs, replaces and repairs kitchen, bathroom and utility fixtures for residential and commercial properties. Connections are tested for proper flow, drainage and sealing before the work area is cleaned.",
    items: [
      "Faucet repair and replacement",
      "Cartridge and shower-valve replacement",
      "Tub trim installation",
      "Toilet installation and rebuilds",
      "Bidet installation",
      "Garbage disposal installation",
      "Laundry boxes and utility sinks",
      "Instant-hot and pot-filler installation",
    ],
    image: "/images/toilet-installation.webp",
    imageAlt: "Toilet and flange installation completed by DK Plumbing & Heating",
    related: ["plumbing", "water-quality-services", "preventative-maintenance"],
  },
  {
    slug: "gas-line-services",
    title: "Gas Line Services",
    shortTitle: "Gas Lines",
    intro: "Gas piping, testing and appliance connections completed with safety first.",
    description:
      "DK installs and repairs residential and commercial gas piping, performs pressure tests and provides properly sized connections for appliances and heating equipment. All work is completed to applicable code and inspection requirements.",
    items: [
      "Gas leak diagnostics",
      "Gas-line repair and installation",
      "CSST installation",
      "Black-iron gas piping",
      "Appliance gas hookups",
      "Gas pressure testing",
      "Sediment traps and drip legs",
      "Gas shutoff installation",
    ],
    image: "/images/hydronic-mechanical-room.webp",
    imageAlt: "Mechanical room piping installed by DK Plumbing & Heating",
    related: ["inspection-code-compliance", "commercial-plumbing", "heating-solutions"],
  },
  {
    slug: "pipe-installation-repiping",
    title: "Pipe Installation & Repiping",
    shortTitle: "Repiping",
    intro: "Partial and complete repiping for remodels, aging systems and new construction.",
    description:
      "DK replaces outdated or damaged piping, reroutes lines around remodel work and installs full plumbing systems for new construction. The scope can cover one failed section or the supply, drain, waste and vent system throughout a property.",
    items: [
      "Whole-house and partial repiping",
      "Copper and PEX repiping",
      "Drain, waste and vent replacement",
      "Vent-stack replacement",
      "Pipe rerouting",
      "New-construction rough-in",
      "Top-out plumbing",
      "Trim-out plumbing",
    ],
    image: "/images/rough-in-plumbing.webp",
    imageAlt: "New construction plumbing rough-in by DK Plumbing & Heating",
    related: ["dedicated-contractor", "commercial-plumbing", "inspection-code-compliance"],
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    shortTitle: "Commercial",
    intro: "Code-compliant plumbing for tenant finishes, restaurants and commercial facilities.",
    description:
      "DK supports offices, restaurants, retail spaces and commercial projects with installation, repair and maintenance. The team coordinates water, drainage, gas and fixture scopes around inspections, other trades and the operating needs of the property.",
    items: [
      "Tenant-finish plumbing",
      "Restaurant plumbing",
      "Grease interceptor installation",
      "Mop and service sinks",
      "Bottle fillers",
      "ADA fixture installation",
      "Commercial water heaters",
      "Commercial gas piping",
      "Backflow testing and repair",
    ],
    image: "/images/hydronic-mechanical-room.webp",
    imageAlt: "Commercial mechanical and hydronic piping by DK Plumbing & Heating",
    related: ["dedicated-contractor", "pipe-installation-repiping", "inspection-code-compliance"],
  },
  {
    slug: "water-quality-services",
    title: "Water Quality Services",
    shortTitle: "Water Quality",
    intro: "Treatment systems that address hard water, taste, sediment and scale.",
    description:
      "DK installs and maintains water-treatment equipment for individual fixtures and complete properties. Recommendations are based on the water concern, system demand and ongoing maintenance required.",
    items: [
      "Water-softener installation",
      "Reverse-osmosis systems",
      "Whole-house filtration",
      "Carbon filtration",
      "Scale-prevention systems",
      "UV purification systems",
      "Filter replacement and inspection",
    ],
    image: "/images/dual-tankless-installation.webp",
    imageAlt: "Water treatment equipment beside a dual tankless installation",
    related: ["water-line-services", "fixture-services", "preventative-maintenance"],
  },
  {
    slug: "sump-sewage-systems",
    title: "Sump & Sewage Systems",
    shortTitle: "Sump & Sewage",
    intro: "Pumps, basins and discharge systems that protect below-grade spaces.",
    description:
      "DK services sump pumps and sewage-ejector systems that move water and wastewater away from basements and lower levels. Repairs address pump failure, control problems, damaged basins and discharge routing.",
    items: [
      "Sump-pump replacement",
      "Sewage-ejector replacement",
      "Grinder-pump replacement",
      "Float-switch replacement",
      "Basin replacement",
      "Battery-backup systems",
      "Discharge-line rerouting",
    ],
    image: "/images/drain-line-replacement.webp",
    imageAlt: "Below-grade drainage line work by DK Plumbing & Heating",
    related: ["drain-sewer-services", "emergency-plumbing-services", "preventative-maintenance"],
  },
  {
    slug: "boiler-hydronic-services",
    title: "Boiler & Hydronic Services",
    shortTitle: "Boilers & Hydronics",
    intro: "Specialized service for boilers, radiant heat and water-based heating systems.",
    description:
      "Hydronic systems depend on correct flow, pressure, air removal and control. DK installs, repairs and maintains boilers, pumps, expansion tanks, zone controls and radiant systems for homes and commercial properties.",
    items: [
      "Boiler installation and replacement",
      "Boiler repair and maintenance",
      "Hydronic heating repair",
      "Radiant heat repair",
      "Circulator-pump replacement",
      "Expansion tanks and air separators",
      "Glycol treatment",
      "System purging and pressure balancing",
    ],
    image: "/images/hydronic-mechanical-room.webp",
    imageAlt: "Boiler and multi-zone hydronic system installed by DK Plumbing & Heating",
    related: ["heating-solutions", "preventative-maintenance", "inspection-code-compliance"],
  },
  {
    slug: "inspection-code-compliance",
    title: "Inspection & Code Compliance",
    shortTitle: "Code Compliance",
    intro: "Inspection support, testing and corrections for safe, approvable plumbing work.",
    description:
      "DK evaluates plumbing and gas systems, corrects code issues and coordinates permits when a project requires them. This work supports remodels, property sales, commercial upgrades and installations that need municipal approval.",
    items: [
      "Plumbing inspections",
      "Permit coordination",
      "Code corrections",
      "Home-sale plumbing inspections",
      "Water and gas pressure testing",
      "Cross-connection correction",
      "Safety upgrades",
      "Accessibility upgrades",
    ],
    image: "/images/laundry-plumbing-upgrade.webp",
    imageAlt: "Code-compliant laundry plumbing connections by DK Plumbing & Heating",
    related: ["gas-line-services", "commercial-plumbing", "dedicated-contractor"],
  },
  {
    slug: "emergency-plumbing-services",
    title: "Emergency Plumbing Services",
    shortTitle: "Emergency Plumbing",
    intro: "Urgent help for active leaks, backups, frozen lines and loss of hot water.",
    description:
      "When water or wastewater is actively damaging a property, the first priorities are safe shutdown, accurate diagnosis and a durable repair. DK handles emergency plumbing calls for residential and commercial properties across its service area.",
    items: [
      "Burst-pipe repair",
      "Flood response",
      "Emergency water and gas shutdowns",
      "No-hot-water calls",
      "Overflowing toilets",
      "Sewer backups",
      "Frozen-pipe thawing",
      "After-hours emergency dispatch",
    ],
    image: "/images/sink-drain-work.webp",
    imageAlt: "Urgent sink drain plumbing repair by DK Plumbing & Heating",
    related: ["plumbing", "drain-sewer-services", "hot-water-heater-replacement"],
  },
  {
    slug: "preventative-maintenance",
    title: "Preventative Maintenance",
    shortTitle: "Maintenance",
    intro: "Scheduled plumbing and hydronic checks that catch wear before a shutdown.",
    description:
      "Preventative maintenance helps reduce surprise leaks, backups and equipment failures. DK inspects the system, services water-heating equipment and identifies conditions that should be addressed before they become urgent.",
    items: [
      "Annual plumbing inspections",
      "Drain-maintenance plans",
      "Water-heater maintenance",
      "Boiler maintenance",
      "Descaling",
      "Leak-prevention inspections",
      "Pressure checks",
      "Fixture tune-ups",
    ],
    image: "/images/dual-tankless-installation.webp",
    imageAlt: "Tankless water heating system ready for preventative maintenance",
    related: ["boiler-hydronic-services", "hot-water-heater-replacement", "water-quality-services"],
  },
  {
    slug: "hot-water-heater-replacement",
    title: "Hot Water Heater Replacement",
    shortTitle: "Water Heaters",
    intro: "Turnkey water-heater replacement with the details required for a complete installation.",
    description:
      "DK replaces tank and tankless water heaters with clear scope and code-compliant installation. The current offering includes permit coordination, required installation components, haul-away and inspection scheduling where applicable.",
    items: [
      "Tank and tankless replacement",
      "Expansion tank and drain pan",
      "Copper and gas-line rework",
      "Gas drip leg",
      "Stainless flex lines and full-port valves",
      "T&P discharge piping",
      "Permit and inspection coordination",
      "Old-unit haul-away and disposal",
    ],
    image: "/images/dual-tankless-installation.webp",
    imageAlt: "Dual Rinnai tankless water heaters installed by DK Plumbing & Heating",
    related: ["heating-solutions", "boiler-hydronic-services", "emergency-plumbing-services"],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

export const projects = [
  {
    title: "Dual Rinnai Tankless Installation",
    type: "Water Heating",
    image: "/images/dual-tankless-installation.webp",
    alt: "Dual Rinnai tankless water heater installation completed by DK Plumbing & Heating in Denver",
    detail: "A paired tankless water-heating installation with organized supply, isolation and gas connections.",
  },
  {
    title: "Multi-Zone Hydronic Mechanical Room",
    type: "Boilers & Hydronics",
    image: "/images/hydronic-mechanical-room.webp",
    alt: "Boiler and multi-zone hydronic mechanical room installed by DK Plumbing & Heating",
    detail: "Boiler, storage and zone piping assembled for controlled water-based heat distribution.",
  },
  {
    title: "Residential Plumbing Rough-In",
    type: "Construction",
    image: "/images/rough-in-plumbing.webp",
    alt: "Residential remodel plumbing rough-in completed by DK Plumbing & Heating",
    detail: "Supply, drain and vent work prepared inside an open wall before finish construction.",
  },
  {
    title: "Laundry Plumbing Upgrade",
    type: "Residential Plumbing",
    image: "/images/laundry-plumbing-upgrade.webp",
    alt: "Laundry room plumbing upgrade completed by DK Plumbing & Heating",
    detail: "Clean supply and drain connections prepared for a functional laundry-room installation.",
  },
  {
    title: "Drain Line Replacement",
    type: "Drain & Sewer",
    image: "/images/drain-line-replacement.webp",
    alt: "Kitchen drain line replacement completed by DK Plumbing & Heating",
    detail: "Damaged drainage was removed and replaced to restore a sound, properly routed line.",
  },
  {
    title: "Fixture & Flange Repair",
    type: "Fixture Service",
    image: "/images/toilet-installation.webp",
    alt: "Completed toilet installation after flange repair by DK Plumbing & Heating",
    detail: "A damaged flange was repaired and the toilet reset to return the bathroom to service.",
  },
  {
    title: "Finished Bathroom Fixture Set",
    type: "Bathroom Plumbing",
    image: "/images/project-bathroom-fixture.webp",
    alt: "Finished bathroom sink and toilet fixture installation photographed on a DK Plumbing project",
    detail: "A finished vanity, wall-mounted faucet and toilet installation completed as part of DK's field portfolio.",
  },
  {
    title: "In-Wall Drain & Vent Rough-In",
    type: "Remodel Plumbing",
    image: "/images/project-rough-in-2.webp",
    alt: "Drain and vent piping installed inside an open wall on a DK Plumbing project",
    detail: "Drain and vent piping routed through an open wall before insulation, drywall and fixture trim.",
  },
  {
    title: "Sink, Disposal & Drain Connections",
    type: "Kitchen Plumbing",
    image: "/images/project-sink-plumbing.webp",
    alt: "Completed sink, garbage disposal and drain connections from DK Plumbing's project gallery",
    detail: "A compact under-sink assembly with disposal, trap, drain and supply connections organized for service access.",
  },
  {
    title: "Full Hydronic Distribution Wall",
    type: "Hydronic Heating",
    image: "/images/project-hydronic-2.webp",
    alt: "Large hydronic distribution wall with copper zones and controls from DK Plumbing's project gallery",
    detail: "A detailed multi-zone hydronic distribution system with organized copper piping, controls and serviceable components.",
  },
  {
    title: "Kitchen Drain Line Correction",
    type: "Drain & Sewer",
    image: "/images/before-after-drain-after.jpg",
    alt: "Kitchen drain line after replacement and pitch correction by DK Plumbing & Heating",
    detail: "DK replaced a kitchen drain line that had multiple bellies and inconsistent pitch, eliminating standing water in the run.",
  },
  {
    title: "Main Water Shutoff Upgrade",
    type: "Water Lines",
    image: "/images/before-after-shutoff-after.jpg",
    alt: "Main water shutoff after valve replacement by DK Plumbing & Heating",
    detail: "An aging wheel-style main shutoff was replaced with a serviceable full-port ball valve.",
  },
  {
    title: "Shower Valve Replacement",
    type: "Fixture Service",
    image: "/images/shower-1.jpg",
    alt: "Finished single-handle shower valve trim installed by DK Plumbing & Heating",
    detail: "An outdated three-handle shower valve was opened, replaced and finished with a clean single-handle control.",
  },
];

export const beforeAfterProjects = [
  {
    title: "Kitchen Drain Line",
    type: "Drain & Sewer",
    before: "/images/before-after-drain-before.jpg",
    after: "/images/before-after-drain-after.jpg",
    beforeAlt: "Kitchen drain line before replacement by DK Plumbing & Heating",
    afterAlt: "Kitchen drain line after DK corrected the route and pitch",
    detail: "A kitchen drain line with multiple bellies and inconsistent pitch was replaced to stop standing water in the run.",
    source: "https://www.instagram.com/p/DYFsz-9m7DZ/",
  },
  {
    title: "Shower Valve",
    type: "Fixture Service",
    before: "/images/shower-3.jpg",
    after: "/images/shower-1.jpg",
    beforeAlt: "Opened shower wall showing the outdated three-handle valve before replacement",
    afterAlt: "Finished single-handle shower valve installed by DK Plumbing & Heating",
    detail: "DK documented the removal of an outdated three-handle valve and the finished single-handle replacement in the same project carousel.",
    source: "https://www.instagram.com/p/Da1B6SsEVA8/",
  },
  {
    title: "Main Water Shutoff",
    type: "Water Lines",
    before: "/images/before-after-shutoff-before.jpg",
    after: "/images/before-after-shutoff-after.jpg",
    beforeAlt: "Aging wheel-style main water shutoff before DK replacement",
    afterAlt: "New full-port main water shutoff valve installed by DK Plumbing & Heating",
    detail: "The old main shutoff was replaced with a quarter-turn ball valve that is easier to operate when the water must be stopped quickly.",
    source: "https://www.instagram.com/p/Da1CSBskdS-/",
  },
];

export const reviews = [
  {
    name: "warriorblue63",
    quote:
      "Kevin was outstanding, extremely professional, very clean, and had incredible attention to detail. I would absolutely recommend DK for residential or commercial plumbing.",
  },
  {
    name: "Elizabeth Eggert",
    quote:
      "Darrin and Kevin provided prompt service for a sump pump emergency and stayed until the pipes were replaced and brought to code. They were courteous and left the area clean.",
  },
  {
    name: "Steve Nalick",
    quote:
      "DK replaced both of our water heaters. They were professional, on time, clean, and the new units work great. The team kept everything spotless.",
  },
  {
    name: "Elevation Decks",
    quote:
      "I have worked with Kevin on several deck and outdoor-living projects. His gas and water plumbing have both been excellent, and his communication is top notch.",
  },
  {
    name: "Zach Brady",
    quote:
      "My water heater broke and DK moved quickly to replace it. They were very responsive and kept me updated throughout the process.",
  },
];

export const faqs = [
  {
    question: "Do you handle emergency plumbing calls?",
    answer:
      "Yes. DK handles urgent plumbing issues including active leaks, burst or frozen pipes, sewer backups, overflowing fixtures and loss of hot water. Call 720-527-4557 so the situation can be assessed directly.",
  },
  {
    question: "Do you service furnaces and air conditioners?",
    answer:
      "DK specializes in plumbing, boilers, water heaters and water-based hydronic heating. The company is not positioned as a general furnace or air-conditioning contractor.",
  },
  {
    question: "Do you install and repair boilers?",
    answer:
      "Yes. Boiler and hydronic work includes installation, repair, maintenance, circulator pumps, expansion tanks, air removal, system purging and related controls.",
  },
  {
    question: "Do you work on radiant heating?",
    answer:
      "Yes. DK diagnoses and repairs radiant and other water-based heating systems, including circulation, pressure, zone and heat-distribution issues.",
  },
  {
    question: "Do you handle commercial plumbing and construction?",
    answer:
      "Yes. DK supports commercial facilities, tenant finishes, remodels and new construction, from underground and rough-in work through top-out, trim and inspection.",
  },
  {
    question: "Can you replace a water heater?",
    answer:
      "Yes. DK replaces tank and tankless water heaters and can coordinate the required installation components, permits, inspection and old-unit removal where applicable.",
  },
  {
    question: "Can you locate a hidden leak?",
    answer:
      "Yes. Leak diagnostics can cover walls, slabs, pinhole leaks and underground water lines. The repair scope depends on where the leak is located and the condition of the piping.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      `Yes. DK Plumbing & Heating LLC is licensed and insured. The Colorado Master Plumber license number is ${business.license}.`,
  },
  {
    question: "What areas do you serve?",
    answer:
      "DK serves Colorado Springs, Denver, Aurora, Highlands Ranch, Centennial, Englewood and surrounding Front Range communities. Call with the property address so current scheduling and coverage can be confirmed.",
  },
];

export const cities = [
  {
    slug: "colorado-springs",
    name: "Colorado Springs",
    lead: "Primary local coverage",
    propertyProfile: "Established homes, newer subdivisions, finished basements, commercial spaces and active construction projects across Colorado Springs.",
    context:
      "Colorado Springs plumbing systems contend with sharp temperature swings, freeze exposure, mineral-heavy water and a wide mix of building ages. DK diagnoses pressure, supply, drainage and equipment problems before defining the repair, with licensed residential and commercial capability from fixture work through full system scopes.",
    waterHeater:
      "Colorado Springs water-heater replacement should account for altitude, venting, combustion air, water pressure, thermal expansion, safe drainage and the existing fuel or electrical connection. DK handles tank and tankless replacements as a complete, inspection-ready scope rather than an equipment-only swap.",
    heating:
      "Boiler and hydronic heating work in Colorado Springs requires correct circulation, pressure, air removal and zone control through rapidly changing winter conditions. DK services radiant floor heat, circulator pumps, expansion tanks, air separators, glycol and system balancing.",
    commercial:
      "For Colorado Springs businesses, builders and remodelers, DK supports tenant finishes, restaurant plumbing, commercial water heaters, gas piping, backflow work, rough-in, top-out and trim-out coordination.",
  },
  {
    slug: "denver",
    name: "Denver",
    lead: "Denver Metro coverage",
    propertyProfile: "Older brick homes, infill construction, multi-unit properties, restaurants, offices and mixed-use commercial buildings.",
    context:
      "Denver properties range from older brick homes with aging supply and drainage to new infill and mixed-use construction. DK handles leak diagnostics, repiping, drain and sewer work, gas connections, fixtures and construction plumbing with careful transitions between old and new materials.",
    waterHeater:
      "Denver water-heater replacements need the venting, gas, combustion-air, pressure and discharge details handled as one complete scope. DK coordinates a code-compliant installation rather than treating the equipment as a simple swap.",
    heating:
      "Boilers and radiant systems remain common in many Denver homes and commercial buildings. Correct circulation, expansion control and zone balancing are critical during cold Front Range weather.",
    commercial:
      "Denver commercial scopes include tenant-finish plumbing, restaurant and service-sink connections, grease interceptors, commercial water heaters, gas piping, backflow testing and coordinated rough-in through final inspection.",
  },
  {
    slug: "aurora",
    name: "Aurora",
    lead: "East Metro coverage",
    propertyProfile: "Established neighborhoods, newer subdivisions, finished basements, retail spaces and busy commercial corridors.",
    context:
      "Aurora includes established neighborhoods, newer subdivisions and busy commercial corridors. DK supports repairs, upgrades and construction scopes across different building ages without assuming every plumbing system was assembled the same way.",
    waterHeater:
      "A complete Aurora water-heater replacement accounts for the existing gas or electrical connection, pressure control, drainage, venting and municipal inspection requirements before the old unit is removed.",
    heating:
      "Hydronic service in Aurora covers boilers, pumps, expansion tanks, air removal and radiant zones. Diagnosis starts with system behavior and operating conditions, not a one-part guess.",
    commercial:
      "Aurora businesses and project teams can call DK for commercial fixture work, drain and water-line repairs, tenant improvements, gas connections, water heaters and inspection-driven corrections.",
  },
  {
    slug: "highlands-ranch",
    name: "Highlands Ranch",
    lead: "South Metro coverage",
    propertyProfile: "Multi-bath homes, finished basements, higher daily hot-water demand, remodels and neighborhood commercial properties.",
    context:
      "Highlands Ranch homes often combine finished basements, multiple bathrooms and high daily hot-water demand. DK works carefully around finished spaces while addressing pressure, fixture, water-heating and below-grade drainage concerns.",
    waterHeater:
      "Water-heater work in Highlands Ranch should account for capacity, pressure, expansion control, safe drainage and the existing utility layout. DK provides the required installation components as a coordinated scope.",
    heating:
      "For homes with boilers or radiant zones, DK evaluates pumps, controls, expansion capacity and heat distribution so repairs address system performance instead of only the visible symptom.",
    commercial:
      "Highlands Ranch commercial and construction work can include remodel rough-ins, fixture packages, gas piping, water-service upgrades and coordinated plumbing corrections before inspection.",
  },
  {
    slug: "centennial",
    name: "Centennial",
    lead: "South Metro coverage",
    propertyProfile: "Mature homes, updated properties, finished lower levels, newer construction and professional commercial spaces.",
    context:
      "Centennial has a mix of mature homes, updated properties and newer construction. Plumbing concerns commonly involve aging valves and fixtures, finished-basement systems, water pressure and equipment replacement.",
    waterHeater:
      "Centennial water-heater replacement includes attention to capacity, drainage, expansion control, gas and venting details, permit coordination and a final installation that is ready for inspection.",
    heating:
      "DK services hydronic and radiant systems in Centennial, including boilers, circulation pumps, expansion tanks, air separators, glycol and zone-control concerns.",
    commercial:
      "Centennial commercial service includes water-heating equipment, fixture and drain work, gas piping, backflow support, tenant improvements and plumbing coordinated around occupied facilities.",
  },
  {
    slug: "englewood",
    name: "Englewood",
    lead: "South Denver coverage",
    propertyProfile: "Older housing stock, remodeled homes, compact lots, small commercial buildings and active infill projects.",
    context:
      "Englewood combines older housing stock, remodeled homes and compact commercial properties. Plumbing upgrades may involve aging piping, tight work areas and transitions between original systems and newer additions.",
    waterHeater:
      "A water-heater replacement in Englewood may require more than reconnecting a tank. DK reviews venting, gas piping, valves, expansion control, drainage and clearance before completing the installation.",
    heating:
      "Boiler and radiant systems in Englewood benefit from careful diagnosis of pressure, flow, trapped air and zone performance, especially when older equipment has been modified over time.",
    commercial:
      "Englewood businesses and builders can use DK for restaurant plumbing, service sinks, commercial gas and water lines, tenant-finish rough-ins, backflow work and code corrections in tight existing spaces.",
  },
];

export const specialtySearches = [
  { title: "Boiler repair & hydronic balancing", href: "/boiler-hydronic-services", detail: "Radiant heat, circulator pumps, expansion tanks, air separators, zone controls, purging and glycol service." },
  { title: "Sewer camera inspection & hydro jetting", href: "/drain-sewer-services", detail: "Main-line cabling, root intrusion, cleanouts, odor diagnostics, spot repair and sewer-line replacement." },
  { title: "Underground water-line & pressure repair", href: "/water-line-services", detail: "Main service replacement, pressure regulators, shutoff valves, reroutes, yard hydrants and irrigation feeds." },
  { title: "Tankless & tank water-heater replacement", href: "/hot-water-heater-replacement", detail: "Expansion control, drain pans, T&P discharge piping, valves, gas rework, permits and haul-away." },
  { title: "Gas-line installation & pressure testing", href: "/gas-line-services", detail: "CSST, black-iron piping, appliance hookups, sediment traps, shutoffs, leak diagnostics and inspection support." },
  { title: "Sump pump & sewage-ejector systems", href: "/sump-sewage-systems", detail: "Pump, basin, float-switch, grinder-pump, discharge-line and battery-backup replacement." },
  { title: "Commercial tenant-finish plumbing", href: "/commercial-plumbing", detail: "Restaurants, service sinks, grease interceptors, bottle fillers, ADA fixtures, backflow and commercial gas." },
  { title: "Whole-house repiping & construction rough-in", href: "/pipe-installation-repiping", detail: "Copper, PEX, drain-waste-vent piping, reroutes, underground, top-out and trim-out plumbing." },
];

export const locationPageSlugs = cities.flatMap((city) => [
  `plumbing-in-${city.slug}`,
  `heating-solutions-in-${city.slug}`,
  `hot-water-heater-replacement-in-${city.slug}`,
]);

export const corePages = [
  "about-us",
  "services",
  "projects",
  "dedicated-contractor",
  "service-areas",
  "contact-us",
];

export const allSlugs = [
  ...corePages,
  ...services.map((service) => service.slug),
  ...locationPageSlugs,
];

export const serviceNavGroups = [
  {
    label: "Core Plumbing",
    slugs: ["plumbing", "drain-sewer-services", "water-line-services", "fixture-services", "pipe-installation-repiping"],
  },
  {
    label: "Heating & Equipment",
    slugs: ["heating-solutions", "boiler-hydronic-services", "hot-water-heater-replacement", "water-quality-services"],
  },
  {
    label: "Specialty & Commercial",
    slugs: ["gas-line-services", "commercial-plumbing", "sump-sewage-systems", "inspection-code-compliance", "emergency-plumbing-services", "preventative-maintenance"],
  },
];
