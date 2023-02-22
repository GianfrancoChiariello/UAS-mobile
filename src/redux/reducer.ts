import {
    LOGIN,
    CHANGE_LANGUAGE,
    THEME,
    CORPS,
} from "./const";


// estados iniciales
const initialState = {
    theme: "light",
    lang: "en",
    corps: [
      {
          id: 1,
          name: "Penta",
      },
      {
          id: 2,
          name: "Penta Security Solutions",
      },
      {
          id: 3,
          name: "Penta UASS",
      },
      {
          id: 4,
          name: "Penta demo",
      }
    ],
};



export const userReducer = (state = initialState, action: any) => {

switch (action.type) {
  case LOGIN:
    return {
      ...state,
      userLogin: action.payload,
  };
  case CHANGE_LANGUAGE:
    return {
      ...state,
      lang: action.payload,
  };
  case CORPS:
    return {
      ...state,
      corps: action.payload,
  }
  case THEME: 
    return {
      ...state,
      theme: action.payload,
  }
  
    default:
      return state;
  }
};

