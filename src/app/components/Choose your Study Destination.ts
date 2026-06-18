import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CountryTab {
  id: string;
  country: string;
  flagUrl: string;
}

interface InstitutionCard {
  id: string;
  countryId: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  logoUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-study-destination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white text-[#161616]">

      <!-- 01 Header -->
      <div class="border-y border-[#e0e0e0] bg-white">
        <div class="mx-auto grid max-w-[1584px] grid-cols-1 gap-8 px-6 py-14 lg:grid-cols-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <div class="lg:col-span-7">
            <p class="section-eyebrow">
              Trusted Study Destinations
            </p>

            <h2 class="mt-5 max-w-[920px] text-[40px] font-normal leading-[1.05] tracking-[-0.055em] md:text-[52px] lg:text-[64px]">
              Explore universities, colleges and schools by country
            </h2>
          </div>

          <div class="flex flex-col justify-end lg:col-span-5">
            <p class="max-w-[620px] text-[16px] leading-[1.75] text-[#525252] lg:text-[18px]">
              Browse country-wise institutions, campus options, applied learning pathways,
              student support models and international admission opportunities.
            </p>
          </div>

        </div>
      </div>

      <!-- 02 Country Tabs -->
      <div class="border-b border-[#e0e0e0] bg-[#f4f4f4]">
        <div class="mx-auto max-w-[1584px] px-6 py-8 lg:px-12 xl:px-16 2xl:px-20">

          <div class="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                Country filter
              </p>

              <h3 class="mt-3 text-[30px] font-normal leading-tight tracking-[-0.045em] text-[#161616] lg:text-[42px]">
                Select a study destination
              </h3>
            </div>

            <p class="max-w-[520px] text-[14px] leading-relaxed text-[#525252]">
              Each country opens a focused list of sample institutions. Replace this with your University MDM data later.
            </p>
          </div>

          <div class="grid grid-cols-2 border border-[#c6c6c6] bg-white md:grid-cols-3 lg:grid-cols-6">
            @for (tab of countryTabs; track tab.id) {
              <button
                type="button"
                (click)="selectCountry(tab.id)"
                class="country-tab"
                [class.bg-[#0f62fe]]="activeCountryId === tab.id"
                [class.text-white]="activeCountryId === tab.id"
                [class.bg-white]="activeCountryId !== tab.id"
                [class.text-[#161616]]="activeCountryId !== tab.id"
              >
                <span class="flex h-9 w-9 shrink-0 overflow-hidden border border-[#c6c6c6] bg-white">
                  <img
                    [src]="tab.flagUrl"
                    [alt]="tab.country + ' flag'"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>

                <span class="truncate text-[13px] font-semibold">
                  {{ tab.country }}
                </span>
              </button>
            }
          </div>

        </div>
      </div>

      <!-- 03 Institution Cards -->
      <div class="bg-white">
        <div class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">

          <div class="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="section-eyebrow">
                {{ activeCountryName }} institutions
              </p>

              <h3 class="mt-3 text-[32px] font-normal leading-tight tracking-[-0.05em] text-[#161616] lg:text-[48px]">
                Featured universities and colleges
              </h3>
            </div>

            <button
              type="button"
              class="hidden border border-[#0f62fe] bg-white px-6 py-3 text-[14px] font-semibold text-[#0f62fe] transition-colors hover:bg-[#0f62fe] hover:text-white lg:inline-flex"
            >
              Explore More {{ activeCountryName }} Institutions
            </button>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            @for (card of filteredInstitutions; track card.id) {
              <article class="institution-card group">

                <!-- Image -->
                <div class="relative h-[240px] overflow-hidden bg-[#e0e0e0]">
                  <img
                    [src]="card.imageUrl"
                    [alt]="card.name"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"></div>

                  @if (card.featured) {
                    <div class="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                      Featured
                    </div>
                  }

                  <div class="absolute bottom-4 left-4 right-4">
                    <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      {{ activeCountryName }}
                    </p>

                    <h3 class="mt-2 text-[25px] font-normal leading-tight tracking-[-0.045em] text-white">
                      {{ card.name }}
                    </h3>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5">
                  <div class="mb-5 flex items-center gap-4">

                    <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden border border-[#c6c6c6] bg-white">
                      <img
                        [src]="card.logoUrl"
                        [alt]="card.name + ' logo'"
                        class="h-full w-full object-contain p-1"
                        loading="lazy"
                      />
                    </div>

                    <div class="min-w-0">
                      <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f62fe]">
                        Location
                      </p>

                      <p class="mt-1 truncate text-[14px] leading-relaxed text-[#525252]">
                        {{ card.location }}
                      </p>
                    </div>

                  </div>

                  <p class="line-clamp-4 text-[14px] leading-relaxed text-[#525252]">
                    {{ card.description }}
                  </p>

                  <div class="mt-6 flex items-center justify-between border-t border-[#e0e0e0] pt-4">
                    <span class="text-[13px] font-semibold text-[#0f62fe]">
                      View institution
                    </span>

                    <span class="text-[24px] font-light leading-none text-[#0f62fe]">
                      ↗
                    </span>
                  </div>
                </div>

              </article>
            }

          </div>

          <!-- Mobile CTA -->
          <div class="mt-8 flex lg:hidden">
            <button
              type="button"
              class="w-full border border-[#0f62fe] bg-[#0f62fe] px-6 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#0043ce]"
            >
              Explore More {{ activeCountryName }} Institutions
            </button>
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

    .country-tab {
      min-height: 74px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      padding: 14px;
      text-align: left;
      transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease;
    }

    .country-tab:hover {
      background: #edf5ff;
      color: #161616;
    }

    .institution-card {
      min-height: 520px;
      border: 1px solid #c6c6c6;
      background: #ffffff;
      overflow: hidden;
      transition:
        background 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease;
    }

    .institution-card:hover {
      border-color: #0f62fe;
      background: #f8fafc;
      box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      transform: translateY(-2px);
    }

    .line-clamp-4 {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .institution-card {
        min-height: 480px;
      }
    }
  `]
})
export class StudyDestinationComponent {
  activeCountryId = 'germany';

  countryTabs: CountryTab[] = [
    {
      id: 'australia',
      country: 'Australia',
      flagUrl: 'https://flagcdn.com/w80/au.png'
    },
    {
      id: 'canada',
      country: 'Canada',
      flagUrl: 'https://flagcdn.com/w80/ca.png'
    },
    {
      id: 'germany',
      country: 'Germany',
      flagUrl: 'https://flagcdn.com/w80/de.png'
    },
    {
      id: 'ireland',
      country: 'Ireland',
      flagUrl: 'https://flagcdn.com/w80/ie.png'
    },
    {
      id: 'usa',
      country: 'United States',
      flagUrl: 'https://flagcdn.com/w80/us.png'
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      flagUrl: 'https://flagcdn.com/w80/gb.png'
    }
  ];

  institutions: InstitutionCard[] = [
    {
      id: 'de-1',
      countryId: 'germany',
      name: 'Hochschulen Fresenius',
      location: 'Berlin, Berlin, DE',
      description: 'Hochschule Fresenius began life as the Chemisches Laboratorium Fresenius in 1848 and has evolved into a privately owned German university with a long tradition of applied learning, industry orientation and academic excellence.',
      imageUrl: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: true
    },
    {
      id: 'de-2',
      countryId: 'germany',
      name: 'Mediadesign Hochschule',
      location: 'Berlin, Berlin, DE',
      description: 'For over 35 years, Mediadesign Hochschule has been guiding students with expertise and experience into creative industries, design careers, media business, digital communication and future-focused professional pathways.',
      imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: true
    },
    {
      id: 'de-3',
      countryId: 'germany',
      name: 'University of Europe for Applied Sciences',
      location: 'Iserlohn, Nordrhein-Westfalen, DE',
      description: 'The University of Europe for Applied Sciences is a vibrant and dynamic institution dedicated to providing top-quality education to students from all around the world with a strong career and industry orientation.',
      imageUrl: 'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=200',
      featured: true
    },
    {
      id: 'au-1',
      countryId: 'australia',
      name: 'Australian Learning Institute',
      location: 'Sydney, New South Wales, AU',
      description: 'A practical education partner supporting international students with career-oriented programs, student support services, employability pathways and industry-connected learning models.',
      imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/au.png',
      featured: true
    },
    {
      id: 'au-2',
      countryId: 'australia',
      name: 'Southern Skills College',
      location: 'Melbourne, Victoria, AU',
      description: 'A vocational and higher education institution focused on hospitality, healthcare, business and technology programs for international learners.',
      imageUrl: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/au.png',
      featured: true
    },
    {
      id: 'au-3',
      countryId: 'australia',
      name: 'Pacific Career University',
      location: 'Brisbane, Queensland, AU',
      description: 'A student-focused institution offering applied learning, placement readiness, career guidance and practical academic programs for global students.',
      imageUrl: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/au.png',
      featured: true
    },
    {
      id: 'ca-1',
      countryId: 'canada',
      name: 'Canadian Applied College',
      location: 'Toronto, Ontario, CA',
      description: 'A Canada-focused academic partner supporting diploma, undergraduate and postgraduate learners with applied programs, co-op exposure and career readiness.',
      imageUrl: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ca.png',
      featured: true
    },
    {
      id: 'ca-2',
      countryId: 'canada',
      name: 'Maple Global University',
      location: 'Vancouver, British Columbia, CA',
      description: 'A globally oriented institution offering student support, multicultural campus experience, employability-linked programs and international student services.',
      imageUrl: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ca.png',
      featured: true
    },
    {
      id: 'ca-3',
      countryId: 'canada',
      name: 'Northbridge College',
      location: 'Ottawa, Ontario, CA',
      description: 'A practical learning destination for international students exploring business, IT, healthcare and skilled career-oriented education routes.',
      imageUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ca.png',
      featured: true
    },
    {
      id: 'ie-1',
      countryId: 'ireland',
      name: 'Dublin Business College',
      location: 'Dublin, Leinster, IE',
      description: 'An Ireland-focused partner institution supporting business, technology, analytics and management pathways for global student mobility.',
      imageUrl: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ie.png',
      featured: true
    },
    {
      id: 'ie-2',
      countryId: 'ireland',
      name: 'Emerald Tech Institute',
      location: 'Cork, Munster, IE',
      description: 'A modern technology and applied learning institution focused on digital skills, employability, international student support and career transition.',
      imageUrl: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ie.png',
      featured: true
    },
    {
      id: 'ie-3',
      countryId: 'ireland',
      name: 'Ireland International Academy',
      location: 'Galway, Connacht, IE',
      description: 'A student-centred academic partner offering global learning pathways, progression routes and employability-oriented academic support.',
      imageUrl: 'https://images.pexels.com/photos/320518/pexels-photo-320518.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/ie.png',
      featured: true
    },
    {
      id: 'us-1',
      countryId: 'usa',
      name: 'American Pathway College',
      location: 'Boston, Massachusetts, US',
      description: 'A US academic partner supporting undergraduate, postgraduate and pathway programs with strong student services and global campus exposure.',
      imageUrl: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/us.png',
      featured: true
    },
    {
      id: 'us-2',
      countryId: 'usa',
      name: 'United Global University',
      location: 'New York, New York, US',
      description: 'A globally recognised learning environment focused on innovation, business, technology, research exposure and international student development.',
      imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/us.png',
      featured: true
    },
    {
      id: 'us-3',
      countryId: 'usa',
      name: 'Pacific State College',
      location: 'San Francisco, California, US',
      description: 'A career-aligned institution supporting international students with applied programs, industry exposure and strong global learning outcomes.',
      imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/us.png',
      featured: true
    },
    {
      id: 'uk-1',
      countryId: 'uk',
      name: 'London Career University',
      location: 'London, England, UK',
      description: 'A UK academic partner offering recognised programs, international student support, career preparation and strong academic progression routes.',
      imageUrl: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/gb.png',
      featured: true
    },
    {
      id: 'uk-2',
      countryId: 'uk',
      name: 'Manchester Global College',
      location: 'Manchester, England, UK',
      description: 'A globally connected institution supporting international learners with business, healthcare, technology and creative academic pathways.',
      imageUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/gb.png',
      featured: true
    },
    {
      id: 'uk-3',
      countryId: 'uk',
      name: 'British Applied Sciences Institute',
      location: 'Birmingham, England, UK',
      description: 'An applied sciences focused institution supporting students with academic progression, workplace readiness and strong professional outcomes.',
      imageUrl: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=900',
      logoUrl: 'https://flagcdn.com/w80/gb.png',
      featured: true
    }
  ];

  get filteredInstitutions(): InstitutionCard[] {
    return this.institutions.filter(card => card.countryId === this.activeCountryId);
  }

  get activeCountryName(): string {
    return this.countryTabs.find(tab => tab.id === this.activeCountryId)?.country || 'Partner';
  }

  selectCountry(id: string): void {
    this.activeCountryId = id;
  }
}