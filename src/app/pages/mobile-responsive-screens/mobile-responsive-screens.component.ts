import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ScreenCard {
  title: string;
  description: string;
  type: string;
}

@Component({
  selector: 'app-mobile-responsive-screens',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-[#f8fafc] text-slate-950">
      <section class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 xl:px-16 2xl:px-20">
        <p class="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f62fe]">
          11 — Mobile Responsive Screens
        </p>

        <h1 class="mt-4 max-w-[900px] text-[42px] font-bold leading-[1.04] tracking-[-0.06em] lg:text-[62px]">
          Mobile-first responsive screen system for high-conversion career journeys
        </h1>

        <p class="mt-5 max-w-[760px] text-[16px] leading-relaxed text-slate-600">
          These mobile screens convert the full website experience into focused decision flows:
          program discovery, eligibility, comparison, enquiry, advisor booking and WhatsApp handoff.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          @for (screen of screens; track screen.title) {
            <article class="border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
              <div class="mx-auto h-[560px] max-w-[280px] border border-slate-300 bg-slate-50 p-3">
                <div class="h-full border border-slate-200 bg-white">
                  <div class="border-b border-slate-200 p-3">
                    <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f62fe]">
                      {{ screen.type }}
                    </p>

                    <h3 class="mt-2 text-[18px] font-bold leading-tight tracking-[-0.04em]">
                      {{ screen.title }}
                    </h3>
                  </div>

                  <div class="space-y-3 p-3">
                    <div class="h-28 bg-slate-100"></div>
                    <div class="h-3 w-5/6 bg-slate-200"></div>
                    <div class="h-3 w-4/6 bg-slate-200"></div>
                    <div class="h-10 bg-[#0f62fe]"></div>

                    <div class="grid grid-cols-2 gap-2">
                      <div class="h-20 bg-blue-50"></div>
                      <div class="h-20 bg-blue-50"></div>
                    </div>

                    <div class="h-24 border border-slate-200 bg-white"></div>
                    <div class="h-24 border border-slate-200 bg-white"></div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[13px] leading-relaxed text-slate-600">
                {{ screen.description }}
              </p>
            </article>
          }
        </div>
      </section>
    </main>
  `,
  styles: [`
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }
  `]
})
export class MobileResponsiveScreensComponent {
  screens: ScreenCard[] = [
    {
      title: 'Mobile Home',
      type: 'Discovery',
      description: 'Fast entry into Ausbildung, jobs, study abroad and German language journeys.'
    },
    {
      title: 'Eligibility Flow',
      type: 'Conversion',
      description: 'Mobile-first qualification and readiness capture for lead scoring.'
    },
    {
      title: 'Program Detail',
      type: 'Decision',
      description: 'Compact program story with cost, timeline, outcome and CTA.'
    },
    {
      title: 'Thank You / Next Step',
      type: 'Nurture',
      description: 'Confirmation screen that pushes booking, WhatsApp and advisor handoff.'
    }
  ];
}