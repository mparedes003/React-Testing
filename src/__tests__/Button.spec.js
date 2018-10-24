import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../setupTests.js';
import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
  shallow(<Button />);
  });

  it('should render a button', () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find('button');

    expect(elements.length).toBe(1);
  });

  it('renders a button with a component-button class', () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find('.component-button');

    expect(elements.length).toBe(1);
  });

  it('renders an orange button', () => {
    const wrapper = shallow(<Button orange />);

    const elements = wrapper.find('.orange');

    expect(elements.length).toBe(1);
  });

  it('renders a wide button', () => {
    const wrapper = shallow(<Button wide />);

    const elements = wrapper.find('.wide');

    expect(elements.length).toBe(1);
  });

  

  // it('simulates click events', () => {
  //   const wrapper = shallow(<Button />);
  //   const instance = wrapper.instance();

  //   const button = wrapper.find('button');

  //   button.simulate('click');
  //   expect(instance).to.have.property('name');

  // });
});
