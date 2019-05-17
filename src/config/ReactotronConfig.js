import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '10.67.0.84',
  })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
