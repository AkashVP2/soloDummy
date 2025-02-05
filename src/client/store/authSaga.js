import { takeLatest, call, put } from 'redux-saga/effects';
import { signInRequest, signInSuccess, signInFailure, signUpRequest, signUpSuccess, signUpFailure } from './authSlice';
import { signInUser, signUpUser } from '../services/authApi'; 

function* signIn(action) {
  try {
    console.log("Saga received:", action.payload);
    const { email, password } = action.payload;
    const response = yield call(signInUser, email, password); 
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signUp(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(signUpUser, email, password); 
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* watchSignIn() {
  yield takeLatest('auth/signInRequest', signIn);
}

export function* watchSignUp() {
  yield takeLatest('auth/signUpRequest', signUp);
}
