import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chubbproj1';
  productData = [
  {
    title:"FREE",
    price:"$0",
    users:"Single User",
    storage:"5GB Storage",
    subdomain:"Free Subdomain",
    c1:"text-muted",
    c2:"text-muted",
    c3:"text-muted",
    c4:"text-muted",
    check1:"fas fa-check",
    check2:"fas fa-times",
    check3:"fas fa-times",
    check4:"fas fa-times",
    check5:"fas fa-times",


  
  },
  {
    title:"PLUS",
    price:"$9",
    users:"5 Users",
    storage:"50GB Storage",
    subdomain:"Free Subdomain",
    c1:"",
    c2:"",
    c3:"",
    c4:"",
    check1:"fas fa-check",
    check2:"fas fa-check",
    check3:"fas fa-check",
    check4:"fas fa-check",
    check5:"fas fa-times",

  },
  {
    title:"PRO",
    price:"$49",
    users:"Unlimited Users",
    storage:"150GB Storage",
    subdomain:"Unlimited Free Subdomain",
    c1:"",
    c2:"",
    c3:"",
    c4:"",
    check1:"fas fa-check",
    check2:"fas fa-check",
    check3:"fas fa-check",
    check4:"fas fa-check",
    check5:"fas fa-check",
  },
    
  ]
  constructor(){
    this.productData.forEach((product) => {

    })
  }
}
