import { fireEvent, render } from "@testing-library/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

describe("select component", () => {
  test("should be rendered", () => {
    const { getByText } = render(
      <Select>
        <SelectTrigger className="w-[176px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
    const select = getByText("Theme");

    expect(select).toBeInTheDocument();
  });

  test("should be able to select items", () => {
    const { getByText } = render(
      <Select>
        <SelectTrigger className="w-[176px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
    const select = getByText("Theme");

    fireEvent.click(select);
    fireEvent.keyDown(select, { key: "ArrowDown", code: "40" });
    fireEvent.keyDown(select, { key: "Enter", code: "13" });

    const selectedItem = getByText("Light");

    expect(selectedItem).toBeInTheDocument();
  });
});
