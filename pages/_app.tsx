import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
import "@/styles/globals.css";
import { useEffect } from "react"; // import hook utk javascript bootstrap
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import type { AppProps } from "next/app";
 

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}


export default MyApp;


// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
