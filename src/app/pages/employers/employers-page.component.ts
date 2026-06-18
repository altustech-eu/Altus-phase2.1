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

interface PlatformCard {
  title: string;
  tag: string;
  description: string;
  features: string[];
}

interface StepCard {
  number: string;
  title: string;
  description: string;
}

interface IndustryCard {
  title: string;
  demand: string;
  description: string;
  roles: string[];
}

interface TableRow {
  function: string;
  manual: string;
  employerHub: string;
  outcome: string;
}

interface TestimonialCard {
  title: string;
  tag: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-employers-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Employer Hiring Platform
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Hire international talent with structured screening, training readiness and employer workflows
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              A hiring and Ausbildung employer partnership page for companies that need screened,
              trained, documented and relocation-ready candidates across Germany, Europe and global workforce markets.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#employer-form" class="btn-primary">
                Post Hiring Requirement
              </a>

              <a href="#platform" class="btn-secondary">
                View Hiring System
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/employer.webp"
                alt="Employer hiring platform"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Workforce intelligence
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Move from CV collection to verified candidate readiness.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Screening, language readiness, interview coordination, documentation and onboarding in one operating model.
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

      <!-- 03 Employer Pain Points -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Employer pain points
            </p>

            <h2 class="section-title">
              Too many applicants, too little readiness, and too much manual coordination.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of painPoints">
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

      <!-- 04 Platform Modules -->
      <section id="platform" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Employer platform
            </p>

            <h2 class="section-title">
              One employer hub for international hiring, Ausbildung pipelines and workforce readiness.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
              A structured workforce partnership model for sourcing, screening, interviews,
              documentation, onboarding and employer-side visibility.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="platform-card" *ngFor="let module of platformModules">
              <p class="inline-flex bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                {{ module.tag }}
              </p>

              <h3 class="mt-5 text-[26px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ module.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ module.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Included capability
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let feature of module.features">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 How It Works -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                How it works
              </p>

              <h2 class="section-title">
                From hiring requirement to selected candidate.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              A clear workflow for employers, recruiters and hiring teams to reduce manual screening
              and improve candidate readiness before interview.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let step of steps">
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

      <!-- 06 Industry Use Cases -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[840px]">
            <p class="section-eyebrow text-blue-300">
              Industry use cases
            </p>

            <h2 class="section-title text-white">
              Employer pipelines for high-demand sectors.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-300">
              Build employer-specific candidate pools for Ausbildung, skilled jobs, healthcare,
              hospitality, logistics, retail and technical workforce demand.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article class="dark-card" *ngFor="let industry of industries">
              <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                {{ industry.demand }}
              </p>

              <h3 class="mt-4 text-[24px] font-normal tracking-[-0.04em] text-white">
                {{ industry.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ industry.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  class="border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-slate-200"
                  *ngFor="let role of industry.roles"
                >
                  {{ role }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Candidate Readiness Model -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              Candidate readiness
            </p>

            <h2 class="section-title">
              Employers need readiness, not only resumes.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              International hiring needs documentation, language, interview discipline,
              relocation clarity and cultural preparation before employer commitment.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
            <article class="medium-card" *ngFor="let item of readinessCards">
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

      <!-- 08 Automation and Integrations -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Automation and integrations
            </p>

            <h2 class="section-title">
              Connect employer requirements with CRM, ATS, candidate pools and reporting.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              The employer operating model can support CRM, ATS, forms, candidate scoring,
              workflow automation, interviewer notes, document tracking and BI dashboards.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card bg-white" *ngFor="let item of integrationCards">
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

      <!-- 09 Comparison Table -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Operating difference
              </p>

              <h2 class="section-title">
                Manual hiring versus employer hub.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this comparison to explain the value of structured hiring operations to employers.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[960px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Function</th>
                  <th class="table-head">Manual Hiring</th>
                  <th class="table-head">Employer Hub</th>
                  <th class="table-head">Outcome</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of comparisonRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.function }}</td>
                  <td class="table-cell">{{ row.manual }}</td>
                  <td class="table-cell">{{ row.employerHub }}</td>
                  <td class="table-cell">{{ row.outcome }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 10 Compliance and Governance -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Governance
            </p>

            <h2 class="section-title">
              Build employer trust with process, data and compliance controls.
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

      <!-- 11 Testimonials -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Employer voice
              </p>

              <h2 class="section-title">
                What hiring teams need from a workforce partner.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use these as placeholder testimonial cards until you add real employer case studies.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article class="testimonial-card" *ngFor="let story of testimonials">
              <p class="text-[42px] font-light leading-none text-[#0f62fe]">
                “
              </p>

              <p class="mt-4 text-[16px] leading-relaxed text-slate-700">
                {{ story.description }}
              </p>

              <div class="mt-8 border-t border-slate-200 pt-5">
                <p class="text-[15px] font-semibold text-slate-950">
                  {{ story.title }}
                </p>

                <p class="mt-1 text-[13px] text-slate-500">
                  {{ story.tag }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 12 FAQ -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              FAQs
            </p>

            <h2 class="section-title">
              Employer questions.
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

      <!-- 13 Employer Requirement Form -->
      <section id="employer-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start hiring
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Submit your workforce requirement.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Share your sector, role, location, language expectation, start date and hiring volume.
              Our team can map candidate pools and readiness workflows.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Company Name</label>
                <input class="form-input" type="text" placeholder="Enter company name" />
              </div>

              <div>
                <label class="form-label">Hiring Type</label>
                <select class="form-input">
                  <option>Ausbildung Candidates</option>
                  <option>Skilled Workers</option>
                  <option>Healthcare Workers</option>
                  <option>Hospitality Workers</option>
                  <option>Logistics / Warehouse Workers</option>
                  <option>IT / Technical Talent</option>
                </select>
              </div>

              <div>
                <label class="form-label">Number of Candidates</label>
                <select class="form-input">
                  <option>1-5</option>
                  <option>6-20</option>
                  <option>21-50</option>
                  <option>50+</option>
                </select>
              </div>

              <div>
                <label class="form-label">Required German Level</label>
                <select class="form-input">
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>Role Specific</option>
                </select>
              </div>

              <div>
                <label class="form-label">Target Start Timeline</label>
                <select class="form-input">
                  <option>Immediately</option>
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>Next Intake</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Submit Employer Requirement
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

    .platform-card {
      min-height: 430px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .platform-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .dark-card {
      min-height: 250px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.05);
      padding: 26px;
    }

    .testimonial-card {
      min-height: 330px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 28px;
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
export class EmployersPageComponent {
  metrics: MetricCard[] = [
    {
      value: '1',
      label: 'Employer hub',
      description: 'Central place to manage hiring requirements, candidate pools and employer communication.'
    },
    {
      value: '6+',
      label: 'Hiring sectors',
      description: 'Healthcare, hospitality, logistics, retail, IT, technical and Ausbildung pipelines.'
    },
    {
      value: 'A2-B2',
      label: 'Language mapping',
      description: 'Candidate readiness can be mapped by German language level and role expectation.'
    },
    {
      value: 'E2E',
      label: 'Hiring workflow',
      description: 'From requirement capture to screening, interviews, documentation and onboarding support.'
    }
  ];

  painPoints: SimpleCard[] = [
    {
      title: 'Unstructured CV flow',
      description: 'Employers often receive profiles without consistent screening, readiness checks or qualification mapping.'
    },
    {
      title: 'Repeated screening calls',
      description: 'Hiring teams spend time repeating basic calls about motivation, availability, language and documents.'
    },
    {
      title: 'Candidate drop-off',
      description: 'International candidates may fail due to unclear timelines, weak preparation or incomplete documentation.'
    },
    {
      title: 'Low visibility',
      description: 'Employers need clear status across sourcing, screening, interviews, selection and onboarding stages.'
    }
  ];

  platformModules: PlatformCard[] = [
    {
      title: 'AI-Assisted Candidate Screening',
      tag: 'Screening',
      description: 'Rank and shortlist candidates using structured eligibility, experience, language and readiness criteria.',
      features: [
        'CV and profile scoring',
        'Eligibility filters',
        'Language readiness mapping',
        'Candidate summary view'
      ]
    },
    {
      title: 'Interview Coordination',
      tag: 'Interviews',
      description: 'Coordinate employer interviews with prepared candidates and track results in a governed workflow.',
      features: [
        'Interview scheduling',
        'Mock interview readiness',
        'Employer feedback capture',
        'Selection status tracking'
      ]
    },
    {
      title: 'Talent Pool Management',
      tag: 'Pipeline',
      description: 'Create reusable talent pools by sector, country, language level, qualification and target intake.',
      features: [
        'Sector-wise candidate pools',
        'Ausbildung intake pipeline',
        'Skilled worker pipeline',
        'Warm candidate nurturing'
      ]
    },
    {
      title: 'ATS Workflow',
      tag: 'Operations',
      description: 'Track hiring stages from requirement to offer, documentation, visa readiness and joining.',
      features: [
        'Application stages',
        'Document checklist',
        'Hiring owner assignment',
        'Candidate progress tracking'
      ]
    },
    {
      title: 'Employer Dashboard',
      tag: 'Analytics',
      description: 'Give employers a clear view of candidate availability, readiness, interview progress and hiring outcomes.',
      features: [
        'Pipeline dashboard',
        'Readiness reports',
        'Interview conversion',
        'Hiring funnel analytics'
      ]
    },
    {
      title: 'Compliance and Documentation',
      tag: 'Governance',
      description: 'Structure the documentation process for cross-border hiring, training contracts and onboarding readiness.',
      features: [
        'Document verification',
        'Consent tracking',
        'Contract status',
        'Relocation checklist'
      ]
    }
  ];

  steps: StepCard[] = [
    {
      number: '01',
      title: 'Share requirement',
      description: 'Employer submits role, sector, location, hiring count, start timeline and language expectation.'
    },
    {
      number: '02',
      title: 'Build candidate pool',
      description: 'Career360 maps available candidates by sector, readiness, qualification and destination fit.'
    },
    {
      number: '03',
      title: 'Screen and prepare',
      description: 'Candidates are assessed for CV, language, motivation, interview readiness and documentation.'
    },
    {
      number: '04',
      title: 'Interview and select',
      description: 'Employer receives shortlisted candidates, conducts interviews and proceeds with selection.'
    }
  ];

  industries: IndustryCard[] = [
    {
      title: 'Healthcare Employers',
      demand: 'Very High Demand',
      description: 'Build pipelines for nursing, elderly care, medical assistants and allied healthcare support.',
      roles: ['Nursing', 'Elderly Care', 'Care Assistant']
    },
    {
      title: 'Hospitality and Hotels',
      demand: 'High Demand',
      description: 'Source candidates for hotel operations, restaurant service, culinary and guest experience roles.',
      roles: ['Hotel Specialist', 'Chef', 'Restaurant Service']
    },
    {
      title: 'Logistics and Warehousing',
      demand: 'High Demand',
      description: 'Prepare candidates for warehouse, supply chain, freight and operations roles.',
      roles: ['Warehouse', 'Freight', 'Logistics Clerk']
    },
    {
      title: 'Retail and Sales',
      demand: 'Stable Demand',
      description: 'Recruit customer-facing candidates for retail, wholesale, store operations and sales support.',
      roles: ['Retail Sales', 'Wholesale', 'Store Operations']
    },
    {
      title: 'IT and Software',
      demand: 'High Demand',
      description: 'Map digital candidates for software, systems, support, networks and business technology roles.',
      roles: ['Software', 'IT Systems', 'Support']
    },
    {
      title: 'Technical and Industrial',
      demand: 'High Demand',
      description: 'Build skilled technical pipelines for mechatronics, electronics, automotive and industrial roles.',
      roles: ['Mechatronics', 'Electronics', 'Mechanic']
    }
  ];

  readinessCards: SimpleCard[] = [
    {
      title: 'Language readiness',
      description: 'Map candidate German level against role expectation, interview confidence and workplace communication.'
    },
    {
      title: 'Motivation readiness',
      description: 'Assess why the candidate wants the role, destination and long-term career pathway.'
    },
    {
      title: 'Documentation readiness',
      description: 'Track passport, qualification certificates, CV, experience proof and required supporting documents.'
    },
    {
      title: 'Interview readiness',
      description: 'Prepare candidates with role-specific questions, employer expectations and communication discipline.'
    },
    {
      title: 'Relocation readiness',
      description: 'Assess timeline, finance, family support, adaptability and realistic destination expectations.'
    },
    {
      title: 'Retention readiness',
      description: 'Improve joining and retention through expectation setting, cultural orientation and support planning.'
    }
  ];

  integrationCards: SimpleCard[] = [
    {
      title: 'CRM integration',
      description: 'Connect employer leads, hiring requirements, conversations and account ownership.'
    },
    {
      title: 'ATS pipeline',
      description: 'Move candidates through screening, interview, selection, documentation and joining stages.'
    },
    {
      title: 'Forms and portals',
      description: 'Collect structured employer requirements and candidate data through governed forms.'
    },
    {
      title: 'Automation workflows',
      description: 'Trigger reminders, document requests, interview updates and status notifications.'
    },
    {
      title: 'Analytics and BI',
      description: 'Track demand, funnel conversion, candidate readiness, interview outcomes and hiring success.'
    },
    {
      title: 'Knowledge base',
      description: 'Give employers and internal teams access to FAQs, SOPs, checklists and playbooks.'
    }
  ];

  comparisonRows: TableRow[] = [
    {
      function: 'CV Screening',
      manual: 'Recruiter reviews every CV manually',
      employerHub: 'Profiles are structured and scored before review',
      outcome: 'Faster shortlisting'
    },
    {
      function: 'Interview Calls',
      manual: 'Repeated basic screening calls',
      employerHub: 'Candidate readiness summary before interview',
      outcome: 'Better employer time usage'
    },
    {
      function: 'Candidate Status',
      manual: 'Scattered spreadsheets and messages',
      employerHub: 'Single pipeline with status tracking',
      outcome: 'Clear visibility'
    },
    {
      function: 'Documentation',
      manual: 'Late document discovery',
      employerHub: 'Checklist and readiness workflow',
      outcome: 'Reduced delay'
    },
    {
      function: 'Reporting',
      manual: 'No real funnel intelligence',
      employerHub: 'Hiring analytics and conversion tracking',
      outcome: 'Better planning'
    }
  ];

  governanceCards: SimpleCard[] = [
    {
      title: 'Data ownership',
      description: 'Define who can view, edit, approve and export employer and candidate data.'
    },
    {
      title: 'Consent management',
      description: 'Track candidate consent for sharing profiles, interviews and documents with employers.'
    },
    {
      title: 'Human decision control',
      description: 'Use AI-assisted scoring as support, while final selection remains with employer and hiring teams.'
    },
    {
      title: 'Audit trail',
      description: 'Maintain status history, feedback, document movement and decision notes.'
    }
  ];

  testimonials: TestimonialCard[] = [
    {
      title: 'Healthcare Employer',
      tag: 'Germany / Care Sector',
      description: 'We need candidates who understand the role, have language readiness and arrive prepared for workplace expectations.'
    },
    {
      title: 'Hospitality Group',
      tag: 'Hotels / Restaurants',
      description: 'The biggest value is not just sourcing. It is receiving candidates who are motivated, briefed and interview-ready.'
    },
    {
      title: 'Recruitment Partner',
      tag: 'International Hiring',
      description: 'A structured pipeline helps reduce repeated calls and gives us better visibility across candidate stages.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Can employers request Ausbildung candidates?',
      answer: 'Yes. Employers can submit sector, intake, language level, location and training contract requirements.'
    },
    {
      question: 'Can Career360 screen candidates before interview?',
      answer: 'Yes. The workflow can include CV review, qualification check, language readiness, motivation assessment and interview preparation.'
    },
    {
      question: 'Can employers see candidate status?',
      answer: 'The planned employer hub can show shortlisted candidates, interview status, documents, feedback and onboarding progress.'
    },
    {
      question: 'Does the system replace recruiter judgment?',
      answer: 'No. The system structures screening and reporting. Employers and human recruiters make the final hiring decision.'
    }
  ];
}