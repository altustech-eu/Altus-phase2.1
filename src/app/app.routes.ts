import { Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page';

import { AusbildungPageComponent } from './pages/ausbildung/ausbildung-page.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';
import { StudyAbroadPageComponent } from './pages/study-abroad/study-abroad-page.component';
import { GermanLanguageTrainingPageComponent } from './pages/german-language-training/german-language-training-page.component';
import { EmployersPageComponent } from './pages/employers/employers-page.component';
import { CareerAmbassadorsPageComponent } from './pages/career-ambassadors/career-ambassadors-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';
import { FormsThankYouPageComponent } from './pages/forms-thank-you/forms-thank-you-page.component';
import { ResourcesPageComponent } from './pages/resources/resources-page.component';
import { ContactPageComponent } from './pages/Contactpage/Contact';

import { DesignSystemLiteComponent } from './pages/design-system-lite/design-system-lite.component';
import { MobileResponsiveScreensComponent } from './pages/mobile-responsive-screens/mobile-responsive-screens.component';

// Add this import
import { LoginComponent } from '../app/components/mainsearch/Loginpage';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },

  // Add this route
  { path: 'login', component: LoginComponent },

  { path: 'ausbildung', component: AusbildungPageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: 'study-abroad', component: StudyAbroadPageComponent },
  { path: 'german-language-training', component: GermanLanguageTrainingPageComponent },
  { path: 'employers', component: EmployersPageComponent },
  { path: 'career-ambassadors', component: CareerAmbassadorsPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'forms-thank-you', component: FormsThankYouPageComponent },
  { path: 'resources', component: ResourcesPageComponent },
  { path: 'contact', component: ContactPageComponent },

  { path: 'design-system-lite', component: DesignSystemLiteComponent },
  { path: 'mobile-responsive-screens', component: MobileResponsiveScreensComponent },

  { path: '**', redirectTo: 'home' }
];