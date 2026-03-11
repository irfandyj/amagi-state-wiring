import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the App with SearchBar and PatientList', () => {
  render(<App />);

  const searchInput = screen.getByRole("textbox")
  const patientList = screen.getByText(/Santos, Maria/)
  // const linkElement = screen.getByText(/learn react/i);
  expect(searchInput).toBeInTheDocument();
  expect(patientList).toBeInTheDocument();
});
