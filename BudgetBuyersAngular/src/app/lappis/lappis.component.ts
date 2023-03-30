import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import lappis from '../_files/lappis.json'

interface Lappis{
  
  productImage:object,
  productFullName:String,
  productDescription:String,
  company:[
    {
  sellerImage:object,
  customerRating:string,
  sellerPrice:number,
  delivery:string,
  deliveryDay:string,
  sellerUrl:URL
    }
  ] 
} 

@Component({
  selector: 'app-lappis',
  templateUrl: './lappis.component.html',
  styleUrls: ['./lappis.component.css']
})
export class LappisComponent implements OnInit {
  query: String;
  results: any[];
  Lappis: any[]=lappis; 
  filteredData:any;

  constructor(private route: ActivatedRoute) { }
  


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.search();
    });
  }
    search() {
      this.Lappis=lappis;
     this.filteredData = this.Lappis.filter((lap) => lap.productSellerId === this.query||lap.productFullName === this.query);
       console.log(this.filteredData);
        
      }
  }

