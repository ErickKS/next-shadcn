import { fireEvent, render } from "@testing-library/react";
import { Button } from "./button";

test("should be rendered", () => {
  const { getByText } = render(<Button>Button</Button>);
  const button = getByText("Button");

  expect(button).toBeInTheDocument();
});

test("should call the onClick function when click", () => {
  const onButtonClickMock = jest.fn();

  const { getByText } = render(<Button onClick={onButtonClickMock}>Button</Button>);
  const button = getByText("Button");

  fireEvent.click(button);

  expect(onButtonClickMock).toHaveBeenCalled();
});
