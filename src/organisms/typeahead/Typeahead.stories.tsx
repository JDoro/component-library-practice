import type { Meta, StoryObj } from "@storybook/react";
import { Typeahead } from "./Typeahead.tsx";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Typeahead",
  component: Typeahead,
  tags: ["autodocs", "exclude-test"],
  render: (args) => {
    const [{ value, onChange, onSelect }, updateArgs] = useArgs();
    return (
      <div className="w-64">
        <Typeahead
          {...args}
          value={value}
          onChange={(value) => {
            onChange?.();
            updateArgs({ value });
          }}
          onSelect={(value) => {
            onSelect?.();
            updateArgs({ value });
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof Typeahead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    options: ["one", "two", "three"],
  },
};
