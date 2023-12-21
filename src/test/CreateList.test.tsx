import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CreateList from "../components/CreateList";
import { RecoilRoot } from "recoil";

describe('change Input', ()=> {
    it('changes input', () => {
        render(
            <RecoilRoot>
                <CreateList />
            </RecoilRoot>
        );
        const input = screen.getByPlaceholderText('할일 목록을 작성해주세요.');
        fireEvent.change(input, {
          target: {
            value: '패스트 캠퍼스 강의 만들기'
          }
        });
        expect(input).toHaveAttribute('value', '패스트 캠퍼스 강의 만들기');
    });

    it('calls submit clears input', async() => {
      render(
        <RecoilRoot>
          <CreateList />
        </RecoilRoot>
      );
      const input = screen.getByPlaceholderText('할일 목록을 작성해주세요.');
      const button = screen.getByText('등록');

      fireEvent.change(input, {
        target: {
          value: 'TDD 연습하기'
        }
      });
   
      expect(input).toHaveAttribute('value', 'TDD 연습하기');

      fireEvent.click(button);
      
      await waitFor(() => {
        expect(input).toHaveAttribute('value', '');
      });
    });
})