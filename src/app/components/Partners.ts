import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PartnerLogo {
  id: string;
  name: string;
  short: string;
  category: 'Employers' | 'Universities' | 'Institutions' | 'Agents';
}

interface PartnerTab {
  label: 'Employers' | 'Universities' | 'Institutions' | 'Agents';
}

interface TabContent {
  heading: string;
  description: string;
  directoryDescription: string;
  ctaTitle: string;
  ctaDescription: string;
}

@Component({
  selector: 'app-partner-logo-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-[#f4f4f4] text-[#161616]">

      <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

        <!-- Compact Heading -->
        <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="section-eyebrow">
              AltusCareer Partner Ecosystem
            </p>

            <h2 class="mt-3 max-w-[760px] text-[34px] font-normal leading-[1.06] tracking-[-0.055em] text-[#161616] lg:text-[48px]">
              Partners for Ausbildung, jobs, study abroad and German training
            </h2>
          </div>

          <p class="max-w-[520px] text-[14px] leading-relaxed text-[#525252]">
            AltusCareer builds trusted partner networks across employers, universities,
            training institutions, schools, agents and regional business development channels.
          </p>
        </div>

        <!-- Tabs -->
        <div class="mb-6 grid grid-cols-2 bg-white lg:grid-cols-4">
          @for (tab of tabs; track tab.label) {
            <button
              type="button"
              class="partner-tab"
              [class.active-tab]="activeTab === tab.label"
              (click)="setTab(tab.label)"
            >
              {{ tab.label }}
            </button>
          }
        </div>

        <!-- Single Partner Block -->
        <div class="single-partner-block">

          <!-- Left Content -->
          <div class="partner-intro">
            <p class="section-eyebrow">
              {{ activeTab }}
            </p>

            <h3 class="mt-3 text-[30px] font-normal leading-[1.08] tracking-[-0.05em] text-[#161616] lg:text-[42px]">
              {{ activeContent.heading }}
            </h3>

            <p class="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#525252]">
              {{ activeContent.description }}
            </p>

            <div class="mt-6 grid grid-cols-2 gap-3">
              <div class="compact-metric">
                <p class="metric-value">{{ filteredPartners().length }}</p>
                <p class="metric-label">Visible partners</p>
              </div>

              <div class="compact-metric">
                <p class="metric-value">4</p>
                <p class="metric-label">Partner types</p>
              </div>
            </div>

            <a
              href="#"
              class="mt-6 inline-flex items-center gap-3 text-[13px] font-semibold text-[#0f62fe] transition-colors hover:text-[#0043ce]"
            >
              Learn AltusCareer partner programmes
              <span class="text-[18px] leading-none">→</span>
            </a>
          </div>

          <!-- Right Partner Board -->
          <div class="partner-board">
            <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p class="section-eyebrow">
                  Partner directory
                </p>

                <h3 class="mt-2 text-[26px] font-normal leading-tight tracking-[-0.045em] text-[#161616] lg:text-[36px]">
                  {{ activeTab }} network
                </h3>
              </div>

              <p class="max-w-[420px] text-[13px] leading-relaxed text-[#525252]">
                {{ activeContent.directoryDescription }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              @for (partner of filteredPartners(); track partner.id) {
                <article class="partner-logo-card">

                  <div class="partner-mark">
                    {{ partner.short }}
                  </div>

                  <div class="min-w-0 flex-1">
                    <p class="truncate text-[16px] font-normal leading-tight tracking-[-0.035em] text-[#161616]">
                      {{ partner.name }}
                    </p>

                    <p class="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0f62fe]">
                      {{ partner.category }}
                    </p>
                  </div>

                  <span class="text-[20px] font-light leading-none text-[#0f62fe]">
                    ↗
                  </span>

                </article>
              }
            </div>
          </div>

        </div>

        <!-- Single CTA Block -->
        <div class="partner-cta">
          <div>
            <p class="section-eyebrow">
              Strategic partnerships
            </p>

            <h4 class="mt-3 text-[28px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
              {{ activeContent.ctaTitle }}
            </h4>

            <p class="mt-3 max-w-[720px] text-[14px] leading-relaxed text-[#525252]">
              {{ activeContent.ctaDescription }}
            </p>
          </div>

          <a
            href="#"
            class="partner-cta-button"
          >
            Become a Partner
            <span class="text-[20px] leading-none">→</span>
          </a>
        </div>

      </div>

    </section>
  `,
  styles: [`
    .font-main {
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
    }

    .section-eyebrow {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: #0f62fe;
    }

    .partner-tab {
      min-height: 58px;
      background: #ffffff;
      color: #161616;
      font-size: 14px;
      font-weight: 600;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        box-shadow 0.18s ease;
    }

    .partner-tab:hover {
      background: #edf5ff;
      color: #0f62fe;
    }

    .active-tab {
      background: #0f62fe !important;
      color: #ffffff !important;
      box-shadow: inset 0 -4px 0 #0043ce;
    }

    .single-partner-block {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      background: #ffffff;
      padding: 24px;
    }

    @media (min-width: 1024px) {
      .single-partner-block {
        grid-template-columns: 0.9fr 1.6fr;
        padding: 28px;
      }
    }

    .partner-intro {
      background: #f8fafc;
      padding: 24px;
    }

    .partner-board {
      background: #ffffff;
      padding: 0;
    }

    .compact-metric {
      min-height: 92px;
      background: #ffffff;
      padding: 18px;
    }

    .metric-value {
      font-size: 28px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.05em;
      color: #161616;
    }

    .metric-label {
      margin-top: 12px;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.35;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #6f6f6f;
    }

    .partner-logo-card {
      min-height: 92px;
      display: flex;
      align-items: center;
      gap: 14px;
      background: #f8fafc;
      padding: 16px;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .partner-logo-card:hover {
      background: #edf5ff;
      box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
      transform: translateY(-2px);
    }

    .partner-mark {
      width: 44px;
      height: 44px;
      background: #edf5ff;
      color: #0f62fe;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .partner-cta {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: #ffffff;
      padding: 24px;
    }

    @media (min-width: 1024px) {
      .partner-cta {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 28px;
      }
    }

    .partner-cta-button {
      display: inline-flex;
      min-width: 210px;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      background: #0f62fe;
      padding: 14px 22px;
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
      transition: background 0.18s ease;
    }

    .partner-cta-button:hover {
      background: #0043ce;
    }

    @media (max-width: 1023px) {
      .partner-tab {
        min-height: 54px;
        font-size: 13px;
      }

      .single-partner-block {
        padding: 18px;
      }

      .partner-intro {
        padding: 20px;
      }

      .partner-cta {
        padding: 20px;
      }
    }
  `]
})
export class PartnerLogoSectionComponent {
  activeTab: PartnerTab['label'] = 'Employers';

  tabs: PartnerTab[] = [
    { label: 'Employers' },
    { label: 'Universities' },
    { label: 'Institutions' },
    { label: 'Agents' }
  ];

  tabContent: Record<PartnerTab['label'], TabContent> = {
    Employers: {
      heading: 'AltusCareer employer hiring network',
      description:
        'AltusCareer connects employers and recruitment partners with screened candidates for Ausbildung, healthcare, hospitality, IT, logistics, retail and skilled workforce pathways.',
      directoryDescription:
        'Display employer partners, sector hiring networks, workforce channels and recruitment collaborators.',
      ctaTitle: 'Become an AltusCareer employer partner',
      ctaDescription:
        'Partner with AltusCareer to access trained, documented and career-ready candidates for Germany, Europe and Gulf workforce requirements.'
    },
    Universities: {
      heading: 'AltusCareer study abroad university network',
      description:
        'AltusCareer supports students with university discovery, course comparison, admission guidance, documentation, visa readiness and study abroad counselling.',
      directoryDescription:
        'Display universities, study abroad partners, pathway providers and higher education networks.',
      ctaTitle: 'Become an AltusCareer university partner',
      ctaDescription:
        'Partner with AltusCareer to reach qualified students for undergraduate, postgraduate, medicine, pathway and employability-linked study abroad programmes.'
    },
    Institutions: {
      heading: 'AltusCareer school and training institution network',
      description:
        'AltusCareer works with schools, colleges, coaching centres, German language academies and training institutions for awareness, counselling, language training and documentation support.',
      directoryDescription:
        'Display schools, training centres, language academies, counselling centres and institutional feeder partners.',
      ctaTitle: 'Become an AltusCareer institution partner',
      ctaDescription:
        'Partner with AltusCareer for German language training, Ausbildung awareness, school seminars, student counselling and local centre activation.'
    },
    Agents: {
      heading: 'AltusCareer agent and channel partner network',
      description:
        'AltusCareer works with agents, franchise partners, freelance counsellors, student ambassadors, parent referral partners and regional BDMs to scale ethical candidate sourcing.',
      directoryDescription:
        'Display agents, franchise channels, student ambassadors, referral partners and regional business development partners.',
      ctaTitle: 'Become an AltusCareer channel partner',
      ctaDescription:
        'Become a channel partner for Ausbildung, jobs, study abroad, German training and Gulf-Europe career mobility pathways.'
    }
  };

  partners: PartnerLogo[] = [
    {
      id: 'emp-1',
      name: 'AltusCareer Employer Desk',
      short: 'AC',
      category: 'Employers'
    },
    {
      id: 'emp-2',
      name: 'euRecruiter Network',
      short: 'ER',
      category: 'Employers'
    },
    {
      id: 'emp-3',
      name: 'Healthcare Hiring Desk',
      short: 'HH',
      category: 'Employers'
    },
    {
      id: 'emp-4',
      name: 'Hospitality Talent Desk',
      short: 'HT',
      category: 'Employers'
    },
    {
      id: 'emp-5',
      name: 'Logistics Workforce Desk',
      short: 'LW',
      category: 'Employers'
    },
    {
      id: 'emp-6',
      name: 'IT Career Desk',
      short: 'IT',
      category: 'Employers'
    },

    {
      id: 'uni-1',
      name: 'myUniApply',
      short: 'MUA',
      category: 'Universities'
    },
    {
      id: 'uni-2',
      name: 'myUniAssist',
      short: 'MUS',
      category: 'Universities'
    },
    {
      id: 'uni-3',
      name: 'Study-Medicine.eu',
      short: 'SM',
      category: 'Universities'
    },
    {
      id: 'uni-4',
      name: 'German Public University Desk',
      short: 'GPU',
      category: 'Universities'
    },
    {
      id: 'uni-5',
      name: 'Applied Sciences Desk',
      short: 'AS',
      category: 'Universities'
    },
    {
      id: 'uni-6',
      name: 'Study Abroad Pathway Desk',
      short: 'SAP',
      category: 'Universities'
    },

    {
      id: 'ins-1',
      name: 'Career360 Academy',
      short: 'CA',
      category: 'Institutions'
    },
    {
      id: 'ins-2',
      name: 'AltusCareer Counselling Centres',
      short: 'CC',
      category: 'Institutions'
    },
    {
      id: 'ins-3',
      name: 'German Language Training Desk',
      short: 'GL',
      category: 'Institutions'
    },
    {
      id: 'ins-4',
      name: 'School Partnership Desk',
      short: 'SP',
      category: 'Institutions'
    },
    {
      id: 'ins-5',
      name: 'College Seminar Network',
      short: 'CS',
      category: 'Institutions'
    },
    {
      id: 'ins-6',
      name: 'Documentation Support Centres',
      short: 'DS',
      category: 'Institutions'
    },

    {
      id: 'agt-1',
      name: 'AltusCareer Franchise Partners',
      short: 'AF',
      category: 'Agents'
    },
    {
      id: 'agt-2',
      name: 'Regional BDM Network',
      short: 'BDM',
      category: 'Agents'
    },
    {
      id: 'agt-3',
      name: 'Student Ambassador Network',
      short: 'SA',
      category: 'Agents'
    },
    {
      id: 'agt-4',
      name: 'Freelance Career Advisors',
      short: 'FA',
      category: 'Agents'
    },
    {
      id: 'agt-5',
      name: 'Parent Referral Partners',
      short: 'PR',
      category: 'Agents'
    },
    {
      id: 'agt-6',
      name: 'Placement Officer Network',
      short: 'PO',
      category: 'Agents'
    }
  ];

  get activeContent(): TabContent {
    return this.tabContent[this.activeTab];
  }

  setTab(tab: PartnerTab['label']) {
    this.activeTab = tab;
  }

  filteredPartners() {
    return this.partners.filter(partner => partner.category === this.activeTab);
  }
}