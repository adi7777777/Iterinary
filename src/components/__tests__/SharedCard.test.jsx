import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import SharedCard from '../SharedCard';

test('SharedCard renders children', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <SharedCard>
        <div>Test Content</div>
      </SharedCard>
    </ThemeProvider>
  );

  expect(getByText('Test Content')).toBeInTheDocument();
});
