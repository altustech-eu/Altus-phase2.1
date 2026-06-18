import { PageConfig } from '../models/page.model';

export const PAGE_DATA: Record<string, PageConfig> = {
  home: {
    id: 'home',
    eyebrow: '01 — Home Page',
    title: 'One platform for global career mobility, study abroad, jobs and Ausbildung pathways',
    description:
      'A unified digital experience for students, jobseekers, parents, employers, partners, tutors and ambassadors to discover, compare, prepare and move through international career pathways.',
    primaryCta: 'Start Career Journey',
    secondaryCta: 'Explore Programs',
    heroImage: '/assets/home-hero.webp',
    stats: [
      { value: '4+', label: 'Core Programs' },
      { value: '360°', label: 'Career Support' },
      { value: 'Global', label: 'Mobility Pathways' }
    ],
    features: [
      {
        title: 'Program Discovery',
        description: 'Ausbildung, jobs, study abroad and German language pathways structured under one ecosystem.'
      },
      {
        title: 'Persona-Based Guidance',
        description: 'Route users based on qualification, country, budget, timeline, career intent and readiness.'
      },
      {
        title: 'End-to-End Support',
        description: 'From awareness and counselling to documentation, training, applications and onboarding.'
      }
    ],
    cards: [
      {
        title: 'Ausbildung Germany',
        category: 'Paid Training',
        description: 'Vocational training route for students and young professionals who want career-linked education.',
        imageUrl: '/assets/Aus8.webp'
      },
      {
        title: 'International Jobs',
        category: 'Career Mobility',
        description: 'Employer-linked international job pathways across Europe and Gulf markets.',
        imageUrl: '/assets/jobs.webp'
      },
      {
        title: 'Study Abroad',
        category: 'University Route',
        description: 'Country, university and program selection with documentation and visa support.',
        imageUrl: '/assets/study.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Select User Type',
        description: 'Student, jobseeker, parent, employer, partner, tutor or ambassador.'
      },
      {
        number: '02',
        title: 'Choose Pathway',
        description: 'Select Ausbildung, jobs, study abroad or German language training.'
      },
      {
        number: '03',
        title: 'Start Guided Journey',
        description: 'Move through eligibility, counselling, preparation and application stages.'
      }
    ]
  },

  ausbildung: {
    id: 'ausbildung',
    eyebrow: '02 — Ausbildung Pages',
    title: 'Paid vocational training pathways for a long-term career in Germany',
    description:
      'Explore sector-wise Ausbildung programs, eligibility, German language readiness, employer interview preparation, training contract support and visa guidance.',
    primaryCta: 'Check Eligibility',
    secondaryCta: 'View Sectors',
    heroImage: '/assets/Aus8.webp',
    stats: [
      { value: 'A1-B1', label: 'Language Route' },
      { value: '3 Yrs', label: 'Training Duration' },
      { value: 'Paid', label: 'Work-Based Model' }
    ],
    features: [
      {
        title: 'Sector Selection',
        description: 'Healthcare, hospitality, logistics, retail, IT, culinary and technical Ausbildung sectors.'
      },
      {
        title: 'German Language Readiness',
        description: 'Structured A1, A2 and B1 preparation aligned to employer and visa expectations.'
      },
      {
        title: 'Training Contract Journey',
        description: 'Profile preparation, CV, motivation letter, interview readiness and employer coordination.'
      }
    ],
    cards: [
      {
        title: 'Healthcare / Nursing',
        category: 'High Demand',
        description: 'Structured care pathway for candidates targeting long-term career mobility in Germany.',
        imageUrl: '/assets/Aus8.webp'
      },
      {
        title: 'IT & Software',
        category: 'Digital Sector',
        description: 'Technology-driven vocational route for digital and software-oriented candidates.',
        imageUrl: '/assets/Aus2.webp'
      },
      {
        title: 'Hotel & Hospitality',
        category: 'Service Sector',
        description: 'Hospitality route for candidates interested in guest service and operations careers.',
        imageUrl: '/assets/Aus3.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Eligibility Assessment',
        description: 'Review qualification, age, language level, passport and documentation readiness.'
      },
      {
        number: '02',
        title: 'Language and Profile Preparation',
        description: 'Prepare German language, CV, documents and interview readiness.'
      },
      {
        number: '03',
        title: 'Contract and Visa Pathway',
        description: 'Move toward employer interview, training contract and visa processing.'
      }
    ]
  },

  jobs: {
    id: 'jobs',
    eyebrow: '03 — Jobs Pages',
    title: 'Employer-linked global job pathways for skilled and semi-skilled candidates',
    description:
      'Discover international job routes across Europe and Gulf markets with CV preparation, employer matching, interview readiness and relocation support.',
    primaryCta: 'Find Jobs',
    secondaryCta: 'Submit Profile',
    heroImage: '/assets/jobs.webp',
    stats: [
      { value: 'EU', label: 'Europe Jobs' },
      { value: 'GCC', label: 'Gulf Jobs' },
      { value: 'Multi', label: 'Sector Hiring' }
    ],
    features: [
      {
        title: 'Candidate Profiling',
        description: 'Map experience, skills, language level, salary expectations and destination fit.'
      },
      {
        title: 'Employer Matching',
        description: 'Connect suitable candidates to sector-specific international employers.'
      },
      {
        title: 'Relocation Readiness',
        description: 'Support documentation, interview preparation, cultural readiness and onboarding.'
      }
    ],
    cards: [
      {
        title: 'Healthcare Jobs',
        category: 'Healthcare',
        description: 'Nurses, caregivers, allied health and support roles for international employers.',
        imageUrl: '/assets/jobs.webp'
      },
      {
        title: 'Hospitality Jobs',
        category: 'Service',
        description: 'Hotel, restaurant, culinary and guest service roles across destination markets.',
        imageUrl: '/assets/Aus3.webp'
      },
      {
        title: 'Technical Jobs',
        category: 'Skilled Work',
        description: 'Mechanical, electrical, logistics, warehouse and technician roles.',
        imageUrl: '/assets/Aus8.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Profile Submission',
        description: 'Collect CV, documents, experience, language level and destination preference.'
      },
      {
        number: '02',
        title: 'Screening and Matching',
        description: 'Assess job fit and match with employer demand.'
      },
      {
        number: '03',
        title: 'Interview and Onboarding',
        description: 'Prepare candidate for interview, documentation and relocation.'
      }
    ]
  },

  'study-abroad': {
    id: 'study-abroad',
    eyebrow: '04 — Study Abroad Pages',
    title: 'University and country selection for global education pathways',
    description:
      'Support students in choosing the right country, university, program, budget, scholarship option and long-term career pathway.',
    primaryCta: 'Find Universities',
    secondaryCta: 'Compare Countries',
    heroImage: '/assets/study.webp',
    stats: [
      { value: 'UG', label: 'Bachelor Programs' },
      { value: 'PG', label: 'Master Programs' },
      { value: 'Global', label: 'Destinations' }
    ],
    features: [
      {
        title: 'Country Selection',
        description: 'Compare Germany, UK, Europe, Canada, Australia and other study destinations.'
      },
      {
        title: 'University Shortlisting',
        description: 'Shortlist based on ranking, affordability, employability, admission fit and student profile.'
      },
      {
        title: 'Application Support',
        description: 'SOP, LOR, documentation, application submission and visa readiness.'
      }
    ],
    cards: [
      {
        title: 'Study in Germany',
        category: 'Public / Private',
        description: 'Affordable education, strong employability and structured long-term career route.',
        imageUrl: '/assets/study.webp'
      },
      {
        title: 'Study in UK',
        category: 'Global Degrees',
        description: 'Shorter duration programs and strong university brand value.',
        imageUrl: '/assets/study.webp'
      },
      {
        title: 'Study in Europe',
        category: 'EU Mobility',
        description: 'Multi-country academic and career mobility options for international students.',
        imageUrl: '/assets/study.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Academic Profiling',
        description: 'Review marks, qualification, budget, destination and career goals.'
      },
      {
        number: '02',
        title: 'Shortlisting',
        description: 'Select the right country, university and program.'
      },
      {
        number: '03',
        title: 'Application and Visa',
        description: 'Prepare documents, submit applications and manage visa readiness.'
      }
    ]
  },

  'german-language-training': {
    id: 'german-language-training',
    eyebrow: '05 — German Language Training Pages',
    title: 'Outcome-focused German language training for study, jobs and Ausbildung',
    description:
      'Structured German language programs from A1 to B1 with classroom, hybrid, native-speaker, exam preparation and interview readiness support.',
    primaryCta: 'Join German Class',
    secondaryCta: 'Take Level Test',
    heroImage: '/assets/german-language.webp',
    stats: [
      { value: 'A1', label: 'Foundation' },
      { value: 'A2', label: 'Communication' },
      { value: 'B1', label: 'Mobility Readiness' }
    ],
    features: [
      {
        title: 'Level-Based Learning',
        description: 'A1, A2 and B1 mapped to learner goals and international mobility requirements.'
      },
      {
        title: 'Exam Preparation',
        description: 'Practice tests, speaking readiness, grammar support and feedback loops.'
      },
      {
        title: 'Career German',
        description: 'Interview, workplace and cross-cultural German communication.'
      }
    ],
    cards: [
      {
        title: 'A1 German',
        category: 'Beginner',
        description: 'Foundation grammar, vocabulary and basic communication.',
        imageUrl: '/assets/german-language.webp'
      },
      {
        title: 'A2 German',
        category: 'Intermediate',
        description: 'Practical speaking, listening and daily communication.',
        imageUrl: '/assets/german-language.webp'
      },
      {
        title: 'B1 German',
        category: 'Career Ready',
        description: 'Workplace, interview and mobility readiness.',
        imageUrl: '/assets/german-language.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Level Assessment',
        description: 'Understand current German language capability.'
      },
      {
        number: '02',
        title: 'Training Plan',
        description: 'Assign batch, trainer, LMS access and learning milestones.'
      },
      {
        number: '03',
        title: 'Exam and Interview Readiness',
        description: 'Prepare for exam, speaking confidence and career communication.'
      }
    ]
  },

  employers: {
    id: 'employers',
    eyebrow: '06 — Employer Pages',
    title: 'Employer partnership platform for international hiring and Ausbildung pipelines',
    description:
      'Support employers with candidate sourcing, screening, interview coordination, documentation, training readiness and cross-border onboarding.',
    primaryCta: 'Hire Candidates',
    secondaryCta: 'Post Requirement',
    heroImage: '/assets/employer.webp',
    stats: [
      { value: 'Screened', label: 'Candidate Pool' },
      { value: 'Global', label: 'Talent Access' },
      { value: 'End-to-End', label: 'Hiring Support' }
    ],
    features: [
      {
        title: 'Candidate Pipeline',
        description: 'Build sector-specific talent pools for hiring and Ausbildung.'
      },
      {
        title: 'Pre-Screening',
        description: 'Assess qualification, experience, language capability and readiness.'
      },
      {
        title: 'Onboarding Support',
        description: 'Coordinate interviews, documentation, mobility and joining.'
      }
    ],
    cards: [
      {
        title: 'Ausbildung Employers',
        category: 'Germany',
        description: 'Training contract-based candidate pipeline for German employers.',
        imageUrl: '/assets/employer.webp'
      },
      {
        title: 'Job Employers',
        category: 'International',
        description: 'Skilled and semi-skilled candidate matching for global workforce demand.',
        imageUrl: '/assets/employer.webp'
      },
      {
        title: 'Healthcare Employers',
        category: 'Priority Sector',
        description: 'Healthcare workforce recruitment and candidate readiness support.',
        imageUrl: '/assets/employer.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Share Requirement',
        description: 'Submit role, sector, location, language and hiring needs.'
      },
      {
        number: '02',
        title: 'Receive Candidates',
        description: 'Review screened and matched candidate profiles.'
      },
      {
        number: '03',
        title: 'Interview and Contract',
        description: 'Coordinate interview, selection, offer and onboarding.'
      }
    ]
  },

  'career-ambassadors': {
    id: 'career-ambassadors',
    eyebrow: '07 — Career Ambassador Pages',
    title: 'Build trust through student, alumni and career ambassador networks',
    description:
      'Enable ambassadors to share experiences, guide prospects, support community engagement and improve decision confidence for students and parents.',
    primaryCta: 'Become Ambassador',
    secondaryCta: 'Meet Ambassadors',
    heroImage: '/assets/ambassador.webp',
    stats: [
      { value: 'Peer', label: 'Trust Model' },
      { value: 'Community', label: 'Engagement' },
      { value: 'Stories', label: 'Experience Proof' }
    ],
    features: [
      {
        title: 'Experience Sharing',
        description: 'Ambassadors explain real journey, challenges, expectations and outcomes.'
      },
      {
        title: 'Community Support',
        description: 'Support webinars, events, Q&A sessions and social proof.'
      },
      {
        title: 'Lead Nurturing',
        description: 'Help prospects move from interest to informed decision.'
      }
    ],
    cards: [
      {
        title: 'Student Ambassadors',
        category: 'Study Abroad',
        description: 'Current students and alumni sharing destination experience.',
        imageUrl: '/assets/ambassador.webp'
      },
      {
        title: 'Career Ambassadors',
        category: 'Jobs',
        description: 'Placed candidates sharing job and relocation experience.',
        imageUrl: '/assets/ambassador.webp'
      },
      {
        title: 'Ausbildung Ambassadors',
        category: 'Germany',
        description: 'Ausbildung candidates guiding new aspirants.',
        imageUrl: '/assets/ambassador.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Apply',
        description: 'Submit profile, destination, program and experience.'
      },
      {
        number: '02',
        title: 'Verify',
        description: 'Validate authenticity, communication quality and availability.'
      },
      {
        number: '03',
        title: 'Engage',
        description: 'Participate in webinars, community and counselling support.'
      }
    ]
  },

  registration: {
    id: 'registration',
    eyebrow: '08 — Partner / Tutor / Employer Registration Pages',
    title: 'Registration journeys for partners, tutors, employers and ambassadors',
    description:
      'Dedicated registration flows for ecosystem stakeholders including agents, tutors, employers, ambassadors, franchisees and institutional partners.',
    primaryCta: 'Register Now',
    secondaryCta: 'Choose Registration Type',
    heroImage: '/assets/registration.webp',
    stats: [
      { value: 'Multi', label: 'Stakeholder Forms' },
      { value: 'CRM', label: 'Lead Capture' },
      { value: 'Verified', label: 'Partner Network' }
    ],
    features: [
      {
        title: 'Partner Registration',
        description: 'Agents, franchisees, schools, institutions and referral partners.'
      },
      {
        title: 'Tutor Registration',
        description: 'German trainers, subject experts and interview coaches.'
      },
      {
        title: 'Employer Registration',
        description: 'Employers, recruiters and workforce demand partners.'
      }
    ],
    cards: [
      {
        title: 'Partner Registration',
        category: 'Business Network',
        description: 'Register as agent, franchisee or institutional partner.',
        imageUrl: '/assets/registration.webp'
      },
      {
        title: 'Tutor Registration',
        category: 'Training Network',
        description: 'Register as German trainer, tutor or subject expert.',
        imageUrl: '/assets/registration.webp'
      },
      {
        title: 'Employer Registration',
        category: 'Hiring Network',
        description: 'Register hiring needs and workforce requirements.',
        imageUrl: '/assets/registration.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Select Type',
        description: 'Choose partner, tutor, employer or ambassador registration.'
      },
      {
        number: '02',
        title: 'Submit Details',
        description: 'Capture profile, location, capability and commercial interest.'
      },
      {
        number: '03',
        title: 'Verification',
        description: 'Review, qualify and onboard the stakeholder.'
      }
    ]
  },

  'forms-thank-you': {
    id: 'forms-thank-you',
    eyebrow: '09 — Forms and Thank You Pages',
    title: 'Conversion-focused forms and confirmation journeys',
    description:
      'Build structured forms for lead capture, counselling requests, eligibility checks, event registration, downloads, applications and stakeholder onboarding.',
    primaryCta: 'Create Form Flow',
    secondaryCta: 'View Thank You Pages',
    heroImage: '/assets/forms.webp',
    stats: [
      { value: 'Lead', label: 'Capture' },
      { value: 'CRM', label: 'Routing' },
      { value: 'NBA', label: 'Next Best Action' }
    ],
    features: [
      {
        title: 'Lead Forms',
        description: 'Capture persona, program interest, country, qualification and timeline.'
      },
      {
        title: 'Eligibility Forms',
        description: 'Assess readiness for Ausbildung, jobs, study abroad and language training.'
      },
      {
        title: 'Thank You Pages',
        description: 'Route users to next step, advisor booking, downloads and WhatsApp.'
      }
    ],
    cards: [
      {
        title: 'Enquiry Form',
        category: 'Lead Capture',
        description: 'Primary website enquiry and counselling form.',
        imageUrl: '/assets/forms.webp'
      },
      {
        title: 'Eligibility Form',
        category: 'Qualification',
        description: 'Program-specific eligibility and readiness form.',
        imageUrl: '/assets/forms.webp'
      },
      {
        title: 'Thank You Page',
        category: 'Conversion',
        description: 'Confirmation page with next action and nurturing CTA.',
        imageUrl: '/assets/forms.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Capture Intent',
        description: 'Collect program, country, timeline and user persona.'
      },
      {
        number: '02',
        title: 'Score Lead',
        description: 'Route lead based on urgency, eligibility and readiness.'
      },
      {
        number: '03',
        title: 'Trigger Next Action',
        description: 'Send to advisor, WhatsApp, CRM, email or event journey.'
      }
    ]
  },

  resources: {
    id: 'resources',
    eyebrow: '10 — FAQ / Advice / Resource Pages',
    title: 'Knowledge hub for advice, FAQs, guides, tools and decision support',
    description:
      'Create a structured knowledge ecosystem for SEO, counselling support, student education, parent confidence and lead nurturing.',
    primaryCta: 'Explore Resources',
    secondaryCta: 'Read FAQs',
    heroImage: '/assets/resources.webp',
    stats: [
      { value: 'FAQ', label: 'Support' },
      { value: 'Guides', label: 'Decision Help' },
      { value: 'Tools', label: 'Self-Service' }
    ],
    features: [
      {
        title: 'FAQ Library',
        description: 'Program, country, visa, cost, language and career outcome questions.'
      },
      {
        title: 'Advice Articles',
        description: 'Structured long-form guidance for SEO and counselling readiness.'
      },
      {
        title: 'Career Tools',
        description: 'Calculators, comparison tools, eligibility checks and pathway planners.'
      }
    ],
    cards: [
      {
        title: 'Ausbildung FAQs',
        category: 'Germany',
        description: 'Eligibility, language, sectors, salary and visa questions.',
        imageUrl: '/assets/resources.webp'
      },
      {
        title: 'Study Abroad Guides',
        category: 'Education',
        description: 'Country, university, application and scholarship guides.',
        imageUrl: '/assets/resources.webp'
      },
      {
        title: 'Career Calculators',
        category: 'Tools',
        description: 'Cost, timeline, salary and ROI calculators.',
        imageUrl: '/assets/resources.webp'
      }
    ],
    steps: [
      {
        number: '01',
        title: 'Educate',
        description: 'Answer early-stage questions and remove confusion.'
      },
      {
        number: '02',
        title: 'Compare',
        description: 'Help users compare pathway, cost, time and outcome.'
      },
      {
        number: '03',
        title: 'Convert',
        description: 'Move users from content to counselling or application.'
      }
    ]
  }
};