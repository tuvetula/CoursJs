import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public users:{id: number , name:string}[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: "Lenny"
        
      },
      {
        id: 2,
        name: "Rundee"
        
      },
      {
        id: 3,
        name: "Roxy"
        
      }
    ]
  }
  trackById(index: number, user: { id: number }): number {
    return user.id;
  }

}
