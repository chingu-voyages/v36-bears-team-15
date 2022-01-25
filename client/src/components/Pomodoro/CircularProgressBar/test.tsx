import { render, screen } from '@testing-library/react';

import CircularProgressBar from '.';

describe('<CircularProgressBar />', () => {
  it('should render the circular progress bar', () => {
    render(<CircularProgressBar />);

    expect(
      screen.getByRole('heading', { name: /CircularProgressBar/i }),
    ).toBeInTheDocument();
  });
});
