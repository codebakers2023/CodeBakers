import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  searchForm: FormGroup ;
  position: any;
  constructor(private formBuilder: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const query = this.searchForm.value.query;
    this._router.navigate(['/lappis'], { queryParams: { q: query } });
  }
 

}
