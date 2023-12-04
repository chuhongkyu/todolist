import { render } from '@testing-library/react';
import List from '../components/List';
import { Categories } from '../utils/atom';

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
        const { container } = render(
            <>
                {mocks.map((mock)=>{
                    return(
                        <List key={mock.id + "KEY"} id={mock.id} text={mock.text} check={mock.check} category={mock.category}/>
                    )
                })
                }
            </>
        );
                
    })
})