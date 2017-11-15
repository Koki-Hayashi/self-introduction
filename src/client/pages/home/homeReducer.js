import {ACTION} from './homeActionCreator'
import HomeModel from "./homeModel";

const initialState = {
  'model': new HomeModel()
};

export default function update(state = initialState, action) {
  if (ACTION === action.type) {
	return Object.assign({},
			state,
			{
			  model: action.model
			});
  }

  return state;
}