import { fireEvent, render } from "@testing-library/react";
import { Toaster } from "./toaster";
import { Button } from "./button";

import ToastPage from "@/app/component/toast/page";

global.fetch = jest.fn();

describe("toast component", () => {
  test("should be rendered", () => {
    const { getByText, getByRole } = render(
      <>
        <Button variant="outline">Show Toast</Button>

        <Toaster />
      </>
    );

    const toastTrigger = getByText("Show Toast");
    const toastContent = getByRole("region");

    expect(toastTrigger).toBeInTheDocument();
    expect(toastContent).toBeInTheDocument();
  });

  test("should appear the tost when click the trigger", () => {
    const { getByText } = render(<ToastPage />);

    const toastTrigger = getByText("Show Toast");

    fireEvent.click(toastTrigger);

    const toastContent = getByText("Uh oh! Something went wrong.");

    expect(toastContent).toBeInTheDocument();
  });
});
