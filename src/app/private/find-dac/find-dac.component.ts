import { Component, OnInit } from '@angular/core';
import { PostcodesService } from '../../shared/postcodes.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-find-dac',
  templateUrl: './find-dac.component.html',
  styleUrls: ['./find-dac.component.scss'],
  providers: [PostcodesService]
})
export class FindDacComponent implements OnInit {

  PostCodes: any = [];
  results: any[] = [];

queryField: FormControl = new FormControl();

  constructor(
    public restAPI: PostcodesService
  ) { }

  ngOnInit() {
    this.loadCodes();
  }

  loadCodes() {
    return this.restAPI.getCodes().subscribe((data: {}) => {
      this.PostCodes = data;
    });
  }

}
