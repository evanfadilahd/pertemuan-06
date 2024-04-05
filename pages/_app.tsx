import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
import "@/styles/globals.css";
import { useEffect } from "react"; // import hook utk javascript bootstrap

function MyApp({Component, pageProps}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;


// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
