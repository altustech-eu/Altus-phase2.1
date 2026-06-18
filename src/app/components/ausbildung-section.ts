import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListCategory {
  id: string;
  title: string;
  description: string;
  metric: string;
  label: string;
}

interface SectorCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

@Component({
  selector: 'app-ausbildung-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-[#f4f4f4] text-[#161616]">

      <div class="bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">

            <!-- Left Decision Panel -->
            <aside class="lg:col-span-4">

              <div class="sticky top-8 border border-[#c6c6c6] bg-white">

                <div class="border-b border-[#e0e0e0] p-5">
                  <p class="section-eyebrow">
                    Ausbildung Germany
                  </p>

                  <h3 class="mt-3 text-[28px] font-normal leading-[1.08] tracking-[-0.05em] text-[#161616]">
                    Paid vocational training pathway to Germany
                  </h3>

                  <p class="mt-3 text-[13px] leading-relaxed text-[#525252]">
                    Explore eligibility, German readiness, sector fit, employer preparation and career outcome.
                  </p>

                  <div class="mt-5 grid grid-cols-3 border border-[#c6c6c6] bg-[#f4f4f4]">
                    <div class="metric-box">
                      <p class="metric-value">A1-B1</p>
                      <p class="metric-label">Language</p>
                    </div>

                    <div class="metric-box">
                      <p class="metric-value">3 yrs</p>
                      <p class="metric-label">Training</p>
                    </div>

                    <div class="metric-box">
                      <p class="metric-value">Paid</p>
                      <p class="metric-label">Work</p>
                    </div>
                  </div>
                </div>

                <!-- Accordion -->
                <div>
                  @for (category of categories; track category.id) {
                    <button
                      type="button"
                      (click)="setActive(category.id)"
                      class="group w-full border-b border-[#e0e0e0] text-left transition-colors"
                      [class.bg-[#edf5ff]]="activeCategoryId === category.id"
                      [class.bg-white]="activeCategoryId !== category.id"
                    >

                      <div class="flex items-start gap-4 p-4">

                        <div
                          class="flex h-10 w-10 shrink-0 items-center justify-center border text-[12px] font-semibold transition-colors"
                          [class.border-[#0f62fe]]="activeCategoryId === category.id"
                          [class.bg-[#0f62fe]]="activeCategoryId === category.id"
                          [class.text-white]="activeCategoryId === category.id"
                          [class.border-[#c6c6c6]]="activeCategoryId !== category.id"
                          [class.bg-white]="activeCategoryId !== category.id"
                          [class.text-[#525252]]="activeCategoryId !== category.id"
                        >
                          {{ category.metric }}
                        </div>

                        <div class="min-w-0 flex-1">
                          <div class="flex items-start justify-between gap-4">
                            <div>
                              <p class="text-[15px] font-normal leading-tight tracking-[-0.025em] text-[#161616]">
                                {{ category.title }}
                              </p>

                              <p class="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6f6f6f]">
                                {{ category.label }}
                              </p>
                            </div>

                            <span
                              class="mt-1 text-[22px] font-light leading-none transition-transform duration-300"
                              [class.rotate-45]="activeCategoryId === category.id"
                              [class.text-[#0f62fe]]="activeCategoryId === category.id"
                              [class.text-[#6f6f6f]]="activeCategoryId !== category.id"
                            >
                              +
                            </span>
                          </div>

                          <div
                            class="overflow-hidden transition-all duration-500 ease-in-out"
                            [style.maxHeight]="activeCategoryId === category.id ? '150px' : '0px'"
                            [style.opacity]="activeCategoryId === category.id ? '1' : '0'"
                          >
                            <p class="mt-3 text-[12.5px] leading-relaxed text-[#525252]">
                              {{ category.description }}
                            </p>
                          </div>
                        </div>

                      </div>
                    </button>
                  }
                </div>

                <!-- CTA Row -->
                <div class="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center bg-[#0f62fe] px-4 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#0043ce]"
                  >
                    Check eligibility
                  </a>

                  <a
                    href="#"
                    class="inline-flex items-center justify-center border border-[#c6c6c6] bg-white px-4 py-2.5 text-[12.5px] font-semibold text-[#161616] transition-colors hover:bg-[#f4f4f4]"
                  >
                    View sectors
                  </a>
                </div>

              </div>
            </aside>

            <!-- Right Sector Area -->
            <div class="lg:col-span-8">

              <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p class="section-eyebrow">
                    Sector discovery
                  </p>

                  <h3 class="mt-3 text-[32px] font-normal leading-[1.08] tracking-[-0.05em] text-[#161616] lg:text-[44px]">
                    Choose the right Ausbildung sector
                  </h3>
                </div>

                <p class="max-w-[520px] text-[14px] leading-relaxed text-[#525252]">
                  Image-led sector discovery for healthcare, IT, hospitality, retail, culinary and logistics pathways.
                </p>
              </div>

              <!-- Right Side Image-Only Cards -->
              <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                @for (card of sectorCards.slice(0, 6); track card.id) {
                  <article
                    class="sector-image-card group"
                    [attr.aria-label]="card.title"
                  >
                    <img
                      [src]="card.imageUrl"
                      [alt]="card.title"
                      class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </article>
                }

              </div>


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

    .metric-box {
      min-height: 88px;
      border-right: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 14px;
    }

    .metric-box:last-child {
      border-right: 0;
    }

    .metric-value {
      font-size: 21px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.05em;
      color: #161616;
    }

    .metric-label {
      margin-top: 10px;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #6f6f6f;
    }

    .sector-image-card {
      position: relative;
      height: 275px;
      overflow: hidden;
      border: 1px solid #c6c6c6;
      background: #e0e0e0;
      cursor: pointer;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .sector-image-card:hover {
      border-color: #0f62fe;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.10);
      transform: translateY(-2px);
    }

    .journey-box {
      min-height: 125px;
      background: #ffffff;
      padding: 20px;
    }

    .journey-number {
      font-size: 24px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.04em;
      color: #0f62fe;
    }

    .journey-title {
      margin-top: 14px;
      font-size: 17px;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.035em;
      color: #161616;
    }

    .journey-text {
      margin-top: 8px;
      font-size: 12.5px;
      line-height: 1.55;
      color: #525252;
    }

    @media (max-width: 768px) {
      .metric-box {
        border-right: 0;
        border-bottom: 1px solid #c6c6c6;
      }

      .metric-box:last-child {
        border-bottom: 0;
      }

      .sector-image-card {
        height: 260px;
      }
    }
  `]
})
export class AusbildungSectionComponent {
  activeCategoryId = 'ausbildung-4';

  setActive(id: string): void {
    this.activeCategoryId = id;
  }

  categories: ListCategory[] = [
    {
      id: 'ausbildung-1',
      title: 'What is Ausbildung?',
      label: 'Foundation',
      metric: '01',
      description: 'Ausbildung is Germany’s structured vocational training pathway where candidates learn through classroom training and employer-based practical work. It is ideal for students and young professionals who want an employment-linked route instead of a purely academic university pathway.'
    },
    {
      id: 'ausbildung-2',
      title: 'Eligibility & German Readiness',
      label: 'Readiness',
      metric: '02',
      description: 'Evaluate your qualification, age, academic background, German language level, passport status, documentation readiness and sector fit before choosing the right Ausbildung program.'
    },
    {
      id: 'ausbildung-3',
      title: 'Sector Selection',
      label: 'Decision',
      metric: '03',
      description: 'Choose the right sector based on aptitude, language comfort, work environment preference, long-term career goals, salary expectations and employer demand in Germany.'
    },
    {
      id: 'ausbildung-4',
      title: 'Training to Placement Journey',
      label: 'Execution',
      metric: '04',
      description: 'The journey includes counselling, German language training, profile preparation, employer interview readiness, document processing, training contract support, visa guidance and pre-departure preparation.'
    },
    {
      id: 'ausbildung-5',
      title: 'Cost, Timeline & Career Outcome',
      label: 'Outcome',
      metric: '05',
      description: 'Understand the complete timeline from German language preparation to employer interview, visa processing, travel, onboarding in Germany, training stipend, career progression and long-term settlement possibilities.'
    }
  ];

  sectorCards: SectorCard[] = [
    {
      id: 'Sector 01',
      title: 'Healthcare / Nursing',
      subtitle: 'High-demand care pathway',
      imageUrl: '/assets/Aus8.webp'
    },
    {
      id: 'Sector 02',
      title: 'IT & Software',
      subtitle: 'Digital career route',
      imageUrl: '/assets/Aus2.webp'
    },
    {
      id: 'Sector 03',
      title: 'Hotel & Hospitality',
      subtitle: 'Service excellence track',
      imageUrl: '/assets/Aus3.webp'
    },
    {
      id: 'Sector 04',
      title: 'Retail & Sales',
      subtitle: 'Customer-facing pathway',
      imageUrl: '/assets/Aus4.webp'
    },
    {
      id: 'Sector 05',
      title: 'Culinary / Chef',
      subtitle: 'Professional kitchen route',
      imageUrl: '/assets/Aus5.webp'
    },
    {
      id: 'Sector 06',
      title: 'Logistics / Warehouse',
      subtitle: 'Supply chain career path',
      imageUrl: '/assets/Aus8.webp'
    }
  ];

  imageError(event: Event, imageUrl: string): void {
    console.error('Image failed to load:', imageUrl);
  }
}