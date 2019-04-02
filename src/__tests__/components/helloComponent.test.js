import React from 'react';
import { mount } from 'enzyme';

import HelloComponent from '../../components/HelloComponent';

describe('HelloComponent', () => {
  it('should render loading correctly', () => {
    const wrapper = mount(<HelloComponent text="" userName="" loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component redux props correctly', () => {
    const wrapper = mount(<HelloComponent text="Olá" userName="Wagner" loading={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
