import { Box } from "@/components/layout/box";
import { Switch } from "@/components/ui/switch";

export default function SwitchPage() {
  return (
    <>
      <Box>
        <div className="flex items-center">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode" className="pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Airplane Mode
          </label>
        </div>
      </Box>
    </>
  );
}
