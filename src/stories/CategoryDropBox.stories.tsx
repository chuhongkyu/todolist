import type { StoryObj } from '@storybook/react';
import CategoryDropBox from '../components/CategoryDropBox';
import recoilRootStory from "./RecoilRootStory"

const meta = {
  component: CategoryDropBox,
  ...recoilRootStory
};

export default meta;
type Story = StoryObj<typeof CategoryDropBox>;

export const FirstStory: Story = {
  args: {
    
  },
};