import { action, observable } from 'mobx';
import loremIpsum from 'lorem-ipsum';
import _ from 'underscore';

const getRandom = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) { throw new RangeError('getRandom: more elements taken than available'); }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export default class CardStoreClass {
    @observable cards = [];

    @observable activeCard = {};

    constructor(RootStore) {
      this.RootStore = RootStore;
      this.getCardData();
    }

    @action setActiveCard(card) {
      if (typeof card !== 'object') return;
      this.activeCard = card;
    }

    @action shiftOtherCardPositions(listID, pos, idx) {
      const { cards } = this;
      return new Promise((resolve) => {
        cards.map((card) => {
          if (card.listID === listID && card.position >= pos && card.id !== cards[idx].id) {
            const _card = card;
            _card.position += 1;
            return _card;
          }
          return card;
        });
        resolve();
      });
    }

    @action async updateCardAtIndex(idx, newCard) {
      this.cards[idx].listID = newCard.listID;
      this.cards[idx].position = newCard.position;
      await this.shiftOtherCardPositions(newCard.listID, newCard.position, idx);
      this.sortCards();
    }

    @action sortCards(sortCardsBy = 'position') {
      this.cards = _.sortBy(this.cards, sortCardsBy);
      if (sortCardsBy === 'position') this.reassignPositions();
    }

    @action reassignPositions() {
      const newCards = [];
      // get listIDs from cards so we can iterate through them in order
      const uniqueListIDs = [...new Set(this.cards.map(card => card.listID))];
      uniqueListIDs.forEach((listID) => {
        const listCards = this.cards.filter(card => card.listID === listID);
        listCards.map((card, i) => {
          // positions are normalized to even numbers
          // odd numbers are reserved for dragging new cards to between positions
          const _card = card;
          _card.position = i * 2;
          return newCards.push(_card);
        });
      });
      this.cards = newCards;
    }

    randomCards() {
      const c = 30;
      const L = 4;
      const allUsers = [
        {
          id: 1, initials: 'NJ', name: 'Nick Johnson', color: '#4680ff'
        },
        {
          id: 2, initials: 'SR', name: 'Sam Ruberti', color: '#fb617f'
        },
        {
          id: 3, initials: 'SL', name: 'Scott Lanning', color: '#feb64d'
        },
        {
          id: 4, initials: 'LA', name: 'Lewis Arch', color: '#b1d077'
        }
      ];
      const allLabels = [
        { id: 1, title: 'Label 1', color: '#fb617f' },
        { id: 2, title: 'Label 2', color: '#4680ff' },
        { id: 3, title: 'Label 3', color: '#b1d077' },
        { id: 4, title: 'Label 4', color: '#feb64d' }
      ];
      for (let i = 0; i < c; i += 1) {
        const rand = Math.floor(Math.random() * L) + 1;
        const randLabels = Math.floor(Math.random() * allLabels.length + 1);
        const randUsers = Math.floor(Math.random() * allUsers.length + 1);
        const labels = _.sortBy(getRandom(allLabels, randLabels), 'id');
        const attachments = Math.floor(Math.random() * 8);
        const comments = Math.floor(Math.random() * 19);
        const description = !!Math.floor(Math.random() * 2);
        const users = _.sortBy(getRandom(allUsers, randUsers), 'id');
        const title = loremIpsum();
        this.cards.push({
          id: i + 1,
          listID: rand,
          position: 0,
          title,
          labels,
          attachments,
          comments,
          description,
          users
        });
      }
    }

    @action getCardData() {
      this.randomCards();
      this.sortCards();
    }
}
