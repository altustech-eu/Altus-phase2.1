import { Component } from '@angular/core';

interface PartnerLogo {
  name: string;
  imgUrl: string;
  linkText?: string;
  linkUrl?: string;
  category: string;
}

@Component({
  selector: 'app-trusted-logos',
  standalone: true,
  template: `
    <section class="font-main relative z-20 bg-white text-[#161616]">

      <!-- Trusted Logo Section -->
      <div class="border-y border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 lg:py-12 xl:px-16 2xl:px-20">

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

            <!-- Left Heading -->
            <div class="lg:col-span-4">
              <p class="section-eyebrow">
                Trusted ecosystem
              </p>

              <h2 class="mt-4 max-w-[440px] text-[32px] font-normal leading-[1.08] tracking-[-0.05em] text-[#161616] lg:text-[44px]">
                Trusted by universities, employers and training partners
              </h2>

              <p class="mt-5 max-w-[440px] text-[14px] leading-relaxed text-[#525252]">
                Build credibility with partner institutions, healthcare employers, technology partners,
                training providers and global education networks.
              </p>
            </div>

            <!-- Right Logo Strip -->
            <div class="lg:col-span-8">
              <div class="overflow-hidden border border-[#c6c6c6] bg-white">

                <div class="flex snap-x items-stretch overflow-x-auto hide-scrollbar">

                  @for (logo of logos; track logo.name + $index) {
                    <article class="logo-card snap-start">

                      <div class="relative h-[92px] w-full overflow-hidden border-b border-[#e0e0e0] bg-[#f4f4f4]">
                        <img
                          [src]="logo.imgUrl"
                          [alt]="logo.name"
                          class="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
                          loading="lazy"
                        />

                        <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

                        <div class="absolute bottom-3 left-3 right-3">
                          <p class="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                            {{ logo.category }}
                          </p>
                        </div>
                      </div>

                      <div class="flex min-h-[118px] flex-col justify-between p-4">
                        <div>
                          <h3 class="text-[17px] font-normal leading-tight tracking-[-0.035em] text-[#161616]">
                            {{ logo.name }}
                          </h3>

                          <p class="mt-2 text-[12px] leading-relaxed text-[#525252]">
                            Career360 partner network
                          </p>
                        </div>

                        <div class="mt-4 flex items-center justify-between border-t border-[#e0e0e0] pt-3">
                          @if (logo.linkText) {
                            <a
                              [href]="logo.linkUrl"
                              class="max-w-[150px] truncate text-[12px] font-semibold text-[#0f62fe] transition-colors hover:text-[#0043ce]"
                            >
                              {{ logo.linkText }}
                            </a>
                          } @else {
                            <span class="text-[12px] font-semibold text-[#6f6f6f]">
                              Partner profile
                            </span>
                          }

                          <span class="text-[22px] font-light leading-none text-[#0f62fe]">
                            ↗
                          </span>
                        </div>
                      </div>

                    </article>
                  }

                </div>

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

    .logo-card {
      min-width: 230px;
      width: 230px;
      border-right: 1px solid #e0e0e0;
      background: #ffffff;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease;
    }

    .logo-card:hover {
      background: #f8fafc;
      box-shadow: 0 16px 44px rgba(15, 23, 42, 0.08);
    }

    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      .logo-card {
        min-width: 250px;
        width: 250px;
      }
    }
  `]
})
export class TrustedLogosComponent {
  logos: PartnerLogo[] = [
    {
      name: 'University of Europe',
      category: 'University Partner',
      imgUrl: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=500',
      linkText: 'Watch Recruitment Drive',
      linkUrl: '#'
    },
    {
      name: 'CHS Healthcare',
      category: 'Healthcare Employer',
      imgUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'TIM IT Distribution',
      category: 'Technology Employer',
      imgUrl: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Tech Institute',
      category: 'Training Partner',
      imgUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Global Academy',
      category: 'Education Network',
      imgUrl: 'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=500',
      linkText: 'Watch University Seminar',
      linkUrl: '#'
    }
  ];
}