import { MenuModel } from './menu.model';

export interface AppliMenuModel{
    name: string,
    url: string,
    menu: MenuModel[],
    darkTheme: boolean
} 