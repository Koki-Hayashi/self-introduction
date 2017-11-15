import {Record} from "immutable";
import {APP_STATE} from '../../header/APP_STATE'
import getService from '../../service/ajax/BasicAjaxService'

import {endpoints} from '../../configs/config';

const HomeRecord = Record({
  status: APP_STATE.NEUTRAL,
  title: ''
});

export default class HomeModel extends HomeRecord {
  beforeFetch(){
	return this.set('status', APP_STATE.FETCHING);
  }

  fetch(){
	const ajax = getService(endpoints.fetchTitle);

	const onFetchSuccess = (title) => {
		return this.set('status', APP_STATE.FETCHED).set('title', title);
	};

	const onFetchError = () => {
	  return this.set('status', APP_STATE.FAILED_TO_FETCH)
	};

	return ajax.call(onFetchSuccess, onFetchError);
  }

  beforeSave(){
	return this.set('status', APP_STATE.SAVING);
  }

  save(){
	const ajax = getService(endpoints.saveTitle).body({title: this.get('title')}).json();

	const onFetchSuccess = (title) => {
	  return this.set('status', APP_STATE.SAVED);
	};

	const onFetchError = () => {
	  return this.set('status', APP_STATE.FAILED_TO_SAVE)
	};

	return ajax.call(onFetchSuccess, onFetchError);
  }

  updateTitle(title) {
    return this.set('title', title);
  }
}