import { render, screen } from '../../lib/test-utils';

import Pomodoro from './index';

describe('<Pomodoro />', () => {
  it('should render the pomodoro timer', () => {
    render(<Pomodoro />);

    expect(
      screen.getByRole('heading', { name: /Pomodoro/i }),
    ).toBeInTheDocument();
  });
});
