import {  } from 'redux-saga/effects'
import {  } from './actions/actionCreator'
import {  } from './actions/actionTypes'

const fetchForAll = async(payload) => {
  const feedBack = await fetch(payload.url, payload.constructor)
  return feedBack.json()
}

export default function* watcher() {
}
