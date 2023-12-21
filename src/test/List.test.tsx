import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import List from '../components/List';
import { Categories } from '../utils/atom';
import { RecoilRoot } from 'recoil';

describe('List show', ()=>{
    it('List', ()=> {
        const mocks = [
            {
                id: "001",
                text: "할일",
                check: false,
                category:  Categories.TO_DO
            }
        ]
        render(
            <RecoilRoot>
                {mocks.map((mock)=>{
                    return(
                        <List key={mock.id + "KEY"} id={mock.id} text={mock.text} check={mock.check} category={mock.category}/>
                    )
                })
                }
            </RecoilRoot>
        );

        const checkbox = screen.getByTestId('check-001');
        fireEvent.change(checkbox, { target: { checked: true } });
    })
})