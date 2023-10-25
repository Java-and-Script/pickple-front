import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HomePage } from '@pages/HomePage';

describe('홈페이지', () => {
  it('api mocking 및 렌더링 테스트', () => {
    render(<HomePage />);
    expect(screen.debug());
  });
});
