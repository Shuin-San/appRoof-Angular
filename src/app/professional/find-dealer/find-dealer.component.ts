import { Component, OnInit } from '@angular/core';
import { PostcodesService } from '../../shared/postcodes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-dealer',
  templateUrl: './find-dealer.component.html',
  styleUrls: ['./find-dealer.component.scss']
})
export class FindDealerComponent implements OnInit {
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
