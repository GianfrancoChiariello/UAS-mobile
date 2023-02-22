import {
  LOGIN,
  CHANGE_CORP,
  CHANGE_LANGUAGE
} from "./const";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;



export const Ejemplo = async (prop: any) => {
    return async function (dispatch: any) {
      try {
        const data = await axios.get("url", {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " +
              (typeof window !== "undefined" &&
                window.localStorage.getItem("TOKEN")?.split('"')[1]),
          },
        });
        return dispatch({
          type: LOGIN,
          payload: data,
        });
      } catch (e: any) {
        if (e.response) {
          return dispatch({
            type: LOGIN,
            payload: e.response,
          });
        } else {
          console.error("Error" + e.message);
        }
      }
    };
};


  //No se esta usando
export const SelectCorp = async (prop: any) => {
  return async function (dispatch: any) {
      return dispatch({
        type: CHANGE_CORP,
        payload: prop,
      });
    }
}

//Use in SelectLanguage.tsx
export const changeLang = (item : any) => {
  return async function (dispatch: any) {
    return dispatch({
      type: CHANGE_LANGUAGE,
      payload: item,
    });
  };
};

