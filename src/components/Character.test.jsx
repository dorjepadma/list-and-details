import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character photoUrl="An Image" name="Air Bender" description="Drink Good Tea" />);
    expect(wrapper).toMatchSnapshot();
  });
});
