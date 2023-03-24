import '@/styles/globals.css'
import 'animate.css';
import 'material-icons/iconfont/material-icons.css';
import store from "../Components/store";
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  const design = (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
  return design;
}
