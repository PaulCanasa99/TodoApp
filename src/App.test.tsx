import {render} from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the Todo List header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/Todo List/i);
    expect(header).toBeInTheDocument();
  });

  it('displays the Todo Detail header', () => {
    const { getByText } = render(<App />);
    const header = getByText(/Todo Detail/i);
    expect(header).toBeInTheDocument();
  });
});