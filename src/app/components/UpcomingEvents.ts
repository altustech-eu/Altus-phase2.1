import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ResourceTab = 'blogs' | 'insights' | 'events';

interface MagazineArticle {
  id: string;
  image: string;
  category: string;
  title: string;
  authorName: string;
  authorImage: string;
}

interface GalleryPerson {
  id: string;
  image: string;
  top: string;
  left: string;
  width: string;
  height: string;
  delay: string;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616] overflow-hidden">

      <!-- Resources -->
      <div class="border-y border-[#e0e0e0] bg-white">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <!-- Header -->
          <div class="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div class="lg:col-span-7">
              <p class="section-eyebrow">
                Resources
              </p>

              <h2 class="mt-4 max-w-[820px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
                Latest blogs, insights and events for career decisions
              </h2>
            </div>

            <div class="lg:col-span-5">
              <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
                A dedicated space for news, market intelligence, webinars, workshops and pathway guidance
                across Ausbildung, jobs, study abroad and German training.
              </p>
            </div>
          </div>

          <!-- Tabs -->
          <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p class="text-[14px] leading-relaxed text-[#525252]">
              Select a resource type to browse curated content.
            </p>

            <div class="grid w-full grid-cols-3 border border-[#0f62fe] bg-white lg:w-auto">
              <button
                type="button"
                class="resource-tab"
                [class.active-tab]="activeTab === 'blogs'"
                (click)="setActiveTab('blogs')"
              >
                Blogs
              </button>

              <button
                type="button"
                class="resource-tab"
                [class.active-tab]="activeTab === 'insights'"
                (click)="setActiveTab('insights')"
              >
                Insights
              </button>

              <button
                type="button"
                class="resource-tab"
                [class.active-tab]="activeTab === 'events'"
                (click)="setActiveTab('events')"
              >
                Events
              </button>
            </div>
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            @for (article of activeArticles; track article.id) {
              <article class="resource-card group cursor-pointer">

                <!-- Image -->
                <div class="resource-card-image">
                  <img
                    [src]="article.image"
                    [alt]="article.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

                  <div class="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                    {{ activeTab }}
                  </div>
                </div>

                <!-- Content -->
                <div class="relative p-5">

                  <!-- Author -->
                  <div class="-mt-11 mb-5 flex items-center gap-3">
                    <div class="h-[54px] w-[54px] shrink-0 border-[3px] border-white bg-white shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
                      <img
                        [src]="article.authorImage"
                        [alt]="article.authorName"
                        class="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div class="min-w-0 pt-5">
                      <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f6f6f]">
                        Author
                      </p>

                      <p class="truncate text-[13px] font-semibold text-[#161616]">
                        {{ article.authorName }}
                      </p>
                    </div>
                  </div>

                  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f62fe]">
                    {{ article.category }}
                  </p>

                  <h3 class="mt-4 min-h-[86px] text-[22px] font-normal leading-tight tracking-[-0.04em] text-[#161616]">
                    {{ article.title }}
                  </h3>

                  <div class="mt-6 flex items-center justify-between border-t border-[#e0e0e0] pt-4">
                    <span class="text-[13px] font-semibold text-[#0f62fe]">
                      Read resource
                    </span>

                    <span class="text-[24px] font-light leading-none text-[#0f62fe]">
                      ↗
                    </span>
                  </div>
                </div>

              </article>
            }

          </div>

        </div>
      </div>

      <!-- Testimonials / Gallery -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <div class="relative min-h-[520px] overflow-hidden border border-[#c6c6c6] bg-white md:min-h-[590px]">

            <!-- IBM Grid Lines -->
            <div class="pointer-events-none absolute inset-0 opacity-[0.55]">
              <div class="absolute bottom-0 top-0 left-[12%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[24%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[36%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[48%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[60%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[72%] border-l border-[#e0e0e0]"></div>
              <div class="absolute bottom-0 top-0 left-[84%] border-l border-[#e0e0e0]"></div>
            </div>

            <!-- Hanging Gallery -->
            @for (person of galleryPeople; track person.id) {
              <div
                class="floating-card absolute z-20 hidden md:block"
                [style.top]="person.top"
                [style.left]="person.left"
                [style.width]="person.width"
                [style.height]="person.height"
                [style.animationDelay]="person.delay"
              >
                <div class="absolute -top-[70px] left-1/2 h-[70px] w-px -translate-x-1/2 bg-[#c6c6c6]"></div>

                <div class="h-full w-full border border-[#c6c6c6] bg-white p-1 shadow-[0_14px_35px_rgba(15,23,42,0.14)]">
                  <img
                    [src]="person.image"
                    alt="Professional testimonial"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            }

            <!-- Mobile Gallery -->
            <div class="absolute left-0 right-0 top-6 z-20 px-5 md:hidden">
              <div class="grid grid-cols-4 gap-2">
                @for (person of mobileGalleryPeople; track person.id) {
                  <div class="h-[82px] border border-[#c6c6c6] bg-white p-1">
                    <img
                      [src]="person.image"
                      alt="Professional testimonial"
                      class="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                }
              </div>
            </div>

            <!-- Central Content -->
            <div class="absolute inset-0 z-30 flex items-center justify-center px-6">
              <div class="mt-24 max-w-[720px] text-center md:mt-28">

                <div class="inline-flex bg-[#edf5ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                  Testimonials
                </div>

                <h2 class="mt-5 text-[38px] font-normal leading-[1.02] tracking-[-0.06em] text-[#161616] md:text-[54px] lg:text-[68px]">
                  Trusted by leaders
                  <span class="block text-[#6f6f6f]">
                    from various industries
                  </span>
                </h2>

                <p class="mx-auto mt-5 max-w-[500px] text-[15px] leading-relaxed text-[#525252] md:text-[17px]">
                  Learn why students, professionals, employers and partners trust Career360
                  to support complete customer journeys.
                </p>

                <button
                  type="button"
                  class="mt-8 inline-flex items-center gap-4 bg-[#161616] px-6 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#0f62fe]"
                >
                  Read Success Stories
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>

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

    .resource-tab {
      min-width: 124px;
      height: 42px;
      border-right: 1px solid #0f62fe;
      background: #ffffff;
      color: #0f62fe;
      padding: 0 22px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      transition:
        background 0.18s ease,
        color 0.18s ease;
    }

    .resource-tab:last-child {
      border-right: 0;
    }

    .resource-tab:hover {
      background: #edf5ff;
      color: #0043ce;
    }

    .active-tab {
      background: #0f62fe !important;
      color: #ffffff !important;
    }

    .resource-card {
      min-height: 460px;
      overflow: hidden;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      transition:
        transform 0.22s ease,
        box-shadow 0.22s ease,
        border-color 0.22s ease,
        background 0.22s ease;
    }

    .resource-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      transform: translateY(-2px);
    }

    .resource-card-image {
      position: relative;
      height: 210px;
      overflow: hidden;
      background: #161616;
    }

    .floating-card {
      animation: floatCard 4.5s ease-in-out infinite;
    }

    @keyframes floatCard {
      0%, 100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-8px);
      }
    }

    @media (max-width: 768px) {
      .resource-tab {
        min-width: auto;
        padding: 0 12px;
        font-size: 11px;
      }

      .resource-card {
        min-height: 420px;
      }

      .resource-card-image {
        height: 190px;
      }
    }
  `]
})
export class UpcomingEventsComponent {
  activeTab: ResourceTab = 'blogs';

  resourceData: Record<ResourceTab, MagazineArticle[]> = {
    blogs: [
      {
        id: 'blog-1',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Career Strategy  >  Global Mobility',
        title: 'Client-side vs. Server-side Development: Key Differences and Advantages Explained',
        authorName: 'Nisha Nair',
        authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'blog-2',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Engineering  >  Back-End',
        title: 'Terraform vs. CloudFormation: Choosing the Right IaC Tool',
        authorName: 'Emiliano Angileri',
        authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'blog-3',
        image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Design  >  UX Design',
        title: 'Gestalt Principles: Strategic Design Framework for UI/UX Leaders',
        authorName: 'Adel Elrashsha',
        authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ],

    insights: [
      {
        id: 'insight-1',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Market Intelligence  >  Germany',
        title: 'Germany Talent Demand: Healthcare, Logistics, Hospitality, and Tech Outlook',
        authorName: 'Career360 Research',
        authorImage: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'insight-2',
        image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Data  >  Counselling',
        title: 'How Data-Driven Counselling Improves Student Conversion and Career Fit',
        authorName: 'Anjali Menon',
        authorImage: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'insight-3',
        image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'CRM  >  Automation',
        title: 'From Lead Scoring to Next Best Action: The New Education Advisory Model',
        authorName: 'Rahul Iyer',
        authorImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ],

    events: [
      {
        id: 'event-1',
        image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Events  >  Webinar',
        title: 'Ausbildung in Germany: Live Career Pathway Webinar for Students and Parents',
        authorName: 'Program Team',
        authorImage: 'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'event-2',
        image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Training  >  German Language',
        title: 'German Language Readiness Masterclass for A1, A2, and B1 Learners',
        authorName: 'Academy Team',
        authorImage: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200'
      },
      {
        id: 'event-3',
        image: 'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=600',
        category: 'Career  >  Workshop',
        title: 'Study vs Work vs Ausbildung: Career Decision Workshop',
        authorName: 'Career Advisory Team',
        authorImage: 'https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ]
  };

  galleryPeople: GalleryPerson[] = [
    {
      id: 'person-1',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '95px',
      left: '4%',
      width: '86px',
      height: '110px',
      delay: '0s'
    },
    {
      id: 'person-2',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '50px',
      left: '13%',
      width: '86px',
      height: '126px',
      delay: '0.2s'
    },
    {
      id: 'person-3',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '130px',
      left: '14%',
      width: '92px',
      height: '118px',
      delay: '0.45s'
    },
    {
      id: 'person-4',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '100px',
      left: '25%',
      width: '98px',
      height: '112px',
      delay: '0.15s'
    },
    {
      id: 'person-5',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '58px',
      left: '36%',
      width: '96px',
      height: '118px',
      delay: '0.5s'
    },
    {
      id: 'person-6',
      image: 'https://images.pexels.com/photos/7648317/pexels-photo-7648317.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '118px',
      left: '47%',
      width: '78px',
      height: '90px',
      delay: '0.25s'
    },
    {
      id: 'person-7',
      image: 'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '55px',
      left: '58%',
      width: '94px',
      height: '125px',
      delay: '0.4s'
    },
    {
      id: 'person-8',
      image: 'https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '120px',
      left: '70%',
      width: '86px',
      height: '112px',
      delay: '0.1s'
    },
    {
      id: 'person-9',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '58px',
      left: '82%',
      width: '92px',
      height: '120px',
      delay: '0.35s'
    },
    {
      id: 'person-10',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '95px',
      left: '92%',
      width: '84px',
      height: '116px',
      delay: '0.6s'
    },
    {
      id: 'person-11',
      image: 'https://images.pexels.com/photos/7648042/pexels-photo-7648042.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '220px',
      left: '88%',
      width: '88px',
      height: '118px',
      delay: '0.3s'
    },
    {
      id: 'person-12',
      image: 'https://images.pexels.com/photos/7648272/pexels-photo-7648272.jpeg?auto=compress&cs=tinysrgb&w=400',
      top: '230px',
      left: '3%',
      width: '86px',
      height: '112px',
      delay: '0.55s'
    }
  ];

  get activeArticles(): MagazineArticle[] {
    return this.resourceData[this.activeTab];
  }

  get mobileGalleryPeople(): GalleryPerson[] {
    return this.galleryPeople.slice(0, 8);
  }

  setActiveTab(tab: ResourceTab): void {
    this.activeTab = tab;
  }
}