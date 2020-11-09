import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobFiltersComponent } from './results-page/job-filters/job-filters.component';
import { JobResultsComponent } from './results-page/job-results/job-results.component';
import { SearchBoxesComponent } from './search-page/search-boxes/search-boxes.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxesComponent,
    JobResultsComponent,
    JobFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
