import { takeLatest, call, put } from 'redux-saga/effects';
import { signInRequest, signInSuccess, signInFailure } from './authSlice';

// api simulation
const signInApi = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email === "test@example.com" && password === "test123") {
      resolve({ email });
    } else {
      reject('Invalid credentials');
    }
  });
};

function* signIn(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(signInApi, email, password);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* watchSignIn() {
  yield takeLatest('auth/signInRequest', signIn);
}
