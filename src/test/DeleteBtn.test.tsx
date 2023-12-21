import { RecoilRoot } from "recoil";
import DeleteBtn from "../components/DeleteBtn";
import { render, screen } from "@testing-library/react";

describe('check delete', ()=>{
    it('changes input', () => {
        render(
            <RecoilRoot>
                <DeleteBtn id={'001'} />
            </RecoilRoot>
        );
        const deleteBtnElement = screen.getByText('Delete');
        expect(deleteBtnElement).toBeInTheDocument();
    });
})