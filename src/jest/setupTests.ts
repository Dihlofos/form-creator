import { configure } from 'enzyme';
import './matchMedia.mock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: any) => {
    // eslint-disable-next-line
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
}));

configure({ adapter: new Adapter() });
