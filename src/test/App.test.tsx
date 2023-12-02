import { render, screen } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import App from '../App';

test('renders learn react link', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
    );
  const linkElement = screen.getByText('To Do 리스트');
  expect(linkElement).toBeInTheDocument();
});
