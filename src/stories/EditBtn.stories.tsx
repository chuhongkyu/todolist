import type { StoryObj } from '@storybook/react';
import EditBtn from '../components/EditBtn';
import recoilRootStory from "./RecoilRootStory"

const meta = {
  component: EditBtn,
  ...recoilRootStory
};

export default meta;
type Story = StoryObj<typeof EditBtn>;

export const ToDo: Story = {
  args: {

  },
}