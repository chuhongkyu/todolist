import { RecoilRoot } from "recoil";
import { Preview } from '@storybook/react';
import '../../index.css';


const preview: Preview = {
  decorators: [
    (Story) => (
		<RecoilRoot>
			<Story />
		</RecoilRoot>
	),
  ],
};

export default preview;