import { formatDate } from './datetime';

describe('formatDate', () => {
  it('should format the date', () => {
    const mockdate = '2024-07-31';
    const result = formatDate(mockdate);
    expect(result).toBe('Wed 31 Jul');
  });
});
