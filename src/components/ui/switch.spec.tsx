import { fireEvent, render } from "@testing-library/react";
import { Switch } from "./switch";

describe("switch component", () => {
  let switchValue: boolean;
  let setSwitchValue: jest.Mock<any, any, any>;

  beforeEach(() => {
    switchValue = false;
    setSwitchValue = jest.fn();
  });

  test("should be rendered", () => {
    const { getByRole, getByText } = render(
      <>
        <Switch id="switch" />
        <label htmlFor="switch" className="pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Switch
        </label>
      </>
    );

    const switchTrigger = getByRole("switch");
    const switchLabel = getByText("Switch");

    expect(switchTrigger).toBeInTheDocument();
    expect(switchLabel).toBeInTheDocument();
  });

  test("should call the onCheckedChange function when click", () => {
    const { getByRole } = render(
      <>
        <Switch id="switch" checked={switchValue} onCheckedChange={setSwitchValue} />
        <label htmlFor="switch" className="pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Switch
        </label>
      </>
    );

    const switchTrigger = getByRole("switch");

    fireEvent.click(switchTrigger);

    expect(setSwitchValue).toHaveBeenCalled();
  });
});
