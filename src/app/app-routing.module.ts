import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacypolicyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'terms', component: TermsAndConditionComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', component: NopageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
