import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LaptopComponent } from '../laptop/laptop.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
/*searchText: any;
Laptop=[]
  searchword: String | undefined;
  */
  
  searchForm: FormGroup ;
  position: any;

  constructor(private formBuilder: FormBuilder,private _router:Router) { }
  

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: ''
    });
  }
 
  onSubmit() {
    const query = this.searchForm.value.query;
    this._router.navigate(['/lappis'], { queryParams: { q: query } });
  }
  
  /*submitSearch(v:string){
    console.warn(v);
    this._router.navigate(['/laptop']);
  }
  */

  /*onKeydown(event: any) {
    console.log(event);
  }
  */
  /*searchcriteria = new EventEmitter<String>();
  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }
  */
 
   
  }


