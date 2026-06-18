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

interface FormTypeCard {
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
  touchpoint: string;
  formPurpose: string;
  dataCaptured: string;
  nextAction: string;
}

interface ThankYouCard {
  title: string;
  trigger: string;
  description: string;
  ctas: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-forms-thank-you-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Forms and Thank You Page System
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Build conversion-focused forms and next-step thank you journeys
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              Create structured forms for enquiry, eligibility, events, downloads, partner registration,
              employer requirements and programme applications — then route every user to the right
              thank you page, advisor, automation and next best action.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#form-types" class="btn-primary">
                View Form Types
              </a>

              <a href="#thank-you-flows" class="btn-secondary">
                View Thank You Flows
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/forms.webp"
                alt="Forms and thank you pages"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Conversion intelligence
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Every form must trigger the right journey.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Capture intent, qualify readiness, score the lead and push the user to the correct next action.
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

      <!-- 03 Why This System -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Why forms matter
            </p>

            <h2 class="section-title">
              Forms are not only data capture. They are journey-control points.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of systemLogic">
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

      <!-- 04 Form Types -->
      <section id="form-types" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Form architecture
            </p>

            <h2 class="section-title">
              Core forms required across the Career360 ecosystem.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
              Each form should capture the minimum required data for qualification, routing,
              segmentation, automation and next best action.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="form-card" *ngFor="let form of formTypes">
              <p class="inline-flex bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                {{ form.tag }}
              </p>

              <h3 class="mt-5 text-[26px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ form.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ form.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Key fields
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let field of form.fields">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ field }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 User Journey -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Form journey
              </p>

              <h2 class="section-title">
                From visitor intent to CRM action.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              A proper form flow should capture user intent, qualify the prospect, trigger automation
              and send the user to a relevant thank you experience.
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

      <!-- 06 Thank You Flow Cards -->
      <section id="thank-you-flows" class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[860px]">
            <p class="section-eyebrow text-blue-300">
              Thank you page logic
            </p>

            <h2 class="section-title text-white">
              The thank you page should not be a dead end.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-300">
              Each thank you page must guide the user to the next action: book appointment, join WhatsApp,
              download guide, watch video, start assessment, or complete a detailed profile.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article class="dark-card" *ngFor="let flow of thankYouFlows">
              <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                {{ flow.trigger }}
              </p>

              <h3 class="mt-4 text-[24px] font-normal tracking-[-0.04em] text-white">
                {{ flow.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ flow.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  class="border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-slate-200"
                  *ngFor="let cta of flow.ctas"
                >
                  {{ cta }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Data Capture Model -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              Data model
            </p>

            <h2 class="section-title">
              Capture data that helps sales, counselling and automation.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              Every field must have a purpose: routing, scoring, segmentation, readiness assessment,
              advisor assignment, alternative close or reporting.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
            <article class="medium-card" *ngFor="let item of dataModelCards">
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

      <!-- 08 Touchpoint Table -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Touchpoint mapping
              </p>

              <h2 class="section-title">
                Which form should appear where?
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this as a first-level operating model for website, landing pages, webinars,
              downloads, tools and stakeholder registration.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[980px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Touchpoint</th>
                  <th class="table-head">Form Purpose</th>
                  <th class="table-head">Data Captured</th>
                  <th class="table-head">Next Action</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of touchpointRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.touchpoint }}</td>
                  <td class="table-cell">{{ row.formPurpose }}</td>
                  <td class="table-cell">{{ row.dataCaptured }}</td>
                  <td class="table-cell">{{ row.nextAction }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 09 Automation and CRM -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              CRM and automation
            </p>

            <h2 class="section-title">
              Every form submission should trigger a governed workflow.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              Connect form submissions to CRM records, lead scoring, advisor assignment,
              reminders, email, WhatsApp, call queue and analytics.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of automationCards">
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

      <!-- 10 Form Governance -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Governance
            </p>

            <h2 class="section-title">
              Standardise forms before scaling campaigns.
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
              Common form and thank you page questions.
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

      <!-- 12 CTA / Demo Form -->
      <section id="demo-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Build the form system
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Start with the right lead capture and thank you journey.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Use this model to create enquiry forms, eligibility forms, event forms, download forms,
              employer forms, partner forms and programme application flows.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Form Type</label>
                <select class="form-input">
                  <option>Programme Enquiry Form</option>
                  <option>Eligibility Check Form</option>
                  <option>Event Registration Form</option>
                  <option>Download Lead Form</option>
                  <option>Employer Requirement Form</option>
                  <option>Partner Registration Form</option>
                </select>
              </div>

              <div>
                <label class="form-label">Target Programme</label>
                <select class="form-input">
                  <option>Ausbildung</option>
                  <option>Jobs</option>
                  <option>Study Abroad</option>
                  <option>German Language Training</option>
                  <option>Employer Hiring</option>
                  <option>Career Ambassador</option>
                </select>
              </div>

              <div>
                <label class="form-label">Primary Goal</label>
                <select class="form-input">
                  <option>Lead Capture</option>
                  <option>Eligibility Qualification</option>
                  <option>Appointment Booking</option>
                  <option>Download Conversion</option>
                  <option>Event Attendance</option>
                  <option>Stakeholder Onboarding</option>
                </select>
              </div>

              <div>
                <label class="form-label">Next Action</label>
                <select class="form-input">
                  <option>Book Advisor Call</option>
                  <option>Join WhatsApp Community</option>
                  <option>Download Guide</option>
                  <option>Watch Explainer Video</option>
                  <option>Complete Detailed Profile</option>
                  <option>Redirect to Payment / Registration</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Generate Form Flow
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

    .form-card {
      min-height: 430px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .form-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .dark-card {
      min-height: 250px;
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
export class FormsThankYouPageComponent {
  metrics: MetricCard[] = [
    {
      value: '12+',
      label: 'Form types',
      description: 'Forms for enquiry, eligibility, events, downloads, applications, partners and employers.'
    },
    {
      value: '1',
      label: 'CRM record',
      description: 'Every submission should create or update a structured lead, contact or stakeholder record.'
    },
    {
      value: 'NBA',
      label: 'Next best action',
      description: 'Thank you pages should route users to the most useful next step.'
    },
    {
      value: 'E2E',
      label: 'Journey control',
      description: 'Connect website intent, form data, CRM workflow, advisor action and analytics.'
    }
  ];

  systemLogic: SimpleCard[] = [
    {
      title: 'Capture intent',
      description: 'Understand whether the visitor wants Ausbildung, jobs, study abroad, German training, employer hiring or partnership.'
    },
    {
      title: 'Qualify readiness',
      description: 'Collect qualification, timeline, language level, budget, documents and destination readiness.'
    },
    {
      title: 'Route correctly',
      description: 'Send the lead to the correct advisor, programme, automation, WhatsApp group or booking journey.'
    },
    {
      title: 'Measure performance',
      description: 'Track conversion rate, form abandonment, source quality, programme interest and next action completion.'
    }
  ];

  formTypes: FormTypeCard[] = [
    {
      title: 'Programme Enquiry Form',
      tag: 'Lead capture',
      description: 'Primary form for users who want counselling or programme information.',
      fields: ['Full name', 'Mobile / WhatsApp', 'Programme interest', 'Country', 'Timeline']
    },
    {
      title: 'Eligibility Check Form',
      tag: 'Qualification',
      description: 'Structured assessment for Ausbildung, jobs, study abroad and German training readiness.',
      fields: ['Qualification', 'Age group', 'German level', 'Budget readiness', 'Preferred sector']
    },
    {
      title: 'Event Registration Form',
      tag: 'Webinar / Seminar',
      description: 'Used for webinars, seminars, demo classes, school sessions and counselling events.',
      fields: ['Event name', 'Participant type', 'Location', 'Programme interest', 'Reminder consent']
    },
    {
      title: 'Download Lead Form',
      tag: 'Resource gating',
      description: 'Captures users before brochure, checklist, calculator report or guide download.',
      fields: ['Email', 'Mobile', 'Download item', 'Persona', 'Programme interest']
    },
    {
      title: 'Employer Requirement Form',
      tag: 'B2B hiring',
      description: 'Captures employer hiring needs for Ausbildung, jobs and workforce pipelines.',
      fields: ['Company', 'Hiring type', 'Role count', 'German level', 'Start timeline']
    },
    {
      title: 'Partner Registration Form',
      tag: 'Ecosystem',
      description: 'Used for agents, tutors, ambassadors, schools, franchisees and institutional partners.',
      fields: ['Partner type', 'Location', 'Capability', 'Experience', 'Commercial interest']
    }
  ];

  journeySteps: JourneyStep[] = [
    {
      number: '01',
      title: 'Visitor intent',
      description: 'User arrives from website, ad, webinar, social media, WhatsApp, tool or landing page.'
    },
    {
      number: '02',
      title: 'Form submission',
      description: 'User submits structured data based on programme, persona and conversion goal.'
    },
    {
      number: '03',
      title: 'CRM routing',
      description: 'Record is created, scored, assigned and pushed into the correct follow-up workflow.'
    },
    {
      number: '04',
      title: 'Thank you action',
      description: 'User receives a relevant next step instead of a generic confirmation message.'
    }
  ];

  thankYouFlows: ThankYouCard[] = [
    {
      title: 'Eligibility Submitted',
      trigger: 'Ausbildung / Jobs',
      description: 'Guide the candidate to book advisor call, upload documents or start German level assessment.',
      ctas: ['Book Advisor', 'Upload Documents', 'Take German Test']
    },
    {
      title: 'Webinar Registered',
      trigger: 'Event',
      description: 'Confirm registration and push calendar reminder, WhatsApp group and pre-event resources.',
      ctas: ['Add Calendar', 'Join WhatsApp', 'Watch Intro Video']
    },
    {
      title: 'Brochure Downloaded',
      trigger: 'Resource',
      description: 'Provide the download and recommend calculator, comparison page or counselling slot.',
      ctas: ['Download PDF', 'Use Calculator', 'Book Call']
    },
    {
      title: 'Employer Requirement Submitted',
      trigger: 'B2B',
      description: 'Confirm requirement and explain next steps for requirement validation and candidate pool mapping.',
      ctas: ['Schedule B2B Call', 'View Hiring Process', 'Upload JD']
    },
    {
      title: 'Partner Registered',
      trigger: 'Partner',
      description: 'Confirm interest and route the partner to verification, onboarding checklist and partner deck.',
      ctas: ['View Checklist', 'Schedule Meeting', 'Download Deck']
    },
    {
      title: 'Application Started',
      trigger: 'Applicant',
      description: 'Move user to detailed profile, document checklist and application tracker.',
      ctas: ['Complete Profile', 'View Checklist', 'Track Application']
    }
  ];

  dataModelCards: SimpleCard[] = [
    {
      title: 'Identity data',
      description: 'Name, email, mobile, WhatsApp, location, nationality and preferred communication channel.'
    },
    {
      title: 'Persona data',
      description: 'Student, parent, jobseeker, employer, partner, tutor, ambassador or institutional stakeholder.'
    },
    {
      title: 'Programme data',
      description: 'Ausbildung, jobs, study abroad, German training, employer hiring, ambassador or registration flow.'
    },
    {
      title: 'Readiness data',
      description: 'Qualification, language level, budget, documents, timeline, seriousness and destination preference.'
    },
    {
      title: 'Behaviour data',
      description: 'Source, page visited, tool used, webinar attended, downloaded asset and CTA clicked.'
    },
    {
      title: 'Routing data',
      description: 'Lead owner, advisor team, programme pipeline, priority, score and next best action.'
    }
  ];

  touchpointRows: TableRow[] = [
    {
      touchpoint: 'Home Page',
      formPurpose: 'General enquiry',
      dataCaptured: 'Persona, programme interest, country, mobile',
      nextAction: 'Advisor callback or programme routing'
    },
    {
      touchpoint: 'Ausbildung Page',
      formPurpose: 'Eligibility check',
      dataCaptured: 'Qualification, German level, sector, timeline',
      nextAction: 'Sector recommendation and counselling'
    },
    {
      touchpoint: 'Webinar Page',
      formPurpose: 'Event registration',
      dataCaptured: 'Name, contact, event, reminder consent',
      nextAction: 'Calendar, WhatsApp group and reminder'
    },
    {
      touchpoint: 'Calculator / Tool',
      formPurpose: 'Report unlock',
      dataCaptured: 'Inputs, result, persona, contact',
      nextAction: 'Personalised report and advisor follow-up'
    },
    {
      touchpoint: 'Employer Page',
      formPurpose: 'Hiring requirement',
      dataCaptured: 'Company, role, volume, language, timeline',
      nextAction: 'B2B qualification call'
    }
  ];

  automationCards: SimpleCard[] = [
    {
      title: 'Lead scoring',
      description: 'Score leads by programme fit, urgency, budget, language readiness and engagement behaviour.'
    },
    {
      title: 'Advisor assignment',
      description: 'Assign leads to programme advisor, career advisor, language team or B2B team.'
    },
    {
      title: 'WhatsApp workflow',
      description: 'Send relevant community links, reminders, documents and counselling booking prompts.'
    },
    {
      title: 'Email workflow',
      description: 'Send confirmation, resources, next steps, event reminders and nurturing sequences.'
    },
    {
      title: 'Task creation',
      description: 'Create follow-up tasks for telecaller, counsellor, document team or programme owner.'
    },
    {
      title: 'Analytics tracking',
      description: 'Track source, conversion, abandonment, CTA performance and programme demand.'
    }
  ];

  governanceCards: SimpleCard[] = [
    {
      title: 'Field standardisation',
      description: 'Use common field names across forms to avoid duplicate data and CRM confusion.'
    },
    {
      title: 'Consent capture',
      description: 'Capture consent for communication, WhatsApp, email, data processing and document handling.'
    },
    {
      title: 'Validation rules',
      description: 'Validate mobile, email, required fields, programme logic and conditional questions.'
    },
    {
      title: 'Data ownership',
      description: 'Define who owns form data, who edits records and who approves changes.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Should every page have the same enquiry form?',
      answer: 'No. Each page should have a form designed for that user intent. Ausbildung, employer hiring, webinar and download forms need different fields.'
    },
    {
      question: 'What should happen after form submission?',
      answer: 'The user should reach a relevant thank you page with a useful next step, while CRM automation creates routing, scoring and follow-up tasks.'
    },
    {
      question: 'How many fields should a form have?',
      answer: 'Use fewer fields for early-stage leads and more fields for eligibility, application, employer requirement or partner onboarding.'
    },
    {
      question: 'Why are thank you pages important?',
      answer: 'They improve conversion by giving the user a clear next action instead of ending the journey after submission.'
    }
  ];
}