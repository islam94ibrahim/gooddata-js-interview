import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './Select';
import { months } from '../../../utils/helper';

configure({ adapter: new Adapter() });

describe('<Select />', () => {
  let wrapper, clickSpy;
  beforeEach(() => {
    clickSpy = jest.fn();
    wrapper = shallow(<Select value="1" options={months} changed={clickSpy} />);
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('triggers changed method when changed', () => {
    wrapper.find('select').simulate('change', { target: { value: '3' } });
    expect(clickSpy).toHaveBeenCalled();
  });
});
