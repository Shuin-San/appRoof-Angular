import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution-standard',
  templateUrl: './solution-standard.component.html',
  styleUrls: ['./solution-standard.component.scss']
})
export class SolutionStandardComponent implements OnInit {

  references = [
    {
      title: 'De Soeverein in Lommel',
      link: '#',
// tslint:disable-next-line: max-line-length
      shortDesc: 'De Soeverein in Lommel moest een uniek gebouw worden. Daar zijn de architecten wonderwel in geslaagd. Lees verder in deze show case de uitdagingen die architecten overwonnen hebben.',
      thumb: 'https://derbigum.be/nl/wp-content/uploads/sites/2/2017/02/img-6429d19cb5569bb87b5e31eefb759f8a-1024x410.jpg'
    },
    {
      title: 'Loft Arjan De Feyter',
      link: '#',
// tslint:disable-next-line: max-line-length
      shortDesc: 'In 1969 Herman Andriessen built the first Belgian loft in the very rural Sint-Antonius, a borough of Zoersel. Conceptual errors and wrong maintenance almost destroyed this architectural treasure until interior architect Arjaan De Feyter and his wife discovered the building.',
      thumb: 'https://derbigum.be/nl/wp-content/uploads/sites/2/2017/03/img-a4c09156e6ba5aaddbd5d36d7960bf07-1024x410.jpg'
    },
    {
      title: 'MCA Maubeuge',
      link: '#',
// tslint:disable-next-line: max-line-length
      shortDesc: 'In Maubeuge there is a car factory, founded by the Société des Usines Chausson in 1969. Since then several Renault models have been assembled there (Renault Fuego 1979-1985, Kangoo 1990).',
      thumb: 'https://derbigum.be/nl/wp-content/uploads/sites/2/2017/03/maubege-1024x410.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
