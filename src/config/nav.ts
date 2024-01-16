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
      title: "Input",
      href: "/component/input",
    },
    {
      title: "Checkbox",
      href: "/component/checkbox",
    },
    {
      title: "Select",
      href: "/component/select",
    },
    {
      title: "Toast",
      href: "/component/toast",
    },
  ],
};
