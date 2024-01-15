import { Box } from "@/components/layout/box";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SelectPage() {
  return (
    <>
      <Box>
        <Select>
          <SelectTrigger className="w-[176px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </Box>
    </>
  );
}
