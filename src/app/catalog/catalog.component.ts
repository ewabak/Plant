import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ns-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  moduleId: module.id,
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fetchPlants() {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://trefle.io/api/plants/103505?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q');
    HTTPRequest.onload = function() {
      var data = JSON.parse(HTTPRequest.responseText);

      var outputPlants = document.getElementById('plants_list');

    outputPlants.innerHTML = '';

        var outputHTML = '<Label text="' + data.varieties[0].common_name + '" class="m-b-10" ></Label>';
        
        outputPlants.innerHTML += outputHTML;
      

    };
    HTTPRequest.send();
  }

  
    
     
  }


