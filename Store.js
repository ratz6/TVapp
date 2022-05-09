import {action, makeObservable, observable} from 'mobx';

class Store {
  showFocusedId = null;
  showPressedId = null;

  constructor() {
    makeObservable(this, {
      showFocusedId: observable,
      showPressedId: observable,
      changeShowFocusedId: action,
      changeShowPressedId: action,
    });
  }

  changeShowFocusedId(id) {
    this.showFocusedId = id;
  }
  changeShowPressedId(id) {
    this.showPressedId = id;
  }
}
export const IdStore = new Store();
