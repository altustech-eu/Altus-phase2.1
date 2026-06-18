import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main relative overflow-hidden bg-white text-[#161616]">

      <!-- IBM Grid Background -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.55]">
        <div class="absolute bottom-0 top-0 left-[8%] border-l border-[#e0e0e0]"></div>
        <div class="absolute bottom-0 top-0 left-[24%] border-l border-[#e0e0e0]"></div>
        <div class="absolute bottom-0 top-0 left-[40%] border-l border-[#e0e0e0]"></div>
        <div class="absolute bottom-0 top-0 left-[56%] border-l border-[#e0e0e0]"></div>
        <div class="absolute bottom-0 top-0 left-[72%] border-l border-[#e0e0e0]"></div>
        <div class="absolute bottom-0 top-0 left-[88%] border-l border-[#e0e0e0]"></div>
      </div>

      <!-- Hero Container -->
      <div class="relative z-10 mx-auto grid min-h-[580px] max-w-[1584px] grid-cols-1 lg:grid-cols-12">

        <!-- Left Content -->
        <div class="flex flex-col justify-center border-b border-[#e0e0e0] px-6 py-12 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <!-- Audience Switch -->
          <div class="mb-8 inline-grid w-full max-w-[420px] grid-cols-2 border border-[#c6c6c6] bg-white">
            <button
              type="button"
              (click)="setMode('employer')"
              class="mode-tab"
              [class.active-tab]="mode === 'employer'"
            >
              For Employer
            </button>

            <button
              type="button"
              (click)="setMode('employee')"
              class="mode-tab border-l border-[#c6c6c6]"
              [class.active-tab]="mode === 'employee'"
            >
              For Candidate
            </button>
          </div>

          <p class="section-eyebrow">
            Career Pathway Platform
          </p>

          <h1 class="mt-5 max-w-[920px] text-[44px] font-normal leading-[1.02] tracking-[-0.065em] text-[#161616] sm:text-[58px] lg:text-[60px] xl:text-[60px]">
            Your career pathway for
            <span class="block text-[#0f62fe]">
              Germany, Europe and Gulf
            </span>
          </h1>

          <p class="mt-7 max-w-[720px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
            Explore Ausbildung programmes, international jobs, study abroad options,
            German training and guided career support based on your country,
            qualification, language level and target destination.
          </p>

          <!-- CTA Buttons -->
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              class="primary-btn"
            >
              {{ mode === 'employer' ? 'Hire Trainees' : 'Check Eligibility' }}
              <span>→</span>
            </button>

            <button
              type="button"
              class="secondary-btn"
            >
              {{ mode === 'employer' ? 'View Talent Pipeline' : 'Explore Sectors' }}
              <span>→</span>
            </button>
          </div>

         

        </div>

        <!-- Right Visual -->
        <div class="relative flex min-h-[520px] items-center justify-center bg-[#f4f4f4] px-6 py-10 lg:col-span-5 lg:px-10 lg:py-14 xl:px-12">

          <div class="relative w-full max-w-[620px]">

            <!-- Image -->
            <div class="relative overflow-hidden border border-[#c6c6c6] bg-[#161616]">
              <img
                src="/assets/heroab.webp"
                alt="Ausbildung candidates in Germany"
                class="h-[360px] w-full object-cover object-center lg:h-[520px]"
                loading="eager"
                fetchpriority="high"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

              <div class="absolute left-5 top-5 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                Ausbildung Germany
              </div>

              <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  Pathway sectors
                </p>

                <h3 class="mt-3 max-w-[440px] text-[30px] font-normal leading-tight tracking-[-0.05em]">
                  Healthcare, IT, Hospitality, Retail, Culinary and Logistics
                </h3>
              </div>
            </div>

            <!-- Floating IBM Card -->
            <div class="absolute -bottom-6 left-5 hidden max-w-[320px] border border-[#c6c6c6] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.14)] lg:block">
              <p class="section-eyebrow">
                Guided Journey
              </p>

              <p class="mt-3 text-[18px] font-normal leading-tight tracking-[-0.035em] text-[#161616]">
                Match eligibility, language readiness, country preference and career outcome.
              </p>
            </div>

          </div>

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

    .mode-tab {
      min-height: 46px;
      background: #ffffff;
      color: #525252;
      font-size: 13px;
      font-weight: 600;
      transition:
        background 0.18s ease,
        color 0.18s ease;
    }

    .mode-tab:hover {
      background: #edf5ff;
      color: #0f62fe;
    }

    .active-tab {
      background: #0f62fe !important;
      color: #ffffff !important;
    }

    .primary-btn {
      display: inline-flex;
      min-height: 50px;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      background: #0f62fe;
      padding: 0 22px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      transition: background 0.18s ease;
    }

    .primary-btn:hover {
      background: #0043ce;
    }

    .secondary-btn {
      display: inline-flex;
      min-height: 50px;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 0 22px;
      color: #161616;
      font-size: 14px;
      font-weight: 600;
      transition:
        border-color 0.18s ease,
        background 0.18s ease,
        color 0.18s ease;
    }

    .secondary-btn:hover {
      border-color: #0f62fe;
      background: #edf5ff;
      color: #0f62fe;
    }

    .metric-box {
      min-height: 112px;
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

    @media (max-width: 640px) {
      .primary-btn,
      .secondary-btn {
        width: 100%;
      }

      .metric-box {
        min-height: 90px;
      }
    }
  `]
})
export class HeroComponent {
  mode: 'employer' | 'employee' = 'employee';

  setMode(selectedMode: 'employer' | 'employee'): void {
    this.mode = selectedMode;
  }
}