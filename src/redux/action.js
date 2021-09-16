import { ADD, DECREASE } from "./types";

export const addCounter = (payload) => ({
  type: ADD,
  payload,
});

export const decreaseCounter = (payload) => ({
  type: DECREASE,
  payload,
});
