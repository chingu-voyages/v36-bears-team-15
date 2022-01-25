import { render, screen } from '@testing-library/react'

import Timer from '.'

describe('<Timer />', () => {
  it('should render the heading', () => {
    render(<Timer />)

    expect(
      screen.getByRole('heading', { name: /Timer/i })
    ).toBeInTheDocument()
  })
})
