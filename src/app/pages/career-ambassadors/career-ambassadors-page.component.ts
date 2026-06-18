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

interface ModuleCard {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

interface SkillCard {
  title: string;
  level: string;
  description: string;
}

interface TestimonialCard {
  name: string;
  role: string;
  quote: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-career-ambassadors-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-white text-slate-950">

      <!-- 01 Hero -->
      <section class="border-b border-slate-200 bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20 xl:px-14">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Career Ambassador Programme
            </p>

            <h1 class="mt-5 max-w-[940px] text-[42px] font-normal leading-[1.03] tracking-[-0.055em] text-slate-950 md:text-[56px] lg:text-[72px]">
              Train students and alumni to guide peers with confidence
            </h1>

            <p class="mt-7 max-w-[780px] text-[17px] leading-[1.75] text-slate-600 lg:text-[19px]">
              Build a structured ambassador network for Career360 and Altus Career.
              Ambassadors can support school outreach, peer counselling, webinars, events,
              content creation, feedback collection and student decision confidence.
            </p>

            <div class="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" class="btn-primary">
                Become an Ambassador
              </a>

              <a href="#modules" class="btn-secondary">
                View Training Modules
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative min-h-[470px] overflow-hidden border border-slate-200 bg-[#f4f4f4]">
              <img
                src="/assets/ambassador.webp"
                alt="Career Ambassador Programme"
                class="absolute inset-0 h-full w-full object-cover"
              />

              <div class="absolute inset-x-6 bottom-6 border border-white/20 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <p class="section-eyebrow">
                  Peer-led career support
                </p>

                <h2 class="mt-3 text-[24px] font-normal leading-tight tracking-[-0.04em] text-slate-950">
                  Convert student experience into trust, guidance and community engagement.
                </h2>

                <p class="mt-3 text-[14px] leading-relaxed text-slate-600">
                  A scalable ambassador model for schools, colleges, Ausbildung, study abroad and jobs.
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

      <!-- 03 Programme Overview -->
      <section class="section-padding bg-white">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Programme overview
            </p>

            <h2 class="section-title">
              A structured training pathway for student career leaders.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card" *ngFor="let item of overviewCards">
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

      <!-- 04 What Ambassadors Do -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[860px]">
            <p class="section-eyebrow">
              Ambassador responsibilities
            </p>

            <h2 class="section-title">
              Turn student voice into a structured engagement channel.
            </h2>

            <p class="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600">
              Career Ambassadors support awareness, education, community, lead nurturing and
              student confidence. They do not replace advisors; they make the advisory journey more trusted.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card bg-white" *ngFor="let item of responsibilities">
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

      <!-- 05 Training Modules -->
      <section id="modules" class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Training modules
              </p>

              <h2 class="section-title">
                What ambassadors learn
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              The programme develops confidence, peer communication, writing, event planning,
              feedback collection, opportunity search, leadership and teamwork.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article class="module-card" *ngFor="let module of modules">
              <p class="text-[28px] font-normal tracking-[-0.04em] text-[#0f62fe]">
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

      <!-- 06 Skills Developed -->
      <section class="section-padding border-y border-slate-200 bg-[#161616] text-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-12 max-w-[840px]">
            <p class="section-eyebrow text-blue-300">
              Skills developed
            </p>

            <h2 class="section-title text-white">
              Build employability while helping others make informed decisions.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="dark-card" *ngFor="let skill of skills">
              <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                {{ skill.level }}
              </p>

              <h3 class="mt-4 text-[22px] font-normal tracking-[-0.035em] text-white">
                {{ skill.title }}
              </h3>

              <p class="mt-3 text-[14px] leading-relaxed text-slate-300">
                {{ skill.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- 07 Ambassador Journey -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[820px]">
            <p class="section-eyebrow">
              Ambassador journey
            </p>

            <h2 class="section-title">
              From application to active ambassador contribution.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="medium-card" *ngFor="let step of journey">
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

      <!-- 08 Programme Evidence / Certificate -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Evidence and outcomes
            </p>

            <h2 class="section-title">
              Make ambassador contribution measurable.
            </h2>

            <p class="mt-5 text-[15px] leading-relaxed text-slate-600">
              The programme can generate evidence for volunteering, school leadership,
              college applications, university applications, employability portfolios and CV development.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            <article class="medium-card bg-white" *ngFor="let item of evidenceCards">
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

      <!-- 09 Community Stories -->
      <section class="section-padding bg-white">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Student voice
              </p>

              <h2 class="section-title">
                What ambassadors can influence
              </h2>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-slate-600">
              Use testimonials, peer videos, ambassador sessions and community Q&A to help prospects
              understand the real experience behind each pathway.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <article class="testimonial-card" *ngFor="let story of testimonials">
              <p class="text-[42px] font-light leading-none text-[#0f62fe]">
                “
              </p>

              <p class="mt-4 text-[16px] leading-relaxed text-slate-700">
                {{ story.quote }}
              </p>

              <div class="mt-8 border-t border-slate-200 pt-5">
                <p class="text-[15px] font-semibold text-slate-950">
                  {{ story.name }}
                </p>

                <p class="mt-1 text-[13px] text-slate-500">
                  {{ story.role }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- 10 Operating Model -->
      <section class="section-padding border-y border-slate-200 bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1440px]">
          <div class="mb-10 max-w-[840px]">
            <p class="section-eyebrow">
              Operating model
            </p>

            <h2 class="section-title">
              How Career360 can manage ambassadors as a business capability.
            </h2>
          </div>

          <div class="overflow-x-auto border border-slate-300">
            <table class="w-full min-w-[920px] border-collapse bg-white text-left">
              <thead class="bg-[#f4f4f4]">
                <tr>
                  <th class="table-head">Function</th>
                  <th class="table-head">Ambassador Role</th>
                  <th class="table-head">Managed By</th>
                  <th class="table-head">Output</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t border-slate-200" *ngFor="let row of operatingRows">
                  <td class="table-cell font-semibold text-slate-950">{{ row.function }}</td>
                  <td class="table-cell">{{ row.role }}</td>
                  <td class="table-cell">{{ row.owner }}</td>
                  <td class="table-cell">{{ row.output }}</td>
                </tr>
              </tbody>
            </table>
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
              Common questions.
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
      <section id="apply" class="bg-[#0f62fe] px-6 py-16 text-white lg:px-10 xl:px-14">
        <div class="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="section-eyebrow text-blue-100">
              Start now
            </p>

            <h2 class="mt-4 max-w-[900px] text-[38px] font-normal leading-[1.05] tracking-[-0.05em] lg:text-[60px]">
              Build your ambassador network for schools, colleges and career pathways.
            </h2>

            <p class="mt-6 max-w-[720px] text-[16px] leading-relaxed text-blue-50">
              Capture ambassador applications, qualify communication strength, assign training,
              track engagement and connect ambassadors to webinars, events and community support.
            </p>
          </div>

          <div class="border border-white/20 bg-white p-6 text-slate-950 lg:col-span-5">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="form-label">Full Name</label>
                <input class="form-input" type="text" placeholder="Enter your name" />
              </div>

              <div>
                <label class="form-label">Ambassador Type</label>
                <select class="form-input">
                  <option>Student Ambassador</option>
                  <option>Alumni Ambassador</option>
                  <option>Ausbildung Ambassador</option>
                  <option>Study Abroad Ambassador</option>
                  <option>Job / Career Ambassador</option>
                  <option>Parent Ambassador</option>
                </select>
              </div>

              <div>
                <label class="form-label">Current Status</label>
                <select class="form-input">
                  <option>School Student</option>
                  <option>College Student</option>
                  <option>Current Ausbildung Candidate</option>
                  <option>Placed Candidate</option>
                  <option>Alumni</option>
                  <option>Parent / Volunteer</option>
                </select>
              </div>

              <div>
                <label class="form-label">Preferred Contribution</label>
                <select class="form-input">
                  <option>Webinars and Q&A</option>
                  <option>Peer mentoring</option>
                  <option>Content creation</option>
                  <option>Events and outreach</option>
                  <option>Feedback and research</option>
                  <option>Community moderation</option>
                </select>
              </div>

              <button type="button" class="mt-2 bg-slate-950 px-6 py-4 text-[14px] font-semibold text-white">
                Submit Ambassador Interest
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

    .module-card {
      min-height: 390px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      padding: 26px;
      transition: background 0.2s ease, box-shadow 0.2s ease;
    }

    .module-card:hover {
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .dark-card {
      min-height: 230px;
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
export class CareerAmbassadorsPageComponent {
  metrics: MetricCard[] = [
    {
      value: '7+ hrs',
      label: 'Training content',
      description: 'Structured learning modules for ambassador readiness and peer support.'
    },
    {
      value: '13+',
      label: 'Open age model',
      description: 'Suitable for school and college students, alumni and young career volunteers.'
    },
    {
      value: '8',
      label: 'Core modules',
      description: 'Role, feedback, writing, events, opportunities, leadership, teamwork and guidance frameworks.'
    },
    {
      value: 'Certificate',
      label: 'Completion proof',
      description: 'Can support CV, applications, volunteering evidence and leadership profile.'
    }
  ];

  overviewCards: SimpleCard[] = [
    {
      title: 'Peer-led guidance',
      description: 'Ambassadors help prospects understand pathways through relatable student and alumni experience.'
    },
    {
      title: 'Career education support',
      description: 'They promote access to counselling, webinars, tools, resources and informed decision-making.'
    },
    {
      title: 'Community engagement',
      description: 'They support Q&A, discussion groups, event promotion, feedback and student confidence.'
    },
    {
      title: 'Employability development',
      description: 'Ambassadors develop communication, writing, research, leadership and teamwork skills.'
    }
  ];

  responsibilities: SimpleCard[] = [
    {
      title: 'Promote career awareness',
      description: 'Explain Ausbildung, study abroad, jobs, German language and alternative career pathways to peers.'
    },
    {
      title: 'Support webinars and events',
      description: 'Help invite students, manage questions, collect feedback and support post-event engagement.'
    },
    {
      title: 'Create student content',
      description: 'Write articles, record short videos, share FAQs and explain real student journey experiences.'
    },
    {
      title: 'Collect feedback',
      description: 'Capture concerns, objections, myths, confusion and decision barriers from students and parents.'
    }
  ];

  modules: ModuleCard[] = [
    {
      number: '01',
      title: 'Role of a Career Ambassador',
      description: 'Understand the purpose, boundaries, responsibilities and impact of a career ambassador.',
      activities: ['Define ambassador role', 'Map peer support scenarios', 'Understand escalation to advisors']
    },
    {
      number: '02',
      title: 'Career Pathway Knowledge',
      description: 'Learn the basics of Ausbildung, study abroad, jobs, German training and career decision logic.',
      activities: ['Compare pathways', 'Identify student personas', 'Explain route differences']
    },
    {
      number: '03',
      title: 'Collecting Feedback',
      description: 'Develop methods to gather student and parent feedback for better counselling and content.',
      activities: ['Create feedback questions', 'Run mini surveys', 'Summarise student concerns']
    },
    {
      number: '04',
      title: 'Effective Writing',
      description: 'Learn how to write helpful articles, FAQs, event summaries and ambassador experience posts.',
      activities: ['Write a blog outline', 'Draft a student guide', 'Create FAQ answers']
    },
    {
      number: '05',
      title: 'Event Planning',
      description: 'Plan, promote and support school sessions, webinars, demo classes and community events.',
      activities: ['Build event checklist', 'Promote registration', 'Collect post-event feedback']
    },
    {
      number: '06',
      title: 'Finding Opportunities',
      description: 'Help peers understand where to find programmes, jobs, webinars, internships and skill-building routes.',
      activities: ['Research opportunities', 'Build resource lists', 'Guide next-step actions']
    },
    {
      number: '07',
      title: 'Leadership',
      description: 'Build confidence to coordinate peers, represent the community and support structured engagement.',
      activities: ['Lead a small group', 'Manage Q&A', 'Create action plan']
    },
    {
      number: '08',
      title: 'Teamwork and Guidance Standards',
      description: 'Understand teamwork, responsible communication, ethics and quality standards in peer support.',
      activities: ['Practice peer scenarios', 'Define do/don’t rules', 'Escalate complex queries']
    }
  ];

  skills: SkillCard[] = [
    {
      title: 'Communication',
      level: 'Core skill',
      description: 'Explain pathways clearly to students, parents, teachers and internal teams.'
    },
    {
      title: 'Research',
      level: 'Career literacy',
      description: 'Find, verify and organise career information before sharing it with peers.'
    },
    {
      title: 'Leadership',
      level: 'Ambassador maturity',
      description: 'Take initiative in events, communities, peer groups and school-level engagement.'
    },
    {
      title: 'Feedback intelligence',
      level: 'Voice of student',
      description: 'Capture what students think, fear, misunderstand and need before making decisions.'
    }
  ];

  journey = [
    {
      title: '01',
      description: 'Apply',
      value: 'Submit ambassador interest, profile, education background and preferred contribution area.'
    },
    {
      title: '02',
      description: 'Train',
      value: 'Complete structured modules on role, content, events, feedback, leadership and teamwork.'
    },
    {
      title: '03',
      description: 'Contribute',
      value: 'Support webinars, community, peer guidance, testimonials, content and feedback collection.'
    },
    {
      title: '04',
      description: 'Evidence',
      value: 'Build certificate, portfolio, contribution record, CV points and leadership profile.'
    }
  ];

  evidenceCards: SimpleCard[] = [
    {
      title: 'Certificate of completion',
      description: 'Provide recognition for completing ambassador training and practical contribution activities.'
    },
    {
      title: 'Volunteering evidence',
      description: 'Track participation for school leadership, community service or volunteering portfolios.'
    },
    {
      title: 'CV and application value',
      description: 'Use ambassador work as evidence of communication, initiative, teamwork and leadership.'
    },
    {
      title: 'Content portfolio',
      description: 'Maintain articles, event summaries, FAQs, testimonials and student guidance assets.'
    }
  ];

  testimonials: TestimonialCard[] = [
    {
      name: 'Student Ambassador',
      role: 'Ausbildung pathway',
      quote: 'The programme helped me explain my own journey clearly and support juniors who were confused about Germany options.'
    },
    {
      name: 'Alumni Ambassador',
      role: 'Study abroad pathway',
      quote: 'Sharing my experience made parents more confident because they could hear the real challenges and practical next steps.'
    },
    {
      name: 'Career Volunteer',
      role: 'School outreach',
      quote: 'I learned how to organise career discussions, collect feedback and guide students toward the right advisor.'
    }
  ];

  operatingRows = [
    {
      function: 'Marketing',
      role: 'Share stories, videos, event invites and peer content',
      owner: 'DigitalExp / Content Team',
      output: 'Awareness and trust content'
    },
    {
      function: 'Sales / Counselling',
      role: 'Support peer Q&A and warm lead confidence',
      owner: 'Program Advisor',
      output: 'Better lead nurturing'
    },
    {
      function: 'Events',
      role: 'Promote, host, moderate and collect feedback',
      owner: 'Event Coordinator',
      output: 'Higher event engagement'
    },
    {
      function: 'Research',
      role: 'Capture student voice, objections and pathway confusion',
      owner: 'Market Research / VOC Team',
      output: 'Insights for content and counselling'
    },
    {
      function: 'Community',
      role: 'Moderate groups and guide students to verified resources',
      owner: 'Community Manager',
      output: 'Trust and retention'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Who can become a Career Ambassador?',
      answer: 'Students, alumni, placed candidates, Ausbildung candidates, study abroad students, parents or volunteers who can communicate responsibly and support peer learning.'
    },
    {
      question: 'Do ambassadors give final counselling advice?',
      answer: 'No. Ambassadors share experience, answer basic questions and guide peers to official advisors for eligibility, visa, finance and application decisions.'
    },
    {
      question: 'What will ambassadors learn?',
      answer: 'They learn peer communication, feedback collection, writing, event support, career pathway knowledge, leadership and teamwork.'
    },
    {
      question: 'Can this support CV and applications?',
      answer: 'Yes. Ambassador contribution can show leadership, communication, initiative, volunteering, community engagement and career awareness.'
    }
  ];
}