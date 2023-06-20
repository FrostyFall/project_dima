import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setFormPaymentMethods } from "src/store/actions";
import { IStore } from "src/store/interfaces/store.interface";

interface Props {
  id: number;
  value: number;
  name: string;
  label: string;
}

export default function FiltersCheckbox({ id, name, value, label }: Props) {
  const formPaymentMethods = useSelector(
    (store: IStore) => store.filters.formPaymentMethods
  );
  const dispatch = useDispatch();

  return (
    <Label className='label' htmlFor={`${id.toString()}-check`}>
      <Input
        type='checkbox'
        id={`${id.toString()}-check`}
        name={name}
        value={value}
        checked={formPaymentMethods.includes(id)}
        onChange={() => dispatch(setFormPaymentMethods(id))}
      />
      <span className='label-text'>{label}</span>
    </Label>
  );
}

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;

  .label-text::first-letter {
    text-transform: uppercase;
  }
`;
const Input = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: #ccc;
  min-width: 1.3em;
  min-height: 1.3em;
  border: 0.075em solid #ccc;
  border-radius: 3px;
  position: relative;
  margin-right: 0.5rem;
  transition: border-color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 0.12s transform ease-in-out;
    background-color: #fff;
    transform: translate(-50%, -50%) scale(0);
  }
  &:checked {
    background-color: #08f;
    border-color: #08f;
  }
  &:checked::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
