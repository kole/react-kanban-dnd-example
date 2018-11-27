import { action, observable } from 'mobx';

export default class UIStoreClass {
    @observable cardModalIsOpen = false;

    @observable mainMenuIsOpen = false;

    constructor(RootStore) {
      this.RootStore = RootStore;
    }

    @action toggleModalIsOpen() {
      this.cardModalIsOpen = !this.cardModalIsOpen;
    }

    @action toggleMainMenuIsOpen() {
      this.mainMenuIsOpen = !this.mainMenuIsOpen;
    }
}
