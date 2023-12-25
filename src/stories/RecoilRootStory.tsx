import { Preview } from "@storybook/react";
import { RecoilRoot } from "recoil";
import '../index.css'

const recoilRootStory: Preview  = {
    decorators: [
        (Story) => (
            <RecoilRoot>
                <Story />
            </RecoilRoot>
        ),
    ],
}

export default recoilRootStory;