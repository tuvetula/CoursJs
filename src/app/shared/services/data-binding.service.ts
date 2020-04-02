import { Injectable } from '@angular/core';

@Injectable()
export class DataBindingService {

  public componentMenu: { name: string; url: string; }[] = [
    {name: "String Interpolation",url: "Interpolation"},
    {name: "Property-binding",url:"Property-binding"},
    {name: "Event-binding",url:"Event-binding"},
    {name: "Double data-binding",url:"Double-data-binding"},
    {name: "Property Input",url:"Property-input"},
    {name: "Property Output",url:"Property-output"},
    {name: "L'encapsulation" , url:"Encapsulation"},
    {name: "Variable locale" , url:"Variable-locale"},
    {name: "ViewChild" , url:"ViewChild"},
    {name: "NgContent" , url:"NgContent"},
    {name: "ContentChild" , url:"ContentChild"}

  ];

  constructor() { }
}
