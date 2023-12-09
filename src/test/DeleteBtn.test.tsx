import { RecoilRoot } from "recoil";
import DeleteBtn from "../components/DeleteBtn";
import { render } from "@testing-library/react";

describe('check delete', ()=>{
    it('changes input', () => {
        const { container } = render(
            <RecoilRoot>
                <DeleteBtn id={'001'} />
            </RecoilRoot>
        );
        expect(container).toHaveTextContent('Delete');
    });
})