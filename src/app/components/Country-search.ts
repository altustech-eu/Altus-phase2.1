import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Country {
  name: string;
  code: string;
  continent: string;
  flagUrl: string;
  headline: string;
  description: string;
  mapX: number;
  mapY: number;
  opportunities: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

interface PartnerCard {
  title: string;
  category: string;
  rating: string;
  reviews: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-country-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <!-- 01 Heading -->
      <div class="border-b border-[#e0e0e0] bg-white">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-14 xl:px-16 2xl:px-20">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            <div class="lg:col-span-7">
              <p class="section-eyebrow">
                Destination Intelligence
              </p>

              <h2 class="mt-4 max-w-[880px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
                Country search for study, jobs and career pathways
              </h2>
            </div>

            <div class="lg:col-span-5">
              <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
                Select a country to explore Ausbildung, study abroad, international jobs,
                German language preparation, employer demand, visa readiness and pathway opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>

      <!-- 02 Main Layout -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 xl:px-16 2xl:px-20">

          <div class="grid grid-cols-1 border border-[#c6c6c6] bg-white lg:grid-cols-12">

            <!-- Left Panel -->
            <aside class="flex flex-col border-b border-[#c6c6c6] bg-white lg:col-span-3 lg:border-b-0 lg:border-r">

              <div class="border-b border-[#e0e0e0] p-5">
                <p class="section-eyebrow">
                  Explore destinations
                </p>

                <h3 class="mt-3 text-[28px] font-normal leading-[1.08] tracking-[-0.045em] text-[#161616]">
                  Select your country
                </h3>

                <p class="mt-3 text-[13px] leading-relaxed text-[#525252]">
                  Filter by region and view country-specific pathway intelligence.
                </p>

                <!-- Search -->
                <div class="relative mt-5">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg class="h-4 w-4 text-[#6f6f6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                      </path>
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="Search country"
                    class="search-input"
                    (input)="setSearch($event)"
                  />
                </div>
              </div>

              <!-- Region Tabs -->
              <div class="grid grid-cols-2 border-b border-[#e0e0e0]">
                @for (tab of continents; track tab) {
                  <button
                    type="button"
                    (click)="setTab(tab)"
                    class="h-[44px] border-r border-b border-[#e0e0e0] text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                    [class.col-span-2]="tab === 'Europe'"
                    [class.bg-[#0f62fe]]="activeTab === tab"
                    [class.text-white]="activeTab === tab"
                    [class.text-[#525252]]="activeTab !== tab"
                    [class.hover:bg-[#f4f4f4]]="activeTab !== tab"
                  >
                    {{ tab }}
                  </button>
                }
              </div>

              <!-- Country List -->
              <div class="max-h-[560px] flex-1 overflow-y-auto p-3 hide-scrollbar">
                <div class="space-y-2">

                  @for (country of filteredCountries; track country.code) {
                    <button
                      type="button"
                      (click)="selectCountry(country.code)"
                      class="country-list-card"
                      [class.border-[#0f62fe]]="activeCountry.code === country.code"
                      [class.bg-[#edf5ff]]="activeCountry.code === country.code"
                      [class.border-[#c6c6c6]]="activeCountry.code !== country.code"
                      [class.bg-white]="activeCountry.code !== country.code"
                    >

                      <div class="flex items-start justify-between gap-3">
                        <div class="flex items-center gap-3">

                          <!-- Circular Flag -->
                          <span class="flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#c6c6c6] bg-white shadow-sm">
                            <img
                              [src]="country.flagUrl"
                              [alt]="country.name + ' flag'"
                              class="h-full w-full rounded-full object-cover"
                              loading="lazy"
                            />
                          </span>

                          <div>
                            <p class="text-[14px] font-normal tracking-[-0.02em] text-[#161616]">
                              {{ country.name }}
                            </p>

                            <p class="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-[#6f6f6f]">
                              {{ country.continent }}
                            </p>
                          </div>
                        </div>

                        <span
                          class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border text-[13px]"
                          [class.border-[#0f62fe]]="activeCountry.code === country.code"
                          [class.text-[#0f62fe]]="activeCountry.code === country.code"
                          [class.border-[#c6c6c6]]="activeCountry.code !== country.code"
                          [class.text-[#6f6f6f]]="activeCountry.code !== country.code"
                        >
                          →
                        </span>
                      </div>

                      @if (activeCountry.code === country.code) {
                        <p class="mt-3 text-[12px] leading-relaxed text-[#525252]">
                          {{ country.headline }}
                        </p>
                      }
                    </button>
                  }

                  @if (filteredCountries.length === 0) {
                    <div class="border border-dashed border-[#c6c6c6] bg-[#f4f4f4] p-5 text-center">
                      <p class="text-[14px] font-semibold text-[#161616]">
                        No destination found
                      </p>

                      <p class="mt-2 text-[12px] text-[#525252]">
                        Try another country or region.
                      </p>
                    </div>
                  }

                </div>
              </div>
            </aside>

            <!-- Right Intelligence Area -->
            <main class="relative min-h-[620px] overflow-hidden bg-[#f4f4f4] lg:col-span-9">

              <!-- Map Background -->
              <div class="absolute inset-0">
                <div class="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f4f4f4_48%,#eaf2ff_100%)]"></div>

                <div
                  class="absolute inset-0 opacity-[0.16]"
                  style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg'); background-size: 105%; background-position: center 38%; background-repeat: no-repeat; filter: grayscale(100%);">
                </div>
              </div>

              <!-- Map Header -->
              <div class="relative z-10 flex flex-col gap-5 border-b border-white/80 bg-white/80 p-5 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">

                <div>
                  <p class="section-eyebrow">
                    Active destination
                  </p>

                  <div class="mt-3 flex items-center gap-3">

                    <!-- Active Circular Flag -->
                    <span class="flex h-10 w-10 overflow-hidden rounded-full border border-[#c6c6c6] bg-white shadow-sm">
                      <img
                        [src]="activeCountry.flagUrl"
                        [alt]="activeCountry.name + ' flag'"
                        class="h-full w-full rounded-full object-cover"
                        loading="lazy"
                      />
                    </span>

                    <h3 class="text-[30px] font-normal leading-tight tracking-[-0.05em] text-[#161616]">
                      {{ activeCountry.name }}
                    </h3>
                  </div>
                </div>

                <div class="grid grid-cols-3 border border-[#c6c6c6] bg-white">
                  @for (stat of activeCountry.stats; track stat.label) {
                    <div class="stat-box">
                      <p class="stat-value">
                        {{ stat.value }}
                      </p>

                      <p class="stat-label">
                        {{ stat.label }}
                      </p>
                    </div>
                  }
                </div>
              </div>

              <!-- Map Pins -->
              <div class="relative z-10 h-[210px] lg:h-[240px]">

                @for (country of countries; track country.code) {
                  <button
                    type="button"
                    (click)="selectCountry(country.code)"
                    class="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                    [style.left.%]="country.mapX"
                    [style.top.%]="country.mapY"
                    [class.z-30]="activeCountry.code === country.code"
                    [class.z-20]="activeCountry.code !== country.code"
                    [class.opacity-100]="country.continent === activeTab || country.code === activeCountry.code"
                    [class.opacity-30]="country.continent !== activeTab && country.code !== activeCountry.code"
                  >

                    <!-- Circular Map Flag Pin -->
                    <span
                      class="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-lg transition-all duration-300"
                      [class.border-[#0f62fe]]="activeCountry.code === country.code"
                      [class.scale-125]="activeCountry.code === country.code"
                      [class.border-white]="activeCountry.code !== country.code"
                      [class.hover:scale-110]="activeCountry.code !== country.code"
                    >
                      <img
                        [src]="country.flagUrl"
                        [alt]="country.name + ' flag'"
                        class="h-full w-full rounded-full object-cover"
                        loading="lazy"
                      />

                      @if (activeCountry.code === country.code) {
                        <span class="absolute -inset-2 rounded-full border border-[#0f62fe]/40 animate-ping"></span>
                      }
                    </span>

                    @if (activeCountry.code === country.code) {
                      <span class="absolute left-1/2 top-[44px] -translate-x-1/2 whitespace-nowrap bg-[#0f62fe] px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">
                        {{ country.name }}
                      </span>
                    }
                  </button>
                }

              </div>

              <!-- Recommended Pathways Only -->
              <div class="relative z-10 p-5">

                <div class="mb-4 flex items-center justify-between">
                  <div>
                    <p class="section-eyebrow">
                      Recommended pathways
                    </p>

                    <h4 class="mt-2 text-[28px] font-normal leading-tight tracking-[-0.045em] text-[#161616]">
                      Choose a route for {{ activeCountry.name }}
                    </h4>
                  </div>

                  <a href="#" class="hidden text-[13px] font-semibold text-[#0f62fe] hover:text-[#0043ce] sm:inline-flex">
                    View all →
                  </a>
                </div>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  @for (card of partnerCards; track card.title + $index) {
                    <article class="image-pathway-card group">

                      <img
                        [src]="card.imageUrl"
                        [alt]="card.title"
                        class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"></div>

                      <div class="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                        {{ card.category }}
                      </div>

                      <div class="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h4 class="text-[21px] font-normal leading-tight tracking-[-0.04em]">
                          {{ card.title }}
                        </h4>

                        <div class="mt-3 flex items-center gap-2 text-[11px] font-semibold text-white/80">
                          <span>{{ card.rating }} rating</span>
                          <span class="h-1 w-1 bg-white/60"></span>
                          <span>{{ card.reviews }} reviews</span>
                        </div>

                        <p class="mt-3 text-[12px] leading-relaxed text-white/80">
                          {{ card.description }}
                        </p>

                        <button class="mt-4 w-full border border-white/40 bg-white/10 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-[#161616]">
                          Explore pathway
                        </button>
                      </div>

                    </article>
                  }
                </div>

              </div>

              <!-- Zoom Controls -->
              <div class="absolute right-5 top-[88px] z-30 flex flex-col gap-2">
                <button
                  type="button"
                  class="zoom-btn"
                >
                  +
                </button>

                <button
                  type="button"
                  class="zoom-btn"
                >
                  −
                </button>
              </div>

            </main>

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

    .search-input {
      width: 100%;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 13px 16px 13px 44px;
      font-size: 14px;
      color: #161616;
      outline: none;
    }

    .search-input:focus {
      border-color: #0f62fe;
      box-shadow: inset 0 0 0 1px #0f62fe;
    }

    .country-list-card {
      width: 100%;
      border-width: 1px;
      padding: 13px;
      text-align: left;
      transition:
        background 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
    }

    .country-list-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
    }

    .stat-box {
      min-width: 104px;
      border-right: 1px solid #c6c6c6;
      background: #ffffff;
      padding: 14px;
    }

    .stat-box:last-child {
      border-right: 0;
    }

    .stat-value {
      font-size: 20px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -0.04em;
      color: #161616;
    }

    .stat-label {
      margin-top: 8px;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.3;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #6f6f6f;
    }

    .image-pathway-card {
      position: relative;
      min-height: 360px;
      overflow: hidden;
      border: 1px solid #c6c6c6;
      background: #161616;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
    }

    .image-pathway-card:hover {
      border-color: #0f62fe;
      box-shadow: 0 22px 64px rgba(15, 23, 42, 0.18);
      transform: translateY(-2px);
    }

    .zoom-btn {
      display: flex;
      height: 36px;
      width: 36px;
      align-items: center;
      justify-content: center;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      color: #161616;
      font-size: 18px;
      line-height: 1;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease;
    }

    .zoom-btn:hover {
      border-color: #0f62fe;
      background: #0f62fe;
      color: #ffffff;
    }

    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      .stat-box {
        min-width: auto;
      }

      .image-pathway-card {
        min-height: 320px;
      }
    }
  `]
})
export class CountrySearchComponent {
  activeTab = 'Europe';
  searchTerm = '';
  activeCountryCode = 'DE';

  continents = ['Europe', 'Asia', 'Middle East'];

  countries: Country[] = [
    {
      name: 'Germany',
      code: 'DE',
      continent: 'Europe',
      flagUrl: 'https://flagcdn.com/w80/de.png',
      headline: 'Ausbildung, public universities and strong career pathways',
      description: 'Germany is ideal for Ausbildung, engineering, healthcare, IT, public universities and structured long-term career mobility.',
      mapX: 49,
      mapY: 38,
      opportunities: [
        'Ausbildung sectors: healthcare, hospitality, logistics, retail and IT.',
        'Strong public university and applied sciences ecosystem.',
        'German language readiness is a key success factor.'
      ],
      stats: [
        { label: 'Ausbildung', value: 'High' },
        { label: 'Study ROI', value: 'High' },
        { label: 'Language', value: 'A2-B1' }
      ]
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      continent: 'Europe',
      flagUrl: 'https://flagcdn.com/w80/gb.png',
      headline: 'Globally recognised degrees and shorter study routes',
      description: 'The UK is suitable for students seeking university brand value, global exposure, shorter academic timelines and strong alumni networks.',
      mapX: 42,
      mapY: 36,
      opportunities: [
        'Strong for business, law, finance, healthcare and creative fields.',
        'Shorter master program duration in many institutions.',
        'Good destination for brand-sensitive student profiles.'
      ],
      stats: [
        { label: 'Study Route', value: 'PG' },
        { label: 'Duration', value: 'Short' },
        { label: 'Brand', value: 'High' }
      ]
    },
    {
      name: 'France',
      code: 'FR',
      continent: 'Europe',
      flagUrl: 'https://flagcdn.com/w80/fr.png',
      headline: 'Business, hospitality, fashion and European mobility',
      description: 'France is a strong destination for students exploring management, hospitality, luxury, design, culinary and European academic exposure.',
      mapX: 45,
      mapY: 43,
      opportunities: [
        'Relevant for business, hospitality, culinary and design fields.',
        'Good European exposure with international campuses.',
        'French language can strengthen long-term employability.'
      ],
      stats: [
        { label: 'Fields', value: 'Business' },
        { label: 'Mobility', value: 'EU' },
        { label: 'Value', value: 'Good' }
      ]
    },
    {
      name: 'Italy',
      code: 'IT',
      continent: 'Europe',
      flagUrl: 'https://flagcdn.com/w80/it.png',
      headline: 'Affordable education, design, medicine and hospitality routes',
      description: 'Italy is useful for students comparing affordability, medicine, architecture, design, culinary and European lifestyle.',
      mapX: 51,
      mapY: 49,
      opportunities: [
        'Good for medicine, design, architecture and hospitality.',
        'Attractive tuition-cost balance compared to some destinations.',
        'European exposure with culturally rich academic environment.'
      ],
      stats: [
        { label: 'Cost', value: 'Good' },
        { label: 'Fields', value: 'Wide' },
        { label: 'Lifestyle', value: 'High' }
      ]
    },
    {
      name: 'Australia',
      code: 'AU',
      continent: 'Asia',
      flagUrl: 'https://flagcdn.com/w80/au.png',
      headline: 'Industry-linked programs and strong student lifestyle',
      description: 'Australia is useful for practical education, employability-linked programs, campus life and international exposure.',
      mapX: 78,
      mapY: 76,
      opportunities: [
        'Strong options in healthcare, IT, business and hospitality.',
        'Good campus lifestyle and student support infrastructure.',
        'Popular for students seeking employability-focused education.'
      ],
      stats: [
        { label: 'Lifestyle', value: 'High' },
        { label: 'Programs', value: 'Wide' },
        { label: 'Work', value: 'Yes' }
      ]
    },
    {
      name: 'India',
      code: 'IN',
      continent: 'Asia',
      flagUrl: 'https://flagcdn.com/w80/in.png',
      headline: 'Source market for training, counselling and documentation',
      description: 'India is a major source market for Ausbildung counselling, German training, study abroad preparation and candidate documentation.',
      mapX: 67,
      mapY: 58,
      opportunities: [
        'German language training and career counselling hub.',
        'Candidate sourcing for Ausbildung, jobs and study abroad.',
        'Documentation and readiness preparation before migration.'
      ],
      stats: [
        { label: 'Source', value: 'High' },
        { label: 'Training', value: 'A1-B1' },
        { label: 'Market', value: 'Large' }
      ]
    },
    {
      name: 'UAE',
      code: 'AE',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/ae.png',
      headline: 'Regional career hub for jobs, business and education',
      description: 'UAE is a practical destination for Gulf jobs, business programs, professional upskilling and regional employer access.',
      mapX: 62,
      mapY: 57,
      opportunities: [
        'Strong for business, hospitality, logistics and service sectors.',
        'Useful for Gulf job pathways and professional networking.',
        'Regional hub for employers and career mobility.'
      ],
      stats: [
        { label: 'Jobs', value: 'High' },
        { label: 'Business', value: 'Strong' },
        { label: 'Hub', value: 'GCC' }
      ]
    },
    {
      name: 'Oman',
      code: 'OM',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/om.png',
      headline: 'Growing education, healthcare and workforce mobility market',
      description: 'Oman is suitable for Gulf-based counselling, healthcare recruitment, skilled workforce movement, training partnerships and regional expansion.',
      mapX: 64,
      mapY: 61,
      opportunities: [
        'Good market for healthcare, hospitality and technical workforce pathways.',
        'Useful for franchise, counselling centre and training partnership models.',
        'Strong potential for India-GCC-Europe mobility bridge.'
      ],
      stats: [
        { label: 'GCC Access', value: 'Good' },
        { label: 'Workforce', value: 'High' },
        { label: 'Market', value: 'Emerging' }
      ]
    },
    {
      name: 'Kuwait',
      code: 'KW',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/kw.png',
      headline: 'Strategic Gulf source market for Indian and expat students',
      description: 'Kuwait is important for school tie-ups, Indian and Pakistani student communities, study abroad counselling, Ausbildung awareness and healthcare workforce mobility.',
      mapX: 60,
      mapY: 54,
      opportunities: [
        'Strong source market for Indian and Pakistani expat students.',
        'Relevant for school partnerships, parent counselling and study abroad funnels.',
        'Useful for Ausbildung, Germany pathway and healthcare recruitment campaigns.'
      ],
      stats: [
        { label: 'Students', value: 'High' },
        { label: 'Schools', value: 'Strong' },
        { label: 'GCC', value: 'Core' }
      ]
    },
    {
      name: 'Azerbaijan',
      code: 'AZ',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/az.png',
      headline: 'Bridge market for education, medicine and regional mobility',
      description: 'Azerbaijan can support affordable education pathways, medicine-related programs, regional student mobility and Europe-linked transition planning.',
      mapX: 57,
      mapY: 47,
      opportunities: [
        'Relevant for medicine, affordable education and regional academic routes.',
        'Useful as a bridge between Asia, Europe and Middle East markets.',
        'Potential for university partnerships and student mobility programs.'
      ],
      stats: [
        { label: 'Education', value: 'Good' },
        { label: 'Medicine', value: 'Strong' },
        { label: 'Bridge', value: 'Yes' }
      ]
    },
    {
      name: 'Qatar',
      code: 'QA',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/qa.png',
      headline: 'Premium Gulf education and professional mobility destination',
      description: 'Qatar is relevant for high-income expat families, premium education counselling, healthcare workforce, hospitality careers and Gulf employer networks.',
      mapX: 61,
      mapY: 57,
      opportunities: [
        'Good for premium student counselling and parent-led decision journeys.',
        'Relevant for healthcare, hospitality, business and professional workforce demand.',
        'Useful for Gulf employer and institutional partnership development.'
      ],
      stats: [
        { label: 'Premium', value: 'High' },
        { label: 'Jobs', value: 'Good' },
        { label: 'Families', value: 'Strong' }
      ]
    },
    {
      name: 'Saudi Arabia',
      code: 'SA',
      continent: 'Middle East',
      flagUrl: 'https://flagcdn.com/w80/sa.png',
      headline: 'Large-scale workforce, education and transformation market',
      description: 'Saudi Arabia is a major opportunity market for skilled workforce mobility, healthcare recruitment, hospitality, technical jobs, institutional training and business expansion.',
      mapX: 59,
      mapY: 59,
      opportunities: [
        'Large demand potential in healthcare, hospitality, construction, logistics and technical sectors.',
        'Useful for institutional partnerships, workforce training and recruitment pipelines.',
        'Strong market for transformation-linked education and career mobility services.'
      ],
      stats: [
        { label: 'Scale', value: 'Very High' },
        { label: 'Jobs', value: 'High' },
        { label: 'Growth', value: 'Strong' }
      ]
    }
  ];

  partnerCards: PartnerCard[] = [
    {
      title: 'Ausbildung Germany Pathway',
      category: 'Vocational Route',
      rating: '4.8',
      reviews: '2k+',
      description: 'Healthcare, hospitality, retail, logistics and IT Ausbildung guidance.',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      title: 'Study Abroad Counselling',
      category: 'University Route',
      rating: '4.7',
      reviews: '3k+',
      description: 'University shortlisting, SOP support, documentation and visa readiness.',
      imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      title: 'International Jobs Pipeline',
      category: 'Career Route',
      rating: '4.6',
      reviews: '1.5k+',
      description: 'CV building, employer matching, interview readiness and relocation support.',
      imageUrl: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=900'
    }
  ];

  get filteredCountries(): Country[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.countries.filter(country => {
      const matchesTab = country.continent === this.activeTab;
      const matchesSearch =
        !term ||
        country.name.toLowerCase().includes(term) ||
        country.continent.toLowerCase().includes(term);

      return matchesTab && matchesSearch;
    });
  }

  get activeCountry(): Country {
    return this.countries.find(country => country.code === this.activeCountryCode) || this.countries[0];
  }

  setTab(tab: string): void {
    this.activeTab = tab;

    const firstCountry = this.countries.find(country => country.continent === tab);

    if (firstCountry) {
      this.activeCountryCode = firstCountry.code;
    }
  }

  selectCountry(code: string): void {
    this.activeCountryCode = code;

    const selectedCountry = this.countries.find(country => country.code === code);

    if (selectedCountry) {
      this.activeTab = selectedCountry.continent;
    }
  }

  setSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }
}