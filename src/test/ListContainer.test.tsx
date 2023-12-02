import { render } from '@testing-library/react';
import ListContainer from "../components/ListContainer";
import { RecoilRoot } from "recoil";

describe('ListContainer show', ()=>{
    it('ListContainer', ()=> {
        const { container } = render(
                <RecoilRoot>
                    <ListContainer/>
                </RecoilRoot>
            );
        expect(container).toHaveTextContent("할일 리스트")
    })
})