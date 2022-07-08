import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import Page from '../component/Page';

// NProgress | Lesson 08
Router.events.on('routeChangeStart', () => NProgress.start);
Router.events.on('routeChangeComplete', () => NProgress.done);
Router.events.on('routeChangeError', () => NProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
