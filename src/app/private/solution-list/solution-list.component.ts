import { Component, OnInit } from '@angular/core';
import { PagesServiceService } from '../../shared/pages-service.service';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.scss']
})
export class SolutionListComponent implements OnInit {

  WaterPages: any = [];

  constructor(
    public PagesService: PagesServiceService
  ) { }

  ngOnInit() {
    this.loadPages();
  }

  loadPages() {
    const pages = this.PagesService.getPages();
    this.WaterPages = pages;
    }
  }
