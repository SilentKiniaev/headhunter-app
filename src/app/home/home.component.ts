import {Component, OnInit} from '@angular/core';
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchString:string = '';
  minLength:number = 2;
  isLoaded:boolean = false;
  vacancies = [];

  constructor(private vacanciesService: VacanciesService) {

  }

  findVacancies() {
    if (this.searchString.length >= this.minLength) {
      this.vacanciesService.getVacancies(this.searchString)
        .subscribe(vacancies => { this.vacancies = vacancies; });
      this.isLoaded = true;
    }else {
      this.isLoaded = false;
    }
  }

  ngOnInit() {

  }
}
