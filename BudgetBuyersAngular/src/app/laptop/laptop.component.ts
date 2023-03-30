import { Component, OnInit } from '@angular/core';
import data from '../_files/data.json';
import { ActivatedRoute } from '@angular/router';
interface Laptop{
  productSellerId:String,
  productId:number,
  productBrand:String,
  productCategory:String,
  productFullName:String,
  productDescription:String,
  sellerId:String,
  sellerName:String,
  sellerPrice:number,
  sellerMrp:number,
  sellerDiscount:number,
  customerRating:number,
  sellerUrl:String
  
} 
 @Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  query: String;
  results: any[];
  Laptop: any[]=data; 
 constructor(private route: ActivatedRoute) { }
 

  ngOnInit(): void {}
  /*
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.search();
    });
  }*/
  /* filteredData:any;
  search() {
  this.Laptop=data;
 this.filteredData = this.Laptop.filter((lap) => lap.productSellerId === this.query||lap.productFullName===this.query);
   console.log(this.filteredData);
    
  }

  */
}
 


