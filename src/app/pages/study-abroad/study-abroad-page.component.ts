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

interface CountryCard {
  country: string;
  region: string;
  image: string;
  description: string;
  highlights: string[];
}

interface InstitutionCard {
  name: string;
  country: string;
  city: string;
  type: string;
  programs: string[];
  tuition: string;
  intake: string;
  image: string;
}

interface PathwayCard {
  title: string;
  tag: string;
  description: string;
  features: string[];
}

interface TableRow {
  country: string;
  bestFor: string;
  language: string;
  costLevel: string;
  workOption: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-study-abroad-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Study Abroad Platform
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Choose the right country, university and career pathway
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              Explore country-wise universities, colleges, programmes, tuition levels, intakes,
              language requirements, scholarship options and post-study career outcomes.
            </p>

            <div class="mt-10 grid grid-cols-1 border border-slate-300 bg-white md:grid-cols-4">
              <input
                class="search-control md:col-span-2"
                type="text"
                placeholder="Search country, university, course or city"
              />

              <select class="search-control">
                <option>All Countries</option>
                <option>Germany</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Georgia</option>
                <option>Italy</option>
              </select>

              <button class="bg-[#0f62fe] px-6 py-4 text-[14px] font-semibold text-white">
                Search
              </button>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#countries" class="btn-primary">
                Browse Countries
              </a>

              <a href="#institutions" class="btn-secondary">
                View Universities
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Study abroad university campus"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  University intelligence
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Do not select only a university. Select the full outcome.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Country, course, cost, visa, employability and post-study work must be mapped together.
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

      <!-- 03 Why Study Abroad -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Why study abroad
            </p>

            <h2 class="section-title">
              Study abroad is a career investment, not only an admission decision.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of valueCards">
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

      <!-- 04 Country Cards -->
      <section id="countries" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Country-wise options
              </p>

              <h2 class="section-title">
                Explore study destinations by outcome.
              </h2>
            </div>

            <p class="max-w-[580px] text-[15px] leading-relaxed text-slate-600">
              Each destination has different tuition levels, visa rules, employability outcomes,
              part-time work options and post-study career pathways.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="country-card group" *ngFor="let country of countries">
              <div class="relative h-[220px] overflow-hidden bg-slate-200">
                <img
                  [src]="country.image"
                  [alt]="country.country"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div class="absolute left-4 top-4 bg-[#0f62fe] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {{ country.region }}
                </div>
              </div>

              <div class="p-6">
                <h3 class="text-[28px] font-normal tracking-[-0.045em] text-slate-950">
                  {{ country.country }}
                </h3>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  {{ country.description }}
                </p>

                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    class="border border-slate-300 bg-white px-3 py-1 text-[12px] text-slate-700"
                    *ngFor="let item of country.highlights"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 Pathway Cards -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Study pathways
            </p>

            <h2 class="section-title">
              Choose the right academic and career route.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="pathway-card" *ngFor="let pathway of pathways">
              <p class="inline-flex bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                {{ pathway.tag }}
              </p>

              <h3 class="mt-5 text-[27px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ pathway.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ pathway.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">Included planning</p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let feature of pathway.features">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 06 University / College List -->
      <section id="institutions" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                University and college list
              </p>

              <h2 class="section-title">
                Country-wise institution discovery.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Replace these sample institutions with your University MDM data later:
              accreditation, ranking, programmes, tuition, intake, scholarship and partner status.
            </p>
          </div>

          <div class="mb-8 grid grid-cols-1 border border-slate-300 bg-white md:grid-cols-4">
            <input class="search-control md:col-span-2" type="text" placeholder="Search university or college" />

            <select class="search-control">
              <option>All Countries</option>
              <option>Germany</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Georgia</option>
              <option>Italy</option>
            </select>

            <select class="search-control">
              <option>All Programmes</option>
              <option>Medicine</option>
              <option>Engineering</option>
              <option>Business</option>
              <option>IT</option>
              <option>Healthcare</option>
            </select>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="institution-card group" *ngFor="let item of institutions">
              <div class="relative h-[190px] overflow-hidden bg-slate-200">
                <img
                  [src]="item.image"
                  [alt]="item.name"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div class="absolute left-4 top-4 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                  {{ item.country }}
                </div>
              </div>

              <div class="p-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f62fe]">
                  {{ item.type }} · {{ item.city }}
                </p>

                <h3 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  {{ item.name }}
                </h3>

                <div class="mt-5 grid grid-cols-2 border border-slate-200">
                  <div class="border-r border-slate-200 p-3">
                    <p class="mini-label">Tuition</p>
                    <p class="mini-value">{{ item.tuition }}</p>
                  </div>

                  <div class="p-3">
                    <p class="mini-label">Intake</p>
                    <p class="mini-value">{{ item.intake }}</p>
                  </div>
                </div>

                <div class="mt-5">
                  <p class="mini-label">Popular programmes</p>

                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      class="border border-slate-300 bg-white px-3 py-1 text-[12px] text-slate-700"
                      *ngFor="let program of item.programs"
                    >
                      {{ program }}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Country Comparison -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Country comparison
              </p>

              <h2 class="section-title">
                Compare destinations before applying.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this table for counselling, country selection and parent discussions.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[980px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Country</th>
                  <th class="table-head">Best For</th>
                  <th class="table-head">Language</th>
                  <th class="table-head">Cost Level</th>
                  <th class="table-head">Work Option</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of countryRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.country }}</td>
                  <td class="table-cell">{{ row.bestFor }}</td>
                  <td class="table-cell">{{ row.language }}</td>
                  <td class="table-cell">{{ row.costLevel }}</td>
                  <td class="table-cell">{{ row.workOption }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 08 Student Decision Framework -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow text-blue-300">
              Decision framework
            </p>

            <h2 class="section-title text-white">
              Students need clarity before university shortlisting.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-300">
              A good study abroad decision must balance academic fit, budget, visa, employability,
              post-study work, parent expectations and alternative pathways.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="dark-card" *ngFor="let item of decisionCards">
              <h3 class="text-[22px] font-normal tracking-[-0.035em] text-white">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 09 Application Journey -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[840px]">
            <p class="section-eyebrow">
              Application journey
            </p>

            <h2 class="section-title">
              From profile assessment to university admission.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let step of journeySteps">
              <p class="text-[30px] font-normal tracking-[-0.04em] text-[#0f62fe]">
                {{ step.title }}
              </p>

              <h3 class="mt-5 text-[20px] font-normal tracking-[-0.035em] text-slate-950">
                {{ step.description }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ step.value }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 10 FAQ -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              FAQs
            </p>

            <h2 class="section-title">
              Common study abroad questions.
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

      <!-- 11 CTA Form -->
      <section id="study-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start study abroad planning
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Find the right country, university and programme.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Share your qualification, preferred country, budget and study goal. Our advisor can
              map suitable universities, colleges, intakes and next steps.
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
                  <option>PG Completed</option>
                  <option>Working Professional</option>
                </select>
              </div>

              <div>
                <label class="form-label">Preferred Country</label>
                <select class="form-input">
                  <option>Germany</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Georgia</option>
                  <option>Italy</option>
                  <option>Not Sure</option>
                </select>
              </div>

              <div>
                <label class="form-label">Field of Study</label>
                <select class="form-input">
                  <option>Medicine / Healthcare</option>
                  <option>Engineering</option>
                  <option>Business Management</option>
                  <option>IT / Computer Science</option>
                  <option>Hospitality</option>
                  <option>Not Sure</option>
                </select>
              </div>

              <div>
                <label class="form-label">Budget Readiness</label>
                <select class="form-input">
                  <option>Need Low-Cost Options</option>
                  <option>Moderate Budget</option>
                  <option>Premium University Options</option>
                  <option>Need Scholarship / Loan</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Request University Shortlist
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

    .search-control {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 16px;
      font-size: 14px;
      color: #0f172a;
      outline: none;
    }

    @media (min-width: 768px) {
      .search-control {
        border-bottom: 0;
        border-right: 1px solid #cbd5e1;
      }
    }

    .search-control:focus {
      box-shadow: inset 0 0 0 2px #0f62fe;
    }

    .metric-card {
      min-height: 190px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 24px;
    }

    .medium-card,
    .country-card,
    .institution-card,
    .pathway-card {
      border: 1px solid #cbd5e1;
      background: #ffffff;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .medium-card {
      min-height: 220px;
      padding: 26px;
    }

    .pathway-card {
      min-height: 430px;
      padding: 26px;
    }

    .medium-card:hover,
    .country-card:hover,
    .institution-card:hover,
    .pathway-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .dark-card {
      min-height: 230px;
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

    .mini-value {
      margin-top: 6px;
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
export class StudyAbroadPageComponent {
  metrics: MetricCard[] = [
    {
      value: '6+',
      label: 'Destination countries',
      description: 'Germany, UK, Canada, Australia, Georgia, Italy and other study routes.'
    },
    {
      value: '50+',
      label: 'Institutions',
      description: 'University and college options can be managed through your MDM later.'
    },
    {
      value: 'UG-PG',
      label: 'Study levels',
      description: 'UG, PG, medicine, diploma, pathway and professional programmes.'
    },
    {
      value: 'E2E',
      label: 'Application support',
      description: 'Country selection, university shortlist, SOP, documents, visa and pre-departure.'
    }
  ];

  valueCards: SimpleCard[] = [
    {
      title: 'Country-first planning',
      description: 'Choose the country based on cost, visa, work rights, employability and long-term goals.'
    },
    {
      title: 'University shortlisting',
      description: 'Shortlist institutions by programme, location, tuition, intake, ranking, scholarship and recognition.'
    },
    {
      title: 'Career outcome mapping',
      description: 'Connect course selection with internships, part-time work, post-study work and employability.'
    },
    {
      title: 'Parent confidence',
      description: 'Explain cost, safety, documentation, visa pathway, student support and realistic outcome.'
    }
  ];

  countries: CountryCard[] = [
    {
      country: 'Germany',
      region: 'Europe',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Strong for public universities, engineering, IT, research, employability and low-tuition options.',
      highlights: ['Public universities', 'Engineering', 'IT', 'Post-study career']
    },
    {
      country: 'United Kingdom',
      region: 'Europe',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Popular for one-year master’s, business, healthcare, law, management and global university brands.',
      highlights: ['1-year PG', 'Business', 'Healthcare', 'Global brands']
    },
    {
      country: 'Canada',
      region: 'North America',
      image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Known for diplomas, PG diplomas, applied learning, work opportunities and long-term migration interest.',
      highlights: ['PG diplomas', 'Applied learning', 'Work options', 'Career mobility']
    },
    {
      country: 'Australia',
      region: 'Oceania',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Strong for healthcare, business, hospitality, engineering, IT and international student experience.',
      highlights: ['Healthcare', 'Business', 'IT', 'Student experience']
    },
    {
      country: 'Georgia',
      region: 'Eastern Europe',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Popular for medicine, affordable education, English-medium programmes and regional accessibility.',
      highlights: ['Medicine', 'Affordable', 'English medium', 'Regional access']
    },
    {
      country: 'Italy',
      region: 'Europe',
      image: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Suitable for public university options, design, architecture, medicine, business and scholarships.',
      highlights: ['Public universities', 'Design', 'Medicine', 'Scholarships']
    }
  ];

  pathways: PathwayCard[] = [
    {
      title: 'UG Study Abroad',
      tag: 'After 12th',
      description: 'For students planning bachelor’s degrees, foundation routes, public/private university options and career mapping.',
      features: ['Country selection', 'Course matching', 'Parent counselling', 'Scholarship check']
    },
    {
      title: 'PG Study Abroad',
      tag: 'After UG',
      description: 'For graduates comparing master’s options, employability, internships, post-study work and ROI.',
      features: ['University shortlist', 'SOP guidance', 'Budget planning', 'Career outcome mapping']
    },
    {
      title: 'Study Medicine Abroad',
      tag: 'Healthcare',
      description: 'For medical aspirants comparing country, university recognition, cost, licensing pathway and return options.',
      features: ['Country comparison', 'University recognition', 'Clinical exposure', 'Licensing roadmap']
    },
    {
      title: 'Public University Route',
      tag: 'Low cost',
      description: 'For students seeking affordable or low-tuition institutions with strong academic and career planning.',
      features: ['Eligibility review', 'Language planning', 'Application timeline', 'Document checklist']
    },
    {
      title: 'Private University Route',
      tag: 'Fast track',
      description: 'For students who need faster admission, English-medium programmes and structured support.',
      features: ['Admission support', 'Offer management', 'Visa file support', 'Pre-departure']
    },
    {
      title: 'Career-linked Study Route',
      tag: 'Outcome',
      description: 'For students selecting programmes based on internships, employability and post-study career pathways.',
      features: ['Career fit', 'Industry mapping', 'Part-time work planning', 'Post-study pathway']
    }
  ];

  institutions: InstitutionCard[] = [
    {
      name: 'Technical University Pathway',
      country: 'Germany',
      city: 'Munich / Berlin',
      type: 'Public University',
      programs: ['Engineering', 'IT', 'Data Science'],
      tuition: 'Low / Public',
      intake: 'Winter / Summer',
      image: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Applied Sciences College',
      country: 'Germany',
      city: 'Hamburg',
      type: 'University of Applied Sciences',
      programs: ['Business', 'Engineering', 'Logistics'],
      tuition: 'Moderate',
      intake: 'Winter',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Global Business School',
      country: 'United Kingdom',
      city: 'London',
      type: 'Private / Public Partner',
      programs: ['MBA', 'Management', 'Finance'],
      tuition: 'Premium',
      intake: 'Jan / Sep',
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Canadian College Pathway',
      country: 'Canada',
      city: 'Toronto',
      type: 'College',
      programs: ['PG Diploma', 'Healthcare', 'IT'],
      tuition: 'Moderate',
      intake: 'Jan / May / Sep',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Australian University Route',
      country: 'Australia',
      city: 'Melbourne',
      type: 'University',
      programs: ['Nursing', 'Business', 'Engineering'],
      tuition: 'Premium',
      intake: 'Feb / Jul',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Medical University Route',
      country: 'Georgia',
      city: 'Tbilisi',
      type: 'Medical University',
      programs: ['Medicine', 'Dentistry', 'Healthcare'],
      tuition: 'Affordable',
      intake: 'Sep / Feb',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Italian Public University Route',
      country: 'Italy',
      city: 'Milan / Rome',
      type: 'Public University',
      programs: ['Design', 'Architecture', 'Medicine'],
      tuition: 'Low / Scholarship',
      intake: 'Sep',
      image: 'https://images.pexels.com/photos/17709691/pexels-photo-17709691.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'Hospitality and Tourism College',
      country: 'Australia',
      city: 'Sydney',
      type: 'College',
      programs: ['Hospitality', 'Tourism', 'Culinary'],
      tuition: 'Moderate',
      intake: 'Multiple',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      name: 'European Management School',
      country: 'Germany',
      city: 'Frankfurt',
      type: 'Business School',
      programs: ['Business', 'Marketing', 'International Management'],
      tuition: 'Moderate / Premium',
      intake: 'Apr / Oct',
      image: 'https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  countryRows: TableRow[] = [
    {
      country: 'Germany',
      bestFor: 'Engineering, IT, research, low-tuition public universities',
      language: 'English / German',
      costLevel: 'Low to Moderate',
      workOption: 'Part-time and post-study career route'
    },
    {
      country: 'United Kingdom',
      bestFor: 'Business, management, healthcare, global university brands',
      language: 'English',
      costLevel: 'Moderate to Premium',
      workOption: 'Graduate route options'
    },
    {
      country: 'Canada',
      bestFor: 'PG diplomas, applied learning, career mobility',
      language: 'English',
      costLevel: 'Moderate',
      workOption: 'Part-time and post-study work'
    },
    {
      country: 'Australia',
      bestFor: 'Healthcare, hospitality, IT, business',
      language: 'English',
      costLevel: 'Premium',
      workOption: 'Student work and post-study options'
    },
    {
      country: 'Georgia',
      bestFor: 'Medicine and affordable English-medium education',
      language: 'English',
      costLevel: 'Affordable',
      workOption: 'Limited / programme-specific'
    },
    {
      country: 'Italy',
      bestFor: 'Public universities, design, medicine, scholarships',
      language: 'English / Italian',
      costLevel: 'Low to Moderate',
      workOption: 'Part-time and EU exposure'
    }
  ];

  decisionCards: SimpleCard[] = [
    {
      title: 'Academic fit',
      description: 'Match the student’s qualification, grades, subject background and long-term academic goal.'
    },
    {
      title: 'Budget fit',
      description: 'Compare tuition, living cost, visa funds, travel, insurance and scholarship possibilities.'
    },
    {
      title: 'Career fit',
      description: 'Check whether the programme creates employability, internships and post-study opportunities.'
    },
    {
      title: 'Country fit',
      description: 'Evaluate culture, safety, language, work options, climate, distance and family expectations.'
    }
  ];

  journeySteps = [
    {
      title: '01',
      description: 'Profile assessment',
      value: 'Review qualification, grades, budget, field of interest, country preference and career goal.'
    },
    {
      title: '02',
      description: 'Country shortlist',
      value: 'Compare countries based on cost, university options, visa, work rights and outcomes.'
    },
    {
      title: '03',
      description: 'University application',
      value: 'Prepare documents, SOP, transcripts, recommendation letters and application submission.'
    },
    {
      title: '04',
      description: 'Visa and pre-departure',
      value: 'Support visa file, accommodation guidance, travel preparation and student readiness.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Which country is best for study abroad?',
      answer: 'The best country depends on budget, field of study, language, university quality, visa route, post-study work and long-term career goal.'
    },
    {
      question: 'Should I choose public or private university?',
      answer: 'Public universities may be more affordable and competitive. Private universities may offer faster admission and more structured English-medium options.'
    },
    {
      question: 'Can I work while studying?',
      answer: 'Many destinations allow some form of part-time work, but rules vary by country, visa type and programme.'
    },
    {
      question: 'How should universities be shortlisted?',
      answer: 'Use programme fit, recognition, tuition, location, intake, scholarship, employability, admission requirements and visa suitability.'
    }
  ];
}