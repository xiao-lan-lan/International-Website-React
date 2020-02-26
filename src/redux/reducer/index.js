import {setItem} from '../../utils/localstorage'

export default function reducer(state, action) {
  switch (action.type) {
    case "zh":
      let newState1 = { ...state };
      newState1.lang = "zh";
      setItem('lang',newState1)
      return newState1;
    case "en":
      let newState2 = { ...state };
      newState2.lang = "en";
      setItem('lang',newState2)
      return newState2;
    default:
      return state;
  }
};
