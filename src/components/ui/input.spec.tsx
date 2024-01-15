import { fireEvent, render } from "@testing-library/react";

import { Input } from "./input";

test("should be rendered", () => {
  const { getByPlaceholderText } = render(<Input placeholder="Username" />);
  const input = getByPlaceholderText("Username");

  expect(input).toBeInTheDocument();
});

test("should call the onChange function when typing", () => {
  const onInputChangeMock = jest.fn();

  const { getByPlaceholderText } = render(<Input placeholder="Username" onChange={onInputChangeMock} />);
  const input = getByPlaceholderText("Username");

  fireEvent.change(input, { target: { value: "Admin" } });

  expect(onInputChangeMock).toHaveBeenCalled();
});

test("should change the value when typing", () => {
  const { getByPlaceholderText } = render(<Input placeholder="Username" />);
  const input = getByPlaceholderText("Username");

  expect(input).toHaveValue("");

  fireEvent.change(input, { target: { value: "Admin" } });

  expect(input).toHaveValue("Admin");
});
