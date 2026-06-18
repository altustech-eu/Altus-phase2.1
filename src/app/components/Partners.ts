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
              Partner Ecosystem
            </p>

            <h2 class="mt-3 max-w-[760px] text-[34px] font-normal leading-[1.06] tracking-[-0.055em] text-[#161616] lg:text-[48px]">
              Partners for employers, universities, institutions and agents
            </h2>
          </div>

          <p class="max-w-[520px] text-[14px] leading-relaxed text-[#525252]">
            Manage strategic relationships across hiring partners, university networks,
            training institutions, agents and regional business development channels.
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
              Career360 partner network
            </h3>

            <p class="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#525252]">
              A structured partner ecosystem supports Ausbildung, international jobs,
              study abroad, German language training, employer recruitment, school tie-ups
              and institutional growth.
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
              Learn partner programmes
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
                Display verified partners, category, relationship type and activation status.
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
              Become a Career360 partner
            </h4>

            <p class="mt-3 max-w-[720px] text-[14px] leading-relaxed text-[#525252]">
              Partner for Ausbildung programmes, international jobs, study abroad options,
              German training, employer recruitment and country-specific career support.
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

  partners: PartnerLogo[] = [
    {
      id: 'p1',
      name: 'Altus Career',
      short: 'AC',
      category: 'Employers'
    },
    {
      id: 'p2',
      name: 'EU Talent Group',
      short: 'ET',
      category: 'Employers'
    },
    {
      id: 'p3',
      name: 'The Future Law',
      short: 'FL',
      category: 'Employers'
    },
    {
      id: 'p4',
      name: 'UPES Global',
      short: 'UG',
      category: 'Universities'
    },
    {
      id: 'p5',
      name: 'German Academy',
      short: 'GA',
      category: 'Institutions'
    },
    {
      id: 'p6',
      name: 'University Connect',
      short: 'UC',
      category: 'Universities'
    },
    {
      id: 'p7',
      name: 'Career360 Group',
      short: 'C360',
      category: 'Employers'
    },
    {
      id: 'p8',
      name: 'International School',
      short: 'IS',
      category: 'Institutions'
    },
    {
      id: 'p9',
      name: 'UAE Future Jobs',
      short: 'UFJ',
      category: 'Agents'
    },
    {
      id: 'p10',
      name: 'Global Recruiters',
      short: 'GR',
      category: 'Agents'
    },
    {
      id: 'p11',
      name: 'Medica Careers',
      short: 'MC',
      category: 'Employers'
    },
    {
      id: 'p12',
      name: 'Peak Academy',
      short: 'PA',
      category: 'Institutions'
    }
  ];

  setTab(tab: PartnerTab['label']) {
    this.activeTab = tab;
  }

  filteredPartners() {
    const filtered = this.partners.filter(partner => partner.category === this.activeTab);

    if (filtered.length >= 6) {
      return filtered;
    }

    return this.partners.slice(0, 12);
  }
}