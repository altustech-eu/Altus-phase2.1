import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-design-system-lite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="font-main bg-[#f8fafc] text-slate-950">
      <section class="mx-auto max-w-[1584px] px-6 py-12 lg:px-12 xl:px-16 2xl:px-20">
        <p class="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f62fe]">
          00 — Design System Lite
        </p>

        <h1 class="mt-4 max-w-[900px] text-[42px] font-bold leading-[1.04] tracking-[-0.06em] lg:text-[62px]">
          A lightweight UI governance system for the Altus Career website
        </h1>

        <p class="mt-5 max-w-[760px] text-[16px] leading-relaxed text-slate-600">
          This design system standardises typography, colours, spacing, cards, buttons,
          forms and responsive patterns across all business journey pages.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div class="border border-slate-200 bg-white p-4">
            <div class="h-20 bg-[#0f62fe]"></div>
            <p class="mt-3 text-[13px] font-bold">Primary Blue</p>
            <p class="text-[12px] text-slate-500">#0f62fe</p>
          </div>

          <div class="border border-slate-200 bg-white p-4">
            <div class="h-20 bg-[#161616]"></div>
            <p class="mt-3 text-[13px] font-bold">Text Black</p>
            <p class="text-[12px] text-slate-500">#161616</p>
          </div>

          <div class="border border-slate-200 bg-white p-4">
            <div class="h-20 bg-[#f8fafc]"></div>
            <p class="mt-3 text-[13px] font-bold">Surface</p>
            <p class="text-[12px] text-slate-500">#f8fafc</p>
          </div>

          <div class="border border-slate-200 bg-white p-4">
            <div class="h-20 bg-[#e2e8f0]"></div>
            <p class="mt-3 text-[13px] font-bold">Border</p>
            <p class="text-[12px] text-slate-500">#e2e8f0</p>
          </div>
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
export class DesignSystemLiteComponent {}