export function createAction(ACTION, model) {
  return {
	type: ACTION,
	model: model
  }
}