import { Injectable } from '@angular/core';

@Injectable()
export class RoutingService {
  public routingMenu: {name:string , url:string}[];

  constructor() { 
    this.routingMenu = [
      {name: 'Introduction' , url:'Introduction'},
      {name: 'La directive RouterLink' , url:'RouterLink'},
      {name: 'La directive RouterLinkActive' , url:'RouterLinkActive'},
      {name: 'Les services ActivatedRoute et Router' , url:'ActivatedRoute-Router'},
      {name: 'Params' , url:'Params'},
      {name: 'QueryParams et Fragment' , url:'QueryParams-Fragment'},
      {name: 'Routes imbriquées' , url:'Routes-imbriquees'},
      {name: 'Redirection et wildcard' , url: "Redirection-wildcard"},
      {name: 'Séparer les fichiers de routing' , url:'Separer-fichiers-routing'},
      {name: 'Le garde canActivate' , url:'CanActivate'},
      {name: 'Le garde canDeactivate' , url:'CanDeactivate'},
      {name: 'Le garde resolver' , url:'Resolver'},
    ]
  }
}
