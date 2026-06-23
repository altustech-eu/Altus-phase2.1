import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VideoStory {
  title: string;
  author: string;
  imageUrl: string;
  youtubeUrl: string;
}

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616] overflow-hidden">

      <!-- Header -->
      <div class="border-y border-[#e0e0e0] bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-12 lg:px-12 lg:py-14 xl:px-16 2xl:px-20">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Success Stories
            </p>

            <h2 class="mt-4 max-w-[820px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
              Real candidate journeys across healthcare and global careers
            </h2>
          </div>

          <div class="flex flex-col justify-end lg:col-span-5">
            <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
              Explore candidate stories, nursing career transformations, Germany healthcare pathways
              and real journey moments from the AltusCareer ecosystem.
            </p>
          </div>

        </div>
      </div>

      <!-- Image Gallery -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

          <div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Candidate gallery
              </p>

              <h3 class="mt-3 text-[32px] font-normal leading-tight tracking-[-0.05em] text-[#161616] lg:text-[46px]">
                Healthcare success gallery
              </h3>
            </div>

            <p class="max-w-[520px] text-[14px] leading-relaxed text-[#525252]">
              A visual proof wall for nursing, healthcare, Ausbildung and international mobility outcomes.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            @for (imageUrl of stories; track imageUrl) {
              <article class="gallery-card group">
                <img
                  [src]="imageUrl"
                  alt="Nurse success story"
                  class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  (error)="imageError($event, imageUrl)"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div class="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    Candidate story
                  </p>
                </div>
              </article>
            }
          </div>

        </div>
      </div>

      <!-- Reels Section -->
      <div class="border-b border-[#e0e0e0] bg-white">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Candidate Reels
              </p>

              <h3 class="mt-3 text-[34px] font-normal leading-tight tracking-[-0.05em] text-[#161616] lg:text-[52px]">
                Watch real pathway stories
              </h3>
            </div>

            <button
              type="button"
              class="hidden items-center gap-4 border border-[#0f62fe] bg-white px-6 py-4 text-[14px] font-semibold text-[#0f62fe] transition-colors hover:bg-[#0f62fe] hover:text-white md:inline-flex"
            >
              View all stories
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            @for (video of videoStories; track video.title) {
              <article
                class="reel-card group cursor-pointer"
                role="button"
                tabindex="0"
                (click)="openVideo(video)"
                (keydown.enter)="openVideo(video)"
              >

                <img
                  [src]="video.imageUrl"
                  [alt]="video.title"
                  class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  (error)="imageError($event, video.imageUrl)"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent"></div>

                <div class="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                  Testimonial Video
                </div>

                <!-- Circle Play Button -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="play-button">
                    <svg class="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                <div class="absolute bottom-0 left-0 right-0 p-5">
                  <p class="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    AltusCareer Candidate
                  </p>

                  <h3 class="text-[21px] font-normal leading-tight tracking-[-0.04em] text-white">
                    {{ video.title }}
                  </h3>

                  <p class="mt-3 text-[13px] font-medium text-white/75">
                    {{ video.author }}
                  </p>
                </div>

              </article>
            }
          </div>

          <div class="mt-8 flex md:hidden">
            <button
              type="button"
              class="inline-flex w-full items-center justify-between bg-[#0f62fe] px-6 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#0043ce]"
            >
              View all stories
              <span class="text-[20px] leading-none">→</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Video Popup Modal -->
      @if (selectedVideo) {
        <div
          class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          (click)="closeVideo()"
        >
          <div
            class="relative w-full max-w-[960px] overflow-hidden border border-white/20 bg-[#111111] shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
            (click)="$event.stopPropagation()"
          >

            <!-- Modal Header -->
            <div class="flex items-start justify-between gap-4 border-b border-white/10 bg-black px-5 py-4 text-white">
              <div>
                <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#78a9ff]">
                  Testimonial Video
                </p>

                <h3 class="mt-1 text-[20px] font-normal leading-tight tracking-[-0.03em]">
                  {{ selectedVideo.title }}
                </h3>

                <p class="mt-1 text-[13px] text-white/60">
                  {{ selectedVideo.author }}
                </p>
              </div>

              <button
                type="button"
                class="modal-close-button"
                (click)="closeVideo()"
                aria-label="Close video"
              >
                ×
              </button>
            </div>

            <!-- YouTube Video -->
            <div class="relative aspect-video w-full bg-black">
              <iframe
                class="absolute inset-0 h-full w-full"
                [src]="selectedVideo.youtubeUrl"
                title="Candidate testimonial video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

          </div>
        </div>
      }

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

    .gallery-card {
      position: relative;
      aspect-ratio: 4 / 5;
      overflow: hidden;
      border: 1px solid #c6c6c6;
      background: #e0e0e0;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .gallery-card:hover {
      border-color: #0f62fe;
      box-shadow: 0 18px 48px rgba(15, 23, 42, 0.10);
      transform: translateY(-2px);
    }

    .reel-card {
      position: relative;
      height: 520px;
      overflow: hidden;
      border: 1px solid #c6c6c6;
      background: #161616;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .reel-card:hover {
      border-color: #0f62fe;
      box-shadow: 0 22px 64px rgba(15, 23, 42, 0.18);
      transform: translateY(-2px);
    }

    .play-button {
      display: flex;
      height: 68px;
      width: 68px;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.78);
      background: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(10px);
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .reel-card:hover .play-button {
      border-color: #0f62fe;
      background: #0f62fe;
      transform: scale(1.08);
      box-shadow: 0 20px 54px rgba(15, 98, 254, 0.36);
    }

    .modal-close-button {
      display: flex;
      height: 40px;
      width: 40px;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-size: 24px;
      line-height: 1;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease;
    }

    .modal-close-button:hover {
      background: #ffffff;
      color: #000000;
      border-color: #ffffff;
    }

    @media (min-width: 1024px) {
      .reel-card {
        height: 560px;
      }
    }

    @media (max-width: 640px) {
      .reel-card {
        height: 500px;
      }
    }
  `]
})
export class SuccessStoriesComponent {
  selectedVideo: VideoStory | null = null;

  stories: string[] = [
    '/assets/NURSES/NURSE1.webp',
    '/assets/NURSES/NURSE2.webp',
    '/assets/NURSES/NURSE3.webp',
    '/assets/NURSES/NURSE4.webp',
    '/assets/NURSES/NURSE5.webp',
    '/assets/NURSES/NURSE6.webp',
    '/assets/NURSES/NURSE7.webp',
    '/assets/NURSES/NURSE8.webp',
    '/assets/NURSES/NURSE9.webp',
    '/assets/NURSES/NURSE10.webp',
    '/assets/NURSES/NURSE11.webp',
    '/assets/NURSES/NURSE12.webp',
    '/assets/NURSES/NURSE13.webp',
    '/assets/NURSES/NURSE14.webp',
    '/assets/NURSES/NURSE15.webp',
    '/assets/NURSES/NURSE16.webp',
    '/assets/NURSES/NURSE17.webp',
    '/assets/NURSES/NURSE18.webp',
    '/assets/NURSES/NURSE19.webp',
    '/assets/NURSES/NURSE20.webp',
    '/assets/NURSES/NURSE21.webp',
    '/assets/NURSES/NURSE22.webp',
    '/assets/NURSES/NURSE23.webp',
    '/assets/NURSES/NURSE24.webp'
  ];

  videoStories: VideoStory[] = [
    {
      title: 'Nursing career success story',
      author: 'AltusCareer Candidate',
      imageUrl: '/assets/NURSES/NURSE1.webp',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      title: 'Germany healthcare pathway',
      author: 'AltusCareer Candidate',
      imageUrl: '/assets/NURSES/NURSE2.webp',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      title: 'International nursing journey',
      author: 'AltusCareer Candidate',
      imageUrl: '/assets/NURSES/NURSE3.webp',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      title: 'Ausbildung healthcare pathway',
      author: 'AltusCareer Candidate',
      imageUrl: '/assets/NURSES/NURSE4.webp',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      title: 'Career transformation story',
      author: 'AltusCareer Candidate',
      imageUrl: '/assets/NURSES/NURSE5.webp',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    }
  ];

  openVideo(video: VideoStory): void {
    this.selectedVideo = video;
  }

  closeVideo(): void {
    this.selectedVideo = null;
  }

  imageError(event: Event, imageUrl: string): void {
    console.error('Image failed to load:', imageUrl);
  }
}