interface NavConfig {
  items: {
    title: string;
    href: string;
  }[];
}

export const navConfig: NavConfig = {
  items: [
    {
      title: "Button",
      href: "/component/button",
    },
    {
      title: "Checkbox",
      href: "/component/checkbox",
    },
    {
      title: "Dialog",
      href: "/component/dialog",
    },
    {
      title: "Input",
      href: "/component/input",
    },
    {
      title: "Radio",
      href: "/component/radio",
    },
    {
      title: "Select",
      href: "/component/select",
    },
    {
      title: "Switch",
      href: "/component/switch",
    },
    {
      title: "Toast",
      href: "/component/toast",
    },
  ],
};
