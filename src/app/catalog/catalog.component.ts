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
/*
  fetchPlants(input) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://trefle.io/api/plants/103505?token=Ymgra1d5M1dCaUlmMWgyME9qNVhTdz09&fbclid=IwAR3FY03yEVzS77Ca1Q9TIbMdMlJhXtpOjhcqcD-MJHAYJXCNcdA3UrJ2p9Q');
    HTTPRequest.onload = function() {
      var plantsArray = JSON.parse(HTTPRequest.responseText);
      scope.printPlants(plantsArray);
    };
    HTTPRequest.send();
}

printPlants(plantsArray) {
  var outputPlants = document.getElementById('plants_list');

  outputPlants.innerHTML = '';

  if (Array.isArray(plantsArray['plant'])) {
    plantsArray['plants'].forEach((plant) => {
      var strCategory = '';
      var outputHTML = /*'<a href="recipe/' + plant['idPlant'] + '">*//* + '<StackLayout class="plant">' + '<Card:CardView class="cardStyle">' + '<StackLayout class="cardContent">' +
                          '<Image src="' + plant['images.url'] + '">' +
                          '<Label text="' + plant['common_name']  +
                            '"></Label>' + '</Card:CardView> </StackLayout>' +
                            
      outputPlants.innerHTML = outputHTML;
});
*/
}
