import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sous-menu-collapse",
  templateUrl: "./sous-menu-collapse.component.html",
  styleUrls: ["./sous-menu-collapse.component.css"],
})
export class SousMenuCollapseComponent implements OnInit {
  @Input() public menu: { name: string; url: string }[];

  constructor() {}

  ngOnInit(): void {
    
  }
}
