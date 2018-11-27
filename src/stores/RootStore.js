import _configStore from './configs';
import _listStore from './lists';
import _cardStore from './cards';
import _boardStore from './board';
import _dragCardStore from './dragCard';
import _uiStore from './ui';
import _boardSearchStore from './boardSearch';

export default class RootStoreClass {
  constructor() {
    this.ConfigStore = new _configStore(this);
    this.ListStore = new _listStore(this);
    this.CardStore = new _cardStore(this);
    this.BoardSearchStore = new _boardSearchStore(this);
    this.BoardStore = new _boardStore(this);
    this.DragCardStore = new _dragCardStore(this);
    this.UIStore = new _uiStore(this);
  }
}
