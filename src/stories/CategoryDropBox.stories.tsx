import type { Meta, StoryObj } from '@storybook/react';
import CategoryDropBox from '../components/CategoryDropBox';


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CategoryDropBox> = {
  component: CategoryDropBox,
};

export default meta;
type Story = StoryObj<typeof CategoryDropBox>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};