import type { StoryObj } from '@storybook/react';
import DeleteBtn from '../components/DeleteBtn';
import recoilRootStory from "./RecoilRootStory"

const meta = {
  component: DeleteBtn,
  ...recoilRootStory
};

export default meta;
type Story = StoryObj<typeof DeleteBtn>;

export const ToDo: Story = {
  args: {

  },
}