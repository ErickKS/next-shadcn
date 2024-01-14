"use client";

import { usePathname } from "next/navigation";

export function Title() {
  const pathname = usePathname().split("/");
  const component = pathname[pathname.length - 1].toLocaleUpperCase();

  return <h1 className="text-xl font-medium tracking-widest">{component === "" ? "Design System" : component}</h1>;
}
