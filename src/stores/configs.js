import { action, observable } from 'mobx';

export default class configStore {
    @observable showCardNumbers = true;

    @observable darkModeEnabled = false;

    constructor(RootStore) {
      this.RootStore = RootStore;
    }

    @action toggleDarkMode() {
      this.darkModeEnabled = !this.darkModeEnabled;
    }
}
