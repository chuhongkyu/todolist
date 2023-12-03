import { render } from '@testing-library/react';
import List from '../components/List';
import { Categories } from '../utils/atom';

describe('ListContainer show', ()=>{
    it('ListContainer', ()=> {
        const mocks = [
            {
                id: "001",
                text: "할일",
                category:  Categories.TO_DO
            }
        ]
        const { container } = render(
            <>
                {mocks.map((mock)=>{
                    return(
                        <List key={mock.id + "KEY"} id={mock.id} text={mock.text} category={mock.category}/>
                    )
                })
                }
            </>
        );

        expect(container).toHaveTextContent("TO_DO")
    })
})