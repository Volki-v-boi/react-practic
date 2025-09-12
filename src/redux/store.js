import { configureStore } from "@reduxjs/toolkit";

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

export const reset = () => {
  return {
    type: "balance/reset",
  };
};

export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

const initialState = {
  balance: {
    value: 0,
  },

  locale: {
    lang: "ua",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };

    case "balance/deposit":
      return {
        ...state,

        balance: {
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,

        balance: {
          value: state.balance.value - action.payload,
        },
      };
    case "balance/reset":
      return initialState;

    default:
      return state;
  }
};

export const store = configureStore({ reducer: rootReducer });
