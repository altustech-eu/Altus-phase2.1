import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CountryPresence {
  country: string;
  region: 'Asia' | 'Europe' | 'GCC' | 'Africa' | 'Americas' | 'Oceania';
  flagCode: string;
  count: number;
  x: number;
  y: number;
  description: string;
  officeType: string;
  city: string;
  email: string;
  phone: string;
  services: string[];
}

interface WorldCountry {
  country: string;
  flagCode: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="world-shell">

      <!-- Top Header -->
      <header class="world-header">
        <div class="header-inner">

          <a href="/home" class="brand-logo" aria-label="Go to home">
            ALTUS<span>CAREER</span>
          </a>

          <nav class="main-nav">
            <a href="/home">Company</a>
            <a href="/ausbildung">Solutions</a>
            <a href="/resources">Newsroom</a>
            <a href="/employers">Employers</a>
            <a href="/contact">Worldwide</a>
          </nav>

          <div class="header-actions">
            <button
              type="button"
              class="iam-btn"
              [class.iam-btn-active]="personaMenuOpen"
              (click)="togglePersonaMenu()"
            >
              I am
              <span>⌄</span>
            </button>

            <span class="header-divider"></span>

            <select class="lang-select" aria-label="Language">
              <option>En</option>
              <option>De</option>
            </select>

            <button
              type="button"
              class="world-icon-btn"
              aria-label="Open worldwide country selector"
              [class.world-icon-btn-active]="countryOverlayOpen"
              (click)="toggleCountryOverlay()"
            >
              <svg viewBox="0 0 24 24" class="header-svg-icon" aria-hidden="true">
                <path d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z"></path>
                <path d="M3.75 12h16.5"></path>
                <path d="M12 2.25c2.25 2.4 3.38 5.65 3.38 9.75S14.25 19.35 12 21.75"></path>
                <path d="M12 2.25C9.75 4.65 8.62 7.9 8.62 12s1.13 7.35 3.38 9.75"></path>
                <path d="M5.35 7.15h13.3"></path>
                <path d="M5.35 16.85h13.3"></path>
              </svg>
            </button>

            <button
              type="button"
              class="search-icon-btn"
              aria-label="Search"
              [class.search-icon-btn-active]="searchOpen"
              (click)="toggleSearch()"
            >
              <svg viewBox="0 0 24 24" class="header-svg-icon" aria-hidden="true">
                <path d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6Z"></path>
                <path d="m16.2 16.2 4.3 4.3"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Search Dropdown -->
        <div class="search-panel" *ngIf="searchOpen">
          <input
            type="text"
            placeholder="Search country, city, office, service or region"
            [(ngModel)]="searchTerm"
            class="search-input"
          />
        </div>

        <!-- Persona Dropdown -->
        <div class="persona-menu" *ngIf="personaMenuOpen">
          <button
            type="button"
            *ngFor="let persona of personas"
            [class.persona-item-active]="selectedPersona === persona"
            (click)="selectPersona(persona)"
          >
            {{ persona }}
          </button>
        </div>
      </header>

      <!-- Main Map Layout -->
      <section class="presence-stage">

        <!-- Left Professional Map Area -->
        <div class="map-area">

          <div class="map-visual-layer">
            <img
              src="/assets/maps/world-map.jpg"
              alt="World map background"
              class="world-map-img"
            />

            <div class="map-blue-overlay"></div>
            <div class="map-grid-overlay"></div>
          </div>

          <div class="map-toolbar">
            <button type="button" (click)="zoomIn()">+</button>
            <button type="button" (click)="zoomOut()">−</button>
          </div>

          <div
            class="map-canvas"
            [style.transform]="'scale(' + mapZoom + ')'"
          >
            <button
              type="button"
              class="map-marker"
              *ngFor="let country of filteredCountries"
              [class.map-marker-active]="selectedCountry.country === country.country"
              [style.left.%]="country.x"
              [style.top.%]="country.y"
              (click)="selectCountry(country)"
              [attr.aria-label]="country.country + ' offices'"
            >
              {{ country.count }}
            </button>
          </div>

          <div class="map-caption">
            <p>Worldwide Presence</p>
            <span>{{ filteredCountries.length }} countries · {{ totalOfficeCount }} office points</span>
          </div>

          <button
            type="button"
            class="map-reset"
            aria-label="Reset map"
            (click)="resetMap()"
          >
            ⛶
          </button>

          <!-- Country Overlay -->
          <div class="country-overlay" *ngIf="countryOverlayOpen">
            <div class="overlay-grid">
              <button
                type="button"
                class="overlay-country"
                *ngFor="let item of worldCountries"
                (click)="selectWorldCountry(item)"
              >
                <span class="flag-circle">
                  <img
                    [src]="getFlagUrl(item.flagCode)"
                    [alt]="item.country + ' flag'"
                    class="flag-img"
                  />
                </span>

                <span class="overlay-country-name">
                  {{ item.country }}
                </span>
              </button>
            </div>

            <button
              type="button"
              class="overlay-cta"
              (click)="closeCountryOverlay()"
            >
              <span>Explore AltusCareer in the world</span>
              <strong>→</strong>
            </button>
          </div>

        </div>

        <!-- Right Country List -->
        <aside class="world-sidebar">
          <div class="sidebar-head">
            <h1>AltusCareer worldwide</h1>

            <p>
              Select a country to view offices, counselling centres, training hubs and contact routing.
            </p>
          </div>

          <div class="filter-block">
            <input
              type="text"
              placeholder="Search locations"
              [(ngModel)]="searchTerm"
              class="side-search"
            />

            <select [(ngModel)]="selectedRegion" class="side-select">
              <option value="All">All regions</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="GCC">GCC</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

          <div class="country-list">
            <button
              type="button"
              class="country-row"
              *ngFor="let country of filteredCountries"
              [class.country-row-active]="selectedCountry.country === country.country"
              (click)="selectCountry(country)"
            >
              <span class="country-name">
                {{ country.country }}
              </span>

              <span class="country-count">
                {{ country.count }}
              </span>
            </button>
          </div>
        </aside>

      </section>

      <!-- Country Detail Drawer -->
      <section class="detail-drawer" *ngIf="detailOpen">
        <div class="detail-inner">

          <button
            type="button"
            class="drawer-close"
            aria-label="Close country detail"
            (click)="detailOpen = false"
          >
            ×
          </button>

          <div class="detail-main">
            <p class="eyebrow">{{ selectedCountry.region }}</p>

            <h2 class="detail-country-title">
              <span class="detail-flag-circle">
                <img
                  [src]="getFlagUrl(selectedCountry.flagCode)"
                  [alt]="selectedCountry.country + ' flag'"
                  class="detail-flag-img"
                />
              </span>

              <span>{{ selectedCountry.country }}</span>
            </h2>

            <p class="detail-description">
              {{ selectedCountry.description }}
            </p>

            <div class="service-tags">
              <span *ngFor="let service of selectedCountry.services">
                {{ service }}
              </span>
            </div>
          </div>

          <div class="office-card">
            <p class="eyebrow">Selected office</p>

            <h3>{{ selectedCountry.officeType }}</h3>

            <dl>
              <div>
                <dt>City</dt>
                <dd>{{ selectedCountry.city }}</dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>{{ selectedCountry.email }}</dd>
              </div>

              <div>
                <dt>Phone</dt>
                <dd>{{ selectedCountry.phone }}</dd>
              </div>

              <div>
                <dt>Recommended route</dt>
                <dd>{{ routingResult }}</dd>
              </div>
            </dl>

            <div class="office-actions">
              <a [href]="'mailto:' + selectedCountry.email">
                Email office
              </a>

              <a [href]="'tel:' + selectedCountry.phone">
                Call office
              </a>

              <a
                [href]="'https://www.google.com/maps/search/?api=1&query=' + selectedCountry.city"
                target="_blank"
                rel="noopener"
              >
                Get direction
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

    :host {
      display: block;
    }

    .world-shell {
      min-height: 100vh;
      background: #ffffff;
      color: #1c3148;
      font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      overflow: hidden;
    }

    .world-header {
      position: relative;
      z-index: 40;
      height: 84px;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
    }

    .header-inner {
      display: grid;
      grid-template-columns: 210px 1fr auto;
      align-items: center;
      height: 84px;
      max-width: 1660px;
      margin: 0 auto;
      padding: 0 44px;
      gap: 34px;
    }

    .brand-logo {
      display: inline-flex;
      align-items: baseline;
      color: #21364d;
      font-size: 31px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.065em;
      text-decoration: none;
    }

    .brand-logo span {
      color: #e4342a;
      margin-left: 2px;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .main-nav a {
      color: #10263d;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
    }

    .main-nav a:hover {
      color: #e4342a;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .iam-btn {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      border: 0;
      background: transparent;
      color: #10263d;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
    }

    .iam-btn:hover,
    .iam-btn-active {
      color: #e4342a;
    }

    .header-divider {
      width: 1px;
      height: 28px;
      background: #dbe2ea;
    }

    .lang-select {
      height: 32px;
      border: 1px solid #dbe2ea;
      border-radius: 5px;
      background: #ffffff;
      padding: 0 10px;
      color: #10263d;
      font-size: 13px;
      outline: none;
    }

    .world-icon-btn,
    .search-icon-btn {
      position: relative;
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border: 0;
      background: transparent;
      color: #000000;
      cursor: pointer;
      transition:
        color 0.18s ease,
        transform 0.18s ease;
    }

    .header-svg-icon {
      width: 25px;
      height: 25px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.9;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .world-icon-btn:hover,
    .search-icon-btn:hover,
    .world-icon-btn-active,
    .search-icon-btn-active {
      color: #e4342a;
      transform: translateY(-1px);
    }

    .world-icon-btn-active::after,
    .search-icon-btn-active::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 50%;
      width: 5px;
      height: 5px;
      border-radius: 999px;
      background: #e4342a;
      transform: translateX(-50%);
    }

    .search-panel {
      position: absolute;
      top: 84px;
      left: 0;
      right: 0;
      z-index: 50;
      background: #ffffff;
      border-top: 1px solid #edf2f7;
      border-bottom: 1px solid #dbe2ea;
      padding: 18px 44px;
    }

    .search-input {
      width: 100%;
      height: 54px;
      border: 1px solid #ccd6e0;
      padding: 0 18px;
      font-size: 16px;
      outline: none;
    }

    .search-input:focus {
      border-color: #e4342a;
      box-shadow: 0 0 0 3px rgba(228, 52, 42, 0.12);
    }

    .persona-menu {
      position: absolute;
      right: 240px;
      top: 72px;
      z-index: 55;
      width: 220px;
      background: #ffffff;
      border: 1px solid #dbe2ea;
      box-shadow: 0 18px 50px rgba(15, 35, 55, 0.15);
      padding: 8px;
    }

    .persona-menu button {
      width: 100%;
      border: 0;
      background: #ffffff;
      padding: 12px;
      text-align: left;
      color: #1c3148;
      font-size: 14px;
      cursor: pointer;
    }

    .persona-menu button:hover,
    .persona-item-active {
      background: #f3f6f9 !important;
      color: #e4342a !important;
    }

    .presence-stage {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 390px;
      height: calc(100vh - 84px);
      min-height: 720px;
      background: #dfe2eb;
    }

    .map-area {
      position: relative;
      overflow: hidden;
      background: #54c7d8;
      isolation: isolate;
    }

    .map-visual-layer {
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
    }

    .world-map-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
      filter: saturate(1.05) contrast(1.03);
      transform: scale(1.02);
    }

    .map-blue-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(36, 167, 190, 0.18), rgba(41, 192, 215, 0.10)),
        radial-gradient(circle at 48% 42%, rgba(255, 255, 255, 0.12), transparent 34%);
      pointer-events: none;
    }

    .map-grid-overlay {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      background-image:
        linear-gradient(rgba(16, 43, 85, 0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16, 43, 85, 0.6) 1px, transparent 1px);
      background-size: 80px 80px;
      pointer-events: none;
    }

    .map-canvas {
      position: absolute;
      inset: 0;
      z-index: 2;
      transform-origin: center center;
      transition: transform .25s ease;
    }

    .map-marker {
      position: absolute;
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      transform: translate(-50%, -50%);
      border: 2px solid #173b68;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.94);
      color: #101827;
      font-size: 15px;
      font-weight: 600;
      box-shadow:
        0 10px 24px rgba(13, 30, 55, 0.20),
        inset 0 0 0 1px rgba(255,255,255,0.7);
      cursor: pointer;
      transition:
        background .18s ease,
        color .18s ease,
        transform .18s ease,
        box-shadow .18s ease;
    }

    .map-marker:hover {
      transform: translate(-50%, -50%) scale(1.08);
      box-shadow:
        0 16px 36px rgba(13, 30, 55, 0.28),
        inset 0 0 0 1px rgba(255,255,255,0.8);
    }

    .map-marker-active {
      background: #e4342a;
      border-color: #e4342a;
      color: #ffffff;
    }

    .map-toolbar {
      position: absolute;
      left: 22px;
      bottom: 44px;
      z-index: 5;
      display: grid;
      width: 42px;
      overflow: hidden;
      border: 1px solid #d1d8e0;
      background: #ffffff;
      box-shadow: 0 8px 28px rgba(13, 30, 55, 0.16);
    }

    .map-toolbar button {
      height: 42px;
      border: 0;
      border-bottom: 1px solid #d1d8e0;
      background: #ffffff;
      font-size: 28px;
      font-weight: 300;
      color: #334155;
      cursor: pointer;
    }

    .map-toolbar button:last-child {
      border-bottom: 0;
    }

    .map-toolbar button:hover {
      background: #f3f6f9;
    }

    .map-reset {
      position: absolute;
      right: 22px;
      bottom: 44px;
      z-index: 5;
      width: 46px;
      height: 46px;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.94);
      color: #526276;
      font-size: 22px;
      box-shadow: 0 8px 28px rgba(13, 30, 55, 0.16);
      cursor: pointer;
    }

    .map-reset:hover {
      color: #e4342a;
    }

    .map-caption {
      position: absolute;
      left: 84px;
      bottom: 44px;
      z-index: 5;
      min-width: 250px;
      background: rgba(255, 255, 255, 0.94);
      border: 1px solid rgba(209, 216, 224, 0.9);
      padding: 13px 16px;
      box-shadow: 0 8px 28px rgba(13, 30, 55, 0.14);
    }

    .map-caption p {
      margin: 0;
      color: #10263d;
      font-size: 14px;
      font-weight: 700;
    }

    .map-caption span {
      display: block;
      margin-top: 4px;
      color: #64748b;
      font-size: 12px;
      font-weight: 500;
    }

    .country-overlay {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 8;
      width: 584px;
      max-width: calc(100% - 40px);
      background: #ffffff;
      box-shadow: 0 26px 80px rgba(15, 25, 40, 0.28);
      padding: 28px 28px 24px;
    }

    .overlay-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 34px;
      row-gap: 20px;
    }

    .overlay-country {
      display: flex;
      align-items: center;
      gap: 11px;
      min-width: 0;
      border: 0;
      background: transparent;
      padding: 0;
      color: #1c3148;
      text-align: left;
      cursor: pointer;
    }

    .overlay-country:hover .overlay-country-name {
      color: #e4342a;
    }

    .flag-circle {
      display: grid;
      place-items: center;
      flex: 0 0 auto;
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: #ffffff;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(15, 35, 55, 0.12),
        0 2px 6px rgba(15, 35, 55, 0.08);
    }

    .flag-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay-country-name {
      display: block;
      min-width: 0;
      color: #1c3148;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.2;
      white-space: nowrap;
      transition: color .18s ease;
    }

    .overlay-cta {
      display: grid;
      grid-template-columns: 1fr 44px;
      align-items: center;
      width: 100%;
      height: 48px;
      margin-top: 30px;
      border: 0;
      border-radius: 999px;
      background: #f1f3f8;
      padding: 0 0 0 20px;
      color: #1c3148;
      text-align: left;
      cursor: pointer;
    }

    .overlay-cta span {
      font-size: 15px;
      font-weight: 700;
    }

    .overlay-cta strong {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      background: #102b55;
      color: #ffffff;
      font-size: 22px;
      font-weight: 400;
    }

    .overlay-cta:hover strong {
      background: #e4342a;
    }

    .world-sidebar {
      position: relative;
      z-index: 2;
      overflow-y: auto;
      background: #e8e9f1;
      padding: 44px 42px;
      color: #223852;
    }

    .sidebar-head h1 {
      font-size: 32px;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.055em;
      color: #223852;
    }

    .sidebar-head p {
      margin-top: 12px;
      color: #66758a;
      font-size: 14px;
      line-height: 1.6;
    }

    .filter-block {
      display: grid;
      gap: 10px;
      margin-top: 28px;
      margin-bottom: 18px;
    }

    .side-search,
    .side-select {
      width: 100%;
      height: 46px;
      border: 1px solid #d6dbe5;
      background: #ffffff;
      padding: 0 14px;
      color: #223852;
      font-size: 14px;
      outline: none;
    }

    .side-search:focus,
    .side-select:focus {
      border-color: #e4342a;
      box-shadow: 0 0 0 3px rgba(228, 52, 42, 0.12);
    }

    .country-list {
      display: grid;
    }

    .country-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 74px;
      border: 0;
      border-bottom: 1px solid rgba(34, 56, 82, 0.18);
      background: transparent;
      padding: 0;
      color: #223852;
      cursor: pointer;
      text-align: left;
    }

    .country-name {
      font-size: 25px;
      font-weight: 400;
      letter-spacing: -0.04em;
    }

    .country-count {
      display: grid;
      place-items: center;
      min-width: 22px;
      height: 22px;
      border-radius: 999px;
      background: #e4342a;
      padding: 0 7px;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
    }

    .country-row:hover .country-name,
    .country-row-active .country-name {
      color: #e4342a;
    }

    .detail-drawer {
      position: fixed;
      left: 50%;
      bottom: 26px;
      z-index: 70;
      width: min(1120px, calc(100vw - 48px));
      transform: translateX(-50%);
      background: #ffffff;
      box-shadow: 0 28px 100px rgba(11, 27, 43, 0.28);
      border: 1px solid #dbe2ea;
    }

    .detail-inner {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 28px;
      padding: 32px;
    }

    .drawer-close {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 34px;
      height: 34px;
      border: 0;
      border-radius: 999px;
      background: #f0f3f7;
      color: #223852;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #e4342a;
    }

    .detail-country-title {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 12px;
      font-size: 46px;
      font-weight: 400;
      line-height: 1.02;
      letter-spacing: -0.06em;
      color: #1c3148;
    }

    .detail-flag-circle {
      display: grid;
      place-items: center;
      width: 54px;
      height: 54px;
      border-radius: 999px;
      background: #ffffff;
      overflow: hidden;
      flex: 0 0 auto;
      box-shadow:
        0 0 0 1px rgba(15, 35, 55, 0.12),
        0 6px 18px rgba(15, 35, 55, 0.12);
    }

    .detail-flag-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .detail-description {
      margin-top: 18px;
      max-width: 620px;
      color: #526276;
      font-size: 15px;
      line-height: 1.75;
    }

    .service-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
    }

    .service-tags span {
      background: #f2f4f8;
      padding: 8px 11px;
      color: #223852;
      font-size: 12px;
      font-weight: 700;
    }

    .office-card {
      border-left: 1px solid #e0e6ee;
      padding-left: 28px;
    }

    .office-card h3 {
      margin-top: 10px;
      color: #1c3148;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: -0.04em;
    }

    .office-card dl {
      display: grid;
      gap: 14px;
      margin-top: 18px;
    }

    .office-card div {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 14px;
    }

    .office-card dt {
      color: #7a8797;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .08em;
    }

    .office-card dd {
      color: #223852;
      font-size: 14px;
      margin: 0;
    }

    .office-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 22px;
    }

    .office-actions a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 40px;
      background: #102b55;
      padding: 0 14px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
    }

    .office-actions a:hover {
      background: #e4342a;
    }

    @media (max-width: 1024px) {
      .header-inner {
        grid-template-columns: 1fr auto;
        padding: 0 20px;
      }

      .main-nav {
        display: none;
      }

      .presence-stage {
        grid-template-columns: 1fr;
        height: auto;
      }

      .map-area {
        height: 620px;
      }

      .world-sidebar {
        max-height: none;
      }

      .detail-inner {
        grid-template-columns: 1fr;
      }

      .office-card {
        border-left: 0;
        border-top: 1px solid #e0e6ee;
        padding-left: 0;
        padding-top: 24px;
      }
    }

    @media (max-width: 720px) {
      .world-header {
        height: auto;
      }

      .header-inner {
        height: auto;
        padding: 18px;
      }

      .brand-logo {
        font-size: 23px;
      }

      .header-actions {
        gap: 8px;
      }

      .iam-btn,
      .lang-select,
      .header-divider {
        display: none;
      }

      .presence-stage {
        min-height: 0;
      }

      .map-area {
        height: 500px;
      }

      .map-caption {
        left: 74px;
        right: 72px;
        bottom: 28px;
        min-width: 0;
      }

      .map-toolbar {
        left: 18px;
        bottom: 28px;
      }

      .map-reset {
        right: 18px;
        bottom: 28px;
      }

      .country-overlay {
        top: 12px;
        right: 12px;
        width: calc(100% - 24px);
        max-width: none;
        padding: 20px;
      }

      .overlay-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 20px;
        row-gap: 16px;
      }

      .overlay-country-name {
        font-size: 14px;
      }

      .flag-circle {
        width: 26px;
        height: 26px;
      }

      .world-sidebar {
        padding: 30px 22px;
      }

      .country-name {
        font-size: 21px;
      }

      .detail-drawer {
        bottom: 0;
        width: 100%;
      }

      .detail-inner {
        padding: 26px 20px;
      }

      .detail-country-title {
        font-size: 36px;
        gap: 12px;
      }

      .detail-flag-circle {
        width: 42px;
        height: 42px;
      }

      .office-card div {
        grid-template-columns: 1fr;
        gap: 4px;
      }
    }
  `]
})
export class ContactPageComponent {
  searchOpen = false;
  countryOverlayOpen = false;
  personaMenuOpen = false;
  detailOpen = true;

  searchTerm = '';
  selectedRegion: 'All' | CountryPresence['region'] = 'All';
  selectedPersona = 'Student';
  mapZoom = 1;

  personas = [
    'Student',
    'Parent',
    'Jobseeker',
    'Employer',
    'University',
    'Agent',
    'Media',
    'Investor'
  ];

  worldCountries: WorldCountry[] = [
    { country: 'Australia', flagCode: 'au' },
    { country: 'Finland', flagCode: 'fi' },
    { country: 'Poland', flagCode: 'pl' },
    { country: 'Austria', flagCode: 'at' },
    { country: 'France', flagCode: 'fr' },
    { country: 'Portugal', flagCode: 'pt' },
    { country: 'Azerbaijan', flagCode: 'az' },
    { country: 'Germany', flagCode: 'de' },
    { country: 'Romania', flagCode: 'ro' },
    { country: 'Belgium', flagCode: 'be' },
    { country: 'Hungary', flagCode: 'hu' },
    { country: 'Singapore', flagCode: 'sg' },
    { country: 'Brazil', flagCode: 'br' },
    { country: 'India', flagCode: 'in' },
    { country: 'South Africa', flagCode: 'za' },
    { country: 'Canada', flagCode: 'ca' },
    { country: 'Italy', flagCode: 'it' },
    { country: 'Spain', flagCode: 'es' },
    { country: 'Chile', flagCode: 'cl' },
    { country: 'Kazakhstan', flagCode: 'kz' },
    { country: 'Sweden', flagCode: 'se' },
    { country: 'China', flagCode: 'cn' },
    { country: 'Mexico', flagCode: 'mx' },
    { country: 'Switzerland', flagCode: 'ch' },
    { country: 'Czech Republic', flagCode: 'cz' },
    { country: 'Morocco', flagCode: 'ma' },
    { country: 'UK', flagCode: 'gb' },
    { country: 'Denmark', flagCode: 'dk' },
    { country: 'Netherlands', flagCode: 'nl' },
    { country: 'USA', flagCode: 'us' },
    { country: 'Egypt', flagCode: 'eg' },
    { country: 'Norway', flagCode: 'no' }
  ];

  countries: CountryPresence[] = [
    {
      country: 'India',
      region: 'Asia',
      flagCode: 'in',
      count: 11,
      x: 68,
      y: 53,
      description: 'India is a major source market for Ausbildung, German language training, study abroad counselling and skilled mobility programmes.',
      officeType: 'Student Counselling & Training Hub',
      city: 'Chennai',
      email: 'india@altuscareer.com',
      phone: '+91 00000 00000',
      services: ['Ausbildung counselling', 'German A1-B1', 'Documentation', 'Career pathway planning']
    },
    {
      country: 'Germany',
      region: 'Europe',
      flagCode: 'de',
      count: 5,
      x: 50,
      y: 34,
      description: 'Germany supports employer partnerships, Ausbildung coordination, training contract development and post-arrival student support.',
      officeType: 'Employer Relations Desk',
      city: 'Düsseldorf',
      email: 'germany@altuscareer.com',
      phone: '+49 000 000000',
      services: ['Employer relations', 'Ausbildung coordination', 'Post-arrival support', 'Local compliance']
    },
    {
      country: 'UAE',
      region: 'GCC',
      flagCode: 'ae',
      count: 2,
      x: 62,
      y: 50,
      description: 'The UAE presence supports regional leadership, GCC student acquisition, investor coordination and marketplace operations.',
      officeType: 'Regional Coordination Office',
      city: 'Dubai',
      email: 'uae@altuscareer.com',
      phone: '+971 000 000000',
      services: ['Regional operations', 'Investor desk', 'Partner onboarding', 'GCC enquiries']
    },
    {
      country: 'Kuwait',
      region: 'GCC',
      flagCode: 'kw',
      count: 1,
      x: 59,
      y: 47,
      description: 'Kuwait supports school partnerships, parent counselling, expat student communities and GCC market development.',
      officeType: 'Counselling Partner Desk',
      city: 'Kuwait City',
      email: 'kuwait@altuscareer.com',
      phone: '+965 0000 0000',
      services: ['School outreach', 'Parent counselling', 'Study abroad', 'Ausbildung enquiries']
    },
    {
      country: 'Oman',
      region: 'GCC',
      flagCode: 'om',
      count: 1,
      x: 62,
      y: 54,
      description: 'Oman supports local partner sourcing, student acquisition, community outreach and event-led lead generation.',
      officeType: 'Partner Development Desk',
      city: 'Muscat',
      email: 'oman@altuscareer.com',
      phone: '+968 0000 0000',
      services: ['Partner sourcing', 'Events', 'Community outreach', 'Student acquisition']
    },
    {
      country: 'Estonia',
      region: 'Europe',
      flagCode: 'ee',
      count: 1,
      x: 52,
      y: 25,
      description: 'Estonia supports EU digital presence, platform operations, marketplace architecture and back-office governance.',
      officeType: 'Digital Operations Desk',
      city: 'Tallinn',
      email: 'estonia@altuscareer.com',
      phone: '+372 0000 0000',
      services: ['Platform governance', 'Marketplace operations', 'Digital back office']
    },
    {
      country: 'UK',
      region: 'Europe',
      flagCode: 'gb',
      count: 1,
      x: 45,
      y: 31,
      description: 'The UK market supports healthcare career intelligence, English-language programme comparison and student advisory content.',
      officeType: 'Advisory Network',
      city: 'London',
      email: 'uk@altuscareer.com',
      phone: '+44 0000 000000',
      services: ['Programme comparison', 'Healthcare pathway advice', 'Student advisory']
    },
    {
      country: 'Canada',
      region: 'Americas',
      flagCode: 'ca',
      count: 5,
      x: 24,
      y: 30,
      description: 'Canada supports healthcare pathway intelligence, international employment comparison and long-term settlement planning.',
      officeType: 'Career Intelligence Desk',
      city: 'Toronto',
      email: 'canada@altuscareer.com',
      phone: '+1 000 000 0000',
      services: ['Career research', 'Healthcare pathways', 'Settlement planning']
    },
    {
      country: 'USA',
      region: 'Americas',
      flagCode: 'us',
      count: 10,
      x: 25,
      y: 40,
      description: 'The USA market supports education research, career pathway benchmarking and global programme comparison.',
      officeType: 'Research & Benchmarking Desk',
      city: 'New York',
      email: 'usa@altuscareer.com',
      phone: '+1 000 000 0000',
      services: ['Market research', 'Programme benchmarking', 'Student intelligence']
    },
    {
      country: 'Brazil',
      region: 'Americas',
      flagCode: 'br',
      count: 5,
      x: 33,
      y: 70,
      description: 'Brazil supports South America outreach, career mobility awareness and future partner development.',
      officeType: 'Market Development Desk',
      city: 'São Paulo',
      email: 'brazil@altuscareer.com',
      phone: '+55 00 00000 0000',
      services: ['Market development', 'Partner sourcing', 'Awareness campaigns']
    },
    {
      country: 'South Africa',
      region: 'Africa',
      flagCode: 'za',
      count: 6,
      x: 52,
      y: 75,
      description: 'South Africa supports regional talent development, healthcare mobility awareness and local partnership exploration.',
      officeType: 'Regional Partner Desk',
      city: 'Cape Town',
      email: 'southafrica@altuscareer.com',
      phone: '+27 00 000 0000',
      services: ['Partner sourcing', 'Healthcare mobility', 'Regional outreach']
    },
    {
      country: 'Australia',
      region: 'Oceania',
      flagCode: 'au',
      count: 19,
      x: 82,
      y: 72,
      description: 'Australia supports healthcare career comparison, study pathway advisory and destination-market intelligence.',
      officeType: 'Career Advisory Desk',
      city: 'Sydney',
      email: 'australia@altuscareer.com',
      phone: '+61 000 000 000',
      services: ['Healthcare comparison', 'Study pathways', 'Destination intelligence']
    },
    {
      country: 'Singapore',
      region: 'Asia',
      flagCode: 'sg',
      count: 2,
      x: 73,
      y: 62,
      description: 'Singapore supports Asia-Pacific coordination, education partnerships and regional digital operations.',
      officeType: 'Asia-Pacific Coordination Desk',
      city: 'Singapore',
      email: 'singapore@altuscareer.com',
      phone: '+65 0000 0000',
      services: ['Regional coordination', 'Education partnerships', 'Digital operations']
    },
    {
      country: 'China',
      region: 'Asia',
      flagCode: 'cn',
      count: 17,
      x: 74,
      y: 42,
      description: 'China supports Asia market intelligence, student mobility research and regional partnership exploration.',
      officeType: 'Market Intelligence Desk',
      city: 'Shanghai',
      email: 'china@altuscareer.com',
      phone: '+86 000 0000 0000',
      services: ['Market intelligence', 'Student mobility research', 'Regional partnerships']
    },
    {
      country: 'Japan',
      region: 'Asia',
      flagCode: 'jp',
      count: 1,
      x: 82,
      y: 43,
      description: 'Japan supports skills benchmarking, vocational pathway research and destination-market comparison.',
      officeType: 'Research Desk',
      city: 'Tokyo',
      email: 'japan@altuscareer.com',
      phone: '+81 00 0000 0000',
      services: ['Skills benchmarking', 'Vocational research', 'Programme comparison']
    }
  ];

  selectedCountry: CountryPresence = this.countries[0];

  get filteredCountries(): CountryPresence[] {
    const text = this.searchTerm.trim().toLowerCase();

    return this.countries.filter(country => {
      const matchesRegion =
        this.selectedRegion === 'All' || country.region === this.selectedRegion;

      const matchesText =
        !text ||
        [
          country.country,
          country.region,
          country.city,
          country.description,
          country.officeType,
          country.email,
          ...country.services
        ]
          .join(' ')
          .toLowerCase()
          .includes(text);

      return matchesRegion && matchesText;
    });
  }

  get totalOfficeCount(): number {
    return this.filteredCountries.reduce((total, country) => total + country.count, 0);
  }

  get routingResult(): string {
    switch (this.selectedPersona) {
      case 'Parent':
        return 'Parent Advisory Desk';
      case 'Jobseeker':
        return 'Career Mobility Desk';
      case 'Employer':
        return 'Employer Partnership Desk';
      case 'University':
        return 'University Partnership Desk';
      case 'Agent':
        return 'Partner Network Desk';
      case 'Media':
        return 'Media & Communications Desk';
      case 'Investor':
        return 'Investor Relations Desk';
      default:
        return 'Student Counselling Desk';
    }
  }

  getFlagUrl(flagCode: string): string {
    return `https://flagcdn.com/w80/${flagCode}.png`;
  }

  closeAllPanels(except?: 'search' | 'country' | 'persona' | 'detail'): void {
    if (except !== 'search') {
      this.searchOpen = false;
    }

    if (except !== 'country') {
      this.countryOverlayOpen = false;
    }

    if (except !== 'persona') {
      this.personaMenuOpen = false;
    }

    if (except !== 'detail') {
      this.detailOpen = false;
    }
  }

  toggleSearch(): void {
    const shouldOpen = !this.searchOpen;
    this.closeAllPanels();
    this.searchOpen = shouldOpen;
  }

  toggleCountryOverlay(): void {
    const shouldOpen = !this.countryOverlayOpen;
    this.closeAllPanels();
    this.countryOverlayOpen = shouldOpen;
  }

  togglePersonaMenu(): void {
    const shouldOpen = !this.personaMenuOpen;
    this.closeAllPanels();
    this.personaMenuOpen = shouldOpen;
  }

  closeCountryOverlay(): void {
    this.closeAllPanels();
  }

  selectPersona(persona: string): void {
    this.closeAllPanels();
    this.selectedPersona = persona;
    this.detailOpen = true;
  }

  selectCountry(country: CountryPresence): void {
    this.closeAllPanels();
    this.selectedCountry = country;
    this.detailOpen = true;
  }

  selectWorldCountry(item: WorldCountry): void {
    const matchedCountry = this.countries.find(
      country => country.country.toLowerCase() === item.country.toLowerCase()
    );

    this.closeAllPanels();

    if (matchedCountry) {
      this.selectedCountry = matchedCountry;
      this.detailOpen = true;
    } else {
      this.searchTerm = item.country;
      this.detailOpen = false;
    }
  }

  zoomIn(): void {
    this.mapZoom = Math.min(1.35, Number((this.mapZoom + 0.1).toFixed(2)));
  }

  zoomOut(): void {
    this.mapZoom = Math.max(0.85, Number((this.mapZoom - 0.1).toFixed(2)));
  }

  resetMap(): void {
    this.closeAllPanels();

    this.mapZoom = 1;
    this.searchTerm = '';
    this.selectedRegion = 'All';
    this.selectedCountry = this.countries[0];
    this.detailOpen = true;
  }
}