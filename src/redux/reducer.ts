import {
    LOGIN
} from "./const";



// declaro el tipoado de los estados iniciales
export interface reducerStates {
ejemplo: Object;
}

// estados iniciales
const initialState = {
    ejemplo: [],
    lang: "en",
};



export const userReducer = (state = initialState, action: any) => {

switch (action.type) {
  // Login //
  case LOGIN:
    return {
      ...state,
      userLogin: action.payload,
    };
  case "CHANGE_LANGUAGE":
    return {
      ...state,
      lang: action.payload,
    };
    default:
        return state;
    }
};

