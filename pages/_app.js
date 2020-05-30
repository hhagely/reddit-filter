import { RecoilRoot } from 'recoil';
import PropTypes from 'prop-types';
import 'nes.css/css/nes.min.css';
import '../styles/styles.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
