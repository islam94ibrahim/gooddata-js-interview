import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
