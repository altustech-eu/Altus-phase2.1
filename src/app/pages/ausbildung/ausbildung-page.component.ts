import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SectorCard {
  title: string;
  code: string;
  description: string;
  occupations: string[];
  duration: string;
  germanLevel: string;
  demand: string;
  salary: string;
  image: string;
}

interface SimpleCard {
  title: string;
  description: string;
}

interface MetricCard {
  value: string;
  label: string;
  description: string;
}

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ausbildung-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Ausbildung sectors
            </p>

            <h1 class="mt-5 max-w-[900px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Choose the right Ausbildung sector in Germany
            </h1>

            <p class="mt-7 max-w-[760px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              Compare Ausbildung sectors by demand, German language readiness, training duration,
              occupation type, salary potential, personality fit and long-term career outcome.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#sectors" class="btn-primary">
                Explore sectors
              </a>

              <a href="#lead-form" class="btn-secondary">
                Check eligibility
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[460px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/Aus8.webp"
                alt="Ausbildung Germany"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Sector intelligence
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Match the sector before applying to employers.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  A good Ausbildung decision starts with sector fit, not only availability.
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

      <!-- 03 Why Ausbildung -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <p class="section-eyebrow">
                Why Ausbildung
              </p>

              <h2 class="section-title">
                A practical route for students who want skills, income and Germany career mobility.
              </h2>
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
              <article class="medium-card" *ngFor="let item of benefits">
                <h3 class="card-title">
                  {{ item.title }}
                </h3>

                <p class="card-text">
                  {{ item.description }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- 04 Selection Framework -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Sector selection framework
            </p>

            <h2 class="section-title">
              Ausbildung is not one program. It is a sector-based career decision.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let item of selectionLogic">
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

      <!-- 05 Filter Visual -->
      <section id="sectors" class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Browse sectors
              </p>

              <h2 class="section-title">
                Find your Ausbildung career field
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this sector grid as the foundation for future filters by German level,
              demand, salary, qualification, work style and long-term outcome.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-0 border border-slate-300 bg-white md:grid-cols-4">
            <input
              class="filter-control md:col-span-2"
              type="text"
              placeholder="Search sector, occupation or career outcome"
            />

            <select class="filter-control">
              <option>All German Levels</option>
              <option>A1-A2 Preparation</option>
              <option>B1 Preferred</option>
              <option>B2 Advantage</option>
            </select>

            <select class="filter-control">
              <option>All Demand Levels</option>
              <option>Very High Demand</option>
              <option>High Demand</option>
              <option>Stable Demand</option>
            </select>
          </div>
        </div>
      </section>

      <!-- 06 Medium Sector Cards -->
      <section class="border-b border-slate-200 bg-[#f4f4f4] px-6 pb-16 lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article class="sector-card group" *ngFor="let sector of sectors">
            <div class="relative h-[190px] overflow-hidden bg-slate-200">
              <img
                [src]="sector.image"
                [alt]="sector.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div class="absolute left-4 top-4 bg-[#0f62fe] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {{ sector.demand }}
              </div>
            </div>

            <div class="p-5">
              <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f62fe]">
                {{ sector.code }}
              </p>

              <h3 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ sector.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ sector.description }}
              </p>

              <div class="mt-5 grid grid-cols-3 border border-slate-200">
                <div class="border-r border-slate-200 p-3">
                  <p class="mini-label">Duration</p>
                  <p class="mini-value">{{ sector.duration }}</p>
                </div>

                <div class="border-r border-slate-200 p-3">
                  <p class="mini-label">German</p>
                  <p class="mini-value">{{ sector.germanLevel }}</p>
                </div>

                <div class="p-3">
                  <p class="mini-label">Salary</p>
                  <p class="mini-value">{{ sector.salary }}</p>
                </div>
              </div>

              <div class="mt-5">
                <p class="mini-label">
                  Sample occupations
                </p>

                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    class="border border-slate-300 bg-white px-3 py-1 text-[12px] font-medium text-slate-700"
                    *ngFor="let occupation of sector.occupations"
                  >
                    {{ occupation }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- 07 Candidate Fit Matrix -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div class="lg:col-span-4">
              <p class="section-eyebrow">
                Candidate fit matrix
              </p>

              <h2 class="section-title">
                Choose based on fit, not only popularity.
              </h2>

              <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
                The right sector must connect with personality, working style, language readiness,
                academic profile and family expectations.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8">
              <article class="medium-card" *ngFor="let item of fitMatrix">
                <h3 class="card-title">
                  {{ item.title }}
                </h3>

                <p class="card-text">
                  {{ item.description }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- 08 Journey Timeline -->
      <section class="section-padding bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[820px]">
            <p class="section-eyebrow text-blue-300">
              Candidate journey
            </p>

            <h2 class="section-title text-white">
              From sector discovery to Germany onboarding.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="border border-white/10 bg-white/5 p-6" *ngFor="let step of timeline">
              <p class="text-[28px] font-normal tracking-[-0.04em] text-blue-300">
                {{ step.number }}
              </p>

              <h3 class="mt-5 text-[20px] font-normal tracking-[-0.035em] text-white">
                {{ step.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ step.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 09 Counselling Modules -->
      <section class="section-padding bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Counselling modules
            </p>

            <h2 class="section-title">
              What the advisor should explain before sector selection.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article class="medium-card bg-white" *ngFor="let item of counsellingModules">
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

      <!-- 10 Comparison Table -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Sector comparison
              </p>

              <h2 class="section-title">
                Quick decision view
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this as a first-level comparison before deep counselling and eligibility assessment.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[900px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Sector</th>
                  <th class="table-head">Best fit</th>
                  <th class="table-head">German</th>
                  <th class="table-head">Demand</th>
                  <th class="table-head">Career nature</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of comparisonRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.title }}</td>
                  <td class="table-cell">{{ row.fit }}</td>
                  <td class="table-cell">{{ row.german }}</td>
                  <td class="table-cell">{{ row.demand }}</td>
                  <td class="table-cell">{{ row.nature }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 11 FAQ -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              FAQs
            </p>

            <h2 class="section-title">
              Common sector questions.
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

      <!-- 12 Lead CTA -->
      <section id="lead-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Eligibility next step
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Find which Ausbildung sector fits your profile.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              The right recommendation should consider qualification, German level, budget,
              work personality, physical readiness, parent expectation and long-term Germany goal.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Full Name</label>
                <input class="form-input" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label class="form-label">Current Qualification</label>
                <select class="form-input">
                  <option>12th Completed</option>
                  <option>Diploma</option>
                  <option>UG Completed</option>
                  <option>Working Professional</option>
                </select>
              </div>

              <div>
                <label class="form-label">German Level</label>
                <select class="form-input">
                  <option>No German</option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                </select>
              </div>

              <div>
                <label class="form-label">Preferred Sector</label>
                <select class="form-input">
                  <option>Not Sure</option>
                  <option>Healthcare / Nursing</option>
                  <option>IT & Software</option>
                  <option>Engineering / Technical</option>
                  <option>Hospitality / Tourism</option>
                  <option>Logistics / Transportation</option>
                  <option>Sales / Retail</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Request Sector Recommendation
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
      min-height: 210px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .medium-card:hover {
      background: #f8fafc;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.06);
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

    .filter-control {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 17px;
      font-size: 14px;
      color: #0f172a;
      outline: none;
    }

    @media (min-width: 768px) {
      .filter-control {
        border-bottom: 0;
        border-right: 1px solid #cbd5e1;
      }
    }

    .filter-control:focus {
      box-shadow: inset 0 0 0 2px #0f62fe;
    }

    .sector-card {
      min-height: 520px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .sector-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .mini-label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #64748b;
    }

    .mini-value {
      margin-top: 5px;
      font-size: 13px;
      font-weight: 600;
      color: #020617;
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
export class AusbildungPageComponent {
  metrics: MetricCard[] = [
    {
      value: '300+',
      label: 'Occupations',
      description: 'Germany offers hundreds of vocational occupations across multiple sectors.'
    },
    {
      value: '6',
      label: 'Priority sectors',
      description: 'Healthcare, IT, technical, hospitality, logistics and retail are key starting points.'
    },
    {
      value: '2-3.5 yrs',
      label: 'Training duration',
      description: 'Most Ausbildung programs run between two and three and a half years.'
    },
    {
      value: 'A2-B1+',
      label: 'German readiness',
      description: 'German confidence is important for interview, training and workplace integration.'
    }
  ];

  benefits: SimpleCard[] = [
    {
      title: 'Earn while learning',
      description: 'Ausbildung combines vocational school with employer-based training and monthly training allowance.'
    },
    {
      title: 'Career-focused pathway',
      description: 'A practical alternative for students who want skill-based career entry instead of only academic study.'
    },
    {
      title: 'Workplace exposure',
      description: 'Students learn directly inside real companies, hospitals, hotels, logistics units and technical workplaces.'
    },
    {
      title: 'Long-term mobility',
      description: 'The right sector can support employability, career progression and Germany settlement planning.'
    }
  ];

  selectionLogic: SimpleCard[] = [
    {
      title: 'Qualification fit',
      description: 'Some sectors suit science, technical, commerce, service, or communication-oriented backgrounds.'
    },
    {
      title: 'Language readiness',
      description: 'Customer-facing and care-based sectors normally require stronger spoken German confidence.'
    },
    {
      title: 'Work personality',
      description: 'Healthcare, hospitality, IT, logistics and retail require different behavioural strengths.'
    },
    {
      title: 'Outcome planning',
      description: 'Sector selection should connect to income goals, long-term employability and future Germany plans.'
    }
  ];

  sectors: SectorCard[] = [
    {
      title: 'Healthcare & Nursing',
      code: 'Sector 01',
      description: 'For candidates interested in care, discipline, patient support and long-term healthcare careers.',
      occupations: ['Nursing', 'Elderly Care', 'Medical Assistant'],
      duration: '3 yrs',
      germanLevel: 'B1/B2',
      demand: 'Very High',
      salary: '€900+',
      image: '/assets/Aus8.webp'
    },
    {
      title: 'IT & Software',
      code: 'Sector 02',
      description: 'For digital career aspirants interested in programming, systems, networks and business technology.',
      occupations: ['Software', 'IT Systems', 'Digital Business'],
      duration: '3 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€950+',
      image: '/assets/Aus2.webp'
    },
    {
      title: 'Engineering & Technical',
      code: 'Sector 03',
      description: 'For candidates with technical aptitude, mechanical interest and practical problem-solving skills.',
      occupations: ['Mechatronics', 'Electronics', 'Industrial Mechanic'],
      duration: '3-3.5 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€950+',
      image: '/assets/Aus6.webp'
    },
    {
      title: 'Hospitality & Tourism',
      code: 'Sector 04',
      description: 'For candidates interested in hotels, restaurants, customer service and guest experience.',
      occupations: ['Hotel Specialist', 'Chef', 'Restaurant Service'],
      duration: '3 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€850+',
      image: '/assets/Aus3.webp'
    },
    {
      title: 'Logistics & Transportation',
      code: 'Sector 05',
      description: 'For candidates interested in supply chain, warehouse operations and transport coordination.',
      occupations: ['Warehouse', 'Freight', 'Logistics Clerk'],
      duration: '2-3 yrs',
      germanLevel: 'A2/B1',
      demand: 'High',
      salary: '€850+',
      image: '/assets/Aus4.webp'
    },
    {
      title: 'Sales & Retail',
      code: 'Sector 06',
      description: 'For candidates with customer handling ability, communication skills and commercial interest.',
      occupations: ['Retail Sales', 'Wholesale', 'Store Operations'],
      duration: '2-3 yrs',
      germanLevel: 'B1',
      demand: 'Stable',
      salary: '€850+',
      image: '/assets/Aus5.webp'
    }
  ];

  fitMatrix: SimpleCard[] = [
    {
      title: 'For service-minded candidates',
      description: 'Healthcare, hospitality and retail suit students who can communicate, serve, adapt and handle people.'
    },
    {
      title: 'For technical candidates',
      description: 'IT, engineering and mechatronics fit students who enjoy systems, machines, tools and structured problem solving.'
    },
    {
      title: 'For physically active candidates',
      description: 'Logistics, hospitality and technical roles may require stamina, movement and workplace discipline.'
    },
    {
      title: 'For long-term stability',
      description: 'Healthcare and technical sectors can create strong employability when language and skill readiness are high.'
    }
  ];

  timeline: TimelineStep[] = [
    {
      number: '01',
      title: 'Profile assessment',
      description: 'Review qualification, age, German level, interests, budget and family expectation.'
    },
    {
      number: '02',
      title: 'Sector recommendation',
      description: 'Map candidate profile to suitable Ausbildung sectors and shortlist realistic options.'
    },
    {
      number: '03',
      title: 'German preparation',
      description: 'Build A1, A2 and B1 readiness with speaking, grammar, exam and interview practice.'
    },
    {
      number: '04',
      title: 'Employer readiness',
      description: 'Prepare CV, motivation letter, interview answers and document file for applications.'
    }
  ];

  counsellingModules: SimpleCard[] = [
    {
      title: 'Parent counselling',
      description: 'Explain cost, timeline, language pressure, training model, risk and realistic expectations.'
    },
    {
      title: 'Career pathway mapping',
      description: 'Connect the selected sector with future job roles, income potential and long-term mobility.'
    },
    {
      title: 'Language readiness planning',
      description: 'Define the required A1-A2-B1 training timeline and speaking confidence targets.'
    },
    {
      title: 'Interview preparation',
      description: 'Prepare sector-specific questions, German self-introduction and employer communication.'
    },
    {
      title: 'Documentation planning',
      description: 'Prepare passport, certificates, transcripts, CV, motivation letter and supporting documents.'
    },
    {
      title: 'Alternative close',
      description: 'If one sector is unsuitable, guide the candidate to a better-fit Ausbildung, study or job pathway.'
    }
  ];

  comparisonRows = [
    {
      title: 'Healthcare',
      fit: 'Service mindset, discipline, empathy',
      german: 'B1/B2',
      demand: 'Very High',
      nature: 'Care-based, regulated, people-facing'
    },
    {
      title: 'IT',
      fit: 'Digital interest, logic, problem solving',
      german: 'B1',
      demand: 'High',
      nature: 'Technical, system-oriented'
    },
    {
      title: 'Hospitality',
      fit: 'Communication, energy, customer service',
      german: 'B1',
      demand: 'High',
      nature: 'Guest-facing, service operations'
    },
    {
      title: 'Logistics',
      fit: 'Process discipline, physical readiness',
      german: 'A2/B1',
      demand: 'High',
      nature: 'Operations, warehouse, transport'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Which Ausbildung sector is best?',
      answer: 'The best sector depends on qualification, German level, personality, physical readiness, work preference and long-term career goal.'
    },
    {
      question: 'Can I change sector later?',
      answer: 'It is better to choose carefully before application. Changing direction later can affect time, language preparation and employer matching.'
    },
    {
      question: 'Is healthcare always the best option?',
      answer: 'Healthcare has strong demand, but it is suitable only for candidates who match the care environment, communication needs and work expectations.'
    },
    {
      question: 'Do all sectors require B1 German?',
      answer: 'Many sectors prefer B1 readiness. Care and customer-facing sectors may need stronger spoken German confidence.'
    }
  ];
}