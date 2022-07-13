import { css } from '@emotion/react';
import { breakpointUp, breakpoints } from '../styles/mq';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <header css={headerCss}>
        <div css={headerInnerCss}>
          <Link href="/">
            <a>
              <h1 css={headerLogoCss}>console.blog</h1>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

const headerCss = css`
  height: 60px;
`;

const headerLogoCss = css`
  font-size: 24px;
  font-weight: normal;
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const headerInnerCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-inline: 15px 7px;
`;
