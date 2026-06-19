import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SectorCard {
  title: string;
  shortTitle: string;
  code: string;
  description: string;
  occupations: string[];
  duration: string;
  germanLevel: string;
  demand: 'Very High' | 'High' | 'Stable';
  salary: string;
  image: string;
  bannerImage: string;
  topIcon: string;
  fit: string;
  pathway: string;
  feeBand: string;
  languageScore: number;
  demandScore: number;
}

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-ausbildung-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="amex-shell bg-[#f7f7f7] text-[#1f1f1f]">

      <!-- AMEX-style top icon ribbon -->
      <section class="amex-card-ribbon">
        <div class="amex-ribbon-scroll no-scrollbar">

          <button
            type="button"
            class="amex-ribbon-item"
            [class.amex-ribbon-item-active]="selectedSector.title === sector.title"
            *ngFor="let sector of sectors"
            (click)="selectSectorOnly(sector)"
          >
            <div class="amex-icon-tile">
              <img
                [src]="sector.topIcon"
                [alt]="sector.title + ' icon'"
                class="amex-icon-image"
              />
            </div>

            <span class="amex-ribbon-title">
              {{ sector.shortTitle }}
            </span>
          </button>

        </div>

        <button
          type="button"
          class="amex-ribbon-next"
          aria-label="Next sector"
          (click)="selectNextSector()"
        >
          <span></span>
        </button>
      </section>

      <!-- Hero / Product Detail Layout -->
      <section id="overview" class="relative bg-white">

        <!-- Image Banner -->
        <div class="absolute inset-x-0 top-0 h-[190px] overflow-hidden">
          <img
            [src]="selectedSector.bannerImage"
            [alt]="selectedSector.title + ' banner'"
            class="mx-auto h-full w-[72%] object-cover"
          />
        </div>

        <div class="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-12 lg:px-8 lg:py-20">

          <!-- Left Product Card -->
          <aside class="lg:col-span-3">
            <div class="rounded-sm bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <div class="relative overflow-hidden rounded bg-[#2f2f2f]">
                <img
                  [src]="selectedSector.image"
                  [alt]="selectedSector.title"
                  class="h-[185px] w-full object-cover opacity-90"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <p class="text-[10px] uppercase tracking-[0.22em]">
                    {{ selectedSector.code }}
                  </p>

                  <h2 class="mt-1 text-[22px] font-semibold leading-tight">
                    {{ selectedSector.title }}
                  </h2>
                </div>
              </div>

              <div class="mt-5 grid grid-cols-2 gap-3">
                <a href="#apply" class="blue-btn text-center">
                  Apply Now
                </a>

                <button
                  type="button"
                  class="outline-btn"
                  (click)="toggleCompare(selectedSector)"
                >
                  {{ isCompared(selectedSector) ? 'Selected' : 'Compare' }}
                </button>
              </div>
            </div>
          </aside>

          <!-- Main Product Content -->
          <article class="rounded-sm bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] lg:col-span-6 lg:mt-10 lg:p-9">
            <a href="#sectors" class="text-[13px] font-semibold text-[#006fcf]">
              ‹ View all Sectors
            </a>

            <h1 class="ibm-heading mt-6 max-w-[760px] text-[34px] leading-[1.08] text-[#242424] lg:text-[46px]">
              {{ selectedSector.title }} Ausbildung Pathway in Germany
            </h1>

            <p class="mt-4 max-w-[760px] text-[15px] leading-7 text-[#4d4d4d]">
              {{ selectedSector.description }}
              This page behaves like a product-comparison interface: candidates can browse sectors,
              filter by readiness, compare pathways, and run a basic eligibility logic before lead submission.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-y-5 border-t border-[#dedede] pt-7 text-[14px] md:grid-cols-[180px_1fr]">
              <p class="font-semibold text-[#555]">Sector Type</p>
              <p>
                <a class="font-semibold text-[#006fcf]" href="#sectors">
                  Dual Vocational Training
                </a>
              </p>

              <p class="font-semibold text-[#555]">Duration</p>
              <p>
                {{ selectedSector.duration }} employer-based training with vocational school integration.
              </p>

              <p class="font-semibold text-[#555]">German Readiness</p>
              <p>
                {{ selectedSector.germanLevel }} recommended. Speaking confidence is mandatory for interview and workplace integration.
              </p>

              <p class="font-semibold text-[#555]">Demand & Earnings</p>
              <p>
                {{ selectedSector.demand }} demand. Indicative monthly training allowance starts around
                {{ selectedSector.salary }} depending on employer and region.
              </p>

              <p class="font-semibold text-[#555]">Best Fit</p>
              <p>
                {{ selectedSector.fit }}
              </p>
            </div>
          </article>

        </div>
      </section>

      <!-- Key Benefits -->
      <section id="benefits" class="bg-[#eaf4ff] py-12">
        <div class="mx-auto max-w-[1040px] px-4 text-center">
          <h2 class="ibm-heading text-[24px] text-[#222]">
            Key Benefits
          </h2>

          <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            <article class="benefit-card" *ngFor="let item of keyBenefits">
              <div class="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-[22px] text-[#006fcf] shadow-sm">
                {{ item.icon }}
              </div>

              <h3 class="mt-4 text-[12px] font-bold uppercase leading-5 tracking-[0.08em] text-[#333]">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-[13px] leading-6 text-[#555]">
                {{ item.description }}
              </p>
            </article>
          </div>

          <p class="mt-8 text-[13px] text-[#666]">
            Discover suitable sectors and advisory modules.
            <a href="#sectors" class="text-[#006fcf] underline">Know more</a>
          </p>
        </div>
      </section>

      <!-- Programme Blocks -->
      <section class="bg-white py-10">
        <div class="mx-auto max-w-[1040px] divide-y divide-[#e0e0e0] px-4">

          <div class="grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr_1fr]">
            <h2 class="ibm-heading text-[22px] leading-tight text-[#006fcf]">
              Rewards<br />Programme
            </h2>

            <p class="text-[14px] leading-7 text-[#4d4d4d]">
              Award engagement points when users complete assessment, watch sector videos, attend webinars,
              submit documents or complete German milestones.
            </p>

            <p class="text-[14px] leading-7 text-[#4d4d4d]">
              Redeem points for counselling slots, mock interviews, document review,
              language diagnostic sessions and parent advisory calls.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 py-8 md:grid-cols-[220px_1fr_1fr]">
            <h2 class="ibm-heading text-[22px] leading-tight text-[#006fcf]">
              Offers and<br />Privileges
            </h2>

            <div class="grid grid-cols-1 gap-4 text-[14px] font-semibold text-[#333] sm:grid-cols-2">
              <span>Free sector assessment</span>
              <span>German readiness test</span>
              <span>Parent counselling</span>
              <span>Interview simulation</span>
              <span>Documentation checklist</span>
              <span>Alternative pathway mapping</span>
            </div>

            <div class="rounded-sm border border-[#d9e9fb] bg-[#f5faff] p-5 text-[14px] leading-7 text-[#4d4d4d]">
              Use privilege logic for lead nurturing: unlock next assets only after the candidate completes high-intent actions.
            </div>
          </div>

        </div>
      </section>

      <!-- Eligibility Logic -->
      <section id="eligibility" class="bg-[#f2f2f2] py-14">
        <div class="mx-auto max-w-[1040px] px-4">
          <div class="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">

            <h2 class="ibm-heading text-[22px] text-[#006fcf]">
              Eligibility
            </h2>

            <div>
              <p class="max-w-[720px] text-[14px] leading-7 text-[#4d4d4d]">
                To save advisor bandwidth, use basic rules before sending leads to counselling.
                This is not final visa or employer approval; it is a qualification signal for sales prioritisation.
              </p>

              <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.age" />
                  I am 18 years or above
                </label>

                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.passport" />
                  I have / can arrange passport
                </label>

                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.academic" />
                  I completed 12th / Diploma / UG
                </label>

                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.funds" />
                  I can plan language and processing cost
                </label>

                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.german" />
                  I am ready to learn German seriously
                </label>

                <label class="check-item">
                  <input type="checkbox" [(ngModel)]="eligibility.mobility" />
                  I am open to Germany relocation
                </label>
              </div>

              <div class="mt-8 rounded-sm border border-[#d6d6d6] bg-white p-6">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p class="text-[12px] font-bold uppercase tracking-[0.16em] text-[#006fcf]">
                      Eligibility Signal
                    </p>

                    <h3 class="ibm-heading mt-2 text-[26px]">
                      {{ eligibilityResult.title }}
                    </h3>
                  </div>

                  <span class="rounded-sm bg-[#006fcf] px-5 py-3 text-[13px] font-bold text-white">
                    {{ eligibilityScore }}/6 matched
                  </span>
                </div>

                <p class="mt-4 text-[14px] leading-7 text-[#555]">
                  {{ eligibilityResult.description }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section id="apply" class="relative overflow-hidden py-12 text-white">
        <img
          [src]="selectedSector.bannerImage"
          [alt]="selectedSector.title + ' application banner'"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-[#001f63]/85"></div>

        <div class="relative mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-[1fr_280px]">
          <div>
            <h2 class="ibm-heading text-[30px] leading-tight lg:text-[38px]">
              {{ selectedSector.title }} Sector Recommendation
            </h2>

            <p class="mt-4 text-[15px] leading-7 text-blue-50">
              Get a structured pathway report with eligibility, language plan, sector fit and next action checklist.
            </p>

            <a href="#lead-form" class="mt-7 inline-flex rounded-sm bg-[#0072ce] px-7 py-3 text-[13px] font-bold text-white hover:bg-[#005eb8]">
              Apply Now
            </a>
          </div>

          <img
            [src]="selectedSector.image"
            [alt]="selectedSector.title"
            class="h-[155px] w-full rounded-sm object-cover shadow-2xl"
          />
        </div>
      </section>

      <!-- Filterable Sector Cards -->
      <section id="sectors" class="bg-white py-14">
        <div class="mx-auto max-w-[1180px] px-4">

          <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 class="ibm-heading text-[30px] leading-tight text-[#222]">
                Other sectors you may be interested in
              </h2>

              <p class="mt-3 text-[14px] text-[#666]">
                Search and filter sectors before advisor-level counselling.
              </p>
            </div>

            <div class="text-[13px] font-semibold text-[#006fcf]">
              {{ filteredSectors.length }} sectors found
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-0 border border-[#d4d4d4] md:grid-cols-4">
            <input
              class="filter-input md:col-span-2"
              type="text"
              placeholder="Search sector or occupation"
              [(ngModel)]="searchText"
            />

            <select class="filter-input" [(ngModel)]="demandFilter">
              <option value="All">All Demand</option>
              <option value="Very High">Very High</option>
              <option value="High">High</option>
              <option value="Stable">Stable</option>
            </select>

            <select class="filter-input" [(ngModel)]="germanFilter">
              <option value="All">All German Levels</option>
              <option value="A2">A2/B1</option>
              <option value="B1">B1</option>
              <option value="B1/B2">B1/B2</option>
            </select>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article
              class="small-card"
              *ngFor="let sector of filteredSectors"
              [class.small-card-active]="selectedSector.title === sector.title"
            >
              <img
                [src]="sector.image"
                [alt]="sector.title"
                class="h-28 w-full object-cover"
              />

              <div class="p-5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006fcf]">
                  {{ sector.code }}
                </p>

                <h3 class="ibm-heading mt-3 text-[21px] leading-tight">
                  {{ sector.title }}
                </h3>

                <p class="mt-3 text-[13px] leading-6 text-[#555]">
                  {{ sector.description }}
                </p>

                <div class="mt-4 grid grid-cols-3 border border-[#e1e1e1] text-center text-[12px]">
                  <span class="p-2">{{ sector.duration }}</span>
                  <span class="border-x border-[#e1e1e1] p-2">{{ sector.germanLevel }}</span>
                  <span class="p-2">{{ sector.salary }}</span>
                </div>

                <div class="mt-5 flex gap-2">
                  <button
                    type="button"
                    class="blue-btn flex-1"
                    (click)="selectSector(sector)"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    class="outline-btn flex-1"
                    (click)="toggleCompare(sector)"
                  >
                    {{ isCompared(sector) ? 'Remove' : 'Compare' }}
                  </button>
                </div>
              </div>
            </article>
          </div>

        </div>
      </section>

      <!-- Compare -->
      <section id="compare" class="bg-[#f7f7f7] py-14">
        <div class="mx-auto max-w-[1180px] px-4">
          <h2 class="ibm-heading text-[30px] text-[#222]">
            Sector Comparison
          </h2>

          <p class="mt-3 text-[14px] text-[#666]">
            Select up to three sectors to create a decision board for counsellor discussion.
          </p>

          <div class="mt-8 overflow-x-auto border border-[#d6d6d6] bg-white">
            <table class="w-full min-w-[900px] border-collapse text-left text-[14px]">
              <thead class="bg-[#eaf4ff] text-[12px] uppercase tracking-[0.14em] text-[#333]">
                <tr>
                  <th class="table-head">Sector</th>
                  <th class="table-head">Demand</th>
                  <th class="table-head">German</th>
                  <th class="table-head">Duration</th>
                  <th class="table-head">Best Fit</th>
                  <th class="table-head">Pathway</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class="border-t border-[#e1e1e1]"
                  *ngFor="let sector of comparedSectors.length ? comparedSectors : [selectedSector]"
                >
                  <td class="table-cell font-semibold text-[#222]">
                    {{ sector.title }}
                  </td>

                  <td class="table-cell">
                    {{ sector.demand }}
                  </td>

                  <td class="table-cell">
                    {{ sector.germanLevel }}
                  </td>

                  <td class="table-cell">
                    {{ sector.duration }}
                  </td>

                  <td class="table-cell">
                    {{ sector.fit }}
                  </td>

                  <td class="table-cell">
                    {{ sector.pathway }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Lead Form -->
      <section id="lead-form" class="bg-white py-14">
        <div class="mx-auto grid max-w-[1040px] grid-cols-1 gap-8 px-4 md:grid-cols-[1fr_420px]">

          <div>
            <h2 class="ibm-heading text-[34px] leading-tight text-[#222]">
              Request your Ausbildung sector recommendation
            </h2>

            <p class="mt-4 text-[15px] leading-7 text-[#555]">
              Capture clean data at source. That is the operating discipline that turns marketing traffic into CRM-ready opportunity intelligence.
            </p>
          </div>

          <form class="rounded-sm border border-[#d6d6d6] bg-[#f7f7f7] p-6">
            <label class="form-label">Full Name</label>
            <input class="form-input" type="text" placeholder="Enter your name" />

            <label class="form-label">Current Qualification</label>
            <select class="form-input">
              <option>12th Completed</option>
              <option>Diploma</option>
              <option>UG Completed</option>
              <option>Working Professional</option>
            </select>

            <label class="form-label">Preferred Sector</label>
            <select class="form-input">
              <option>{{ selectedSector.title }}</option>
              <option>Not Sure</option>
              <option>Healthcare & Nursing</option>
              <option>IT & Software</option>
              <option>Engineering & Technical</option>
            </select>

            <button
              type="button"
              class="mt-5 w-full rounded-sm bg-[#006fcf] px-6 py-4 text-[14px] font-bold text-white hover:bg-[#005eb8]"
            >
              Request Recommendation
            </button>
          </form>

        </div>
      </section>

      <!-- FAQ Accordion -->
      <section class="bg-[#f2f2f2] py-14">
        <div class="mx-auto max-w-[1040px] px-4">
          <h2 class="ibm-heading text-[30px] text-[#222]">
            Footnotes and advisory logic
          </h2>

          <div class="mt-8 space-y-3">
            <article
              class="rounded-sm border border-[#d6d6d6] bg-white"
              *ngFor="let faq of faqs; let i = index"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between p-5 text-left text-[15px] font-semibold"
                (click)="toggleFaq(i)"
              >
                {{ faq.question }}
                <span class="text-[#006fcf]">
                  {{ openFaq === i ? '−' : '+' }}
                </span>
              </button>

              <p
                class="px-5 pb-5 text-[14px] leading-7 text-[#555]"
                *ngIf="openFaq === i"
              >
                {{ faq.answer }}
              </p>
            </article>
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

    .amex-shell {
      font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
      font-feature-settings: 'liga' 1, 'kern' 1;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .ibm-heading {
      font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
      font-weight: 400;
      letter-spacing: -0.035em;
    }

    .amex-card-ribbon {
      position: relative;
      z-index: 60;
      display: flex;
      width: 100%;
      height: 92px;
      background: #e5e5e5;
      border-bottom: 1px solid #d0d0d0;
    }

    .amex-ribbon-scroll {
      display: flex;
      flex: 1;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      background: #e5e5e5;
    }

    .no-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .amex-ribbon-item {
      display: flex;
      align-items: center;
      gap: 16px;
      min-width: 300px;
      height: 92px;
      padding: 0 22px 0 14px;
      border: 0;
      border-right: 1px solid #d5d5d5;
      background: #e5e5e5;
      color: #2f2f2f;
      cursor: pointer;
      text-align: left;
      transition: background .2s ease, color .2s ease;
    }

    .amex-ribbon-item:hover {
      background: #f2f2f2;
    }

    .amex-ribbon-item-active {
      background: #4b4f53;
      color: #ffffff;
    }

    .amex-ribbon-item-active:hover {
      background: #4b4f53;
    }

    .amex-icon-tile {
      flex: 0 0 auto;
      width: 84px;
      height: 52px;
      display: grid;
      place-items: center;
      background: #ffffff;
      border: 1px solid #d8d8d8;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .amex-icon-image {
      max-width: 76px;
      max-height: 44px;
      object-fit: contain;
      display: block;
    }

    .amex-ribbon-title {
      display: block;
      max-width: 190px;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: -0.01em;
    }

    .amex-ribbon-item-active .amex-ribbon-title {
      font-weight: 600;
    }

    .amex-ribbon-next {
      position: relative;
      flex: 0 0 60px;
      width: 60px;
      height: 92px;
      border: 0;
      border-left: 1px solid #dadada;
      background: #f3f3f3;
      cursor: pointer;
    }

    .amex-ribbon-next span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 25px;
      height: 25px;
      border-top: 2px solid #777;
      border-right: 2px solid #777;
      transform: translate(-65%, -50%) rotate(45deg);
    }

    .amex-ribbon-next:hover {
      background: #ffffff;
    }

    .blue-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      background: #0072ce;
      padding: 11px 16px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
    }

    .blue-btn:hover {
      background: #005eb8;
    }

    .outline-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #0072ce;
      border-radius: 2px;
      background: #ffffff;
      padding: 10px 16px;
      color: #006fcf;
      font-size: 13px;
      font-weight: 600;
    }

    .benefit-card {
      padding: 10px 8px;
    }

    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
      line-height: 1.6;
      color: #333;
    }

    .check-item input {
      margin-top: 4px;
      accent-color: #006fcf;
    }

    .filter-input {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #d4d4d4;
      background: #ffffff;
      padding: 16px;
      font-size: 14px;
      outline: none;
    }

    @media (min-width: 768px) {
      .filter-input {
        border-bottom: 0;
        border-right: 1px solid #d4d4d4;
      }
    }

    .filter-input:focus {
      box-shadow: inset 0 0 0 2px #006fcf;
    }

    .small-card {
      overflow: hidden;
      border: 1px solid #d6d6d6;
      background: #ffffff;
      transition: box-shadow .2s ease, transform .2s ease;
    }

    .small-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(0,0,0,.08);
    }

    .small-card-active {
      box-shadow: inset 0 0 0 2px #006fcf;
    }

    .table-head {
      border-right: 1px solid #d0d0d0;
      padding: 16px;
    }

    .table-cell {
      border-right: 1px solid #eeeeee;
      padding: 16px;
      color: #4d4d4d;
      line-height: 1.6;
    }

    .form-label {
      display: block;
      margin-top: 14px;
      margin-bottom: 7px;
      font-size: 12px;
      font-weight: 700;
      color: #444;
    }

    .form-input {
      width: 100%;
      border: 1px solid #cfcfcf;
      background: #ffffff;
      padding: 13px;
      font-size: 14px;
      outline: none;
    }

    .form-input:focus {
      border-color: #006fcf;
      box-shadow: 0 0 0 2px rgba(0,111,207,.15);
    }

    @media (max-width: 768px) {
      .amex-card-ribbon {
        height: 82px;
      }

      .amex-ribbon-item {
        min-width: 250px;
        height: 82px;
        gap: 12px;
        padding: 0 16px 0 10px;
      }

      .amex-icon-tile {
        width: 68px;
        height: 42px;
      }

      .amex-icon-image {
        max-width: 62px;
        max-height: 34px;
      }

      .amex-ribbon-title {
        font-size: 13px;
        max-width: 150px;
      }

      .amex-ribbon-next {
        width: 48px;
        flex-basis: 48px;
        height: 82px;
      }
    }
  `]
})
export class AusbildungPageComponent {
  searchText = '';
  demandFilter: 'All' | 'Very High' | 'High' | 'Stable' = 'All';
  germanFilter = 'All';
  comparedSectors: SectorCard[] = [];
  openFaq = 0;

  eligibility = {
    age: false,
    passport: false,
    academic: false,
    funds: false,
    german: false,
    mobility: false
  };

  sectors: SectorCard[] = [
    {
      title: 'Healthcare & Nursing',
      shortTitle: 'Healthcare & Nursing Ausbildung',
      code: 'Sector 01',
      description: 'For candidates interested in care, discipline, patient support and long-term healthcare careers.',
      occupations: ['Nursing', 'Elderly Care', 'Medical Assistant'],
      duration: '3 yrs',
      germanLevel: 'B1/B2',
      demand: 'Very High',
      salary: '€900+',
      image: '/assets/Aus8.webp',
      bannerImage: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/healthcare-nursing.png',
      fit: 'Empathy, discipline, service mindset and willingness to work in regulated care environments.',
      pathway: 'Care assistant → recognised nurse → specialist care or hospital employment.',
      feeBand: 'Premium',
      languageScore: 9,
      demandScore: 10
    },
    {
      title: 'IT & Software',
      shortTitle: 'IT & Software Ausbildung',
      code: 'Sector 02',
      description: 'For digital career aspirants interested in programming, systems, networks and business technology.',
      occupations: ['Software', 'IT Systems', 'Digital Business'],
      duration: '3 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€950+',
      image: '/assets/Aus2.webp',
      bannerImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/it-software.png',
      fit: 'Logical thinking, self-learning discipline, systems mindset and comfort with digital tools.',
      pathway: 'IT trainee → systems/software role → cloud, data, cyber or enterprise technology pathway.',
      feeBand: 'Premium',
      languageScore: 7,
      demandScore: 8
    },
    {
      title: 'Engineering & Technical',
      shortTitle: 'Engineering & Technical Ausbildung',
      code: 'Sector 03',
      description: 'For candidates with technical aptitude, mechanical interest and practical problem-solving skills.',
      occupations: ['Mechatronics', 'Electronics', 'Industrial Mechanic'],
      duration: '3-3.5 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€950+',
      image: '/assets/Aus6.webp',
      bannerImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/engineering-technical.png',
      fit: 'Hands-on technical interest, workshop discipline and structured troubleshooting ability.',
      pathway: 'Technical trainee → technician → industrial specialist or Meister track.',
      feeBand: 'Standard',
      languageScore: 7,
      demandScore: 8
    },
    {
      title: 'Hospitality & Tourism',
      shortTitle: 'Hospitality & Tourism Ausbildung',
      code: 'Sector 04',
      description: 'For candidates interested in hotels, restaurants, customer service and guest experience.',
      occupations: ['Hotel Specialist', 'Chef', 'Restaurant Service'],
      duration: '3 yrs',
      germanLevel: 'B1',
      demand: 'High',
      salary: '€850+',
      image: '/assets/Aus3.webp',
      bannerImage: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/hotel-hospitality.png',
      fit: 'Customer orientation, energy, grooming, communication and shift-work adaptability.',
      pathway: 'Hotel/chef trainee → hospitality professional → supervisor or restaurant/hotel operations.',
      feeBand: 'Standard',
      languageScore: 8,
      demandScore: 8
    },
    {
      title: 'Logistics & Transportation',
      shortTitle: 'Logistics & Transportation Ausbildung',
      code: 'Sector 05',
      description: 'For candidates interested in supply chain, warehouse operations and transport coordination.',
      occupations: ['Warehouse', 'Freight', 'Logistics Clerk'],
      duration: '2-3 yrs',
      germanLevel: 'A2/B1',
      demand: 'High',
      salary: '€850+',
      image: '/assets/Aus4.webp',
      bannerImage: 'https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/logistics-warehouse.png',
      fit: 'Process discipline, physical readiness, punctuality and interest in movement of goods.',
      pathway: 'Warehouse/logistics trainee → operations coordinator → supply chain supervisor.',
      feeBand: 'Entry',
      languageScore: 6,
      demandScore: 8
    },
    {
      title: 'Sales & Retail',
      shortTitle: 'Sales & Retail Ausbildung',
      code: 'Sector 06',
      description: 'For candidates with customer handling ability, communication skills and commercial interest.',
      occupations: ['Retail Sales', 'Wholesale', 'Store Operations'],
      duration: '2-3 yrs',
      germanLevel: 'B1',
      demand: 'Stable',
      salary: '€850+',
      image: '/assets/Aus5.webp',
      bannerImage: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1600',
      topIcon: '/assets/sector-icons/retail-sales.png',
      fit: 'Communication, customer handling, product explanation and commercial discipline.',
      pathway: 'Retail trainee → store associate → category, store or sales operations role.',
      feeBand: 'Entry',
      languageScore: 8,
      demandScore: 6
    }
  ];

  selectedSector: SectorCard = this.sectors[0];

  keyBenefits: BenefitCard[] = [
    {
      icon: '▣',
      title: 'Sector Match',
      description: 'Choose a career field based on profile fit, not only availability or social influence.'
    },
    {
      icon: '↗',
      title: 'Language Roadmap',
      description: 'Map A1, A2 and B1 milestones against interview and employer readiness.'
    },
    {
      icon: '✈',
      title: 'Germany Mobility',
      description: 'Plan documentation, employer application and onboarding as one controlled journey.'
    },
    {
      icon: '★',
      title: 'Career Outcome',
      description: 'Connect the first training contract with long-term employability and settlement goals.'
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'Eligibility is only a pre-screening signal.',
      answer: 'Final acceptance depends on employer requirements, German level, documentation quality, embassy process and candidate interview performance.'
    },
    {
      question: 'Sector comparison should be limited to realistic options.',
      answer: 'Advisors should not overload students with every pathway. A high-quality funnel narrows options based on qualification, readiness and motivation.'
    },
    {
      question: 'Rewards logic can be used as lead nurturing.',
      answer: 'Points, unlocked videos and assessment badges can increase engagement while giving the CRM team behavioural intent data.'
    },
    {
      question: 'Why use an AMEX-style product page?',
      answer: 'The reference model is strong because it simplifies a complex offer into product tabs, fees, benefits, eligibility, CTA and comparison. The same logic works for education pathways.'
    }
  ];

  get filteredSectors(): SectorCard[] {
    const text = this.searchText.trim().toLowerCase();

    return this.sectors.filter(sector => {
      const matchesText =
        !text ||
        [sector.title, sector.shortTitle, sector.description, sector.pathway, ...sector.occupations]
          .join(' ')
          .toLowerCase()
          .includes(text);

      const matchesDemand =
        this.demandFilter === 'All' || sector.demand === this.demandFilter;

      const matchesGerman =
        this.germanFilter === 'All' || sector.germanLevel.includes(this.germanFilter);

      return matchesText && matchesDemand && matchesGerman;
    });
  }

  get eligibilityScore(): number {
    return Object.values(this.eligibility).filter(Boolean).length;
  }

  get eligibilityResult(): { title: string; description: string } {
    if (this.eligibilityScore >= 5) {
      return {
        title: 'High readiness',
        description: 'This lead can move to advisor counselling, document checklist and German learning plan immediately.'
      };
    }

    if (this.eligibilityScore >= 3) {
      return {
        title: 'Needs nurturing',
        description: 'This candidate should receive awareness content, parent counselling and a readiness improvement plan before conversion.'
      };
    }

    return {
      title: 'Early awareness stage',
      description: 'This user should enter an education funnel with webinars, FAQs, cost explanation and myth-busting content.'
    };
  }

  selectSectorOnly(sector: SectorCard): void {
    this.selectedSector = sector;
  }

  selectSector(sector: SectorCard): void {
    this.selectedSector = sector;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectNextSector(): void {
    const currentIndex = this.sectors.findIndex(sector => sector.title === this.selectedSector.title);
    const nextIndex = currentIndex >= this.sectors.length - 1 ? 0 : currentIndex + 1;
    this.selectedSector = this.sectors[nextIndex];
  }

  toggleCompare(sector: SectorCard): void {
    const exists = this.comparedSectors.some(item => item.title === sector.title);

    if (exists) {
      this.comparedSectors = this.comparedSectors.filter(item => item.title !== sector.title);
      return;
    }

    if (this.comparedSectors.length < 3) {
      this.comparedSectors = [...this.comparedSectors, sector];
    }
  }

  isCompared(sector: SectorCard): boolean {
    return this.comparedSectors.some(item => item.title === sector.title);
  }

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? -1 : index;
  }
}