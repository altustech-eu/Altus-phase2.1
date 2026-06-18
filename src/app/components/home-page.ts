import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nav } from './navbar';
import { HeroComponent } from './hero';
import { TrustedLogosComponent } from './logosection';
import { HomeShowcaseComponent } from './2cardssection';
import { AusbildungSectionComponent } from './ausbildung-section';
import { CountrySearchComponent } from './Country-search';
import { ToolsSectionComponent } from './Tools-section';
// import { IndustriesSectionComponent } from './By-industries';
import { StudyProgramsComponent } from './Whychooseourprogram';
import { StudyDestinationComponent } from './Choose your Study Destination';
import { GermanTrainingComponent } from './german-training';
import { SuccessStoriesComponent } from './Sucess-stories';
import { PartnerLogoSectionComponent } from './Partners';
import { UpcomingEventsComponent } from './UpcomingEvents';
import { ContactMapComponent } from './Contactmap';
import { FooterComponent } from './Footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <main class="bg-white text-slate-950 overflow-hidden">

      @for (section of sections; track $index) {
        <ng-container *ngComponentOutlet="section"></ng-container>
      }

    </main>
  `
})
export class HomePageComponent {
  sections: Type<unknown>[] = [
    Nav,
    HeroComponent,
    
    HomeShowcaseComponent,
    AusbildungSectionComponent,
    
    CountrySearchComponent,
    GermanTrainingComponent,
    StudyDestinationComponent,
    StudyProgramsComponent,
    ToolsSectionComponent,
    TrustedLogosComponent,
    SuccessStoriesComponent,
    PartnerLogoSectionComponent,
    UpcomingEventsComponent,
    ContactMapComponent,
    FooterComponent
  ];
}