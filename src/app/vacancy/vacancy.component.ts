import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  id: string;
  vacancy = {};
  date: Date;
  options = {
    month: 'long',
    day: 'numeric'
  };
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(private route: ActivatedRoute, private vacanciesService: VacanciesService) {

  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.vacanciesService.getVacancy(this.id).subscribe(object => {
      this.vacancy = object;
      this.date = new Date(this.vacancy["created_at"]);
      if (this.vacancy['address'] !== null) {
        this.lat = this.vacancy['address'].lat;
        this.lng = this.vacancy['address'].lng;
      }
      console.log(object);
    });
  }
}
