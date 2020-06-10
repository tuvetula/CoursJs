import { AppliMenuModel } from '../Menus/appliMenu.model';

export interface SearchResultsModel { 
    name: string ,
    url: string, 
    keywordFound: string,
    input: string,
    appliMenu?: AppliMenuModel[]
}