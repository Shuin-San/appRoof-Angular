import { Component, OnInit } from '@angular/core';
import { ApproofServiceService } from '../../shared/approof-service.service';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-approof-home',
  templateUrl: './approof-home.component.html',
  styleUrls: ['./approof-home.component.scss']
})
export class ApproofHomeComponent implements OnInit {

  filters: any = [];
  langFields: any = [];
  filtersLoaded = false;
  multiChoice: any = [];
  singleChoice: any = [];
  options: any = [];
  formData = {};
  searchForm: FormGroup;
  payload = '';
  language = 'nl-BE';
  results: any = [];
  resultsLoaded = false;
  paginatedResults: any = [];
  pagination: any = [];
  formShow = true;
  filterDivStatus = true;
  resultDivStatus = false;
  currentPage = 0;
  pages;




  constructor(
    public restAPI: ApproofServiceService
  ) { }

  ngOnInit() {

    this.getFilters(this.language);
    this.getLangFields(this.language);
  }

// Get the filters
  getFilters(lang) {

    return this.restAPI.getFilters(lang).subscribe((data: {}) => {
      this.filters = data;
      // console.log(this.filters);
      this.filtersLoaded = true;
      this.populateFields();
    });
  }

// Get Lang Fields
  getLangFields(lang) {

    return this.restAPI.getLangFields(lang).subscribe((data: {}) => {
      this.langFields = data[lang];
      console.log(this.langFields);
    });
  }

// Separate and Populate fields by type.

  populateFields() {
    this.filters.forEach(element => {
      if (element.type === 'type.multi') {
        element.filterDetails.forEach(detail => {
          const object = {};
          object['value'] = detail.id;
          object['label'] = detail.name;
          this.options.push(object);
        });
      } else {
        this.singleChoice[element.name] = element.filterDetails;
        // console.log(element.type);
      }
    });
    // console.log(this.options);
  }

  showPost(data) {
    const single = [];
    const multi = [];
    // console.log(data._directives);
    data._directives.forEach(element => {
      if (typeof(element.value) === 'string') {
        // check if string is empty (no choice)
        if (element.value === '') {
          single.push('0');
        } else {
          single.push(element.value);
        }
      } else if (typeof(element.value === 'object')) {
        if (element.value === '') {
          multi.push('0');
        } else {
          multi.push(element.value.join(','));
        }
      }
    });
    // console.log(`Single choice fields : ${single.join(',')}`);
    // console.log(`Multi choice fields : ${multi.join(',')}`);
// tslint:disable-next-line: max-line-length
    this.payload = `https://approof.derbigum.com/api/public/languages/${this.language}/booleanfilters/0${multi.join(',')}/filters/${single.join(',')}/predefinedsolutions`;
    this.getResults(this.payload);
    this.formShow = !this.formShow;
  }

  // get the results, and load them ,at the same time calculate pages for pagination
  getResults(url) {
    return this.restAPI.getResults(url).subscribe((data: {}) => {
      this.results = data;
      console.log(this.results);
      this.resultsLoaded = true;
      // console.log(this.resultsLoaded);
      // console.log(this.pages);
      // create pagination
      this.pagination = [];
      this.pages = Math.ceil(this.results.length / 10);
      let o;
      for (o = 0; o < this.pages; o++) {
        this.pagination.push(o + 1);
      }

      this.resultPage(this.currentPage);
    });
  }

  resultPage(n) {
    let i;
    let x = 0;
    this.paginatedResults = [];
    for (i = (n * 10); i < this.results.length && i < (n * 10) + 10; i++) {
      this.paginatedResults[x] = this.results[i];
      x++;
    }
    // console.log(this.paginatedResults, i);
    // console.log(this.pagination);
    this.currentPage = n;
    console.log(this.currentPage);
  }

  showFilters() {
    this.formShow = !this.formShow;
    this.resultsLoaded = false;
    this.animateApproof();
  }

  animateApproof() {
    this.filterDivStatus = !this.filterDivStatus;
    this.resultDivStatus = !this.resultDivStatus;
  }

}
