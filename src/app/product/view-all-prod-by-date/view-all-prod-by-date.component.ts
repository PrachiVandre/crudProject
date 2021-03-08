import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-prod-by-date',
  templateUrl: './view-all-prod-by-date.component.html',
  styleUrls: ['./view-all-prod-by-date.component.css']
})
export class ViewAllProdByDateComponent implements OnInit {
  searchdate='';
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.searchdate = data.date;
    })
  }

}
