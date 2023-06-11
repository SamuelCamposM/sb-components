import { StoryFn, Meta } from "@storybook/react";
import { MyLabelProps, MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
  },
  tags: ["autodocs"], // esta línea es la que me faltaba y ahora si aparece.
} as Meta<typeof MyLabel>;
const Template: StoryFn<typeof MyLabel> = (args: MyLabelProps) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary", // primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};
export const CurtomFontColor = Template.bind({});
CurtomFontColor.args = {
  size: "h1",
  fontColor: "#7038e0",
};

// Custom Font Color
// fontColor
// size: h1
