import {ACTION} from './headerActionCreator'
import HeaderModel from "./headerModel";

const initialState = {
  'model': new HeaderModel()
};

export default function update(state = initialState, action) {
  if (ACTION === action.type) {
    return Object.assign({},
        state,
        {
          model: action.model
        })
  }

  return state;
}
