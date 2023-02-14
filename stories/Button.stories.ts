import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Button } from "../lib";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    type: "primary",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    type: "primary",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    type: "primary",
    size: "large",
  },
};
