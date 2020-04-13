import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validator } from '@angular/forms';
import { Subject, throwError } from 'rxjs'; 
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

public loading: boolean;
public searchTerm=  new Subject<string>();
public searchResults: any;
public paginationtElements: any;
public errorMessage:any;  



  ngOnInit() {
  }

}
