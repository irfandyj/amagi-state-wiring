import { render, screen } from '@testing-library/react';
import App from './App';

// First thing try to render the app.
// Making sure there are SearchBar and PatientList
test('Renders the App with SearchBar and PatientList', () => {

  render(<App />);

  // I'm not sure if I get this right with react-testing-library
  // But I tried scan for just basic input and make sure patient list exist.

  // SearchBar is detected using this.
  const searchInput = screen.getByRole("textbox")

  // I'm not sure how to get the "PatientList" div without modifying it.
  // This maybe because I haven't work much with react-testing-library.
  // So I used the static data instead
  // to make sure that the data loads fine along with the PatientCard
  const patientList = screen.getByText(/Santos, Maria/)

  // Expects, making sure they exist in the document
  expect(searchInput).toBeInTheDocument();
  expect(patientList).toBeInTheDocument();
});
