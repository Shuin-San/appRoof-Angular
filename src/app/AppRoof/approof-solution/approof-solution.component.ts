import { Component, OnInit } from '@angular/core';
import { ApproofServiceService } from '../../shared/approof-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-approof-solution',
  templateUrl: './approof-solution.component.html',
  styleUrls: ['./approof-solution.component.scss']
})
export class ApproofSolutionComponent implements OnInit {

  solution: any = {};
  id = +this.route.snapshot.paramMap.get('id');
  loaded = false;
  lang = 'nl-BE';
  langFields: any = [];
  favourite = false;
  buttons: any = [];


  constructor(
    private route: ActivatedRoute,
    private restAPI: ApproofServiceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLangFields(this.lang);
    this.getSolution();
    this.generateButtons();
  }

  // Get Lang Fields
  getLangFields(lang) {

    return this.restAPI.getLangFields(lang).subscribe((data: {}) => {
      this.langFields = data[lang];
      console.log(this.langFields);
    });
  }

  getSolution(): void {
    this.restAPI.getSolution(this.id)
    .subscribe((data: {}) => {
      this.solution = data;
      console.log(data);
      this.loaded = !this.loaded;
      console.log(this.loaded);
    });
  }

  toggleFavourite() {
    this.favourite = !this.favourite;
    // console.log(this.favourite);
    console.log(this.solution.document_category_presolutions);
  }

  generateButtons() {
    const pdfButton = new Object();
    pdfButton['link'] = `https://approof.derbigum.com/api/public/types/pdf/predefinedsolutions/${this.id}/document`;
    pdfButton['icon'] = 'file-pdf';
    pdfButton['filetype'] = 'pdf';

    const wordButton = new Object();
    wordButton['link'] = `https://approof.derbigum.com/api/public/types/word/predefinedsolutions/${this.id}/document`;
    wordButton['icon'] = 'file-word';
    wordButton['filetype'] = 'word';

    this.buttons.push(pdfButton, wordButton);

    console.log(this.buttons);
  }
}
