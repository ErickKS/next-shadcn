import { Box } from "@/components/layout/box";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxPage() {
  return (
    <>
      <Box>
        <div className="flex items-center">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="pl-2 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      </Box>
    </>
  );
}
