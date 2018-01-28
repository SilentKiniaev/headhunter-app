import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  @Input('vacancy') vacancy;
  date;
  options = {
    month: 'long',
    day: 'numeric'
  };
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.vacancy.created_at);
  }
}
