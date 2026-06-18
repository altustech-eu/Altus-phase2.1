import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PAGE_DATA } from '../../data/page-data';
import { PageConfig } from '../../models/page.model';

@Component({
  selector: 'app-page-shell',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="font-main bg-[#f8fafc] text-slate-950">

      <!-- Navigation -->
      <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div class="mx-auto flex max-w-[1584px] items-center justify-between px-6 py-4 lg:px-12 xl:px-16 2xl:px-20">
          <a routerLink="/home" class="text-[18px] font-bold tracking-[-0.04em] text-slate-950">
            Altus Career
          </a>

          <nav class="hidden items-center gap-6 lg:flex">
            <a routerLink="/home" class="nav-link">Home</a>
            <a routerLink="/ausbildung" class="nav-link">Ausbildung</a>
            <a routerLink="/jobs" class="nav-link">Jobs</a>
            <a routerLink="/study-abroad" class="nav-link">Study Abroad</a>
            <a routerLink="/german-language-training" class="nav-link">German</a>
            <a routerLink="/employers" class="nav-link">Employers</a>
            <a routerLink="/resources" class="nav-link">Resources</a>
          </nav>

          <a
            routerLink="/forms-thank-you"
            class="hidden bg-[#0f62fe] px-5 py-2.5 text-[13px] font-bold text-white lg:inline-flex"
          >
            Enquire Now
          </a>
        </div>
      </header>

      <!-- Hero -->
      <section class="relative overflow-hidden border-b border-slate-200 bg-white">
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -left-24 -top-24 h-[360px] w-[360px] bg-blue-100/70 blur-3xl"></div>
          <div class="absolute right-0 top-40 h-[260px] w-[260px] bg-cyan-100/70 blur-3xl"></div>
        </div>

        <div class="relative z-10 mx-auto grid max-w-[1584px] grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-12 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">
          <div class="lg:col-span-7">
            <p class="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f62fe]">
              {{ page.eyebrow }}
            </p>

            <h1 class="max-w-[820px] text-[38px] font-bold leading-[1.02] tracking-[-0.06em] text-slate-950 lg:text-[64px]">
              {{ page.title }}
            </h1>

            <p class="mt-6 max-w-[720px] text-[15px] leading-relaxed text-slate-600 lg:text-[17px]">
              {{ page.description }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#" class="inline-flex justify-center bg-[#0f62fe] px-6 py-3 text-[14px] font-bold text-white">
                {{ page.primaryCta }}
              </a>

              <a href="#" class="inline-flex justify-center border border-slate-300 bg-white px-6 py-3 text-[14px] font-bold text-slate-800">
                {{ page.secondaryCta }}
              </a>
            </div>

            <div class="mt-8 grid max-w-[620px] grid-cols-3 gap-3">
              @for (stat of page.stats; track stat.label) {
                <div class="border border-slate-200 bg-slate-50 p-4">
                  <p class="text-[20px] font-bold text-slate-950">
                    {{ stat.value }}
                  </p>
                  <p class="mt-1 text-[11px] font-medium text-slate-500">
                    {{ stat.label }}
                  </p>
                </div>
              }
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative h-[360px] overflow-visible border border-slate-200 bg-white lg:h-full">
              <div class="absolute inset-8 bg-blue-200/40 blur-3xl"></div>
              <div class="relative z-10 h-full w-full overflow-hidden">
                <img
                  [src]="page.heroImage"
                  [alt]="page.title"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="mx-auto max-w-[1584px] px-6 py-10 lg:px-12 xl:px-16 2xl:px-20">
        <div class="mb-6">
          <p class="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f62fe]">
            Capability Blocks
          </p>

          <h2 class="mt-2 text-[30px] font-bold tracking-[-0.045em] text-slate-950">
            What this page delivers
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          @for (feature of page.features; track feature.title) {
            <article class="border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)]">
              <p class="text-[16px] font-bold text-slate-950">
                {{ feature.title }}
              </p>

              <p class="mt-3 text-[13px] leading-relaxed text-slate-600">
                {{ feature.description }}
              </p>
            </article>
          }
        </div>
      </section>

      <!-- Cards -->
      <section class="mx-auto max-w-[1584px] px-6 pb-10 lg:px-12 xl:px-16 2xl:px-20">
        <div class="mb-6">
          <p class="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f62fe]">
            Page Modules
          </p>

          <h2 class="mt-2 text-[30px] font-bold tracking-[-0.045em] text-slate-950">
            Key user journeys
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          @for (card of page.cards; track card.title) {
            <article class="group border border-slate-200 bg-white">
              @if (card.imageUrl) {
                <div class="h-[220px] overflow-hidden bg-slate-100">
                  <img
                    [src]="card.imageUrl"
                    [alt]="card.title"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              }

              <div class="p-5">
                <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f62fe]">
                  {{ card.category }}
                </p>

                <h3 class="mt-2 text-[18px] font-bold tracking-[-0.03em] text-slate-950">
                  {{ card.title }}
                </h3>

                <p class="mt-3 text-[13px] leading-relaxed text-slate-600">
                  {{ card.description }}
                </p>

                <a href="#" class="mt-5 inline-flex text-[13px] font-bold text-[#0f62fe]">
                  Explore →
                </a>
              </div>
            </article>
          }
        </div>
      </section>

      <!-- Process -->
      <section class="mx-auto max-w-[1584px] px-6 pb-14 lg:px-12 xl:px-16 2xl:px-20">
        <div class="border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            @for (step of page.steps; track step.number) {
              <div>
                <p class="text-[24px] font-bold text-[#0f62fe]">
                  {{ step.number }}
                </p>

                <h3 class="mt-2 text-[16px] font-bold text-slate-950">
                  {{ step.title }}
                </h3>

                <p class="mt-2 text-[13px] leading-relaxed text-slate-600">
                  {{ step.description }}
                </p>
              </div>
            }
          </div>
        </div>
      </section>

    </main>
  `,
  styles: [`
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }

    .nav-link {
      font-size: 13px;
      font-weight: 700;
      color: #334155;
      transition: color 0.2s ease;
    }

    .nav-link:hover {
      color: #0f62fe;
    }
  `]
})
export class PageShellComponent {
  page: PageConfig;

  constructor(private route: ActivatedRoute) {
    const pageId = this.route.snapshot.data['pageId'] || 'home';
    this.page = PAGE_DATA[pageId] || PAGE_DATA['home'];
  }
}