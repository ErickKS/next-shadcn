import { fireEvent, render } from "@testing-library/react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";

describe("dialog component", () => {
  test("should be rendered", () => {
    const { getByText } = render(
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile Title</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>

          <span>test</span>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const dialogTrigger = getByText("Edit Profile");

    expect(dialogTrigger).toBeInTheDocument();
  });

  test("should open the dialog component", () => {
    const { getByText, getByRole } = render(
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile Title</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>

          <span>test</span>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const dialogTrigger = getByText("Edit Profile");

    fireEvent.click(dialogTrigger);

    const dialogContent = getByRole("dialog");

    expect(dialogContent).toBeInTheDocument();
  });

  describe("should close the dialog component", () => {
    test("keyboard event", () => {
      const { getByText, getByRole } = render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile Title</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
            </DialogHeader>

            <span>test</span>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      const dialogTrigger = getByText("Edit Profile");

      fireEvent.click(dialogTrigger);

      const dialogContent = getByRole("dialog");

      fireEvent.keyDown(dialogContent, { key: "Escape", code: "27" });

      expect(dialogContent).not.toBeInTheDocument();
    });

    test("close trigger event", () => {
      const { getByText, getByRole } = render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile Title</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
            </DialogHeader>

            <span>test</span>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      const dialogTrigger = getByText("Edit Profile");

      fireEvent.click(dialogTrigger);

      const dialogContent = getByRole("dialog");
      const dialogClose = getByText("Close");

      fireEvent.click(dialogClose);

      expect(dialogContent).not.toBeInTheDocument();
    });

    test("outside click event", () => {
      const { getByText, getByRole } = render(
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile Title</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
            </DialogHeader>

            <span>test</span>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      const dialogTrigger = getByText("Edit Profile");

      fireEvent.click(dialogTrigger);

      const dialogContent = getByRole("dialog");

      fireEvent.click(dialogTrigger);

      expect(dialogContent).not.toBeInTheDocument();
    });
  });
});
