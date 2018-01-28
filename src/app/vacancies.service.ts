import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class VacanciesService {
  townId:string = '1';
  townName:string = 'Москва'
  period:string = '1';

  constructor(private http: Http) {
  }
  getVacancies(text:string) {
    return this.http.get(`https://api.hh.ru/vacancies/?text=${text}&area=${this.townId}&period=${this.period}`)
      .map(object => object.json())
      .map(object => object.items)
      ;
  }
  getVacancy(id:string){
    return this.http.get(`https://api.hh.ru/vacancies/${id}`)
      .map(object => object.json());
  }
  getTowns() {
    return this.http.get(`https://api.hh.ru/areas`)
      .map(objects => objects.json()[0].areas)
      ;
  }
  setTownId(townId:string){
    this.townId = townId;
  }
  setTownName(townName:string){
    this.townName = townName;
  }
  getTownName() :string {
    return this.townName;
  }
  setPeriod(period:string){
    this.period = period;
  }
}
