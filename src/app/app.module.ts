import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { SettingsComponent } from './settings/settings.component';
import {VacanciesService} from "./vacancies.service";
import { TownFilterPipe } from './town-filter.pipe';
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'vacancies',component: HomeComponent},
  {path:'vacancies/:id',component: VacancyComponent},
  {path: 'settings',component:SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VacanciesComponent,
    VacancyComponent,
    SettingsComponent,
    TownFilterPipe
  ],
  imports: [
    BrowserModule,
	  HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCVZswu_06ddkn874Sy3KBMCLexxViCIak"
    })
  ],
  providers: [VacanciesService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
