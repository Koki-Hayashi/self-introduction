/*
 * This class is using request-promise package. So, if you want to support more optinos,
 * Please refer the website to know possible options.
 */
class AsyncAjaxServiceBase {
  constructor(host, url_base, path) {
	this.options = {
	  uri: host + url_base + path
	};
  }

  header(headers) {
	this.options.headers = headers;
	return this;
  }

  setMethod(method) {
	this.options.method = method;
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

}

module.exports = AsyncAjaxServiceBase;