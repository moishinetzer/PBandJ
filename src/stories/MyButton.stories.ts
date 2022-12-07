import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import styles from "../index.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Example/MyButton",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const DefaultButton: Story = {
  args: {
    children: "Default Button",
  },
};

export const RedButton: Story = {
  args: {
    children: "Red Button",
    variant: "red",
  },
};

export const OrangeButton: Story = {
  args: {
    children: "Orange Button",
    variant: "orange",
  },
};
