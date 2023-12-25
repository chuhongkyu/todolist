import type { StoryObj } from '@storybook/react';
import List from '../components/List';
import recoilRootStory from "./RecoilRootStory"
import { Categories } from '../utils/atom';

const meta = {
  component: List,
  ...recoilRootStory
};

export default meta;
type Story = StoryObj<typeof List>;

export const ToDo: Story = {
  args: {
    id: "001",
    text: "할일",
    check: false,
    category:  Categories.TO_DO
  },
};

export const ACTIVITY: Story = {
  args: {
    id: "002",
    text: "필라테스",
    check: false,
    category:  Categories.ACTIVITY
  },
};