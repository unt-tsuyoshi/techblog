import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { breakpointUp, breakpoints } from '../styles/mq';

export function Layout({ children, ...props }) {
  return (
    <div css={layout} {...props}>
      {children}
    </div>
  );
}

const layout = css`
  padding: 60px 16px 0;
  ${breakpointUp('md')} {
    padding: 60px 32px 0;
  }
`;
