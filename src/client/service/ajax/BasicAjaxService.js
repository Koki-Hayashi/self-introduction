const AsyncAjaxService = require('./_asyncAjaxServiceBase');
const requestPromise = require('request-promise');
const endpoints = require('../../configs/config').endpoints;

function getService(endpoint) {
  const asyncAjaxService = new AsyncAjaxService(endpoints.host, endpoints.url_base, endpoint.path).setMethod(endpoint.method);

  asyncAjaxService.call = (onSuccess, onError) => {
	return requestPromise(asyncAjaxService.options)
			.then(success => {
			  if (onSuccess) {
				return onSuccess(success)
			  }
			})
			.catch(error => {
			  console.log(error);
			  if (onError) {
				return onError(err);
			  }
			})
  };

  return asyncAjaxService;
}

module.exports = getService;
