import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup ;
  position: any;
  constructor( private formBuilder: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      query: ''
    });
  }
  onSubmit() {
    const query = this.searchForm.value.query;
    this._router.navigate(['/lappis'], { queryParams: { q: query } });
  }
 
  

}
