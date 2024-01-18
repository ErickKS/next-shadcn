import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./checkbox";

test("should be rendered", () => {
  const { getByTestId, getByText } = render(
    <>
      <Checkbox id="terms" data-testid="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </>
  );

  const checkbox = getByTestId("terms");
  const label = getByText("Accept terms and conditions");

  expect(checkbox).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});

describe("should change checked attribute value on click", () => {
  let checkboxValue: boolean;
  let setCheckboxValue: jest.Mock<any, any, any>;

  beforeEach(() => {
    checkboxValue = false;
    setCheckboxValue = jest.fn();
  });

  test("click -> component", () => {
    const { getByTestId } = render(
      <>
        <Checkbox id="terms" data-testid="terms" checked={checkboxValue} onCheckedChange={setCheckboxValue} />
        <label htmlFor="terms">Accept terms and conditions</label>
      </>
    );
    const checkbox = getByTestId("terms");

    fireEvent.click(checkbox);

    expect(setCheckboxValue).toHaveBeenCalledWith(true);
  });

  test("click -> label", () => {
    const { getByText } = render(
      <>
        <Checkbox id="terms" data-testid="terms" checked={checkboxValue} onCheckedChange={setCheckboxValue} />
        <label htmlFor="terms">Accept terms and conditions</label>
      </>
    );
    const label = getByText("Accept terms and conditions");

    fireEvent.click(label);

    expect(setCheckboxValue).toHaveBeenCalledWith(true);
  });
});
