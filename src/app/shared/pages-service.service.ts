import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  water = new Array();
  air = new Array();

  constructor() { }

  getPages() {
    this.water[0] = {
      'id': 1,
      'name': 'Standaard plat dak',
      'media' : 'https://netlab.derbigum.be/wordpress/nl/wp-content/uploads/sites/2/2017/02/classic.jpg',
      'link': 'plat-dak',
      'desc': 'epaoja peojapojpojpoj poeafjpajfepeojfp j.'
    };

    this.water[1] = {
      'id': 2,
      'name': 'Regenwaterrecuperatie',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/waterec.png',
      'link': 'regenwaterrecuperatie',
      'desc': 'regenwaterrecuperatie descriptie in NL.'
    };

    this.water[2] = {
      'id': 3,
      'name': 'Reflecterende dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/reflective.png',
      'link': 'reflecterende-dakbedekking',
      'desc': 'Reflecterende dakbedekking descriptie in NL.'
    };

    this.water[3] = {
      'id': 4,
      'name': 'Groendak',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/waterec.png',
      'link': 'groendak',
      'desc': 'groendak descriptie in NL.'
    };

    this.water[4] = {
      'id': 5,
      'name': 'Dakterras',
      'media' : 'https://derbigum.be/nl/wp-content/uploads/sites/2/2017/11/terrasses-button.png',
      'link': 'dakterras',
      'desc': 'Dakterras descriptie in NL.'
    };

    this.water[5] = {
      'id': 6,
      'name': 'Balkon',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/terraces.png',
      'link': 'balkon',
      'desc': 'Balkon descriptie in NL.'
    };

    this.water[6] = {
      'id': 7,
      'name': 'CO²-absorberende dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/co2abs.png',
      'link': 'co2-absorberende-dakbedekking',
      'desc': 'CO²-absorberende dakbedekking descriptie in NL.'
    };

    this.water[7] = {
      'id': 8,
      'name': 'Parkings',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/parking-1.png',
      'link': 'parkings',
      'desc': 'Parking descriptie in NL.'
    };

    this.water[8] = {
      'id': 9,
      'name': 'Bruggen en wegen',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/bridges.png',
      'link': 'bruggen-en-weggen',
      'desc': 'Bruggen en weggen descriptie in NL.'
    };

    this.water[9] = {
      'id': 10,
      'name': 'Ecologische dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/04/678.png',
      'link': 'ecologische-dakbedekking',
      'desc': 'Ecologische dakbedekking descriptie in NL.'
    };

    this.water[10] = {
      'id': 11,
      'name': 'Bitumineuze dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/bitumin.png',
      'link': 'bitumineuze-dakbedekking',
      'desc': 'Bitumineuze dakbedekking descriptie in NL.'
    };

    this.water[11] = {
      'id': 12,
      'name': 'Vloeibaar waterdichtingssysteem',
      'media' : 'https://derbigum.be/nl/wp-content/uploads/sites/2/2019/02/koudlijm-en-vloeibare-waterdichting-derbigum.jpg',
      'link': 'vloeibaar-waterdichting-koudlijm',
      'desc': 'Vloeibaar waterdichtingssysteem descriptie in NL.'
    };

    this.water[12] = {
      'id': 13,
      'name': 'Kunststof dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/waterec.png',
      'link': 'kunststof-dakbedekking',
      'desc': 'Kunststof dakbedekking descriptie in NL.'
    };

    this.water[13] = {
      'id': 14,
      'name': 'Plantaardige dakbedekking',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/vegetal.png',
      'link': 'plantaardige-dakbedekking',
      'desc': 'Plantaardige dakbedekking descriptie in NL.'
    };

    this.water[14] = {
      'id': 15,
      'name': 'Esthetische daken',
      'media' : 'https://www.derbigum.fr/wp-content/uploads/2017/07/etancheite.png',
      'link': 'esthetische-daken',
      'desc': 'Esthetische daken descriptie in NL.'
    };
    return this.water;
  }
}
