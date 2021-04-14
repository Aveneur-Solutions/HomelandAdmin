import {createContext} from 'react'
import ShowMenu from './ShowMenu'

export class RootStore{
    showMenu: ShowMenu
    constructor(){
        this.showMenu = new ShowMenu(this)   
    }
}
export const RootStoreContext = createContext(new RootStore())