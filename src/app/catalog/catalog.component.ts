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
  fetchDrinks() {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://cors.io/?https://trefle.io/api/plants/103505?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q');
    HTTPRequest.onload = function() {
      var data = JSON.parse(HTTPRequest.responseText);

      var outputDrinks = document.getElementById('drinks_list');

    outputDrinks.innerHTML = '';

        var strCategory = '';
        var outputHTML = '<Label text="' + data.varieties[0].common_name + '" class="m-b-10" ></Label>';
        
        outputDrinks.innerHTML += outputHTML;
      

    };
    HTTPRequest.send();
  }


  
    
     
  }


