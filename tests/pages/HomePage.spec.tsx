import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MainPage } from '@pages/MainPage';

describe('홈페이지', () => {
  it('api mocking 및 렌더링 테스트', async () => {
    render(<MainPage />);
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })));
    screen.debug();
  });
});
