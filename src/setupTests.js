import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
/*eslint-disable */
Enzyme.configure({ adapter: new Adapter() });
/*eslint-disable */
global.toJson = toJson;
