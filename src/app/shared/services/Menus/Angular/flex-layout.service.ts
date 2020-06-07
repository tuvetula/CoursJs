import { Injectable } from '@angular/core';

@Injectable()
export class FlexLayoutService {
  public flexLayoutMenu: {name: string , url: string}[]
  constructor() { 
    this.flexLayoutMenu = [
      {name: 'Introduction' , url: '/Angular/FlexLayout/Introduction'},
      {name: 'Flexbox' , url: '/Angular/FlexLayout/FlexBox'},
      {name: 'Static api' , url: '/Angular/FlexLayout/StaticApi'},
      {name: 'Responsive api' , url: '/Angular/FlexLayout/ResponsiveApi'},
      {name: 'Features' , url: '/Angular/FlexLayout/Features'},
    ]
  }
}
