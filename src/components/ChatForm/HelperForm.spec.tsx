/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from "@testing-library/react";
import ChatForm from ".";
describe("Textfield Component", () => {
  it("should render", () => {
    render(<ChatForm />);

    expect(screen.getByTestId('container-textfield')).toBeTruthy()
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
