import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Site {
  title: string;
  subtitle: string;
  description: string;
  top: string;
  left: string;
}

interface Country {
  name: string;
  code: string;
  flagUrl: string;
  count: number;
  top: string;
  left: string;
  sites: Site[];
}

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <!-- Compact Header -->
      <div class="bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-4 px-6 py-6 lg:grid-cols-12 lg:px-12 lg:py-7 xl:px-16 2xl:px-20">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Global Network
            </p>

            <h2 class="mt-2 max-w-[780px] text-[30px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[40px] lg:text-[48px]">
              AltusCareer worldwide presence
            </h2>
          </div>

          <div class="flex flex-col justify-end lg:col-span-5">
            <p class="max-w-[620px] text-[13px] leading-relaxed text-[#525252] lg:text-[15px]">
              Explore countries, operating hubs, representative offices, sales centres,
              training locations and partner touchpoints across the global delivery network.
            </p>
          </div>

        </div>
      </div>

      <!-- Compact Map Block -->
      <div class="bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-5 lg:px-12 lg:py-6 xl:px-16 2xl:px-20">

          <div class="grid h-[390px] grid-cols-1 overflow-hidden border border-[#c6c6c6] bg-white lg:grid-cols-[1fr_330px]">

            <!-- MAP AREA -->
            <div class="relative h-[390px] overflow-hidden map-enterprise-bg">

              <div class="pointer-events-none absolute inset-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt="World map background"
                  class="real-map-image"
                />
              </div>

              <div class="pointer-events-none absolute inset-0 map-blue-overlay"></div>

              <div
                class="pointer-events-none absolute inset-0 opacity-[0.12]"
                style="background-image: linear-gradient(to right, #0f62fe 1px, transparent 1px), linear-gradient(to bottom, #0f62fe 1px, transparent 1px); background-size: 48px 48px;"
              ></div>

              <!-- Country Markers -->
              @for (country of countries; track country.name) {
                <button
                  type="button"
                  class="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  [style.top]="country.top"
                  [style.left]="country.left"
                  (click)="selectCountry(country)"
                  [attr.aria-label]="'Select ' + country.name"
                >
                  <div
                    class="map-marker"
                    [ngClass]="selectedCountry?.name === country.name ? 'map-marker-active' : ''"
                  >
                    <span class="flag-circle">
                      <img
                        [src]="country.flagUrl"
                        [alt]="country.name + ' flag'"
                        class="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </span>

                    <span class="marker-count">
                      {{ country.count }}
                    </span>
                  </div>

                  <div class="pointer-events-none absolute left-1/2 top-[48px] -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    <div class="flex items-center gap-2 border border-[#c6c6c6] bg-white px-3 py-2 text-[11px] font-semibold text-[#161616] shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                      <span class="tooltip-flag">
                        <img
                          [src]="country.flagUrl"
                          [alt]="country.name + ' flag'"
                          class="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </span>

                      <span class="whitespace-nowrap">
                        {{ country.name }}
                      </span>
                    </div>
                  </div>
                </button>
              }

              <!-- Selected Country Site Pins -->
              @if (selectedCountry) {
                <div class="absolute inset-0 z-10 bg-white/10 backdrop-blur-[1px] animate-fade-in">

                  @for (site of selectedCountry.sites; track site.title) {
                    <div
                      class="group absolute flex -translate-x-1/2 -translate-y-full cursor-pointer flex-col items-center"
                      [style.top]="site.top"
                      [style.left]="site.left"
                    >
                      <div class="relative">
                        <div class="absolute inset-0 rounded-full bg-[#0f62fe]/25 animate-ping"></div>

                        <div class="site-map-flag">
                          <img
                            [src]="selectedCountry.flagUrl"
                            [alt]="selectedCountry.name + ' flag'"
                            class="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div class="mt-2 min-w-[180px] translate-y-2 border border-[#c6c6c6] bg-white px-3 py-2 text-left opacity-0 shadow-[0_16px_38px_rgba(15,23,42,0.16)] transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p class="text-[12px] font-semibold leading-tight text-[#0f62fe]">
                          {{ site.title }}
                        </p>

                        <p class="mt-1 text-[11px] leading-snug text-[#525252]">
                          {{ site.subtitle }}
                        </p>
                      </div>
                    </div>
                  }

                  @if (selectedCountry.sites.length === 0) {
                    <div class="absolute inset-0 flex items-center justify-center px-6">
                      <div class="max-w-sm border border-[#c6c6c6] bg-white/95 p-4 text-center shadow-[0_18px_48px_rgba(15,23,42,0.16)] backdrop-blur-md">
                        <div class="selected-empty-flag mx-auto mb-3">
                          <img
                            [src]="selectedCountry.flagUrl"
                            [alt]="selectedCountry.name + ' flag'"
                            class="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <h3 class="text-[22px] font-normal leading-tight tracking-[-0.04em] text-[#161616]">
                          {{ selectedCountry.name }}
                        </h3>

                        <p class="mt-2 text-[12px] leading-relaxed text-[#525252]">
                          Country-level presence is listed. Detailed site-level records can be added
                          in the operating master data.
                        </p>
                      </div>
                    </div>
                  }
                </div>
              }

              <!-- Map Controls -->
              <div class="absolute bottom-4 left-4 z-30 flex items-center gap-2">
                <button type="button" class="map-control">+</button>
                <button type="button" class="map-control">-</button>
              </div>

              <!-- Legend -->
              <div class="absolute bottom-4 right-4 z-30 hidden items-center gap-2 border border-[#c6c6c6] bg-white/95 px-3 py-2 backdrop-blur-md md:flex">
                <span class="legend-flag">
                  <img
                    src="https://flagcdn.com/w80/de.png"
                    alt="Flag icon"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>

                <span class="text-[12px] font-semibold text-[#525252]">
                  Country / Site Touchpoint
                </span>
              </div>
            </div>

            <!-- RIGHT SIDE PANEL WITH HIDDEN SCROLLBAR -->
            <aside class="flex h-[390px] min-h-0 flex-col overflow-hidden border-t border-[#c6c6c6] bg-white lg:border-l lg:border-t-0">

              @if (!selectedCountry) {
                <div class="right-scroll-area no-scrollbar">

                  <div class="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p class="section-eyebrow">
                        Countries
                      </p>

                      <h3 class="mt-2 text-[24px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
                        Network markets
                      </h3>

                      <p class="mt-2 text-[12px] leading-relaxed text-[#525252]">
                        Select a country to view operating sites.
                      </p>
                    </div>

                    <div class="total-sites-badge">
                      {{ totalSites }}
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-2">
                    @for (country of countries; track country.name) {
                      <button
                        type="button"
                        class="country-list-card group"
                        (click)="selectCountry(country)"
                      >
                        <div class="flex min-w-0 items-center gap-3">
                          <span class="country-list-flag">
                            <img
                              [src]="country.flagUrl"
                              [alt]="country.name + ' flag'"
                              class="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </span>

                          <div class="min-w-0 text-left">
                            <p class="truncate text-[14px] font-semibold text-[#161616] group-hover:text-white">
                              {{ country.name }}
                            </p>

                            <p class="mt-1 truncate text-[11px] text-[#6f6f6f] group-hover:text-blue-100">
                              {{ country.count }} touchpoint{{ country.count > 1 ? 's' : '' }}
                            </p>
                          </div>
                        </div>

                        <span class="country-count">
                          {{ country.count }}
                        </span>
                      </button>
                    }
                  </div>
                </div>
              }

              @if (selectedCountry) {
                <div class="right-scroll-area no-scrollbar animate-fade-in">

                  <button
                    type="button"
                    class="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#161616] transition-colors hover:text-[#0f62fe]"
                    (click)="goBack()"
                  >
                    <span class="text-[18px] leading-none">←</span>
                    Back to countries
                  </button>

                  <div class="mb-4 border border-[#c6c6c6] bg-[#f4f4f4] p-4">
                    <div class="flex items-center gap-4">
                      <div class="selected-country-flag">
                        <img
                          [src]="selectedCountry.flagUrl"
                          [alt]="selectedCountry.name + ' flag'"
                          class="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div class="min-w-0 flex-1">
                        <p class="section-eyebrow">
                          Selected Market
                        </p>

                        <h3 class="mt-2 truncate text-[24px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
                          {{ selectedCountry.name }}
                        </h3>

                        <p class="mt-1 text-[12px] text-[#6f6f6f]">
                          {{ selectedCountry.count }} registered touchpoint{{ selectedCountry.count > 1 ? 's' : '' }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4 grid grid-cols-2 border border-[#c6c6c6] bg-white">
                    <button
                      type="button"
                      class="px-3 py-3 text-[12px] font-semibold text-[#6f6f6f] transition-colors hover:bg-[#edf5ff] hover:text-[#0f62fe]"
                    >
                      Overview
                    </button>

                    <button
                      type="button"
                      class="bg-[#0f62fe] px-3 py-3 text-[12px] font-semibold text-white"
                    >
                      Sites ({{ selectedCountry.count }})
                    </button>
                  </div>

                  @if (selectedCountry.sites.length > 0) {
                    <div class="flex flex-col gap-2">
                      @for (site of selectedCountry.sites; track site.title) {
                        <article class="site-card">
                          <div class="flex items-start gap-3">
                            <div class="site-list-flag">
                              <img
                                [src]="selectedCountry.flagUrl"
                                [alt]="selectedCountry.name + ' flag'"
                                class="h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>

                            <div>
                              <h4 class="text-[13px] font-semibold leading-tight text-[#161616]">
                                {{ site.title }}
                              </h4>

                              <h5 class="mt-1 text-[12px] font-semibold leading-tight text-[#0f62fe]">
                                {{ site.subtitle }}
                              </h5>

                              <p class="mt-2 text-[11.5px] leading-relaxed text-[#6f6f6f]">
                                {{ site.description }}
                              </p>
                            </div>
                          </div>
                        </article>
                      }
                    </div>
                  }

                  @if (selectedCountry.sites.length === 0) {
                    <div class="border border-[#c6c6c6] bg-white p-4">
                      <h4 class="text-[18px] font-normal leading-tight tracking-[-0.035em] text-[#161616]">
                        Site data not yet configured
                      </h4>

                      <p class="mt-3 text-[12px] leading-relaxed text-[#525252]">
                        This country is active at country level. Add branch, sales office,
                        training centre, partner office or representative office records.
                      </p>
                    </div>
                  }

                </div>
              }

            </aside>

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
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.22em;
      color: #0f62fe;
    }

    .right-scroll-area {
      height: 100%;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 14px;
    }

    .map-enterprise-bg {
      background:
        linear-gradient(135deg, #edf5ff 0%, #d0e2ff 44%, #a6c8ff 100%);
    }

    .real-map-image {
      width: 112%;
      height: 112%;
      object-fit: contain;
      object-position: center;
      opacity: 0.52;
      filter:
        sepia(1)
        saturate(5)
        hue-rotate(175deg)
        brightness(0.92)
        contrast(1.12);
      transform: translate(-3%, -4%);
    }

    .map-blue-overlay {
      background:
        linear-gradient(135deg, rgba(15, 98, 254, 0.16), rgba(255, 255, 255, 0.15)),
        radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.62), transparent 34%),
        radial-gradient(circle at 78% 30%, rgba(255, 255, 255, 0.26), transparent 30%),
        radial-gradient(circle at 52% 70%, rgba(15, 98, 254, 0.13), transparent 38%);
    }

    .map-marker {
      position: relative;
      width: 44px;
      height: 44px;
      border: 2px solid #ffffff;
      border-radius: 999px;
      background: #ffffff;
      box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.16),
        0 0 0 7px rgba(15, 98, 254, 0.10);
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        transform 0.22s ease,
        box-shadow 0.22s ease,
        background 0.22s ease;
    }

    .map-marker:hover,
    .map-marker-active {
      transform: scale(1.12);
      background: #0f62fe;
      box-shadow:
        0 16px 34px rgba(15, 98, 254, 0.34),
        0 0 0 9px rgba(15, 98, 254, 0.16);
    }

    .flag-circle {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      overflow: hidden;
      border: 2px solid #ffffff;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .marker-count {
      position: absolute;
      right: -7px;
      top: -7px;
      min-width: 20px;
      height: 20px;
      padding: 0 5px;
      border-radius: 999px;
      background: #161616;
      color: #ffffff;
      border: 2px solid #ffffff;
      font-size: 10px;
      font-weight: 700;
      line-height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tooltip-flag,
    .legend-flag,
    .country-list-flag,
    .selected-country-flag,
    .selected-empty-flag,
    .site-list-flag,
    .site-map-flag {
      border-radius: 999px;
      overflow: hidden;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .tooltip-flag,
    .legend-flag {
      width: 24px;
      height: 24px;
      border: 1px solid #c6c6c6;
    }

    .country-list-flag {
      width: 38px;
      height: 38px;
      border: 1px solid #c6c6c6;
    }

    .selected-country-flag {
      width: 54px;
      height: 54px;
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 1px #c6c6c6;
    }

    .selected-empty-flag {
      width: 64px;
      height: 64px;
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 1px #c6c6c6;
    }

    .site-list-flag {
      width: 34px;
      height: 34px;
      border: 1px solid #c6c6c6;
    }

    .site-map-flag {
      position: relative;
      z-index: 10;
      width: 38px;
      height: 38px;
      border: 2px solid #ffffff;
      box-shadow:
        0 12px 28px rgba(15, 23, 42, 0.18),
        0 0 0 2px #0f62fe;
    }

    .map-control {
      display: flex;
      width: 32px;
      height: 32px;
      align-items: center;
      justify-content: center;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      color: #0f62fe;
      font-size: 18px;
      font-weight: 600;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease;
    }

    .map-control:hover {
      border-color: #0f62fe;
      background: #0f62fe;
      color: #ffffff;
    }

    .total-sites-badge {
      display: flex;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      border: 1px solid #c6c6c6;
      background: #edf5ff;
      color: #0f62fe;
      font-size: 15px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .country-list-card {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border: 1px solid #e0e0e0;
      background: #ffffff;
      padding: 9px;
      text-align: left;
      transition:
        background 0.18s ease,
        border-color 0.18s ease,
        transform 0.18s ease;
    }

    .country-list-card:hover {
      border-color: #0f62fe;
      background: #0f62fe;
      transform: translateY(-1px);
    }

    .country-count {
      display: flex;
      min-width: 28px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #0f62fe;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .country-list-card:hover .country-count {
      background: #ffffff;
      color: #0f62fe;
    }

    .site-card {
      border: 1px solid #e0e0e0;
      background: #ffffff;
      padding: 11px;
      transition:
        border-color 0.18s ease,
        background 0.18s ease;
    }

    .site-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
    }

    .no-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .animate-fade-in {
      animation: fadeIn 0.24s ease-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(10px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 1023px) {
      .grid.h-\\[390px\\] {
        height: auto;
      }

      aside {
        height: 390px;
      }
    }
  `]
})
export class ContactMapComponent {
  selectedCountry: Country | null = null;

  countries: Country[] = [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: 'https://flagcdn.com/w160/ca.png',
      count: 4,
      top: '31%',
      left: '22%',
      sites: [
        {
          title: 'Representative office in Toronto',
          subtitle: 'Country Advisory Office',
          description: 'Candidate advisory, healthcare pathway coordination, and institutional relationship support.',
          top: '35%',
          left: '25%'
        },
        {
          title: 'Partner desk in Vancouver',
          subtitle: 'Regional Candidate Support Desk',
          description: 'Regional student and skilled-worker counselling support.',
          top: '34%',
          left: '17%'
        }
      ]
    },
    {
      name: 'Korea',
      code: 'KR',
      flagUrl: 'https://flagcdn.com/w160/kr.png',
      count: 1,
      top: '40%',
      left: '78%',
      sites: [
        {
          title: 'Representative office in Seoul',
          subtitle: 'Regional Partner Office',
          description: 'Country-level representation for partner development and candidate engagement.',
          top: '42%',
          left: '76%'
        }
      ]
    },
    {
      name: 'Latvia',
      code: 'LV',
      flagUrl: 'https://flagcdn.com/w160/lv.png',
      count: 1,
      top: '28%',
      left: '53%',
      sites: [
        {
          title: 'Representative office in Riga',
          subtitle: 'European Coordination Desk',
          description: 'Support office for European relationship management and partner coordination.',
          top: '31%',
          left: '52%'
        }
      ]
    },
    {
      name: 'Malaysia',
      code: 'MY',
      flagUrl: 'https://flagcdn.com/w160/my.png',
      count: 1,
      top: '58%',
      left: '72%',
      sites: [
        {
          title: 'Partner office in Kuala Lumpur',
          subtitle: 'Student Advisory and Partner Support',
          description: 'Local candidate support, institutional outreach, and enquiry handling.',
          top: '59%',
          left: '72%'
        }
      ]
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: 'https://flagcdn.com/w160/mx.png',
      count: 6,
      top: '48%',
      left: '20%',
      sites: [
        {
          title: 'Country office in Mexico City',
          subtitle: 'Sales and Candidate Advisory Office',
          description: 'Primary country-level office for admissions, counselling, and partner activation.',
          top: '50%',
          left: '23%'
        },
        {
          title: 'Regional office in Monterrey',
          subtitle: 'North Region Support Desk',
          description: 'Regional employer, institution, and candidate coordination.',
          top: '43%',
          left: '21%'
        },
        {
          title: 'Partner office in Guadalajara',
          subtitle: 'Candidate Engagement Desk',
          description: 'Local lead nurturing, counselling support, and regional outreach.',
          top: '52%',
          left: '19%'
        }
      ]
    },
    {
      name: 'Myanmar',
      code: 'MM',
      flagUrl: 'https://flagcdn.com/w160/mm.png',
      count: 1,
      top: '53%',
      left: '68%',
      sites: [
        {
          title: 'Partner office in Yangon',
          subtitle: 'Candidate Sourcing Desk',
          description: 'Local support for student and workforce sourcing initiatives.',
          top: '54%',
          left: '68%'
        }
      ]
    },
    {
      name: 'Netherlands',
      code: 'NL',
      flagUrl: 'https://flagcdn.com/w160/nl.png',
      count: 5,
      top: '33%',
      left: '48%',
      sites: [
        {
          title: 'Representative office in Amsterdam',
          subtitle: 'European Business Development Desk',
          description: 'European business development, university coordination, and strategic partnerships.',
          top: '34%',
          left: '48%'
        },
        {
          title: 'Partner desk in Rotterdam',
          subtitle: 'Mobility and Employer Coordination',
          description: 'Employer-side coordination and mobility support functions.',
          top: '37%',
          left: '47%'
        }
      ]
    },
    {
      name: 'Norway',
      code: 'NO',
      flagUrl: 'https://flagcdn.com/w160/no.png',
      count: 3,
      top: '22%',
      left: '50%',
      sites: [
        {
          title: 'Representative office in Oslo',
          subtitle: 'Nordic Region Desk',
          description: 'Nordic market relationship management and institutional partnership support.',
          top: '24%',
          left: '50%'
        },
        {
          title: 'Partner desk in Bergen',
          subtitle: 'Regional Partnership Desk',
          description: 'Institutional outreach and regional employer coordination.',
          top: '25%',
          left: '47%'
        }
      ]
    },
    {
      name: 'Panama',
      code: 'PA',
      flagUrl: 'https://flagcdn.com/w160/pa.png',
      count: 6,
      top: '56%',
      left: '28%',
      sites: [
        {
          title: 'Partner office in Panama City',
          subtitle: 'Regional Coordination Office',
          description: 'Central America coordination for candidate sourcing and institutional relations.',
          top: '57%',
          left: '29%'
        },
        {
          title: 'Advisory desk in Colón',
          subtitle: 'Candidate Support Desk',
          description: 'Candidate support, document guidance, and enquiry management.',
          top: '55%',
          left: '30%'
        }
      ]
    },
    {
      name: 'Ukraine',
      code: 'UA',
      flagUrl: 'https://flagcdn.com/w160/ua.png',
      count: 2,
      top: '35%',
      left: '56%',
      sites: [
        {
          title: 'Legal entity in Kharkiv',
          subtitle: 'Sales Office and Engineering Office',
          description: 'Local signalling, sales, and regional engineering centre.',
          top: '38%',
          left: '60%'
        },
        {
          title: 'Representative office in Kyiv',
          subtitle: 'Country HQ and Sales Office',
          description: 'Sales office and country headquarters for Ukraine.',
          top: '34%',
          left: '56%'
        }
      ]
    }
  ];

  get totalSites(): number {
    return this.countries.reduce((total, country) => total + country.count, 0);
  }

  selectCountry(country: Country): void {
    this.selectedCountry = country;
  }

  goBack(): void {
    this.selectedCountry = null;
  }
}