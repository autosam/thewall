import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  alert("hey");
  return <Component {...pageProps} />;
}
