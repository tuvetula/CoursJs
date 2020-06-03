import { MenuModel } from './menu.model';

export interface AppliMenuModel{
    name: string,
    classToAdd: string,
    iconeUrl: string,
    url: string,
    menu: MenuModel[],
    darkTheme: boolean,
    isOnNavbarLg: boolean,
    isOnNavbarMobile: boolean,
    showNonConnectedUser: boolean
} 