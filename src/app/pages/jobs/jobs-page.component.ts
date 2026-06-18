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

interface CategoryCard {
  title: string;
  count: string;
  description: string;
}

interface JobCard {
  company: string;
  logo: string;
  sector: string;
  location: string;
  rating: string;
  openings: string;
  salary: string;
  experience: string;
  tags: string[];
}

interface CountryCard {
  country: string;
  demand: string;
  description: string;
  roles: string[];
}

interface TableRow {
  market: string;
  sectors: string;
  german: string;
  process: string;
  bestFor: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero Search -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Global Jobs Platform
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Discover international jobs by country, sector and employer readiness
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              Search jobs across Germany, Europe and Gulf markets. Compare employers, roles,
              salary expectations, language requirements, documentation readiness and relocation pathways.
            </p>

            <div class="mt-10 grid grid-cols-1 border border-slate-300 bg-white md:grid-cols-4">
              <input
                class="search-control md:col-span-2"
                type="text"
                placeholder="Search job title, company or sector"
              />

              <select class="search-control">
                <option>All Countries</option>
                <option>Germany</option>
                <option>Europe</option>
                <option>Gulf</option>
                <option>Canada</option>
              </select>

              <button class="bg-[#0f62fe] px-6 py-4 text-[14px] font-semibold text-white">
                Search Jobs
              </button>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#jobs-list" class="btn-primary">
                Browse Jobs
              </a>

              <a href="#career-fit" class="btn-secondary">
                Check Career Fit
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/jobs.webp"
                alt="International jobs"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Job intelligence
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Match the candidate to the right job market before applying.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Role, country, employer, salary, language and relocation readiness should be mapped together.
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

      <!-- 03 Country Cards -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Countries
              </p>

              <h2 class="section-title">
                Explore jobs by destination market.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Each country has different employer demand, salary level, visa route, language expectation
              and documentation requirements.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let country of countries">
              <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0f62fe]">
                {{ country.demand }}
              </p>

              <h3 class="mt-4 text-[25px] font-normal tracking-[-0.04em] text-slate-950">
                {{ country.country }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ country.description }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  class="border border-slate-300 bg-white px-3 py-1 text-[12px] text-slate-700"
                  *ngFor="let role of country.roles"
                >
                  {{ role }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 04 Job Categories -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Job categories
            </p>

            <h2 class="section-title">
              Search jobs by sector and career pathway.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let category of categories">
              <p class="text-[32px] font-normal tracking-[-0.05em] text-[#0f62fe]">
                {{ category.count }}
              </p>

              <h3 class="mt-4 text-[22px] font-normal tracking-[-0.035em] text-slate-950">
                {{ category.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                {{ category.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 Filter + Job Listing Layout -->
      <section id="jobs-list" class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Featured jobs and employers
              </p>

              <h2 class="section-title">
                Company-style job listings.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              This layout follows the visual logic of company listing cards: logo, employer,
              market, job category, rating, openings, salary, tags and action.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">

            <!-- Left Filters -->
            <aside class="lg:col-span-3">
              <div class="sticky top-6 border border-slate-300 bg-[#f4f4f4] p-5">
                <p class="section-eyebrow">
                  Filters
                </p>

                <div class="mt-5 space-y-4">
                  <div>
                    <label class="form-label">Country</label>
                    <select class="form-input">
                      <option>All Countries</option>
                      <option>Germany</option>
                      <option>Europe</option>
                      <option>Gulf</option>
                    </select>
                  </div>

                  <div>
                    <label class="form-label">Sector</label>
                    <select class="form-input">
                      <option>All Sectors</option>
                      <option>Healthcare</option>
                      <option>Hospitality</option>
                      <option>Logistics</option>
                      <option>IT</option>
                      <option>Retail</option>
                    </select>
                  </div>

                  <div>
                    <label class="form-label">Language</label>
                    <select class="form-input">
                      <option>Any Level</option>
                      <option>No German</option>
                      <option>A2</option>
                      <option>B1</option>
                      <option>B2</option>
                    </select>
                  </div>

                  <div>
                    <label class="form-label">Experience</label>
                    <select class="form-input">
                      <option>Any Experience</option>
                      <option>Fresher</option>
                      <option>1-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>

                  <button class="w-full bg-slate-950 px-5 py-3 text-[13px] font-semibold text-white">
                    Apply Filters
                  </button>
                </div>
              </div>
            </aside>

            <!-- Listings -->
            <div class="space-y-5 lg:col-span-6">
              <article class="job-card" *ngFor="let job of jobs">
                <div class="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div class="flex h-14 w-14 shrink-0 items-center justify-center border border-slate-300 bg-white text-[18px] font-semibold text-[#0f62fe]">
                    {{ job.logo }}
                  </div>

                  <div class="min-w-0 flex-1">
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 class="text-[22px] font-normal leading-tight tracking-[-0.035em] text-slate-950">
                          {{ job.company }}
                        </h3>

                        <p class="mt-2 text-[14px] leading-relaxed text-slate-600">
                          {{ job.sector }} · {{ job.location }}
                        </p>
                      </div>

                      <span class="inline-flex w-fit bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f62fe]">
                        View Jobs
                      </span>
                    </div>

                    <div class="mt-5 grid grid-cols-2 border border-slate-200 md:grid-cols-4">
                      <div class="mini-stat">
                        <p class="mini-label">Rating</p>
                        <p class="mini-value">{{ job.rating }}</p>
                      </div>

                      <div class="mini-stat">
                        <p class="mini-label">Openings</p>
                        <p class="mini-value">{{ job.openings }}</p>
                      </div>

                      <div class="mini-stat">
                        <p class="mini-label">Salary</p>
                        <p class="mini-value">{{ job.salary }}</p>
                      </div>

                      <div class="mini-stat">
                        <p class="mini-label">Experience</p>
                        <p class="mini-value">{{ job.experience }}</p>
                      </div>
                    </div>

                    <div class="mt-5 flex flex-wrap gap-2">
                      <span
                        class="border border-slate-300 bg-white px-3 py-1 text-[12px] text-slate-700"
                        *ngFor="let tag of job.tags"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- Right CTA Panel -->
            <aside class="lg:col-span-3">
              <div class="border border-slate-300 bg-[#161616] p-6 text-white">
                <p class="section-eyebrow text-blue-300">
                  Job readiness
                </p>

                <h3 class="mt-4 text-[28px] font-normal leading-tight tracking-[-0.045em] text-white">
                  Check if your profile is ready for international jobs.
                </h3>

                <p class="mt-4 text-[14px] leading-relaxed text-slate-300">
                  Evaluate CV, language level, experience, destination fit, salary expectation and relocation timeline.
                </p>

                <a href="#job-form" class="mt-6 inline-flex w-full justify-center bg-[#0f62fe] px-5 py-3 text-[13px] font-semibold text-white">
                  Check Job Eligibility
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <!-- 06 Career Fit -->
      <section id="career-fit" class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow text-blue-300">
              Career fit logic
            </p>

            <h2 class="section-title text-white">
              Jobs should be recommended by fit, not just vacancy availability.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-300">
              Each candidate must be mapped to the right sector, country, language requirement,
              experience level, salary band and long-term pathway.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="dark-card" *ngFor="let item of fitCards">
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

      <!-- 07 Process -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[840px]">
            <p class="section-eyebrow">
              Job pathway
            </p>

            <h2 class="section-title">
              From profile assessment to employer interview.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let step of processSteps">
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

      <!-- 08 Market Comparison -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Market comparison
              </p>

              <h2 class="section-title">
                Compare job markets before applying.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this table to guide candidates toward realistic destination choices.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[980px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Market</th>
                  <th class="table-head">Core Sectors</th>
                  <th class="table-head">Language</th>
                  <th class="table-head">Process</th>
                  <th class="table-head">Best For</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of marketRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.market }}</td>
                  <td class="table-cell">{{ row.sectors }}</td>
                  <td class="table-cell">{{ row.german }}</td>
                  <td class="table-cell">{{ row.process }}</td>
                  <td class="table-cell">{{ row.bestFor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 09 Candidate Support -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Candidate support
            </p>

            <h2 class="section-title">
              Help candidates become job-ready before employer submission.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of supportCards">
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

      <!-- 10 FAQ -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <p class="section-eyebrow">
              FAQs
            </p>

            <h2 class="section-title">
              Common job pathway questions.
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

      <!-- 11 Lead CTA -->
      <section id="job-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start job matching
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Check your job readiness and destination fit.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Share your qualification, experience, target country, language level and preferred sector.
              Our advisor can map your job pathway and next step.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Full Name</label>
                <input class="form-input" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label class="form-label">Target Country</label>
                <select class="form-input">
                  <option>Germany</option>
                  <option>Europe</option>
                  <option>Gulf</option>
                  <option>Canada</option>
                  <option>Not Sure</option>
                </select>
              </div>

              <div>
                <label class="form-label">Job Sector</label>
                <select class="form-input">
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                  <option>Logistics</option>
                  <option>IT</option>
                  <option>Retail</option>
                  <option>Technical</option>
                </select>
              </div>

              <div>
                <label class="form-label">Experience</label>
                <select class="form-input">
                  <option>Fresher</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <div>
                <label class="form-label">Language Level</label>
                <select class="form-input">
                  <option>No German</option>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>English Only</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Request Job Matching
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

    .job-card {
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 22px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .job-card:hover {
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

    .mini-stat {
      border-right: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      padding: 12px;
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
export class JobsPageComponent {
  metrics: MetricCard[] = [
    {
      value: '6+',
      label: 'Job sectors',
      description: 'Healthcare, hospitality, logistics, IT, retail and technical job pathways.'
    },
    {
      value: '4',
      label: 'Destination markets',
      description: 'Germany, Europe, Gulf and Canada-focused career opportunities.'
    },
    {
      value: 'A2-B2',
      label: 'Language mapping',
      description: 'German and English readiness mapped by role and destination.'
    },
    {
      value: 'E2E',
      label: 'Career support',
      description: 'CV, interview, documentation, employer matching and relocation readiness.'
    }
  ];

  countries: CountryCard[] = [
    {
      country: 'Germany',
      demand: 'High Skill Demand',
      description: 'Best for healthcare, technical, hospitality, logistics and Ausbildung-linked employment.',
      roles: ['Healthcare', 'Technical', 'Hospitality']
    },
    {
      country: 'Europe',
      demand: 'Multi-country',
      description: 'Useful for candidates looking for broader European job market opportunities.',
      roles: ['IT', 'Logistics', 'Skilled Jobs']
    },
    {
      country: 'Gulf',
      demand: 'Fast Hiring',
      description: 'Suitable for hospitality, retail, construction, logistics and service-sector employment.',
      roles: ['Hospitality', 'Retail', 'Operations']
    },
    {
      country: 'Canada',
      demand: 'Career Mobility',
      description: 'Relevant for regulated, skilled and long-term migration-oriented career profiles.',
      roles: ['Healthcare', 'Skilled', 'Technical']
    }
  ];

  categories: CategoryCard[] = [
    {
      title: 'Healthcare Jobs',
      count: '120+',
      description: 'Nursing, care, allied health and medical support roles.'
    },
    {
      title: 'Hospitality Jobs',
      count: '80+',
      description: 'Hotels, restaurants, chefs, guest service and tourism operations.'
    },
    {
      title: 'Logistics Jobs',
      count: '95+',
      description: 'Warehouse, freight, supply chain and transportation roles.'
    },
    {
      title: 'IT Jobs',
      count: '60+',
      description: 'Software, IT support, systems, networks and digital business roles.'
    },
    {
      title: 'Retail Jobs',
      count: '70+',
      description: 'Store operations, customer service, sales and wholesale positions.'
    },
    {
      title: 'Technical Jobs',
      count: '90+',
      description: 'Mechatronics, electronics, automotive and industrial roles.'
    },
    {
      title: 'Gulf Jobs',
      count: '150+',
      description: 'Fast-moving opportunities across GCC workforce markets.'
    },
    {
      title: 'Entry-Level Jobs',
      count: '100+',
      description: 'Suitable for freshers, early career candidates and trainees.'
    }
  ];

  jobs: JobCard[] = [
    {
      company: 'MediCare Germany',
      logo: 'MG',
      sector: 'Healthcare / Nursing',
      location: 'Germany',
      rating: '4.2',
      openings: '28',
      salary: '€2.3k+',
      experience: '1-3 yrs',
      tags: ['B1 German', 'Care Sector', 'Relocation Support']
    },
    {
      company: 'Euro Hotel Group',
      logo: 'EH',
      sector: 'Hospitality / Hotels',
      location: 'Germany / Austria',
      rating: '4.0',
      openings: '42',
      salary: '€1.9k+',
      experience: '0-2 yrs',
      tags: ['Customer Service', 'Hotel Operations', 'A2/B1']
    },
    {
      company: 'LogiTrans Europe',
      logo: 'LT',
      sector: 'Logistics / Warehouse',
      location: 'Germany / Netherlands',
      rating: '3.9',
      openings: '35',
      salary: '€1.8k+',
      experience: 'Fresher+',
      tags: ['Warehouse', 'Supply Chain', 'Shift Work']
    },
    {
      company: 'Gulf Retail Partners',
      logo: 'GR',
      sector: 'Retail / Sales',
      location: 'UAE / Qatar',
      rating: '4.1',
      openings: '50',
      salary: 'AED 2.5k+',
      experience: '0-3 yrs',
      tags: ['Retail Sales', 'Customer Handling', 'English']
    },
    {
      company: 'TechBridge Solutions',
      logo: 'TS',
      sector: 'IT / Software',
      location: 'Germany / Remote Hybrid',
      rating: '4.3',
      openings: '18',
      salary: '€2.8k+',
      experience: '2-5 yrs',
      tags: ['Software', 'IT Support', 'English + German']
    },
    {
      company: 'AutoMech Careers',
      logo: 'AM',
      sector: 'Technical / Automotive',
      location: 'Germany',
      rating: '4.0',
      openings: '24',
      salary: '€2.1k+',
      experience: '1-4 yrs',
      tags: ['Mechanic', 'Mechatronics', 'B1 German']
    }
  ];

  fitCards: SimpleCard[] = [
    {
      title: 'Sector fit',
      description: 'Map candidate interest and experience to healthcare, hospitality, logistics, IT, retail or technical roles.'
    },
    {
      title: 'Country fit',
      description: 'Match destination based on visa route, language level, salary expectation and relocation readiness.'
    },
    {
      title: 'Employer fit',
      description: 'Understand whether the candidate is ready for employer interviews, documents and work expectations.'
    },
    {
      title: 'Career fit',
      description: 'Connect the job to long-term income, skill growth, settlement and career progression goals.'
    }
  ];

  processSteps = [
    {
      title: '01',
      description: 'Profile assessment',
      value: 'Review education, experience, language level, CV, sector preference and destination goal.'
    },
    {
      title: '02',
      description: 'Job matching',
      value: 'Map the candidate to suitable job sectors, countries, employers and salary bands.'
    },
    {
      title: '03',
      description: 'Interview preparation',
      value: 'Prepare CV, answers, self-introduction, role-specific questions and employer expectations.'
    },
    {
      title: '04',
      description: 'Employer submission',
      value: 'Submit suitable profiles, coordinate interviews and track feedback, selection and next steps.'
    }
  ];

  marketRows: TableRow[] = [
    {
      market: 'Germany',
      sectors: 'Healthcare, technical, hospitality, logistics',
      german: 'A2-B2',
      process: 'Screening, German readiness, employer interview',
      bestFor: 'Long-term Europe career'
    },
    {
      market: 'Europe',
      sectors: 'IT, logistics, skilled work, hospitality',
      german: 'Country-specific',
      process: 'Employer matching and document readiness',
      bestFor: 'Multi-country job mobility'
    },
    {
      market: 'Gulf',
      sectors: 'Hospitality, retail, operations, logistics',
      german: 'Not required',
      process: 'Fast hiring and employer interview',
      bestFor: 'Quick placement and income'
    },
    {
      market: 'Canada',
      sectors: 'Healthcare, skilled, technical',
      german: 'Not required',
      process: 'Eligibility, licensing, employer route',
      bestFor: 'Migration-oriented profiles'
    }
  ];

  supportCards: SimpleCard[] = [
    {
      title: 'CV optimisation',
      description: 'Create employer-ready CVs based on country, sector, experience and role expectations.'
    },
    {
      title: 'Interview preparation',
      description: 'Train candidates for HR screening, employer interview, technical questions and motivation answers.'
    },
    {
      title: 'Documentation checklist',
      description: 'Track passport, qualification, experience proof, certificates and country-specific documents.'
    },
    {
      title: 'Language readiness',
      description: 'Map German or English communication level to role and destination requirement.'
    },
    {
      title: 'Salary expectation',
      description: 'Set realistic salary understanding based on sector, destination, experience and cost of living.'
    },
    {
      title: 'Relocation planning',
      description: 'Prepare candidates for work culture, housing, travel, arrival and workplace expectations.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Can freshers apply for international jobs?',
      answer: 'Some entry-level roles are suitable for freshers, but destination, language, sector and employer expectations matter.'
    },
    {
      question: 'Is German compulsory for jobs in Germany?',
      answer: 'Many German jobs require German language readiness, especially healthcare, hospitality, retail and technical roles.'
    },
    {
      question: 'Which country is best for jobs?',
      answer: 'It depends on qualification, experience, language level, salary expectation, visa route and long-term career goal.'
    },
    {
      question: 'Do candidates need interview preparation?',
      answer: 'Yes. Employer interviews require CV clarity, role motivation, communication confidence and realistic expectations.'
    }
  ];
}