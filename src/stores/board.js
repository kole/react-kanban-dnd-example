import { computed, observable, reaction } from 'mobx';

export default class BoardStoreClass {
    @observable searchTerm = '';

    constructor(RootStore) {
      this.RootStore = RootStore;
      reaction(
        () => this.RootStore.BoardSearchStore.searchTerm,
        (str) => { this.searchTerm = str; }
      );
    }

    @computed get listsWithCards() {
      return this.RootStore.ListStore.lists.map((list) => {
        const cards = this.RootStore.CardStore.cards.filter(card => (
          this.searchTerm
            ? card.listID === list.id && card.title.indexOf(this.searchTerm) > -1
            : card.listID === list.id
        ));
        return { ...list, cards };
      });
    }
}
