import { Injectable } from '@angular/core';

@Injectable()
export class FlexLayoutService {
  public flexLayoutMenu: {name: string , url: string}[]
  constructor() { 
    this.flexLayoutMenu = [
      {name: 'Introduction' , url: 'FlexLayout/Introduction'},
      {name: 'Flexbox' , url: 'FlexLayout/FlexBox'},
      {name: 'Static api' , url: 'FlexLayout/StaticApi'},
      {name: 'Responsive api' , url: 'FlexLayout/ResponsiveApi'},
      {name: 'Features' , url: 'FlexLayout/Features'},
    ]
  }
}
