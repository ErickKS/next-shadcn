import { Box } from "@/components/layout/box";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioPage() {
  return (
    <>
      <Box>
        <RadioGroup defaultValue="default">
          <div className="flex items-center">
            <RadioGroupItem value="default" id="default" />
            <label
              htmlFor="default"
              className="pl-2 text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Default
            </label>
          </div>

          <div className="flex items-center">
            <RadioGroupItem value="comfortable" id="comfortable" />
            <label
              htmlFor="comfortable"
              className="pl-2 text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Comfortable
            </label>
          </div>

          <div className="flex items-center">
            <RadioGroupItem value="compact" id="compact" />
            <label
              htmlFor="compact"
              className="pl-2 text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Compact
            </label>
          </div>
        </RadioGroup>
      </Box>
    </>
  );
}
