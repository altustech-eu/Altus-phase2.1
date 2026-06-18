import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrainingCard {
  title: string;
  label: string;
  description: string;
  cta: string;
}

@Component({
  selector: 'app-german-training',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <!-- Main Section -->
      <div class="border-y border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <div class="grid grid-cols-1 border border-[#c6c6c6] bg-white lg:grid-cols-12">

            <!-- Left Image / Hero Panel -->
            <div class="relative min-h-[520px] overflow-hidden border-b border-[#c6c6c6] bg-[#161616] lg:col-span-6 lg:border-b-0 lg:border-r">

              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="German training and global career pathway"
                class="absolute inset-0 h-full w-full object-cover opacity-80"
              />

              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20"></div>

              <div class="relative z-10 flex min-h-[520px] flex-col justify-between p-6 lg:p-10">

                <div>
                  <p class="section-eyebrow text-blue-200">
                    German Language Training
                  </p>

                  <h2 class="mt-5 max-w-[640px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] text-white md:text-[52px] lg:text-[64px]">
                    Learn German for Ausbildung, jobs and study mobility
                  </h2>

                  <p class="mt-6 max-w-[600px] text-[15px] leading-relaxed text-white/75 lg:text-[17px]">
                    Structured A1 to B1/B2 training with classroom learning, speaking practice,
                    exam preparation, interview German and career pathway readiness.
                  </p>
                </div>

                <!-- Destination Strip -->
                <div class="mt-10 grid grid-cols-3 border border-white/20 bg-white/10 backdrop-blur">
                  <div class="destination-box">
                    <p class="destination-label">Europe</p>

                    <div class="mt-4 flex h-10 w-10 items-center justify-center bg-[#003399] text-[#ffcc00]">
                      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/>
                      </svg>
                    </div>

                    <p class="destination-text">
                      Study and work pathways
                    </p>
                  </div>

                  <div class="destination-box">
                    <p class="destination-label">Germany</p>

                    <div class="mt-4 h-10 w-10 overflow-hidden border border-white/30">
                      <div class="h-1/3 bg-black"></div>
                      <div class="h-1/3 bg-[#dd0000]"></div>
                      <div class="h-1/3 bg-[#ffce00]"></div>
                    </div>

                    <p class="destination-text">
                      Ausbildung and jobs
                    </p>
                  </div>

                  <div class="destination-box border-r-0">
                    <p class="destination-label">Gulf</p>

                    <div class="mt-4 flex h-10 w-10 items-center justify-center bg-[#007a3d] text-white">
                      <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.4" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>

                    <p class="destination-text">
                      Career and training hub
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Right Programme Cards -->
            <div class="grid grid-cols-1 bg-white md:grid-cols-2 lg:col-span-6">

              <article
                class="training-card"
                *ngFor="let card of trainingCards"
              >
                <div>
                  <p class="section-eyebrow">
                    {{ card.label }}
                  </p>

                  <h3 class="mt-4 text-[28px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
                    {{ card.title }}
                  </h3>

                  <p class="mt-4 text-[14px] leading-relaxed text-[#525252]">
                    {{ card.description }}
                  </p>
                </div>

                <button
                  type="button"
                  class="mt-8 inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-[#0f62fe]"
                >
                  {{ card.cta }}

                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </article>

            </div>

          </div>

          <!-- Bottom Tutor CTA Strip -->
          <div class="mt-8 grid grid-cols-1 border border-[#c6c6c6] bg-white md:grid-cols-12">

            <div class="relative min-h-[150px] overflow-hidden bg-[#161616] md:col-span-4">
              <img
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="German tutor"
                class="absolute inset-0 h-full w-full object-cover opacity-75"
              />

              <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              <div class="relative z-10 p-6">
                <p class="section-eyebrow text-blue-200">
                  Tutor network
                </p>

                <h3 class="mt-4 text-[28px] font-normal leading-tight tracking-[-0.045em] text-white">
                  Become a German tutor
                </h3>
              </div>
            </div>

            <div class="flex flex-col justify-center border-t border-[#c6c6c6] p-6 md:col-span-5 md:border-l md:border-t-0">
              <p class="text-[15px] leading-relaxed text-[#525252]">
                Join the Career360 language training ecosystem as a German trainer, speaking coach,
                exam preparation faculty or cross-cultural training mentor.
              </p>
            </div>

            <div class="flex items-center justify-start border-t border-[#c6c6c6] p-6 md:col-span-3 md:border-l md:border-t-0 md:justify-center">
              <button
                type="button"
                class="inline-flex w-full items-center justify-between border border-[#0f62fe] bg-white px-6 py-4 text-[14px] font-semibold text-[#0f62fe] transition-colors hover:bg-[#0f62fe] hover:text-white md:w-auto md:gap-8"
              >
                Register as Tutor

                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
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

    .destination-box {
      min-height: 150px;
      border-right: 1px solid rgba(255, 255, 255, 0.18);
      padding: 20px;
    }

    .destination-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: rgba(255, 255, 255, 0.75);
    }

    .destination-text {
      margin-top: 18px;
      max-width: 120px;
      font-size: 12px;
      line-height: 1.45;
      color: rgba(255, 255, 255, 0.72);
    }

    .training-card {
      min-height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      background: #ffffff;
      padding: 32px;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;
      cursor: pointer;
    }

    .training-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
    }

    @media (max-width: 768px) {
      .destination-box {
        min-height: 130px;
        padding: 16px;
      }

      .training-card {
        min-height: 230px;
        padding: 24px;
        border-right: 0;
      }
    }
  `]
})
export class GermanTrainingComponent {
  trainingCards: TrainingCard[] = [
    {
      label: 'A1-A2 Foundation',
      title: 'Start German from basics',
      description: 'Build grammar, vocabulary, pronunciation, listening and simple speaking skills for beginners.',
      cta: 'Explore A1-A2'
    },
    {
      label: 'B1-B2 Readiness',
      title: 'Prepare for career mobility',
      description: 'Strengthen German communication for Ausbildung interviews, workplace readiness and advanced exams.',
      cta: 'View B1-B2'
    },
    {
      label: 'Speaking Lab',
      title: 'Improve spoken German',
      description: 'Practice self-introduction, daily conversations, employer interview answers and workplace scenarios.',
      cta: 'Join Speaking Lab'
    },
    {
      label: 'Exam Preparation',
      title: 'Train for German exams',
      description: 'Prepare with mock tests, writing correction, speaking practice, listening drills and performance feedback.',
      cta: 'Start Exam Prep'
    }
  ];
}