import { Component, OnInit } from "@angular/core";
import { DataBindingService } from '../shared/services/data-binding.service';

@Component({
  selector: "app-composant-container",
  templateUrl: "./composant-container.component.html",
  styleUrls: ["./composant-container.component.css"]
})
export class ComposantContainerComponent implements OnInit {
  public componentMenu: { name: string; url: string; }[];
  

  constructor(private dataBindingService: DataBindingService) { }

  ngOnInit(): void {
    this.componentMenu = this.dataBindingService.componentMenu;
  }
}
