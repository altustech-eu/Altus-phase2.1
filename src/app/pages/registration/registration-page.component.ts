import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MetricCard {
  value: string;
  label: string;
  description: string;
}

interface SimpleCard {
  title: string;
  description: string;
}

interface RegistrationType {
  title: string;
  tag: string;
  description: string;
  fields: string[];
}

interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

interface TableRow {
  registrationType: string;
  userPersona: string;
  purpose: string;
  routedTo: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Registration Hub
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Register the right stakeholder into the right Career360 journey
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              A unified registration system for students, jobseekers, Ausbildung candidates, German learners,
              employers, tutors, ambassadors, schools, agents, franchisees and institutional partners.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#registration-types" class="btn-primary">
                View Registration Types
              </a>

              <a href="#registration-form" class="btn-secondary">
                Start Registration
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/registration.webp"
                alt="Registration hub"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Stakeholder routing
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  One registration entry point. Multiple operational workflows.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Capture identity, persona, intent, readiness and route every user to the correct team.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 02 Metrics -->
      <section class="border-b border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-0 px-6 py-12 lg:grid-cols-4 lg:px-10 xl:px-14">
          <article class="metric-card" *ngFor="let metric of metrics">
            <p class="text-[34px] font-normal tracking-[-0.05em] text-slate-950">
              {{ metric.value }}
            </p>

            <h3 class="mt-3 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
              {{ metric.label }}
            </h3>

            <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
              {{ metric.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- 03 Registration Logic -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Registration logic
            </p>

            <h2 class="section-title">
              Registration should qualify, segment and route users before follow-up starts.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of registrationLogic">
              <h3 class="card-title">
                {{ item.title }}
              </h3>

              <p class="card-text">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 04 Registration Types -->
      <section id="registration-types" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[880px]">
            <p class="section-eyebrow">
              Registration types
            </p>

            <h2 class="section-title">
              Build registration flows for every stakeholder in the Career360 ecosystem.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
              Each registration type should collect only the fields required for routing, qualification,
              onboarding, compliance and next best action.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="registration-card" *ngFor="let item of registrationTypes">
              <p class="inline-flex bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                {{ item.tag }}
              </p>

              <h3 class="mt-5 text-[26px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ item.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ item.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Key fields
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let field of item.fields">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ field }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 Registration Journey -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Journey
              </p>

              <h2 class="section-title">
                From registration to onboarding workflow.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Every registration should create a structured record and move the user to an operational pipeline.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let step of journeySteps">
              <p class="text-[30px] font-normal tracking-[-0.04em] text-[#0f62fe]">
                {{ step.number }}
              </p>

              <h3 class="mt-5 text-[20px] font-normal tracking-[-0.035em] text-slate-950">
                {{ step.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ step.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 06 User Segments -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[860px]">
            <p class="section-eyebrow text-blue-300">
              User segmentation
            </p>

            <h2 class="section-title text-white">
              Different users require different registration journeys.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-300">
              Segment users early so the CRM, advisor team, partner team, employer team and training team
              receive clean records with the right context.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="dark-card" *ngFor="let segment of userSegments">
              <h3 class="text-[23px] font-normal tracking-[-0.04em] text-white">
                {{ segment.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ segment.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Data Capture Model -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              Data capture
            </p>

            <h2 class="section-title">
              Capture the minimum data required for qualification and routing.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              Registration forms must avoid unnecessary friction while still collecting enough information
              for CRM segmentation, scoring and onboarding.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
            <article class="medium-card" *ngFor="let item of dataCaptureCards">
              <h3 class="card-title">
                {{ item.title }}
              </h3>

              <p class="card-text">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 08 Routing Table -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Routing matrix
              </p>

              <h2 class="section-title">
                Where should each registration go?
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this model to connect registration type with CRM owner, department and next action.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[980px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Registration Type</th>
                  <th class="table-head">User Persona</th>
                  <th class="table-head">Purpose</th>
                  <th class="table-head">Routed To</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of routingRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.registrationType }}</td>
                  <td class="table-cell">{{ row.userPersona }}</td>
                  <td class="table-cell">{{ row.purpose }}</td>
                  <td class="table-cell">{{ row.routedTo }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 09 Verification and Onboarding -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Verification and onboarding
            </p>

            <h2 class="section-title">
              Registration is only the start. Verification makes it operational.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              Each stakeholder should move through validation, document collection, approval,
              onboarding checklist and activation.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of onboardingCards">
              <h3 class="card-title">
                {{ item.title }}
              </h3>

              <p class="card-text">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 10 Governance -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Governance
            </p>

            <h2 class="section-title">
              Standardise registration before scaling partners, leads and stakeholders.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let item of governanceCards">
              <h3 class="card-title">
                {{ item.title }}
              </h3>

              <p class="card-text">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 11 FAQ -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              FAQs
            </p>

            <h2 class="section-title">
              Common registration questions.
            </h2>
          </div>

          <div class="space-y-4 lg:col-span-8">
            <article class="border border-slate-200 bg-white p-6" *ngFor="let faq of faqs">
              <h3 class="text-[18px] font-normal tracking-[-0.03em] text-slate-950">
                {{ faq.question }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ faq.answer }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 12 Registration Form -->
      <section id="registration-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start registration
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Select your profile and start the right workflow.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Register as a student, jobseeker, employer, tutor, ambassador, school, agent, franchisee
              or partner. Your registration can be routed to the relevant Career360 team.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Full Name / Organisation Name</label>
                <input class="form-input" type="text" placeholder="Enter name" />
              </div>

              <div>
                <label class="form-label">Registering As</label>
                <select class="form-input">
                  <option>Student / Parent</option>
                  <option>Ausbildung Candidate</option>
                  <option>Jobseeker</option>
                  <option>German Learner</option>
                  <option>Employer</option>
                  <option>German Tutor</option>
                  <option>Career Ambassador</option>
                  <option>Agent / Partner</option>
                  <option>School / Institution</option>
                  <option>Franchisee / Investor</option>
                </select>
              </div>

              <div>
                <label class="form-label">Primary Interest</label>
                <select class="form-input">
                  <option>Ausbildung Germany</option>
                  <option>Jobs in Europe / Gulf</option>
                  <option>Study Abroad</option>
                  <option>German Language Training</option>
                  <option>Employer Hiring</option>
                  <option>Partnership / Franchise</option>
                  <option>Ambassador Programme</option>
                </select>
              </div>

              <div>
                <label class="form-label">Country / Location</label>
                <input class="form-input" type="text" placeholder="Enter country or city" />
              </div>

              <div>
                <label class="form-label">Preferred Next Action</label>
                <select class="form-input">
                  <option>Book Counselling Call</option>
                  <option>Receive Programme Details</option>
                  <option>Schedule Partner Meeting</option>
                  <option>Submit Documents</option>
                  <option>Join Webinar</option>
                  <option>Start Application</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    .font-main {
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
    }

    .section-padding {
      padding: 72px 24px;
    }

    @media (min-width: 1024px) {
      .section-padding {
        padding: 88px 40px;
      }
    }

    @media (min-width: 1280px) {
      .section-padding {
        padding-left: 56px;
        padding-right: 56px;
      }
    }

    .section-eyebrow {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #0f62fe;
    }

    .section-title {
      margin-top: 16px;
      font-size: 36px;
      font-weight: 400;
      line-height: 1.08;
      letter-spacing: -0.05em;
      color: #020617;
    }

    @media (min-width: 1024px) {
      .section-title {
        font-size: 52px;
      }
    }

    .btn-primary {
      display: inline-flex;
      justify-content: center;
      background: #0f62fe;
      padding: 14px 24px;
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
    }

    .btn-secondary {
      display: inline-flex;
      justify-content: center;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 14px 24px;
      font-size: 14px;
      font-weight: 600;
      color: #020617;
    }

    .metric-card {
      min-height: 190px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 24px;
    }

    .medium-card {
      min-height: 220px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .medium-card:hover {
      background: #f8fafc;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
    }

    .registration-card {
      min-height: 430px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .registration-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .dark-card {
      min-height: 240px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.05);
      padding: 26px;
    }

    .card-title {
      font-size: 21px;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.035em;
      color: #020617;
    }

    .card-text {
      margin-top: 14px;
      font-size: 14px;
      line-height: 1.7;
      color: #475569;
    }

    .mini-label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #64748b;
    }

    .table-head {
      border-right: 1px solid #cbd5e1;
      padding: 18px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #334155;
    }

    .table-cell {
      border-right: 1px solid #e2e8f0;
      padding: 18px;
      font-size: 14px;
      line-height: 1.6;
      color: #475569;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 600;
      color: #334155;
    }

    .form-input {
      width: 100%;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 14px;
      font-size: 14px;
      color: #0f172a;
      outline: none;
    }

    .form-input:focus {
      border-color: #0f62fe;
      box-shadow: 0 0 0 2px rgba(15, 98, 254, 0.16);
    }
  `]
})
export class RegistrationPageComponent {
  metrics: MetricCard[] = [
    {
      value: '10+',
      label: 'User types',
      description: 'Students, jobseekers, employers, tutors, agents, ambassadors, schools and franchisees.'
    },
    {
      value: '1',
      label: 'Registration hub',
      description: 'Single entry point that routes users to multiple CRM and operational workflows.'
    },
    {
      value: 'CRM',
      label: 'Record creation',
      description: 'Each submission should create or update a clean stakeholder record.'
    },
    {
      value: 'NBA',
      label: 'Next best action',
      description: 'Every registration should trigger a clear follow-up, task, message or onboarding step.'
    }
  ];

  registrationLogic: SimpleCard[] = [
    {
      title: 'Identify the stakeholder',
      description: 'Separate students, jobseekers, employers, tutors, agents, ambassadors, schools and franchise prospects.'
    },
    {
      title: 'Capture intent',
      description: 'Understand whether the user wants counselling, application, hiring, partnership, teaching or franchise discussion.'
    },
    {
      title: 'Route to owner',
      description: 'Assign the registration to the correct programme, department, advisor, partner manager or B2B team.'
    },
    {
      title: 'Trigger workflow',
      description: 'Create follow-up tasks, onboarding checklists, document requests, email, WhatsApp and CRM actions.'
    }
  ];

  registrationTypes: RegistrationType[] = [
    {
      title: 'Student / Parent Registration',
      tag: 'B2C',
      description: 'For students and parents exploring Ausbildung, study abroad, German language or career pathways.',
      fields: ['Student name', 'Parent contact', 'Qualification', 'Programme interest', 'Target country']
    },
    {
      title: 'Ausbildung Candidate Registration',
      tag: 'Germany pathway',
      description: 'For candidates interested in paid vocational training and employer-linked Germany routes.',
      fields: ['Qualification', 'Age group', 'German level', 'Preferred sector', 'Timeline']
    },
    {
      title: 'Jobseeker Registration',
      tag: 'Jobs',
      description: 'For skilled, semi-skilled and entry-level candidates searching international job opportunities.',
      fields: ['Experience', 'Current role', 'Target country', 'Language level', 'CV status']
    },
    {
      title: 'German Learner Registration',
      tag: 'Language',
      description: 'For learners joining A1, A2, B1, spoken German, exam preparation or interview German.',
      fields: ['Current level', 'Target level', 'Training mode', 'Batch timing', 'Career goal']
    },
    {
      title: 'Employer Registration',
      tag: 'B2B',
      description: 'For companies submitting hiring requirements for Ausbildung, jobs and workforce pipelines.',
      fields: ['Company name', 'Hiring sector', 'Candidate count', 'German level', 'Start timeline']
    },
    {
      title: 'Tutor / Trainer Registration',
      tag: 'Faculty',
      description: 'For German trainers, subject experts, interview trainers and cross-cultural trainers.',
      fields: ['Teaching subject', 'Experience', 'Mode', 'Certification', 'Availability']
    },
    {
      title: 'Career Ambassador Registration',
      tag: 'Community',
      description: 'For students, alumni, parents and volunteers who support peer guidance and community engagement.',
      fields: ['Ambassador type', 'Current status', 'Contribution area', 'Location', 'Availability']
    },
    {
      title: 'Agent / Partner Registration',
      tag: 'Partnership',
      description: 'For local agents, recruiters, consultants and B2B channel partners.',
      fields: ['Partner type', 'Market', 'Experience', 'Lead source capability', 'Commercial model']
    },
    {
      title: 'School / Institution Registration',
      tag: 'Institution',
      description: 'For schools, colleges, training institutes and institutional tie-ups.',
      fields: ['Institution name', 'Student strength', 'Location', 'Programme interest', 'Decision maker']
    }
  ];

  journeySteps: JourneyStep[] = [
    {
      number: '01',
      title: 'Select persona',
      description: 'User chooses whether they are a student, jobseeker, employer, tutor, partner or institution.'
    },
    {
      number: '02',
      title: 'Capture profile',
      description: 'Form collects identity, contact, location, intent, readiness and programme interest.'
    },
    {
      number: '03',
      title: 'Create CRM record',
      description: 'Registration creates or updates a stakeholder profile with segmentation and routing fields.'
    },
    {
      number: '04',
      title: 'Trigger onboarding',
      description: 'User receives the right next step: counselling, document upload, meeting, batch or verification.'
    }
  ];

  userSegments: SimpleCard[] = [
    {
      title: 'Students and parents',
      description: 'Need counselling, programme comparison, eligibility checks, cost clarity and timeline guidance.'
    },
    {
      title: 'Jobseekers',
      description: 'Need CV review, job market mapping, language assessment, employer matching and documentation support.'
    },
    {
      title: 'Employers',
      description: 'Need requirement capture, candidate pipeline, interview coordination and hiring workflow visibility.'
    },
    {
      title: 'Partners and agents',
      description: 'Need verification, commercial model, lead process, territory mapping and onboarding support.'
    },
    {
      title: 'Tutors and trainers',
      description: 'Need subject mapping, certification check, availability planning and trainer onboarding.'
    },
    {
      title: 'Ambassadors',
      description: 'Need contribution mapping, training, community role, content support and participation tracking.'
    },
    {
      title: 'Schools and institutions',
      description: 'Need tie-up model, student outreach, event planning and institutional engagement.'
    },
    {
      title: 'Franchisees and investors',
      description: 'Need territory, capital, operating model, centre readiness and business proposal workflow.'
    }
  ];

  dataCaptureCards: SimpleCard[] = [
    {
      title: 'Identity data',
      description: 'Name, contact, email, WhatsApp, country, city and preferred communication channel.'
    },
    {
      title: 'Persona data',
      description: 'Student, parent, jobseeker, employer, tutor, partner, ambassador, school or franchisee.'
    },
    {
      title: 'Programme data',
      description: 'Ausbildung, jobs, study abroad, German training, employer hiring, partnership or institution tie-up.'
    },
    {
      title: 'Readiness data',
      description: 'Qualification, experience, language, budget, documents, timeline and decision stage.'
    },
    {
      title: 'Commercial data',
      description: 'For partners, employers and franchisees: capability, hiring volume, territory, investment and revenue model.'
    },
    {
      title: 'Routing data',
      description: 'Lead owner, department, programme pipeline, priority, score, status and next best action.'
    }
  ];

  routingRows: TableRow[] = [
    {
      registrationType: 'Student / Parent',
      userPersona: 'B2C prospect',
      purpose: 'Programme counselling and eligibility',
      routedTo: 'Program Advisor / Career Advisor'
    },
    {
      registrationType: 'Ausbildung Candidate',
      userPersona: 'Germany pathway prospect',
      purpose: 'Sector mapping and German readiness',
      routedTo: 'Ausbildung SBU'
    },
    {
      registrationType: 'Jobseeker',
      userPersona: 'Employment prospect',
      purpose: 'Job matching and CV readiness',
      routedTo: 'Recruitment / euRecruiter Team'
    },
    {
      registrationType: 'Employer',
      userPersona: 'B2B hiring client',
      purpose: 'Hiring requirement capture',
      routedTo: 'Employer Partnerships Team'
    },
    {
      registrationType: 'Tutor / Trainer',
      userPersona: 'Faculty candidate',
      purpose: 'Trainer onboarding',
      routedTo: 'Training Department'
    },
    {
      registrationType: 'Agent / Partner',
      userPersona: 'Channel partner',
      purpose: 'Partner verification and onboarding',
      routedTo: 'Partnership Team'
    }
  ];

  onboardingCards: SimpleCard[] = [
    {
      title: 'Profile validation',
      description: 'Check whether the submitted identity, contact and persona information is complete and valid.'
    },
    {
      title: 'Document collection',
      description: 'Request relevant documents such as CV, certificates, company profile, trainer proof or institution details.'
    },
    {
      title: 'Internal approval',
      description: 'Route stakeholder applications for approval by programme owner, partner manager or department head.'
    },
    {
      title: 'Welcome workflow',
      description: 'Send confirmation, next steps, onboarding guide, meeting link, checklist or training access.'
    },
    {
      title: 'Status tracking',
      description: 'Track registration status from new, contacted, qualified, verified, onboarded and active.'
    },
    {
      title: 'Activation',
      description: 'Move the stakeholder into active programme, hiring, partner, trainer, ambassador or institution pipeline.'
    }
  ];

  governanceCards: SimpleCard[] = [
    {
      title: 'Duplicate control',
      description: 'Prevent multiple records for the same mobile, email, employer, partner or student profile.'
    },
    {
      title: 'Consent management',
      description: 'Capture consent for communication, data processing, WhatsApp messages and document handling.'
    },
    {
      title: 'Role-based access',
      description: 'Restrict who can view student, employer, partner, franchise and trainer information.'
    },
    {
      title: 'Audit trail',
      description: 'Track record creation, edits, approvals, ownership changes and onboarding completion.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Should all users use the same registration form?',
      answer: 'No. Use a common registration hub but show conditional fields based on user type and purpose.'
    },
    {
      question: 'What happens after registration?',
      answer: 'The record should be routed to the correct CRM owner and trigger a relevant next action such as call, meeting, document upload or onboarding.'
    },
    {
      question: 'Can employers and partners register from the same page?',
      answer: 'Yes. The page can support multiple stakeholder registration types with different fields and routing rules.'
    },
    {
      question: 'Why is routing important?',
      answer: 'Routing ensures students go to advisors, employers go to B2B teams, tutors go to training teams and partners go to partnership managers.'
    }
  ];
}