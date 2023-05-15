import { initializeApp } from 'firebase/app';
import * as process from 'process';

export const initializeFirebase = () => {
  const FIREBASE_ENV = process.env.FIREBASE;

  if (!FIREBASE_ENV) throw new Error('env: FIREBASE is not defined');

  const firebaseConfig = JSON.parse(FIREBASE_ENV);

  initializeApp(firebaseConfig);
};
