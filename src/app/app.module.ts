import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { ContentComponent } from './components/content/content.component';
import { TrendingComponent } from './components/trending/trending.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PrivacypolicyComponent,
    DisclaimerComponent,
    TermsAndConditionComponent,
    NopageComponent,
    ContentComponent,
    TrendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
