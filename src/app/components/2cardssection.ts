import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SocialPostCard {
  username: string;
  verified: boolean;
  imageUrl: string;
  flagUrl: string;
  countryName: string;
  theme: 'yellow' | 'grey';
}

interface ServiceCard {
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  iconColor: string;
  svgIcon: SafeHtml;
}

@Component({
  selector: 'app-home-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <!-- 02 Country / Ambassador Carousel -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-16 lg:px-12 xl:px-16 2xl:px-20">

          <div class="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Country advisors
              </p>

              <h3 class="mt-4 text-[36px] font-normal leading-[1.08] tracking-[-0.05em] lg:text-[52px]">
                Choose your destination guide
              </h3>
            </div>

            <p class="max-w-[560px] text-[15px] leading-relaxed text-[#525252]">
              Each card represents a destination-specific pathway advisor who can guide students,
              jobseekers and parents through country, programme and career decisions.
            </p>
          </div>

          <div class="relative">

            <!-- Left Arrow -->
            <button
              type="button"
              class="carousel-nav carousel-nav-left"
              (click)="prevSocialSlide()"
              aria-label="Previous ambassador card"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>

            <!-- Cards Track -->
            <div
              #socialCarouselTrack
              class="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-12 pb-6"
            >

              @for (post of socialPosts; track $index) {
                <article class="w-[250px] shrink-0 snap-start lg:w-[270px] xl:w-[290px]">

                  <div class="advisor-card group">

                    <!-- Image -->
                    <div class="relative h-[245px] overflow-hidden bg-[#e0e0e0]">
                      <img
                        [src]="post.imageUrl"
                        [alt]="post.username"
                        class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        (error)="imageError($event, post.imageUrl)"
                      />

                      <div class="absolute left-4 top-4 border border-white/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                        {{ post.countryName }}
                      </div>
                    </div>

                    <!-- Content -->
                    <div class="p-5">
                      <div class="flex items-start gap-4">

                        <!-- Circular Flag Avatar -->
                        <div class="h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                          <img
                            [src]="post.flagUrl"
                            [alt]="post.countryName + ' flag'"
                            class="h-full w-full rounded-full object-cover"
                            loading="lazy"
                            (error)="imageError($event, post.flagUrl)"
                          />
                        </div>

                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-2">
                            <h3 class="truncate text-[17px] font-normal leading-tight tracking-[-0.03em] text-[#161616]">
                              {{ post.username }}
                            </h3>

                            @if (post.verified) {
                              <svg class="h-4 w-4 shrink-0 text-[#0f62fe] fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l2.2 2.8 3.5-.5 1.1 3.4 3.2 1.6-1.6 3.2 1.6 3.2-3.2 1.6-1.1 3.4-3.5-.5L12 22l-2.2-2.8-3.5.5-1.1-3.4L2 14.7l1.6-3.2L2 8.3l3.2-1.6 1.1-3.4 3.5.5L12 2z"/>
                                <path d="M10.4 15.7L6.9 12.2l1.2-1.2 2.3 2.3 5.5-5.5 1.2 1.2-6.7 6.7z" fill="white"/>
                              </svg>
                            }
                          </div>

                          <p class="mt-2 text-[13px] leading-relaxed text-[#525252]">
                            Destination pathway support
                          </p>
                        </div>
                      </div>

                      <div class="mt-5 grid grid-cols-2 border border-[#e0e0e0]">
                        <button
                          type="button"
                          class="h-[42px] border-r border-[#e0e0e0] bg-[#0f62fe] text-[13px] font-semibold text-white transition-colors hover:bg-[#0043ce]"
                        >
                          Follow
                        </button>

                        <button
                          type="button"
                          class="h-[42px] bg-white text-[13px] font-semibold text-[#161616] transition-colors hover:bg-[#f4f4f4]"
                        >
                          Chat
                        </button>
                      </div>
                    </div>

                  </div>

                </article>
              }

            </div>

            <!-- Right Arrow -->
            <button
              type="button"
              class="carousel-nav carousel-nav-right"
              (click)="nextSocialSlide()"
              aria-label="Next ambassador card"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>

          </div>
        </div>
      </div>

      <!-- 03 Pathway Header -->
      <div class="bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:px-12 xl:px-16 2xl:px-20">

          <div class="lg:col-span-5">
            <p class="section-eyebrow">
              Career pathway configurator
            </p>

            <h2 class="mt-4 text-[36px] font-normal leading-[1.08] tracking-[-0.05em] lg:text-[56px]">
              Choose your career pathway
            </h2>
          </div>

          <div class="lg:col-span-7">
            <p class="max-w-[780px] text-[17px] leading-[1.75] text-[#525252]">
              Explore tailored programmes, service modules, quality tiers and flexible payment options
              designed around education, career goals, destination readiness and long-term mobility.
            </p>
          </div>

        </div>
      </div>

      <!-- 04 Service Cards -->
      <div class="border-y border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-16 lg:px-12 xl:px-16 2xl:px-20">

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            @for (card of serviceCards; track card.title) {
              <article
                role="button"
                tabindex="0"
                (click)="openPathwayProcess(card.title)"
                (keydown.enter)="openPathwayProcess(card.title)"
                (keydown.space)="openPathwayProcess(card.title)"
                class="service-card group"
              >

                <div class="flex h-12 w-12 items-center justify-center border border-[#e0e0e0] bg-white">
                  <span [innerHTML]="card.svgIcon" class="flex items-center justify-center text-[#0f62fe]"></span>
                </div>

                <div class="mt-7">
                  <p class="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0f62fe]">
                    Programme
                  </p>

                  <h3 class="mt-3 text-[25px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
                    {{ card.title }}
                  </h3>

                  <p class="mt-4 text-[14px] leading-relaxed text-[#525252]">
                    {{ card.description }}
                  </p>
                </div>

                <div class="mt-6 border-t border-[#e0e0e0] pt-5">
                  <p class="mini-label">
                    Included modules
                  </p>

                  <ul class="mt-3 space-y-3">
                    @for (feature of card.features; track $index) {
                      <li class="flex items-start gap-3 text-[13px] leading-relaxed text-[#525252]">
                        <span class="mt-2 h-1.5 w-1.5 shrink-0 bg-[#0f62fe]"></span>
                        <span>{{ feature }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <button
                  type="button"
                  class="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0f62fe]"
                  (click)="openPathwayProcess(card.title); $event.stopPropagation()"
                >
                  Configure pathway
                  <svg
                    class="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

              </article>
            }

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

    .stat-box {
      min-height: 150px;
      border-right: 1px solid #c6c6c6;
      border-bottom: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 24px;
    }

    .stat-value {
      font-size: 32px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.05em;
      color: #161616;
    }

    .stat-label {
      margin-top: 14px;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.4;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #525252;
    }

    .advisor-card {
      min-height: 390px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
    }

    .advisor-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    .service-card {
      min-height: 430px;
      cursor: pointer;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 28px;
      display: flex;
      flex-direction: column;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
    }

    .service-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      transform: translateY(-2px);
    }

    .mini-label {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #6f6f6f;
    }

    .carousel-nav {
      position: absolute;
      top: 44%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      color: #161616;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      z-index: 30;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        transform 0.18s ease;
    }

    .carousel-nav:hover {
      background: #0f62fe;
      color: #ffffff;
      border-color: #0f62fe;
      box-shadow: 0 14px 32px rgba(15, 98, 254, 0.28);
    }

    .carousel-nav:active {
      transform: translateY(-50%) scale(0.94);
    }

    .carousel-nav:focus-visible {
      outline: 3px solid rgba(15, 98, 254, 0.28);
      outline-offset: 3px;
    }

    .carousel-nav-left {
      left: -6px;
    }

    .carousel-nav-right {
      right: -6px;
    }

    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 640px) {
      .carousel-nav {
        width: 38px;
        height: 38px;
        top: 42%;
      }

      .carousel-nav-left {
        left: -2px;
      }

      .carousel-nav-right {
        right: -2px;
      }
    }
  `]
})
export class HomeShowcaseComponent {
  @ViewChild('socialCarouselTrack') socialCarouselTrack!: ElementRef<HTMLDivElement>;

  private sanitizer = inject(DomSanitizer);
  private router = inject(Router);

  openPathwayProcess(cardTitle?: string) {
    this.router.navigate(['/pathway-process'], {
      queryParams: {
        pathway: cardTitle || ''
      }
    });
  }

  prevSocialSlide(): void {
    const track = this.socialCarouselTrack?.nativeElement;
    if (!track) return;

    const scrollAmount = this.getSocialScrollAmount(track);

    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }

  nextSocialSlide(): void {
    const track = this.socialCarouselTrack?.nativeElement;
    if (!track) return;

    const scrollAmount = this.getSocialScrollAmount(track);

    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  private getSocialScrollAmount(track: HTMLDivElement): number {
    const firstCard = track.querySelector('article') as HTMLElement | null;

    if (!firstCard) {
      return 300;
    }

    const cardWidth = firstCard.offsetWidth;
    const gap = 28;

    return cardWidth + gap;
  }

  imageError(event: Event, imageUrl: string) {
    console.error('Image failed to load:', imageUrl);
  }

  socialPosts: SocialPostCard[] = [
    {
      username: 'Canada Career Guide',
      verified: true,
      theme: 'yellow',
      countryName: 'Canada',
      flagUrl: 'https://flagcdn.com/w160/ca.png',
      imageUrl: '/assets/NURSES/NURSE1.webp'
    },
    {
      username: 'Germany Ausbildung Advisor',
      verified: true,
      theme: 'grey',
      countryName: 'Germany',
      flagUrl: 'https://flagcdn.com/w160/de.png',
      imageUrl: '/assets/NURSES/NURSE2.webp'
    },
    {
      username: 'UK Study Mentor',
      verified: true,
      theme: 'yellow',
      countryName: 'United Kingdom',
      flagUrl: 'https://flagcdn.com/w160/gb.png',
      imageUrl: '/assets/NURSES/NURSE3.webp'
    },
    {
      username: 'Australia Pathway Coach',
      verified: true,
      theme: 'yellow',
      countryName: 'Australia',
      flagUrl: 'https://flagcdn.com/w160/au.png',
      imageUrl: '/assets/NURSES/NURSE4.webp'
    },
    {
      username: 'New Zealand Career Advisor',
      verified: true,
      theme: 'grey',
      countryName: 'New Zealand',
      flagUrl: 'https://flagcdn.com/w160/nz.png',
      imageUrl: '/assets/NURSES/NURSE5.webp'
    },
    {
      username: 'Ireland Study Consultant',
      verified: true,
      theme: 'yellow',
      countryName: 'Ireland',
      flagUrl: 'https://flagcdn.com/w160/ie.png',
      imageUrl: '/assets/NURSES/NURSE6.webp'
    },
    {
      username: 'USA Healthcare Advisor',
      verified: true,
      theme: 'grey',
      countryName: 'United States',
      flagUrl: 'https://flagcdn.com/w160/us.png',
      imageUrl: '/assets/NURSES/NURSE7.webp'
    },
    {
      username: 'France Study Guide',
      verified: true,
      theme: 'yellow',
      countryName: 'France',
      flagUrl: 'https://flagcdn.com/w160/fr.png',
      imageUrl: '/assets/NURSES/NURSE8.webp'
    },
    {
      username: 'Italy Career Mentor',
      verified: true,
      theme: 'grey',
      countryName: 'Italy',
      flagUrl: 'https://flagcdn.com/w160/it.png',
      imageUrl: '/assets/NURSES/NURSE9.webp'
    },
    {
      username: 'Spain Study Advisor',
      verified: true,
      theme: 'yellow',
      countryName: 'Spain',
      flagUrl: 'https://flagcdn.com/w160/es.png',
      imageUrl: '/assets/NURSES/NURSE10.webp'
    },
    {
      username: 'Netherlands Career Guide',
      verified: true,
      theme: 'grey',
      countryName: 'Netherlands',
      flagUrl: 'https://flagcdn.com/w160/nl.png',
      imageUrl: '/assets/NURSES/NURSE11.webp'
    },
    {
      username: 'Sweden Study Consultant',
      verified: true,
      theme: 'yellow',
      countryName: 'Sweden',
      flagUrl: 'https://flagcdn.com/w160/se.png',
      imageUrl: '/assets/NURSES/NURSE12.webp'
    },
    {
      username: 'Finland Education Advisor',
      verified: true,
      theme: 'grey',
      countryName: 'Finland',
      flagUrl: 'https://flagcdn.com/w160/fi.png',
      imageUrl: '/assets/NURSES/NURSE13.webp'
    },
    {
      username: 'Denmark Career Coach',
      verified: true,
      theme: 'yellow',
      countryName: 'Denmark',
      flagUrl: 'https://flagcdn.com/w160/dk.png',
      imageUrl: '/assets/NURSES/NURSE14.webp'
    },
    {
      username: 'Norway Study Mentor',
      verified: true,
      theme: 'grey',
      countryName: 'Norway',
      flagUrl: 'https://flagcdn.com/w160/no.png',
      imageUrl: '/assets/NURSES/NURSE15.webp'
    },
    {
      username: 'Switzerland Career Advisor',
      verified: true,
      theme: 'yellow',
      countryName: 'Switzerland',
      flagUrl: 'https://flagcdn.com/w160/ch.png',
      imageUrl: '/assets/NURSES/NURSE16.webp'
    },
    {
      username: 'Austria Study Guide',
      verified: true,
      theme: 'grey',
      countryName: 'Austria',
      flagUrl: 'https://flagcdn.com/w160/at.png',
      imageUrl: '/assets/NURSES/NURSE17.webp'
    },
    {
      username: 'Belgium Career Mentor',
      verified: true,
      theme: 'yellow',
      countryName: 'Belgium',
      flagUrl: 'https://flagcdn.com/w160/be.png',
      imageUrl: '/assets/NURSES/NURSE18.webp'
    },
    {
      username: 'Georgia Pathway Advisor',
      verified: true,
      theme: 'grey',
      countryName: 'Georgia',
      flagUrl: 'https://flagcdn.com/w160/ge.png',
      imageUrl: '/assets/NURSES/NURSE19.webp'
    }
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'Ausbildung Germany',
      description: 'Vocational training with employer matching, language preparation, and mobility support',
      features: ['A1-B2 German Training', 'Employer Matching', 'Visa & Settlement'],
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>'
      )
    },
    {
      title: 'Jobs in Europe',
      description: 'Career placement with profile building, recruiter outreach, and relocation support',
      features: ['ATS CV Building', 'Recruiter Network', 'Salary Negotiation'],
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>'
      )
    },
    {
      title: 'Study Abroad',
      description: 'University admission advisory with documentation, visa, and scholarship support',
      features: ['University Shortlisting', 'SOP/LOR Writing', 'Scholarship Finder'],
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
      )
    },
    {
      title: 'German Language',
      description: 'A1-B2 training with certified trainers, speaking labs, and exam preparation',
      features: ['Native Speakers', 'Speaking Lab', 'Exam Preparation'],
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>'
      )
    }
  ];
}