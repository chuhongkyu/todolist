import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { categoryState, customCategoriesState } from './atoms';
import styled from 'styled-components';

interface IForm {
  customCategory: string;
}

const ToDoBtn = styled.button`
    background-color: ${prop =>prop.theme.bgColor};
    color: ${prop =>prop.theme.textColor};
    box-shadow: ${prop =>prop.theme.inputStyle};
    border-radius: 10px;
    padding: 10px 15px;
    border: none;
    &:hover{
        box-shadow: ${prop =>prop.theme.clickedStyle};
    }
`

const ToDoForm =styled.form`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    div{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input{
          width: 70%;
          border: none;
          box-shadow: ${prop =>prop.theme.inputStyle};
          border-radius: 10px;
          background-color: ${prop =>prop.theme.whiteColor};
          padding: 10px;
          margin-right: 5px;
        }
    }
    span{
        transition: 0.5s;
        color: ${prop =>prop.theme.accentColor};
        width: 100%;
        margin-top: 5px;
        margin-left: 5px;
        text-align: start;
    }
`

function CreateCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState,
  );
  const setCategory = useSetRecoilState(categoryState);

  const handleValid = ({ customCategory }: IForm) => {
    setValue('customCategory', '');
    setCategory(customCategory as any);
    setCustomCategories((oldCategories) => {
      return [...oldCategories, customCategory];
    });
  };

  useEffect(() => {
    localStorage.setItem("CATEGORIES_KEY", JSON.stringify(customCategories));
  }, [customCategories]);

  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <div>
        <input
          {...register('customCategory', {
            required: 'How about Custom?',
            minLength: 1,
            maxLength: 5,
          })}
          placeholder="Make Your Category"
          type="text"
        />
        <ToDoBtn>Select</ToDoBtn>
      </div>  
      <span>{errors.customCategory?.message}</span>
    </ToDoForm>
  );
}

export default CreateCategory;