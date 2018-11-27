import { action, observable } from 'mobx';

export default class BoardSearchClass {
    @observable searchTerm = '';

    constructor(RootStore) {
      this.RootStore = RootStore;
    }

    @action setSearchTerm(str) {
      if (typeof str !== 'string') return;
      this.searchTerm = str;
    }

    @action clearSearch() {
      this.searchTerm = '';
    }
}
