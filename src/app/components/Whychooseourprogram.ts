import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StudyProgram {
  id: string;
  title: string;
  faculty: string;
  icon: string;
  accentColor: string;
}

@Component({
  selector: 'app-study-programs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616] overflow-hidden">

      <!-- Header -->
      <div class="border-y border-[#e0e0e0] bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 2xl:px-20">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Study Programmes
            </p>

            <h2 class="mt-4 max-w-[820px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
              Explore healthcare and science courses by faculty
            </h2>
          </div>

          <div class="flex flex-col justify-end lg:col-span-5">
            <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
              Browse medical, healthcare, pharmacy, public health and rehabilitation programmes
              with a clean faculty-based course carousel.
            </p>
          </div>

        </div>
      </div>

      <!-- Carousel Area -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

          <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Course carousel
              </p>

              <h3 class="mt-3 text-[32px] font-normal leading-tight tracking-[-0.05em] text-[#161616] lg:text-[46px]">
                Courses
              </h3>
            </div>

            <div class="flex items-center gap-4">
              <p class="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6f6f6f]">
                {{ currentCounter }} / {{ totalCounter }}
              </p>

              <div class="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  class="carousel-arrow"
                  [class.disabled-arrow]="isPrevDisabled"
                  [disabled]="isPrevDisabled"
                  (click)="prevSlide()"
                  aria-label="Previous course"
                >
                  ←
                </button>

                <button
                  type="button"
                  class="carousel-arrow"
                  [class.disabled-arrow]="isNextDisabled"
                  [disabled]="isNextDisabled"
                  (click)="nextSlide()"
                  aria-label="Next course"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div class="relative">

            <!-- Cards Track -->
            <div
              #carouselTrack
              class="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 md:gap-6"
              (scroll)="onCarouselScroll()"
            >

              @for (program of programs; track program.id; let i = $index) {
                <article
                  class="course-card snap-start"
                  [class.active-card]="activeIndex === i"
                  (click)="selectProgram(i)"
                >

                  <div>
                    <div class="mb-5 flex items-center justify-between gap-4">
                      <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                        {{ program.id }}
                      </p>

                      <span
                        class="h-2 w-10"
                        [style.background]="program.accentColor"
                      ></span>
                    </div>

                    <h3 class="course-title">
                      {{ program.title }}
                    </h3>
                  </div>

                  <div class="faculty-block">
                    <div class="faculty-seal">
                      <span class="faculty-seal-inner">
                        {{ program.icon }}
                      </span>
                    </div>

                    <div>
                      <p class="faculty-label">
                        Faculty of
                      </p>

                      <p class="faculty-name">
                        {{ program.faculty }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="bottom-accent"
                    [style.background]="program.accentColor"
                  ></div>

                </article>
              }

            </div>

            <!-- Mobile Controls -->
            <div class="mt-8 flex items-center justify-center gap-4 md:hidden">
              <button
                type="button"
                class="carousel-arrow"
                [class.disabled-arrow]="isPrevDisabled"
                [disabled]="isPrevDisabled"
                (click)="prevSlide()"
                aria-label="Previous course"
              >
                ←
              </button>

              <p class="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6f6f6f]">
                {{ currentCounter }} / {{ totalCounter }}
              </p>

              <button
                type="button"
                class="carousel-arrow"
                [class.disabled-arrow]="isNextDisabled"
                [disabled]="isNextDisabled"
                (click)="nextSlide()"
                aria-label="Next course"
              >
                →
              </button>
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

    .course-card {
      position: relative;
      width: 320px;
      min-width: 320px;
      min-height: 300px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 24px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .course-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      transform: translateY(-2px);
    }

    .active-card {
      border-color: #0f62fe;
      background: #edf5ff;
      box-shadow: 0 18px 48px rgba(15, 98, 254, 0.10);
    }

    .course-title {
      max-width: 270px;
      font-size: 36px;
      font-weight: 400;
      line-height: 1.04;
      letter-spacing: -0.055em;
      color: #161616;
    }

    .faculty-block {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-top: 36px;
      padding-bottom: 8px;
    }

    .faculty-seal {
      width: 54px;
      height: 54px;
      border: 1px solid #0f62fe;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f62fe;
      background: #ffffff;
      flex-shrink: 0;
    }

    .faculty-seal-inner {
      width: 32px;
      height: 32px;
      border: 1px solid #0f62fe;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: #0f62fe;
      line-height: 1;
      background: #edf5ff;
    }

    .faculty-label {
      margin: 0 0 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.02em;
      color: #525252;
    }

    .faculty-name {
      margin: 0;
      max-width: 220px;
      font-size: 22px;
      font-weight: 400;
      line-height: 1.16;
      letter-spacing: -0.04em;
      color: #161616;
    }

    .bottom-accent {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
    }

    .carousel-arrow {
      width: 42px;
      height: 42px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      color: #161616;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease,
        transform 0.18s ease;
    }

    .carousel-arrow:hover {
      background: #0f62fe;
      color: #ffffff;
      border-color: #0f62fe;
    }

    .carousel-arrow:active {
      transform: scale(0.94);
    }

    .carousel-arrow:focus-visible {
      outline: 3px solid rgba(15, 98, 254, 0.28);
      outline-offset: 3px;
    }

    .disabled-arrow {
      opacity: 0.35;
      cursor: not-allowed;
      pointer-events: none;
    }

    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 767px) {
      .course-card {
        width: 292px;
        min-width: 292px;
        min-height: 280px;
        padding: 22px;
      }

      .course-title {
        font-size: 30px;
      }

      .faculty-label {
        font-size: 14px;
      }

      .faculty-name {
        font-size: 19px;
      }

      .faculty-block {
        gap: 15px;
        margin-top: 28px;
      }

      .faculty-seal {
        width: 48px;
        height: 48px;
      }

      .faculty-seal-inner {
        width: 28px;
        height: 28px;
        font-size: 11px;
      }
    }
  `]
})
export class StudyProgramsComponent {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;

  activeIndex = 0;

  programs: StudyProgram[] = [
    {
      id: 'p1',
      title: 'Odontology',
      faculty: 'Odontology',
      icon: 'O',
      accentColor: '#0f62fe'
    },
    {
      id: 'p2',
      title: 'Pharmacy',
      faculty: 'Pharmacy',
      icon: 'P',
      accentColor: '#da1e28'
    },
    {
      id: 'p3',
      title: 'Veterinary Medicine',
      faculty: 'Veterinary medicine',
      icon: 'V',
      accentColor: '#8a3ffc'
    },
    {
      id: 'p4',
      title: 'Medicine',
      faculty: 'Medicine',
      icon: 'M',
      accentColor: '#24a148'
    },
    {
      id: 'p5',
      title: 'Nursing',
      faculty: 'Healthcare',
      icon: 'N',
      accentColor: '#fa4d56'
    },
    {
      id: 'p6',
      title: 'Biomedical Science',
      faculty: 'Science',
      icon: 'B',
      accentColor: '#4589ff'
    },
    {
      id: 'p7',
      title: 'Public Health',
      faculty: 'Health Sciences',
      icon: 'H',
      accentColor: '#007d79'
    },
    {
      id: 'p8',
      title: 'Physiotherapy',
      faculty: 'Rehabilitation',
      icon: 'R',
      accentColor: '#ff832b'
    }
  ];

  get currentCounter(): string {
    return String(this.activeIndex + 1).padStart(2, '0');
  }

  get totalCounter(): string {
    return String(this.programs.length).padStart(2, '0');
  }

  get isPrevDisabled(): boolean {
    return this.activeIndex === 0;
  }

  get isNextDisabled(): boolean {
    return this.activeIndex === this.programs.length - 1;
  }

  nextSlide(): void {
    if (this.isNextDisabled) return;

    this.activeIndex += 1;
    this.scrollToActiveCard();
  }

  prevSlide(): void {
    if (this.isPrevDisabled) return;

    this.activeIndex -= 1;
    this.scrollToActiveCard();
  }

  selectProgram(index: number): void {
    this.activeIndex = index;
    this.scrollToActiveCard();
  }

  onCarouselScroll(): void {
    const track = this.carouselTrack?.nativeElement;

    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    if (!cards.length) return;

    const trackLeft = track.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardLeft = card.getBoundingClientRect().left;
      const distance = Math.abs(cardLeft - trackLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    this.activeIndex = closestIndex;
  }

  private scrollToActiveCard(): void {
    const track = this.carouselTrack?.nativeElement;

    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const activeCard = cards[this.activeIndex];

    if (!activeCard) return;

    activeCard.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }
}