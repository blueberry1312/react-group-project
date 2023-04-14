import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header test', () => {
  test('Header component is displayed on the HTML', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const header = screen.getByTitle('header-component');
    expect(header).toMatchSnapshot();
  });
});
