import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class FlexLayoutService {
  public flexLayoutMenu: LessonMenuModel[]
  constructor() { 
    this.flexLayoutMenu = [
      {name: 'Introduction' , url: '/Angular/FlexLayout/Introduction'},
      {name: 'Flexbox' , url: '/Angular/FlexLayout/FlexBox' , keywords:['flex','flexbox']},
      {name: 'Static api' , url: '/Angular/FlexLayout/StaticApi' , keywords:['fxLayout','fxLayoutAlign','fxLayoutGap','fxflex','fxFlexOrder','fxFlexOffset','fxFlexAlign','fxFlexFill']},
      {name: 'Responsive api' , url: '/Angular/FlexLayout/ResponsiveApi' , keywords:['responsive']},
      {name: 'Features' , url: '/Angular/FlexLayout/Features' , keywords:['features','fxshow','fxhide']},
    ]
  }
}
