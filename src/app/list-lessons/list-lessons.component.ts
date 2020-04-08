import { Component, OnInit, Input } from "@angular/core";
import { DirectiveService } from "../shared/services/directive.service";
import { ComponentService } from "../shared/services/component.service";
import { ObservableService } from "../shared/services/observable.service";
import { RoutingService } from "../shared/services/routing.service";
import { ServicesService } from "../shared/services/services.service";
import { FormulairesService } from "../shared/services/formulaires.service";
import { PipeService } from "../shared/services/pipe.service";

@Component({
  selector: "app-list-lessons",
  templateUrl: "./list-lessons.component.html",
  styleUrls: ["./list-lessons.component.css"],
})
export class ListLessonsComponent implements OnInit {
  public listMenu: { name: string; url: string }[];
  @Input() public serviceName: string;

  constructor(
    private componentService: ComponentService,
    private directiveService: DirectiveService,
    private observableService: ObservableService,
    private routingService: RoutingService,
    private serviceService: ServicesService,
    private formulairesService: FormulairesService,
    private pipeService: PipeService
  ) {}

  ngOnInit(): void {
    if (this.serviceName === "Composants") {
      this.listMenu = this.componentService.componentMenu;
    } else if (this.serviceName === "Directives") {
      this.listMenu = this.directiveService.directiveMenu;
    } else if (this.serviceName === "Observable") {
      this.listMenu = this.observableService.observableMenu;
    } else if (this.serviceName === "Services") {
      this.listMenu = this.serviceService.serviceMenu;
    } else if (this.serviceName === "Routing") {
      this.listMenu = this.routingService.routingMenu;
    } else if (this.serviceName === "Formulaires") {
      this.listMenu = this.formulairesService.formulairesMenu;
    } else if (this.serviceName === "Pipes") {
      this.listMenu = this.pipeService.pipeMenu;
    }
  }
}
