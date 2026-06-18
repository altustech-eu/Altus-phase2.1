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

interface LevelCard {
  level: string;
  title: string;
  description: string;
  duration: string;
  outcome: string;
  focus: string[];
}

interface TrainingModule {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

interface BatchCard {
  title: string;
  tag: string;
  description: string;
  features: string[];
}

interface TableRow {
  level: string;
  purpose: string;
  learnerOutcome: string;
  careerUse: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-german-language-training-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              German Language Training
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Learn German for Ausbildung, jobs, study abroad and career mobility
            </h1>

            <p class="mt-7 max-w-[790px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              A structured German language pathway from A1 to B1 with classroom training,
              hybrid learning, speaking practice, exam readiness, interview preparation and
              workplace communication support.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#level-pathway" class="btn-primary">
                View Level Pathway
              </a>

              <a href="#training-form" class="btn-secondary">
                Join German Class
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/german-language.webp"
                alt="German language training"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Language readiness
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  German is not only an exam. It is career communication.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  Build grammar, vocabulary, listening, speaking, interview and workplace confidence.
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

      <!-- 03 Why German -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Why German matters
            </p>

            <h2 class="section-title">
              German language is the foundation for interviews, visa readiness and workplace integration.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of whyGerman">
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

      <!-- 04 Level Pathway -->
      <section id="level-pathway" class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Level pathway
            </p>

            <h2 class="section-title">
              A1 to B1 learning journey for international career readiness.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
              Each level should have a clear learning goal, exam goal, speaking target,
              assessment model and career application.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="level-card" *ngFor="let level of levels">
              <p class="text-[42px] font-normal tracking-[-0.055em] text-[#0f62fe]">
                {{ level.level }}
              </p>

              <h3 class="mt-4 text-[28px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ level.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ level.description }}
              </p>

              <div class="mt-5 grid grid-cols-2 border border-slate-200">
                <div class="border-r border-slate-200 p-4">
                  <p class="mini-label">Duration</p>
                  <p class="mini-value">{{ level.duration }}</p>
                </div>

                <div class="p-4">
                  <p class="mini-label">Outcome</p>
                  <p class="mini-value">{{ level.outcome }}</p>
                </div>
              </div>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Learning focus
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let item of level.focus">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 05 Training Modules -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Training modules
              </p>

              <h2 class="section-title">
                What the learner will practice.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              German training should balance grammar, speaking, listening, exam practice,
              interview preparation and real workplace communication.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="module-card" *ngFor="let module of modules">
              <p class="text-[30px] font-normal tracking-[-0.04em] text-[#0f62fe]">
                {{ module.number }}
              </p>

              <h3 class="mt-4 text-[25px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ module.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ module.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Practice activities
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let activity of module.activities">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 06 Career Use Cases -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[840px]">
            <p class="section-eyebrow text-blue-300">
              Career use cases
            </p>

            <h2 class="section-title text-white">
              German training mapped to real career pathways.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-300">
              Different pathways need different language outcomes. Ausbildung, jobs, study abroad
              and healthcare routes require different levels of communication confidence.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="dark-card" *ngFor="let item of careerUseCases">
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

      <!-- 07 Batch Options -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Batch options
            </p>

            <h2 class="section-title">
              Choose the right training model based on outcome, speed and support needs.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <article class="batch-card" *ngFor="let batch of batches">
              <p class="inline-flex bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                {{ batch.tag }}
              </p>

              <h3 class="mt-5 text-[28px] font-normal leading-tight tracking-[-0.045em] text-slate-950">
                {{ batch.title }}
              </h3>

              <p class="mt-4 text-[14px] leading-relaxed text-slate-600">
                {{ batch.description }}
              </p>

              <div class="mt-5 border-t border-slate-200 pt-5">
                <p class="mini-label">
                  Included support
                </p>

                <ul class="mt-3 space-y-2">
                  <li class="flex gap-3 text-[13px] leading-relaxed text-slate-700" *ngFor="let feature of batch.features">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 08 Learning Journey -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Learning journey
              </p>

              <h2 class="section-title">
                From level assessment to exam readiness.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              A governed journey helps learners move from registration to attendance,
              practice, assessment, feedback and career use.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let step of journey">
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

      <!-- 09 Level Comparison -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Level comparison
              </p>

              <h2 class="section-title">
                What each German level means for career use.
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use this table for counselling, batch assignment and learning pathway explanation.
            </p>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[960px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Level</th>
                  <th class="table-head">Purpose</th>
                  <th class="table-head">Learner Outcome</th>
                  <th class="table-head">Career Use</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of levelRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.level }}</td>
                  <td class="table-cell">{{ row.purpose }}</td>
                  <td class="table-cell">{{ row.learnerOutcome }}</td>
                  <td class="table-cell">{{ row.careerUse }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 10 LMS and Support -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              LMS and support model
            </p>

            <h2 class="section-title">
              Track learning progress with assignments, feedback and advisor visibility.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              German training should connect classroom learning, LMS practice, speaking confidence,
              attendance, mock tests and career readiness in one operating model.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card bg-white" *ngFor="let item of supportCards">
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
              Common German training questions.
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
      <section id="training-form" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Join German training
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Start with the right German level and career target.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Share your current level, target pathway and timeline. The training team can map
              your batch, trainer model, exam readiness plan and next step.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Full Name</label>
                <input class="form-input" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label class="form-label">Current German Level</label>
                <select class="form-input">
                  <option>No German</option>
                  <option>A1 Started</option>
                  <option>A1 Completed</option>
                  <option>A2 Started</option>
                  <option>A2 Completed</option>
                  <option>B1 Started</option>
                </select>
              </div>

              <div>
                <label class="form-label">Target Pathway</label>
                <select class="form-input">
                  <option>Ausbildung Germany</option>
                  <option>Jobs in Germany</option>
                  <option>Study in Germany</option>
                  <option>Healthcare / Nursing</option>
                  <option>Spoken German</option>
                  <option>Exam Preparation</option>
                </select>
              </div>

              <div>
                <label class="form-label">Preferred Training Mode</label>
                <select class="form-input">
                  <option>Classroom</option>
                  <option>Hybrid</option>
                  <option>Online Live</option>
                  <option>Fast Track</option>
                  <option>Weekend Batch</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Request German Training Plan
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

    .level-card,
    .module-card,
    .batch-card {
      min-height: 430px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .level-card:hover,
    .module-card:hover,
    .batch-card:hover {
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
export class GermanLanguageTrainingPageComponent {
  metrics: MetricCard[] = [
    {
      value: 'A1-B1',
      label: 'Core pathway',
      description: 'Structured German training for Ausbildung, jobs and study mobility.'
    },
    {
      value: '4',
      label: 'Training modes',
      description: 'Classroom, hybrid, live online and fast-track learning options.'
    },
    {
      value: 'LMS',
      label: 'Practice support',
      description: 'Assignments, recordings, mock tests, attendance and progress tracking.'
    },
    {
      value: 'Career',
      label: 'German outcome',
      description: 'Interview German, workplace German and cross-cultural readiness.'
    }
  ];

  whyGerman: SimpleCard[] = [
    {
      title: 'Employer interviews',
      description: 'German self-introduction, role motivation and basic workplace communication are important for selection.'
    },
    {
      title: 'Visa and mobility readiness',
      description: 'Language level supports documentation, interviews, integration and destination confidence.'
    },
    {
      title: 'Classroom discipline',
      description: 'Structured learning builds consistency, pronunciation, peer practice and exam readiness.'
    },
    {
      title: 'Workplace adaptation',
      description: 'Candidates need practical German for instructions, colleagues, customers and daily life in Germany.'
    }
  ];

  levels: LevelCard[] = [
    {
      level: 'A1',
      title: 'Foundation German',
      description: 'Beginner level for basic grammar, vocabulary, greetings, introductions and simple communication.',
      duration: '8-10 weeks',
      outcome: 'Basics',
      focus: ['Alphabet and pronunciation', 'Basic sentence structure', 'Daily vocabulary', 'Simple speaking practice']
    },
    {
      level: 'A2',
      title: 'Practical Communication',
      description: 'Builds daily communication ability for routine situations, short conversations and basic comprehension.',
      duration: '10-12 weeks',
      outcome: 'Communication',
      focus: ['Listening practice', 'Daily situations', 'Conversation building', 'Grammar strengthening']
    },
    {
      level: 'B1',
      title: 'Career Readiness',
      description: 'Prepares learners for interviews, workplace discussions, longer speaking tasks and exam readiness.',
      duration: '12-14 weeks',
      outcome: 'Mobility',
      focus: ['Interview German', 'Longer speaking tasks', 'Writing practice', 'Exam preparation']
    }
  ];

  modules: TrainingModule[] = [
    {
      number: '01',
      title: 'Grammar and Structure',
      description: 'Build the foundation required for correct sentence formation and exam confidence.',
      activities: ['Tense practice', 'Sentence building', 'Grammar drills', 'Error correction']
    },
    {
      number: '02',
      title: 'Speaking Practice',
      description: 'Improve confidence through guided speaking, role plays and pronunciation support.',
      activities: ['Self-introduction', 'Daily conversation', 'Mock interviews', 'Pronunciation correction']
    },
    {
      number: '03',
      title: 'Listening and Comprehension',
      description: 'Train learners to understand classroom, exam and workplace German.',
      activities: ['Audio exercises', 'Dialogue practice', 'Instruction listening', 'Exam listening drills']
    },
    {
      number: '04',
      title: 'Writing and Email German',
      description: 'Prepare for exam writing, formal messages and simple workplace communication.',
      activities: ['Short essays', 'Email writing', 'Form filling', 'Feedback-based rewriting']
    },
    {
      number: '05',
      title: 'Exam Preparation',
      description: 'Practice model papers, time management, test strategy and scoring improvement.',
      activities: ['Mock tests', 'Speaking exam practice', 'Writing correction', 'Score review']
    },
    {
      number: '06',
      title: 'Career German',
      description: 'Prepare learners for interviews, Ausbildung applications and workplace integration.',
      activities: ['Employer Q&A', 'Motivation answers', 'Workplace phrases', 'Cross-cultural scenarios']
    }
  ];

  careerUseCases: SimpleCard[] = [
    {
      title: 'Ausbildung German',
      description: 'German for employer interview, training contract, vocational school and workplace adaptation.'
    },
    {
      title: 'Jobseeker German',
      description: 'German for CV discussion, employer screening, interview confidence and workplace communication.'
    },
    {
      title: 'Study Germany German',
      description: 'German for student life, university communication, part-time jobs and integration.'
    },
    {
      title: 'Healthcare German',
      description: 'German for patient communication, care settings, documentation and workplace instructions.'
    }
  ];

  batches: BatchCard[] = [
    {
      title: 'Standard Batch',
      tag: 'Regular',
      description: 'Suitable for learners who want a structured pace with classroom discipline and guided practice.',
      features: ['Fixed weekly schedule', 'Trainer-led classes', 'Assignments', 'Basic mock tests']
    },
    {
      title: 'Hybrid Batch',
      tag: 'Flexible',
      description: 'Combines classroom learning with online speaking, LMS support and practice resources.',
      features: ['Classroom + online', 'LMS access', 'Speaking sessions', 'Recorded materials']
    },
    {
      title: 'Outcome-Focused Batch',
      tag: 'Intensive',
      description: 'Best for Ausbildung and job candidates who need stronger speaking and interview readiness.',
      features: ['Dedicated tracking', 'Mock interview German', 'Exam readiness', 'Cross-cultural German']
    }
  ];

  journey = [
    {
      number: '01',
      title: 'Level assessment',
      description: 'Understand current German level, learning gaps, target pathway and timeline.'
    },
    {
      number: '02',
      title: 'Batch assignment',
      description: 'Assign learner to suitable batch, trainer model, learning mode and schedule.'
    },
    {
      number: '03',
      title: 'Learning and practice',
      description: 'Complete classes, assignments, speaking sessions, mock tests and LMS practice.'
    },
    {
      number: '04',
      title: 'Exam and career readiness',
      description: 'Prepare for exam, interview, workplace communication and next programme step.'
    }
  ];

  levelRows: TableRow[] = [
    {
      level: 'A1',
      purpose: 'Foundation learning',
      learnerOutcome: 'Basic words, grammar and simple conversation',
      careerUse: 'Start of Germany pathway'
    },
    {
      level: 'A2',
      purpose: 'Daily communication',
      learnerOutcome: 'Routine conversations and better listening',
      careerUse: 'Preparation for B1 and basic workplace confidence'
    },
    {
      level: 'B1',
      purpose: 'Independent communication',
      learnerOutcome: 'Longer conversations, writing and interview readiness',
      careerUse: 'Ausbildung, job and mobility readiness'
    }
  ];

  supportCards: SimpleCard[] = [
    {
      title: 'Attendance tracking',
      description: 'Monitor learner discipline, class participation and consistency across the batch.'
    },
    {
      title: 'Assignments',
      description: 'Use written, grammar, listening and speaking tasks to reinforce classroom learning.'
    },
    {
      title: 'Mock exams',
      description: 'Prepare learners with exam-style practice, timing, score review and correction.'
    },
    {
      title: 'Advisor visibility',
      description: 'Allow programme advisors to see language progress before employer or application steps.'
    },
    {
      title: 'Speaking feedback',
      description: 'Track pronunciation, confidence, fluency and interview communication readiness.'
    },
    {
      title: 'LMS resources',
      description: 'Provide videos, worksheets, practice tasks, recordings and revision materials.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Which German level is required for Ausbildung?',
      answer: 'Many Ausbildung pathways require strong A2 to B1 preparation, and some sectors may prefer stronger spoken German confidence.'
    },
    {
      question: 'Can I join without knowing German?',
      answer: 'Yes. A beginner can start with A1 and then move progressively toward A2 and B1 based on pathway requirement.'
    },
    {
      question: 'Is classroom training better than online?',
      answer: 'Classroom training helps discipline, pronunciation and peer practice. Hybrid or online models can work when attendance and practice are controlled.'
    },
    {
      question: 'Do you include interview German?',
      answer: 'Yes. Career-focused batches should include German self-introduction, motivation answers and sector-specific interview practice.'
    }
  ];
}