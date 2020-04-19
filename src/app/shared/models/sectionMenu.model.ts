import { MenuModel } from './menu.model';

export interface SectionMenuModel{
    name: string,
    url: string,
    menu: MenuModel[],
    darkTheme: boolean
} 