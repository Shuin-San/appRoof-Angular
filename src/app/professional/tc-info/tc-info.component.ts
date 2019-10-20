import { Component, OnInit } from '@angular/core';
import { FetchTrainingsService } from '../../shared/fetch-trainings.service';

@Component({
  selector: 'app-tc-info',
  templateUrl: './tc-info.component.html',
  styleUrls: ['./tc-info.component.scss']
})
export class TcInfoComponent implements OnInit {

  Courses: any = [];

  // DerbigumBN: any = [];
  // DerbigumBF: any = [];
  // AquatopBN: any = [];
  // AquatopBF: any = [];
  // VaeplanBN: any = [];
  // VaeplanBF: any = [];
  // ArchitectsBN: any = [];
  // ArchitectsBF: any = [];
  // DerbigumFR: any = [];
  // AquatopFR: any = [];
  // VaeplanFR: any = [];
  // ArchitectsFR: any = [];

  constructor(
    public restAPI: FetchTrainingsService
  ) { }

  ngOnInit() {
    this.getTrainings('nl', 1);
    this.getTrainings('fr', 1);
    this.getTrainings('nl', 10);
    this.getTrainings('fr', 10);
    this.getTrainings('nl', 3);
    this.getTrainings('fr', 3);

  }

  getTrainings(lang, id) {

    return this.restAPI.getTrainings(lang, id).subscribe((data: {}) => {
      this.Courses[`lang_${lang}_t${id}`] = data['volist'];
      console.log(this.Courses);
    });
  }

}
