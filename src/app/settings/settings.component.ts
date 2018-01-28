import { Component, OnInit } from '@angular/core';
import {VacanciesService} from "../vacancies.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  townSearching:string = '';
  townsAvailable:boolean = false;
  periods = [];
  towns = [];

  constructor(private vacanciesService: VacanciesService) { }

  ngOnInit() {
    this.periods.push({id: 1, name: 'Один день'});
    this.periods.push({id: 3, name: 'Три дня'});
    this.periods.push({id: 7, name: 'Неделя'});
    this.periods.push({id: 14, name: 'Две недели'});
    this.periods.push({id: 30, name: 'Месяц'});
    this.vacanciesService.getTowns().subscribe(towns => {
      for(let town of towns){
        if(town.areas.length > 0){
          for(let area of town.areas){
            this.towns.push({id: area.id, name: area.name});
          }
        }else {
          if(town.id === '1'){
            this.towns.unshift({id: town.id, name: town.name});
          }else {
            this.towns.push({id: town.id, name: town.name});
          }
        }
      }
      this.townSearching = this.vacanciesService.getTownName();
    });
  }

  setCurrentTown(townId:string,townName:string) {
    this.townSearching = townName;
    this.vacanciesService.setTownId(townId);
    this.vacanciesService.setTownName(townName);
    this.townsAvailable = false;
  }
  townSearchingInput(){
    this.townsAvailable = true;
  }
  setCurrentPeriod(period:string) {
    this.vacanciesService.setPeriod(period);
  }
}
