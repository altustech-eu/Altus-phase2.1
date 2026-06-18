import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="font-main w-full bg-white text-[#161616]">

      <!-- CTA Bar -->
      <div class="bg-[#f4f4f4]">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12 lg:px-12 lg:py-10 xl:px-16 2xl:px-20">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              AltusCareer
            </p>

            <h2 class="mt-3 max-w-[760px] text-[34px] font-normal leading-[1.06] tracking-[-0.055em] text-[#161616] lg:text-[48px]">
              Your journey with AltusCareer continues here
            </h2>
          </div>

          <div class="flex flex-col justify-end gap-4 lg:col-span-5">
            <p class="max-w-[560px] text-[14px] leading-relaxed text-[#525252] lg:text-[16px]">
              Choose your pathway and continue to the right programme, service, resource or registration page.
            </p>

            <div class="relative w-full md:w-[320px]">
              <select
                class="footer-select"
                aria-label="Select user type"
              >
                <option value="" disabled selected>I am</option>
                <option value="student">A Student</option>
                <option value="professional">A Professional</option>
                <option value="partner">A Partner</option>
                <option value="employer">An Employer</option>
                <option value="ambassador">A Career Ambassador</option>
              </select>

              <div class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#525252]">
                ↓
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Main Footer -->
      <div class="bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-12 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

          <!-- Brand Block -->
          <div class="lg:col-span-4">
            <button
              type="button"
              routerLink="/home"
              class="brand-logo"
              aria-label="Go to home page"
            >
              Altus<span>Career</span>
            </button>

            <p class="mt-5 max-w-[420px] text-[14px] leading-relaxed text-[#525252]">
              Career pathway platform for Ausbildung, international jobs, study abroad,
              German language training, employers, ambassadors and student services.
            </p>

           

            <div class="mt-7 flex items-center gap-3">
              <a href="#" class="social-link" aria-label="LinkedIn">
                in
              </a>

              <a href="#" class="social-link" aria-label="Instagram">
                ig
              </a>

              <a href="#" class="social-link" aria-label="Facebook">
                f
              </a>

              <a href="#" class="social-link" aria-label="YouTube">
                yt
              </a>
            </div>
          </div>

          <!-- Sitemap Columns -->
          <div class="lg:col-span-8">
            <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p class="section-eyebrow">
                  Site map
                </p>

                <h3 class="mt-2 text-[30px] font-normal leading-tight tracking-[-0.045em] text-[#161616] lg:text-[40px]">
                  Quick page redirection
                </h3>
              </div>

              <button
                type="button"
                routerLink="/registration"
                class="footer-primary-link"
              >
                Start Registration
                <span>→</span>
              </button>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              @for (column of footerColumns; track column.title) {
                <div class="sitemap-column">
                  <h4 class="sitemap-title">
                    {{ column.title }}
                  </h4>

                  <ul class="mt-4 flex flex-col gap-2">
                    @for (link of column.links; track link.label) {
                      <li>
                        <a
                          [routerLink]="link.route"
                          class="sitemap-link"
                        >
                          <span>{{ link.label }}</span>
                          <span class="arrow">→</span>
                        </a>
                      </li>
                    }
                  </ul>
                </div>
              }
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bg-[#f4f4f4]">
        <div class="mx-auto flex max-w-[1584px] flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16 2xl:px-20">

          <div class="flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#525252]">
            <span>
              Accessibility: partially compliant
            </span>

            <a routerLink="/home" class="bottom-link">
              Site map
            </a>

            <a href="#" class="bottom-link">
              Cookie Policy
            </a>

            <a href="#" class="bottom-link">
              Legal Notice
            </a>
          </div>

          <div class="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#525252]">
            © ALTUS CAREER 2026
          </div>

        </div>
      </div>

    </footer>
  `,
  styles: [`
    .font-main {
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
    }

    .section-eyebrow {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: #0f62fe;
    }

    .footer-select {
      width: 100%;
      height: 48px;
      appearance: none;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 0 44px 0 16px;
      color: #161616;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition:
        border-color 0.18s ease,
        box-shadow 0.18s ease;
    }

    .footer-select:focus {
      border-color: #0f62fe;
      box-shadow: inset 0 0 0 1px #0f62fe;
    }

    .brand-logo {
      display: inline-flex;
      align-items: baseline;
      gap: 4px;
      color: #161616;
      font-size: 34px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.055em;
      text-transform: uppercase;
    }

    .brand-logo span {
      color: #0f62fe;
    }

    .metric-box {
      min-height: 104px;
      background: #ffffff;
      padding: 18px;
    }

    .metric-value {
      font-size: 30px;
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

    .social-link {
      display: flex;
      height: 40px;
      width: 40px;
      align-items: center;
      justify-content: center;
      background: #f4f4f4;
      color: #161616;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      transition:
        background 0.18s ease,
        color 0.18s ease;
    }

    .social-link:hover {
      background: #0f62fe;
      color: #ffffff;
    }

    .footer-primary-link {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      background: #0f62fe;
      padding: 14px 20px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      transition: background 0.18s ease;
    }

    .footer-primary-link:hover {
      background: #0043ce;
    }

    .sitemap-column {
      min-height: 230px;
      border: 0;
      background: #ffffff;
      padding: 20px;
      transition: background 0.18s ease;
    }

    .sitemap-column:hover {
      background: #f8fafc;
    }

    .sitemap-title {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.035em;
      color: #161616;
    }

    .sitemap-link {
      display: flex;
      min-height: 32px;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border: 0;
      color: #525252;
      font-size: 13px;
      font-weight: 500;
      transition:
        color 0.18s ease,
        padding-left 0.18s ease;
    }

    .sitemap-link:hover {
      color: #0f62fe;
      padding-left: 4px;
    }

    .sitemap-link .arrow {
      color: #0f62fe;
      font-size: 16px;
      line-height: 1;
      opacity: 0;
      transition: opacity 0.18s ease;
    }

    .sitemap-link:hover .arrow {
      opacity: 1;
    }

    .bottom-link {
      color: #525252;
      transition: color 0.18s ease;
    }

    .bottom-link:hover {
      color: #0f62fe;
    }

    @media (max-width: 768px) {
      .sitemap-column {
        min-height: auto;
        padding: 12px 0;
      }

      .footer-primary-link {
        width: 100%;
      }
    }
  `]
})
export class FooterComponent {
  footerColumns: FooterColumn[] = [
    {
      title: 'Programmes',
      links: [
        {
          label: 'Ausbildung',
          route: '/ausbildung'
        },
        {
          label: 'Jobs',
          route: '/jobs'
        },
        {
          label: 'Study Abroad',
          route: '/study-abroad'
        },
        {
          label: 'German Language Training',
          route: '/german-language-training'
        }
      ]
    },
    {
      title: 'Stakeholders',
      links: [
        {
          label: 'Employers',
          route: '/employers'
        },
        {
          label: 'Career Ambassadors',
          route: '/career-ambassadors'
        },
        {
          label: 'Registration',
          route: '/registration'
        },
        {
          label: 'Forms Thank You',
          route: '/forms-thank-you'
        }
      ]
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'Resources',
          route: '/resources'
        },
        {
          label: 'Design System Lite',
          route: '/design-system-lite'
        },
        {
          label: 'Mobile Responsive Screens',
          route: '/mobile-responsive-screens'
        },
        {
          label: 'Home',
          route: '/home'
        }
      ]
    },
    {
      title: 'Quick Actions',
      links: [
        {
          label: 'Start Journey',
          route: '/registration'
        },
        {
          label: 'Explore Jobs',
          route: '/jobs'
        },
        {
          label: 'Find Study Options',
          route: '/study-abroad'
        },
        {
          label: 'Learn German',
          route: '/german-language-training'
        }
      ]
    }
  ];
}