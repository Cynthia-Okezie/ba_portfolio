/* =========================================================
   CENTRAL CONTENT FILE
   Edit the text between the quotes. Keep the commas and
   the quote marks exactly as they are.
   Anything you leave as "" (empty) is simply hidden.
   ========================================================= */

const portfolioData = {
  /* ---------- ABOUT ME ---------- */
  name: "Cynthia Justice Okezie",
  title: "Business Analyst",
  titleTags: ["Business Analyst", "Data & Insight Analyst", "Data & Process Improvement Analyst"],
  location: "Ontario, Canada",
  tagline: "I turn business problems into smarter decisions.",
  shortBio:
    "I am a Business Analyst and Process Improvement Analyst passionate about understanding business needs, optimizing processes, and delivering effective, data-driven solutions. My key skills include requirements gathering, stakeholder management, business process mapping, gap analysis, root cause analysis, and documentation. I am familiar with tools such as Microsoft Excel, Power BI, and Jira to support process optimization, workflow improvement, and informed decision-making.",
  photo: "assets/images/profile.jpg",
  photoAlt: "Portrait of Cynthia Justice Okezie",
  yearsExperience: "3+",

  /* About section: each line is one paragraph. */
  about: [
    "I work where business needs, process and data meet. I start by understanding how work actually happens today, then identify the gaps, find the root causes and turn what I learn into clear requirements that stakeholders and delivery teams can both act on.",
    "My approach is structured: map the AS-IS process, analyse stakeholders and data, test the causes with tools such as 5 Whys and fishbone diagrams, then document a practical TO-BE solution through BRDs, user stories and acceptance criteria.",
    "Day to day at the Retail Council of Canada, I coordinate online training programs and use Excel to track registrations, completion rates and learner feedback, turning them into monthly reports and improvement ideas. Alongside this, I work as a part-time Business Analyst at AMDARI, documenting requirements and supporting testing."
  ],

  /* Small facts shown beside the About text */
  education: [
    { title: "Fine and Applied Art", org: "Delta State University, Abraka, Nigeria", date: "2016" }
  ],
  certifications: [
    { title: "Business Analytics", org: "10Alytics", date: "2026" }
  ],

  /* ---------- CONTACT ---------- */
  email: "cynthiaokezi93@gmail.com",
  phone: "+1 (437) 858-5557",
  phoneLink: "+14378585557",
  linkedin: "https://www.linkedin.com/in/cynthia-okezie",
  github: "https://github.com/Cynthia-Okezie",

  /* ---------- RESUME ---------- */
  resume: "assets/documents/resume.pdf",
  resumeButtonText: "View CV",

  /* ---------- FORMSPREE ---------- */
  formspreeEndpoint: "https://formspree.io/f/mgaakrgo",

  /* ---------- CORE COMPETENCIES ----------
     style: "list"  = tidy list (use "Name — description" to split text)
            "chips" = compact tags                                    */
  competencies: [
    {
      title: "Business Analysis",
      icon: "briefcase",
      style: "list",
      items: [
        "Requirements Elicitation and Analysis",
        "Stakeholder Identification and Analysis",
        "Business Process Mapping and Documentation",
        "As-Is and To-Be Process Analysis",
        "Gap Analysis and Root Cause Analysis",
        "Business Requirements Documentation (BRD)",
        "Functional and Non-Functional Requirements",
        "User Stories and Acceptance Criteria",
        "Business Process Improvement",
        "Impact and Risk Analysis"
      ]
    },
    {
      title: "Data & Analytics",
      icon: "chart",
      style: "list",
      items: [
        "Data Collection and Analysis",
        "Data Quality Assessment and Improvement",
        "Data-Driven Decision-Making",
        "Business Performance Analysis",
        "Gap and Variance Analysis",
        "KPI Identification and Performance Monitoring",
        "Trend Identification and Reporting",
        "Quantitative Analysis and Basic Financial Analysis"
      ]
    },
    {
      title: "Tools",
      icon: "tool",
      style: "list",
      items: [
        "Microsoft Excel — Data Analysis, Reporting, and Gap Analysis",
        "Microsoft Word — Business Documentation and BRDs",
        "Microsoft PowerPoint — Business Presentations and Stakeholder Communication",
        "Jira — Backlog Management, User Stories, and Sprint Planning",
        "Draw.io / Process Mapping Tools — Process Flow Documentation"
      ]
    },
    {
      title: "Methodologies",
      icon: "layers",
      style: "chips",
      items: [
        "Agile and Scrum Fundamentals",
        "Software Development Life Cycle (SDLC)",
        "Business Process Analysis and Improvement",
        "Root Cause Analysis (5 Whys and Fishbone Diagram)",
        "SWOT Analysis",
        "PESTLE Analysis",
        "McKinsey 7S Framework",
        "AS-IS / TO-BE Analysis",
        "Risk Assessment and Mitigation Planning",
        "Requirements Traceability and Validation"
      ]
    },
    {
      title: "Other Skills",
      icon: "spark",
      style: "chips",
      wide: true,
      items: [
        "Critical Thinking and Problem-Solving",
        "Analytical and Research Skills",
        "Stakeholder Engagement and Communication",
        "Cross-Functional Collaboration",
        "Process Documentation and Standardization",
        "Attention to Detail",
        "Continuous Improvement",
        "Report Writing and Presentation",
        "Business and Technical Documentation",
        "Strategic Thinking and Decision Support"
      ]
    }
  ],

  /* ---------- EXPERIENCE ----------
     keyContribution = the one thing to spotlight for that role.
     highlights      = all other responsibilities (shown in a "show more" list). */
  experience: [
    {
      company: "AMDARI",
      role: "Business Analyst (Remote, Part-Time)",
      location: "Remote",
      start: "April 2026",
      end: "Present",
      summary:
        "Support business analysis activities by documenting business requirements, collaborating with stakeholders and development teams, and ensuring proposed solutions align with project objectives and business needs.",
      keyContribution:
        "Develop Business Requirements Documents (BRDs) that capture functional and non-functional requirements, and write user stories that create a shared understanding between stakeholders and development teams.",
      tools: ["Wrike", "Jira", "Trello"],
      highlights: [
        "Collaborate with stakeholders and cross-functional teams to communicate project updates and monitor progress throughout the project lifecycle.",
        "Use Wrike, Jira, and Trello to coordinate project activities, track tasks, and support effective team collaboration.",
        "Identify and document project scope, objectives, requirements, and constraints.",
        "Work closely with developers to clarify requirements, resolve ambiguities, and ensure accurate implementation of business needs.",
        "Participate in software testing and quality assurance activities to verify that solutions meet specified requirements.",
        "Define key performance indicators (KPIs) to evaluate solution effectiveness and alignment with business objectives."
      ]
    },
    {
      company: "Retail Council of Canada",
      role: "Coordinator, Education",
      location: "Toronto, Ontario, Canada",
      start: "October 2023",
      end: "Present",
      summary:
        "Coordinate educational and online training programs while supporting data analysis, reporting, stakeholder collaboration, learning management, and process improvement initiatives to enhance operational efficiency and the learner experience.",
      keyContribution:
        "Partnered with the IT team to develop an automated examination grading system, helping streamline grading processes and improve operational efficiency.",
      tools: ["Microsoft Excel", "Learning Management System (LMS)"],
      highlights: [
        "Use Microsoft Excel to analyze training data and monitor registration rates, course completion rates, and learner feedback.",
        "Prepare monthly reports and generate insights to support informed decision-making and continuous improvement.",
        "Identify opportunities to improve course delivery, learner engagement, and the overall user experience through data analysis.",
        "Coordinate and manage online training programs, including FoodWise food safety training and retail certification programs.",
        "Manage course uploads, maintenance, and monitoring within the Learning Management System (LMS).",
        "Coordinate course scheduling, learner registration, enrollment, and participant communications.",
        "Support the marketing and promotion of educational programs to increase awareness and participation.",
        "Collaborate with internal teams and external stakeholders to maintain and update course content and learning materials."
      ]
    },
    {
      company: "ISN",
      role: "Administrative Assistant",
      location: "Lagos, Nigeria",
      start: "July 2019",
      end: "June 2023",
      summary:
        "Supported business operations through workflow analysis, data management, operational reporting, cross-functional coordination, and process improvement to enhance efficiency, accuracy, and accountability.",
      keyContribution:
        "Collected, organized, and analyzed operational information to identify trends, process gaps, and areas for improvement, and reviewed administrative workflows to find ways to streamline them.",
      tools: [],
      highlights: [
        "Supported system and data management activities, ensuring accurate data entry, reporting, and record maintenance.",
        "Maintained accurate records and databases to support data integrity, information accessibility, and operational decision-making.",
        "Facilitated communication and collaboration between departments to resolve operational issues and improve coordination.",
        "Monitored operational activities, deadlines, and tasks to improve workflow visibility and team accountability.",
        "Supported the preparation and maintenance of operational records and reports to facilitate effective business administration."
      ]
    }
  ],

  /* ---------- PROJECTS / CASE STUDIES ----------
     Each project gets its own case-study page automatically:
     projects/case-study.html?id=<id>
     Copy a whole { ... } block to add another project.        */
  projects: [
    {
      id: "fleet-journey-management",
      name: "Fleet & Journey Management System",
      category: "Business Analysis / Process Improvement",
      image: "assets/images/project-01.jpg",
      imageAlt: "AS-IS process with separate travel portal and manual journey schedule, beside a TO-BE integrated six-step journey workflow",
      shortDescription:
        "Analyzed the existing travel and fleet management workflow and developed a proposed future-state solution to integrate travel requests, journey approvals, security assessments, and fleet coordination into a centralized digital platform.",
      skills: ["AS-IS / TO-BE Mapping", "Gap Analysis", "Stakeholder Analysis", "Requirements Analysis"],
      role: "Business Analyst — process analysis, requirements documentation, gap analysis, and future-state process design.",
      tools: ["Jira", "Trello", "Wrike", "Microsoft Excel", "Process mapping tools"],
      methodology: [
        "AS-IS and TO-BE process mapping",
        "Gap analysis",
        "Stakeholder analysis",
        "Requirements elicitation and analysis",
        "Fishbone diagram and 5 Whys",
        "SWOT analysis",
        "PESTLE analysis",
        "McKinsey 7S framework"
      ],
      dataSource: [
        "Existing AS-IS travel and journey management process description",
        "Documented workflow steps and approval activities",
        "Case-study information about employee travel, security assessment, and fleet coordination"
      ],
      keyFacts: [],
      problem:
        "The client used an existing Travel Management Portal alongside a separate manual Journey Schedule for the Logistics Team. The workflow involved several stages, including line manager review, security assessment, required approvals, fleet planning, driver and vehicle assignment, and vehicle inspections. The separate activities created opportunities for duplicated information, administrative delays, and limited visibility into journey status.",
      objective:
        "To document the current workflow, identify process gaps, and propose a streamlined digital solution that improves coordination, approval tracking, process visibility, and fleet management.",
      analysis: [
        "Mapped the existing journey management workflow, from employee travel requests to driver assignment and vehicle inspection.",
        "Examined the separate manual Journey Schedule process and its relationship with the existing Travel Management Portal.",
        "Compared the current workflow with a proposed integrated digital process to identify opportunities for automation, improved tracking, and reduced duplication."
      ],
      findings: [
        "Travel requests and journey information were handled through separate processes.",
        "Multiple review, assessment, and approval stages required coordination among different stakeholders.",
        "The current workflow offered opportunities to improve status visibility, auditability, and exception handling."
      ],
      recommendations: [
        "Integrate the existing Travel Management Portal with a Fleet Management System.",
        "Digitize journey documentation and introduce workflow tracking, notifications, and audit trails.",
        "Configure automated approvals for standard journeys, with exceptions routed to the appropriate reviewer according to defined business rules."
      ],
      outcome:
        "Produced structured current-state analysis and a proposed future-state process, supported by gap analysis and requirements documentation.",
      outcomeNote: "The solution remains a proposed design; implementation has not been confirmed.",
      impact:
        "No measured business impact is available. The proposed improvements are intended to reduce manual administration, improve journey visibility, and strengthen coordination and control.",
      documents: [
        { label: "AS-IS and TO-BE Process Maps", url: "" },
        { label: "Gap Analysis", url: "" },
        { label: "Business Requirements Document (BRD)", url: "" },
        { label: "Supporting analysis frameworks", url: "" }
      ]
    },

    {
      id: "banking-cloud-transformation",
      name: "Banking Cloud Transformation",
      category: "Business Analysis / Data Analysis / Business Intelligence / Process Improvement",
      image: "assets/images/project-02.jpg",
      imageAlt: "Legacy mainframe AS-IS compared with cloud TO-BE, with one-time cost, annual benefits and NPV discount rates",
      shortDescription:
        "Evaluated a proposed banking cloud transformation by analyzing the existing technology environment, identifying gaps between the current and desired future states, and assessing the financial considerations of migrating legacy infrastructure, applications, and data to the cloud.",
      skills: ["Gap Analysis", "Business Case", "Cost-Benefit Analysis", "NPV"],
      role: "Business Analyst — current-state assessment, gap analysis, and business-case analysis.",
      tools: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Gap analysis templates"],
      methodology: [
        "AS-IS and TO-BE analysis",
        "Gap analysis",
        "Business case development",
        "Cost-benefit analysis",
        "Net Present Value (NPV)",
        "Financial feasibility assessment",
        "Risk and constraint analysis"
      ],
      dataSource: [
        "Banking transformation case-study information",
        "Current-state technology and operational challenges described in the case",
        "Provided migration cost and annual benefit estimates",
        "Provided discount rates for the NPV exercise"
      ],
      keyFacts: [
        { label: "Legacy environment", value: "Mainframe in use for ~30 years" },
        { label: "Approval cycle", value: "6 weeks" },
        { label: "Delivery cycle", value: "~9–12 months" },
        { label: "Approved programme", value: "24-month cloud transformation" },
        { label: "One-time cost (provided)", value: "$4.7 million" },
        { label: "Annual benefits (provided)", value: "$5.7 million" },
        { label: "Discount rates (provided)", value: "8%, 10%, 15%" }
      ],
      keyFactsNote: "Figures are case-study assumptions supplied for the exercise, not measured results.",
      problem:
        "The client operated a legacy mainframe environment that had been in use for approximately 30 years. The case identified limited cloud experience among engineers and a six-week approval cycle. While digital competitors could launch services in weeks, the client's delivery cycle was approximately 9–12 months. A 24-month cloud transformation had been approved by the Board.",
      objective:
        "To identify technology, skills, and process gaps; assess the proposed cloud migration's business rationale; and evaluate financial feasibility using cost-benefit analysis and Net Present Value (NPV).",
      analysis: [
        "Compared the legacy technology environment with the proposed cloud-based future state.",
        "Examined the effects of skills gaps, lengthy approvals, and slow delivery cycles on transformation readiness.",
        "Evaluated the provided financial assumptions using a one-time cost of $4.7 million, annual benefits of $5.7 million, and discount rates of 8%, 10%, and 15%."
      ],
      findings: [
        "Legacy infrastructure presented a modernization challenge.",
        "Limited cloud expertise and a lengthy approval process were important transformation constraints.",
        "Financial feasibility depended on the timing of benefits, migration costs, discount rates, and other assumptions."
      ],
      recommendations: [
        "Develop a phased cloud migration roadmap aligned with business priorities, technical dependencies, and workforce capability.",
        "Address cloud skills gaps and review approval processes to support more efficient delivery.",
        "Validate financial assumptions and assess migration risks before using the business case for implementation decisions."
      ],
      outcome:
        "Developed a structured gap-analysis approach and business-case assessment using the provided case-study assumptions.",
      outcomeNote: "Completion of the actual cloud migration has not been confirmed.",
      impact:
        "No verified realized impact is available. The analysis was intended to support informed decisions about modernization, financial feasibility, and operational improvement.",
      documents: [
        { label: "Cloud Transformation Gap Analysis", url: "" },
        { label: "Business Case", url: "" },
        { label: "NPV Calculation Workbook", url: "" }
      ]
    },

    {
      id: "food-canteen-ordering-system",
      name: "Food Canteen Ordering System",
      category: "Business Analysis / Process Improvement / Agile Requirements Management",
      image: "assets/images/project-03.jpg",
      imageAlt: "User story with Given/When/Then acceptance criteria, product backlog, sprint plan and TO-BE ordering process map",
      shortDescription:
        "Analyzed and organized project requirements for a proposed digital food canteen ordering system. Structured stakeholder documentation and the product backlog, developed user stories and acceptance criteria, organized work into sprints, and mapped the proposed future-state ordering process.",
      skills: ["User Stories", "Acceptance Criteria", "Backlog Management", "Sprint Planning"],
      role: "Business Analyst — stakeholder analysis, requirements documentation, user story development, and backlog organization.",
      tools: ["Jira", "Microsoft Word", "Microsoft Excel", "Process mapping tools"],
      methodology: [
        "Stakeholder analysis",
        "Requirements elicitation and analysis",
        "Agile methodology",
        "Product backlog management",
        "User story development",
        "Given/When/Then acceptance criteria",
        "Sprint planning",
        "TO-BE process mapping"
      ],
      dataSource: [
        "Stakeholder analysis documentation",
        "Project requirements and product backlog content",
        "Proposed ordering-system workflow and business needs documented for the case study"
      ],
      keyFacts: [],
      problem:
        "The project required clear and organized stakeholder information, product requirements, and backlog items to support a shared understanding of the proposed system. The requirements needed to be structured so that the development work could be prioritized, tested, and planned in manageable increments.",
      objective:
        "To establish clear and testable requirements, organize the product backlog, define acceptance criteria, and develop a TO-BE process map that could guide the proposed ordering system's development.",
      analysis: [
        "Organized stakeholder analysis and product backlog documentation to improve clarity and traceability.",
        "Structured requirements into user stories with Given/When/Then acceptance criteria to make expected system behaviour testable.",
        "Organized backlog items into sprints and mapped the proposed future-state ordering process."
      ],
      findings: [
        "Requirements and backlog items needed clear organization to support delivery planning.",
        "Acceptance criteria were important for communicating expected functionality and supporting testing.",
        "A documented future-state process could help stakeholders and developers align on the intended ordering workflow."
      ],
      recommendations: [
        "Maintain a prioritized product backlog with clear user stories and testable acceptance criteria.",
        "Review requirements with stakeholders before sprint commitment and update documentation as decisions change.",
        "Use the TO-BE process map to align business expectations, development activities, and testing."
      ],
      outcome:
        "Organized the stakeholder and product backlog documentation, structured user stories and acceptance criteria, arranged sprint work, and developed a proposed TO-BE process map.",
      outcomeNote: "Production implementation has not been confirmed.",
      impact:
        "No measured business impact is available. The work was intended to improve requirements clarity, stakeholder alignment, and delivery planning.",
      documents: [
        { label: "Stakeholder Analysis", url: "" },
        { label: "Product Backlog", url: "" },
        { label: "User Stories and Acceptance Criteria", url: "" },
        { label: "Sprint Plan", url: "" },
        { label: "TO-BE Process Map", url: "" }
      ]
    }
  ]
};
