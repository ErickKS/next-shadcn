import { Box } from "@/components/layout/box";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box>
        <h1 className="text-xl font-medium">Welcome</h1>
      </Box>

      <Link
        href={"https://github.com/ErickKS/next-shadcn"}
        target="_black"
        className={clsx(
          "flex justify-center items-center w-fit gap-2 mt-4 mx-auto py-2 px-4 border rounded-[0.5rem]",
          "text-sm font-medium",
          "hover:bg-accent"
        )}
      >
        <GitHubLogoIcon className="h-5 w-5" />
        Repository
      </Link>
    </>
  );
}
