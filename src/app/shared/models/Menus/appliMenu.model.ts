import { ChapterMenuModel } from './menus.model';

export interface AppliMenuModel{
    name: string,
    classToAdd: string,
    iconeUrl: string,
    url: string,
    chaptersMenu: ChapterMenuModel[],
    darkTheme: boolean,
    isOnNavbarLg: boolean,
    isOnNavbarMobile: boolean,
    showNonConnectedUser: boolean,
    availableForSearchBar: boolean,
    keywords?: string[]
} 