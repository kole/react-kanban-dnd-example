import { action, observable } from 'mobx';

export default class DragStoreClass {
    @observable cardPosition;

    constructor(RootStore) {
      this.RootStore = RootStore;
    }

    @action setCardPosition(cardID, pos) {
      this.cardPosition = pos;
    }

    @action cardDropped(cardID, newListID) {
      if (!cardID || !newListID) return;
      const idx = this.RootStore.CardStore.cards.findIndex(card => card.id === cardID);
      const card = {
        listID: newListID,
        position: this.cardPosition
      };
      this.RootStore.CardStore.updateCardAtIndex(idx, card);
      this.cardPosition = undefined;
    }
}
