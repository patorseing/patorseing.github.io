import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { BubbleProfile } from "./bubbleProfile";

//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Bubble Profile Image",
  component: BubbleProfile,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BubbleProfile>;

//๐ We create a โtemplateโ of how args map to rendering
const BubbleProfileTemp: ComponentStory<typeof BubbleProfile> = () => (
  <BubbleProfile />
);

export const BubbleProfileStory = BubbleProfileTemp.bind({});

BubbleProfileStory.args = {};

BubbleProfileStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const logoButton = await canvas.getByRole("button", { name: /<NT\/>/i });
  await userEvent.click(logoButton);
};
