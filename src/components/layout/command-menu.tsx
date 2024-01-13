"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CircleIcon, FileIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { navConfig } from "@/config/nav";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative justify-start h-8 w-64 rounded-[0.5rem] bg-background shadow-none",
          "text-sm font-normal text-muted-foreground"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex">Search documentation...</span>

        <kbd
          className={cn(
            "absolute right-[0.3rem] hidden items-center gap-1 h-5 px-1.5 rounded border bg-muted select-none pointer-events-none sm:flex",
            "text-xs font-mono font-medium"
          )}
        >
          <span>⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Links">
            <CommandItem
              value={"home"}
              onSelect={() => {
                runCommand(() => router.push("/"));
              }}
            >
              <FileIcon className="h-4 w-4 mr-2" />
              Home
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading={"Components"}>
            {navConfig.items.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <div className="flex items-center justify-center h-4 w-4 mr-2">
                  <CircleIcon className="h-3 w-3" />
                </div>
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
