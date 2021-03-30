/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}
declare global {
  interface Window {
    OneSignal: any;
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().use(reactotronRedux()).connect();

  tron.clear!();

  console.tron = tron;
}
