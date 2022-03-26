import { css } from '@emotion/react';

import normalize from './normalize';
import fonts from './fonts';

const common = css`
  ${normalize}
  ${fonts}

  html,
  body {
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default common;
