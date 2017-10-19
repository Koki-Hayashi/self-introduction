const requestPromise = require('request-promise');
import {api} from '../configs/config';

/*
 * This class is using request-promise package. So, if you want to support more options,
 * Please refer the website to know possible options.
 */
export default class AsyncAjaxService {
  constructor(path) { // expecting only path of url e.g., /user
    this.options = {
      uri: window.location.protocol + "//" + window.location.hostname + api.url_base + path
    };
  }

  header(headers) {
    this.options.headers = headers;
    return this;
  }

  get () {
    this.options.method = 'GET';
    return this;
  }

  post() {
    this.options.method = 'POST';
    return this;
  }

  put() {
    this.options.method = 'PUT';
    return this;
  }

  delete() {
    this.options.method = 'DELETE';
    return this;
  }

  json() {
    this.options.json = true;
    return this;
  }

  body(body) { // expecting an object e.g, {id: 'id', name: 'name'}
    this.options.body = body;
    return this;
  }

  qs(qs) { // expecting an object e.g, {user: '123'}
    this.options.qs = qs;
    return this;
  }

  call(onSuccess, onError) {
    return requestPromise(this.options)
        .then(success => {
          if (onSuccess) {
            return onSuccess(success)
          }
        })
        .catch(err => {
          console.log(err);
          if (onError) {
            return onError(err);
          }
        })

  }
}
