import store from '../../client/store/store'
import {getHeaderModel} from "../store/getCurrentModelService";
import {update} from "./headerActionCreator";

export function setAppState(APP_STATE) {
  store.dispatch(update(getHeaderModel().setAppState(APP_STATE)))
}
