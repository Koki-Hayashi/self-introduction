import {Record} from "immutable";
import {APP_STATE} from './APP_STATE'

const HeaderRecord = Record(
    {
      appState: APP_STATE.NEUTRAL,
    }
);

export default class HeaderModel extends HeaderRecord {
  setAppState(APP_STATE) {
    return this.set("appState", APP_STATE);
  }
}
