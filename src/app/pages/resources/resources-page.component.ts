import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MetricCard {
  value: string;
  label: string;
  description: string;
}

interface ResourceBook {
  title: string;
  category: string;
  description: string;
  chapters: string[];
  level: string;
  pages: string;
  color: string;
}

interface SimpleCard {
  title: string;
  description: string;
}

interface ChapterCard {
  number: string;
  title: string;
  description: string;
}

interface TableRow {
  resourceType: string;
  purpose: string;
  audience: string;
  nextAction: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-resources-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero / Book Library -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Career360 Knowledge Library
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Learn, compare and decide with career pathway resources
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              A book-style resource hub for Ausbildung, jobs, study abroad, German language,
              employers, ambassadors, FAQs, guides, calculators and career decision support.
            </p>

            <div class="mt-10 grid grid-cols-1 border border-slate-300 bg-white md:grid-cols-4">
              <input
                class="search-control md:col-span-2"
                type="text"
                placeholder="Search guides, FAQs, articles or tools"
              />

              <select class="search-control">
                <option>All Categories</option>
                <option>Ausbildung</option>
                <option>Jobs</option>
                <option>Study Abroad</option>
                <option>German Language</option>
                <option>Employers</option>
              </select>

              <button class="bg-[#0f62fe] px-6 py-4 text-[14px] font-semibold text-white">
                Search
              </button>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#book-library" class="btn-primary">
                Open Library
              </a>

              <a href="#reading-pathways" class="btn-secondary">
                View Reading Pathways
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <div class="absolute inset-0 bg-[linear-gradient(135deg,#f4f4f4_0%,#ffffff_50%,#dbeafe_100%)]"></div>

              <div class="absolute left-10 top-12 h-[330px] w-[220px] border border-slate-300 bg-white shadow-[18px_18px_0_rgba(15,98,254,0.16)]">
                <div class="h-full border-l-[14px] border-[#0f62fe] p-6">
                  <p class="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0f62fe]">
                    Digital Book
                  </p>

                  <h2 class="mt-10 text-[32px] font-normal leading-[1.05] tracking-[-0.05em] text-slate-950">
                    Career Pathway Handbook
                  </h2>

                  <p class="mt-6 text-[14px] leading-relaxed text-slate-600">
                    Guides, FAQs, checklists and decision tools.
                  </p>
                </div>
              </div>

              <div class="absolute bottom-6 right-6 w-[280px] border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Knowledge system
                </p>

                <h3 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Resources should guide the user to the next decision.
                </h3>
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

      <!-- 03 Book Library -->
      <section id="book-library" class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Book-style resource shelf
              </p>

              <h2 class="section-title">
                Choose a guide and start reading.
              </h2>
            </div>

            <p class="max-w-[580px] text-[15px] leading-relaxed text-slate-600">
              Each book acts as a structured decision guide with chapters, checklists,
              FAQs, calculators, videos and advisor next steps.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <article class="book-card group" *ngFor="let book of books">
              <div class="book-cover" [ngStyle]="{'border-left-color': book.color}">
                <div class="flex items-start justify-between gap-6">
                  <div>
                    <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f62fe]">
                      {{ book.category }}
                    </p>

                    <h3 class="mt-6 text-[30px] font-normal leading-[1.05] tracking-[-0.05em] text-slate-950">
                      {{ book.title }}
                    </h3>
                  </div>

                  <span class="text-[32px] font-light text-[#0f62fe]">↗</span>
                </div>

                <p class="mt-6 text-[14px] leading-relaxed text-slate-600">
                  {{ book.description }}
                </p>

                <div class="mt-6 grid grid-cols-2 border border-slate-200">
                  <div class="border-r border-slate-200 p-4">
                    <p class="mini-label">Level</p>
                    <p class="mini-value">{{ book.level }}</p>
                  </div>

                  <div class="p-4">
                    <p class="mini-label">Pages</p>
                    <p class="mini-value">{{ book.pages }}</p>
                  </div>
                </div>

                <div class="mt-6 border-t border-slate-200 pt-5">
                  <p class="mini-label">
                    Chapters
                  </p>

                  <ul class="mt-3 space-y-2">
                    <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let chapter of book.chapters">
                      <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                      <span>{{ chapter }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 04 Reading Pathways -->
      <section id="reading-pathways" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Reading pathways
            </p>

            <h2 class="section-title">
              Guide users based on their current decision stage.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let item of readingPathways">
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

      <!-- 05 Featured Chapters -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Featured chapters
              </p>

              <h2 class="section-title">
                High-value topics for counselling and conversion.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              These chapters can become articles, landing page sections, downloadable PDFs,
              videos, webinars or KB articles.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article class="chapter-card" *ngFor="let chapter of featuredChapters">
              <p class="text-[30px] font-normal tracking-[-0.04em] text-[#0f62fe]">
                {{ chapter.number }}
              </p>

              <h3 class="mt-4 text-[25px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ chapter.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ chapter.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 06 Dark Knowledge Categories -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[840px]">
            <p class="section-eyebrow text-blue-300">
              Knowledge categories
            </p>

            <h2 class="section-title text-white">
              Organise resources like a career decision library.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-300">
              Each category should support SEO, counselling, lead nurturing, community education
              and decision clarity.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="dark-card" *ngFor="let item of knowledgeCategories">
              <h3 class="text-[23px] font-normal tracking-[-0.04em] text-white">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Resource Type Matrix -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Resource matrix
              </p>

              <h2 class="section-title">
                Match content type to user intent.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this matrix to plan resources for SEO, lead generation, counselling,
              conversion and post-registration support.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[980px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Resource Type</th>
                  <th class="table-head">Purpose</th>
                  <th class="table-head">Audience</th>
                  <th class="table-head">Next Action</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of resourceRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.resourceType }}</td>
                  <td class="table-cell">{{ row.purpose }}</td>
                  <td class="table-cell">{{ row.audience }}</td>
                  <td class="table-cell">{{ row.nextAction }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 08 Tools and Downloads -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Tools and downloads
            </p>

            <h2 class="section-title">
              Convert readers into qualified leads using interactive resources.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              Tools, calculators, checklists and downloadable guides can capture user intent
              and route them to the correct programme advisor.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card bg-white" *ngFor="let item of toolsDownloads">
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

      <!-- 09 Content Governance -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Content governance
            </p>

            <h2 class="section-title">
              Keep the resource library accurate, useful and conversion-ready.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let item of governanceCards">
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
              Common resource questions.
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

      <!-- 11 CTA -->
      <section id="resource-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start reading
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Get the right guide for your career decision.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Choose your pathway and receive a structured guide, checklist, calculator
              or advisor recommendation based on your profile.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Resource Interest</label>
                <select class="form-input">
                  <option>Ausbildung Guide</option>
                  <option>Jobs Guide</option>
                  <option>Study Abroad Guide</option>
                  <option>German Language Guide</option>
                  <option>Employer Hiring Guide</option>
                  <option>Partner / Ambassador Guide</option>
                </select>
              </div>

              <div>
                <label class="form-label">Current Profile</label>
                <select class="form-input">
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Jobseeker</option>
                  <option>German Learner</option>
                  <option>Employer</option>
                  <option>Partner</option>
                </select>
              </div>

              <div>
                <label class="form-label">Decision Stage</label>
                <select class="form-input">
                  <option>Just Exploring</option>
                  <option>Comparing Options</option>
                  <option>Checking Eligibility</option>
                  <option>Ready to Apply</option>
                  <option>Need Advisor Support</option>
                </select>
              </div>

              <div>
                <label class="form-label">Preferred Next Action</label>
                <select class="form-input">
                  <option>Download Guide</option>
                  <option>Use Calculator</option>
                  <option>Book Advisor Call</option>
                  <option>Join Webinar</option>
                  <option>Start Application</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Get Resource Recommendation
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

    .book-card {
      min-height: 580px;
      perspective: 1200px;
    }

    .book-cover {
      min-height: 580px;
      border: 1px solid #cbd5e1;
      border-left: 16px solid #0f62fe;
      background: #ffffff;
      padding: 28px;
      box-shadow: 16px 16px 0 rgba(15, 23, 42, 0.06);
      transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
    }

    .book-cover:hover {
      transform: translateY(-6px) rotateY(-2deg);
      background: #f8fafc;
      box-shadow: 22px 22px 0 rgba(15, 98, 254, 0.12);
    }

    .chapter-card {
      min-height: 270px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .chapter-card:hover {
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
export class ResourcesPageComponent {
  metrics: MetricCard[] = [
    {
      value: '50+',
      label: 'Guides and FAQs',
      description: 'Structured resources for students, parents, jobseekers, employers and partners.'
    },
    {
      value: '6',
      label: 'Core pathways',
      description: 'Ausbildung, jobs, study abroad, German training, employers and ambassadors.'
    },
    {
      value: '10+',
      label: 'Tools and checklists',
      description: 'Calculators, eligibility checks, comparison tools and downloadable guides.'
    },
    {
      value: '1',
      label: 'Knowledge hub',
      description: 'Central source for counselling, SEO, lead nurturing and decision support.'
    }
  ];

  books: ResourceBook[] = [
    {
      title: 'Ausbildung Germany Handbook',
      category: 'Ausbildung',
      description: 'A complete guide to sectors, eligibility, German language, training contracts, visa preparation and parent counselling.',
      chapters: ['What is Ausbildung?', 'Sector comparison', 'Eligibility checklist', 'German language roadmap'],
      level: 'Beginner',
      pages: '42',
      color: '#0f62fe'
    },
    {
      title: 'Jobs Abroad Career Guide',
      category: 'Jobs',
      description: 'A practical book for jobseekers comparing country options, employer readiness, CV, interviews and relocation planning.',
      chapters: ['Country comparison', 'CV readiness', 'Employer interview', 'Relocation checklist'],
      level: 'Career',
      pages: '36',
      color: '#24a148'
    },
    {
      title: 'Study Abroad Decision Book',
      category: 'Study',
      description: 'A structured guide for choosing country, university, programme, budget, scholarships and post-study career outcomes.',
      chapters: ['Country selection', 'University types', 'Cost planning', 'Career outcomes'],
      level: 'Student',
      pages: '48',
      color: '#8a3ffc'
    },
    {
      title: 'German Language Roadmap',
      category: 'Language',
      description: 'A book-style roadmap from A1 to B1 with exam readiness, speaking practice and career communication.',
      chapters: ['A1 foundation', 'A2 communication', 'B1 readiness', 'Interview German'],
      level: 'A1-B1',
      pages: '30',
      color: '#ff832b'
    },
    {
      title: 'Employer Hiring Playbook',
      category: 'Employers',
      description: 'A hiring guide for international workforce planning, candidate screening, interviews and onboarding readiness.',
      chapters: ['Requirement capture', 'Candidate screening', 'Interview workflow', 'Documentation'],
      level: 'B2B',
      pages: '34',
      color: '#da1e28'
    },
    {
      title: 'Career Ambassador Manual',
      category: 'Community',
      description: 'A handbook for ambassadors to support peer guidance, events, content, feedback and student engagement.',
      chapters: ['Ambassador role', 'Peer guidance', 'Event support', 'Feedback collection'],
      level: 'Community',
      pages: '28',
      color: '#0072c3'
    }
  ];

  readingPathways: SimpleCard[] = [
    {
      title: 'For students',
      description: 'Start with programme comparison, eligibility, cost, timeline and career outcome resources.'
    },
    {
      title: 'For parents',
      description: 'Use safety, cost, ROI, visa, training model and long-term career clarity resources.'
    },
    {
      title: 'For jobseekers',
      description: 'Read CV, employer interview, country comparison, salary and relocation guides.'
    },
    {
      title: 'For employers',
      description: 'Use hiring playbooks, requirement forms, candidate readiness and onboarding resources.'
    }
  ];

  featuredChapters: ChapterCard[] = [
    {
      number: '01',
      title: 'Ausbildung versus university',
      description: 'Explain the difference between paid vocational training and traditional academic study.'
    },
    {
      number: '02',
      title: 'German language timeline',
      description: 'Show how A1, A2 and B1 connect to interviews, visa readiness and workplace integration.'
    },
    {
      number: '03',
      title: 'Country comparison',
      description: 'Help users compare Germany, Europe, Gulf and other destinations by outcome and suitability.'
    },
    {
      number: '04',
      title: 'Cost and ROI planning',
      description: 'Explain fees, living cost, training cost, expected income and long-term value.'
    },
    {
      number: '05',
      title: 'Career fit assessment',
      description: 'Map personality, academic background, interests and long-term goals to pathways.'
    },
    {
      number: '06',
      title: 'Parent decision guide',
      description: 'Address family concerns, risk, safety, timeline, documentation and realistic expectations.'
    }
  ];

  knowledgeCategories: SimpleCard[] = [
    {
      title: 'FAQs',
      description: 'Quick answers for common questions across programmes, countries and eligibility.'
    },
    {
      title: 'Guides',
      description: 'Long-form educational books, handbooks, playbooks and pathway explainers.'
    },
    {
      title: 'Calculators',
      description: 'Cost, salary, timeline, eligibility, ROI and comparison-based decision tools.'
    },
    {
      title: 'Checklists',
      description: 'Document, application, visa, interview, language and onboarding readiness lists.'
    },
    {
      title: 'Articles',
      description: 'SEO-friendly thought leadership, myth-busting and programme education content.'
    },
    {
      title: 'Videos',
      description: 'Explainers, testimonials, webinars, advisor talks and ambassador stories.'
    },
    {
      title: 'Templates',
      description: 'CV, motivation letter, email, employer requirement and partner onboarding templates.'
    },
    {
      title: 'Reports',
      description: 'Personalised assessment, eligibility, psychometric, programme and advisor reports.'
    }
  ];

  resourceRows: TableRow[] = [
    {
      resourceType: 'Guide Book',
      purpose: 'Deep education and trust building',
      audience: 'Students and parents',
      nextAction: 'Download or book counselling'
    },
    {
      resourceType: 'FAQ Page',
      purpose: 'Quick objection handling',
      audience: 'All visitors',
      nextAction: 'Explore programme page'
    },
    {
      resourceType: 'Calculator',
      purpose: 'Personalised decision support',
      audience: 'High-intent leads',
      nextAction: 'Unlock report and speak to advisor'
    },
    {
      resourceType: 'Checklist',
      purpose: 'Operational readiness',
      audience: 'Applicants',
      nextAction: 'Upload documents or start application'
    },
    {
      resourceType: 'Webinar Resource',
      purpose: 'Nurture and education',
      audience: 'Event registrants',
      nextAction: 'Join event or watch replay'
    }
  ];

  toolsDownloads: SimpleCard[] = [
    {
      title: 'Eligibility checker',
      description: 'Help users check programme fit based on qualification, age, language, budget and timeline.'
    },
    {
      title: 'Cost calculator',
      description: 'Estimate programme cost, training cost, living cost, travel and financial readiness.'
    },
    {
      title: 'Salary calculator',
      description: 'Show expected earnings by country, sector, role and experience level.'
    },
    {
      title: 'Timeline planner',
      description: 'Map language training, application, interviews, documents, visa and travel stages.'
    },
    {
      title: 'Comparison tool',
      description: 'Compare Ausbildung, jobs, study abroad and German training pathways.'
    },
    {
      title: 'Downloadable checklist',
      description: 'Provide document, interview, visa, application and parent discussion checklists.'
    }
  ];

  governanceCards: SimpleCard[] = [
    {
      title: 'Content ownership',
      description: 'Assign every guide, FAQ, article and checklist to a content owner and subject matter reviewer.'
    },
    {
      title: 'Version control',
      description: 'Track updates, review date, source validity, programme changes and outdated content.'
    },
    {
      title: 'SEO mapping',
      description: 'Map each resource to keywords, internal links, programme pages and conversion CTAs.'
    },
    {
      title: 'CTA governance',
      description: 'Each resource should have the right next step: enquiry, tool, download, webinar or advisor booking.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Why create resources like books?',
      answer: 'Book-style resources help users understand complex career decisions in a structured way and improve trust before counselling.'
    },
    {
      question: 'Should resources be gated?',
      answer: 'High-value PDFs, calculators and personalised reports can be gated. Basic FAQs and articles should stay open for SEO and education.'
    },
    {
      question: 'How should resources connect to CRM?',
      answer: 'Downloads, calculators and forms should create or update lead records with programme interest, persona and next best action.'
    },
    {
      question: 'Can this page become a knowledge base?',
      answer: 'Yes. This structure can evolve into a full KBM with guides, FAQs, tools, videos, checklists and advisor resources.'
    }
  ];
}