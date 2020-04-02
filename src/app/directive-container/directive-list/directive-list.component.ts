import { Component, OnInit } from '@angular/core';
import { DirectiveService } from 'src/app/shared/services/directive.service';

@Component({
  selector: 'app-directive-list',
  templateUrl: './directive-list.component.html',
  styleUrls: ['./directive-list.component.css']
})
export class DirectiveListComponent implements OnInit {

  public directiveMenu: {name:string , url:string}[];

  constructor(private directiveService: DirectiveService) { }

  ngOnInit(): void {
    this.directiveMenu = this.directiveService.directiveMenu;
  }

}
