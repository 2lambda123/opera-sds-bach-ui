import * as React from "react";

import { DATA, SUMMARY } from "../../../../constants";

const initialState = {
  data: [],
  summary: {},
};

function incomingGdsReducer(state, action) {
  switch (action.type) {
    case DATA: {
      return { ...state, data: action.payload };
    }
    case SUMMARY: {
      return { ...state, summary: action.payload };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}
/**
 * [observationData]
 * Takes in a reducer that defaults to the observationReducer. This is just the syntax utilizing
 * the React Reducer functionality. The = {} is just what it would default to otherwise which is required.
 * @param {*} reducer
 * @returns Object
 */
function useIncomingGdsData({ reducer = incomingGdsReducer } = {}) {
  const [{ data, summary }, dispatch] = React.useReducer(reducer, initialState);
  const setData = (val) => dispatch({ type: DATA, payload: val });
  const setSummary = (val) => dispatch({ type: SUMMARY, payload: val });

  return {
    data,
    summary,
    setData,
    setSummary,
  };
}

export { useIncomingGdsData, initialState, incomingGdsReducer };
