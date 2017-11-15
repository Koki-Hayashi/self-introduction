import {createAction} from '../service/actionCreator/actionCreatorService'

export const ACTION = Symbol('ACTION');

export function update(headerModel) {
  return createAction(ACTION, headerModel)
}
