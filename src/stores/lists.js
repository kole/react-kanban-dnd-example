import { action, observable } from 'mobx';

// temporary stub data until we have a backend
import stub_lists from '../stubs/lists';

export default class ListStoreClass {
    @observable lists = [];

    constructor(RootStore) {
      this.RootStore = RootStore;
      this.getListData();
    }

    @action getListData() {
      this.lists = stub_lists.sort((a, b) => a.position - b.position);
    }
}
