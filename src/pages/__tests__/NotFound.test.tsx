import { render, screen } from '@testing-library/react';
import { NotFound } from 'pages';

test('Renders NotFound page correctly', async () => {
  render(<NotFound />);
  const notFoundAlert = await screen.queryByText(/NotFound/);
  expect(notFoundAlert).toBeInTheDocument();
});
