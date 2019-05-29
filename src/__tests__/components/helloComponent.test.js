import React from 'react';
import { render } from 'react-testing-library';

import HelloComponent from 'Components/HelloComponent';

describe('HelloComponent', () => {
  it('should render loading correctly', () => {
    const { container } = render(<HelloComponent text="" userName="" loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render component props correctly', () => {
    const container = render(<HelloComponent text="Olá" userName="Wagner" loading={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
