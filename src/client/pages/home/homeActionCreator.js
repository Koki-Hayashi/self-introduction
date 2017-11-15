import {createAction} from '../../service/actionCreator/actionCreatorService'
import {getHomeModel} from '../../store/getCurrentModelService'

export const ACTION = Symbol('ACTION');

export function fetch() {
	return function(dispatch) {
	  const beforeFetch = getHomeModel().beforeFetch();


	  return beforeFetch.fetch()
			  .then(model => {
				dispatch(createAction(ACTION, model))
			  })
			  .catch(error => {
				dispatch(createAction(ACTION, error))
			  });
	}
}

export function save() {
  return function(dispatch) {
	const beforeSave = getHomeModel().beforeSave();

	return beforeSave.save()
			.then(model => {
			  dispatch(createAction(ACTION, model))
			})
			.catch(error => {
			  dispatch(createAction(ACTION, error))
			});
  }
}

export function updateTitle(title) {
  return createAction(ACTION, getHomeModel().updateTitle(title));
}
