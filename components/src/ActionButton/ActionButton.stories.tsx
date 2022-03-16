import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ActionButton } from "./ActionButton"

export default {
    title: "ActionButton",
    component: ActionButton
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => <ActionButton {...args} />;

export const Active = Template.bind({});
Active.args = {
  label: "Active",
  size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled",
    size: "medium",
    disabled: true
};