import { Box } from "@/components/layout/box";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const radioItems = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "comfortable",
    label: "Comfortable",
  },
  {
    value: "compact",
    label: "Compact",
  },
];

export default function RadioPage() {
  return (
    <>
      <Box>
        <RadioGroup defaultValue="default">
          {radioItems.map(({ value, label }) => (
            <div key={value} className="flex items-center">
              <RadioGroupItem value={value} id={value} />

              <label
                htmlFor={value}
                className="pl-2 text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </Box>
    </>
  );
}
