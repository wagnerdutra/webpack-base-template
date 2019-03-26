import { all, takeLatest } from 'redux-saga/effects';

import { Types as WelcomeTypes } from '../ducks/welcome';

import getRepoUser from './welcome';

export default function* rootSaga() {
  yield all([takeLatest(WelcomeTypes.GET_REPO_USER, getRepoUser)]);
}
