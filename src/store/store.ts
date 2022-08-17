import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu = false
    hideHeader = false
    faqIndex = -1

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            hideHeader: observable,
            faqIndex: observable,
            setBurgerMenu: action.bound,
            setHideHeader: action.bound,
            setFaqIndex: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setHideHeader(hideHeader: boolean) {
        this.hideHeader = hideHeader
    }

    setFaqIndex(faqIndex: number) {
        this.faqIndex = faqIndex
    }
}
export const store = new Store()