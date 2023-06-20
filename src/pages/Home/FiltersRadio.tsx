import { IStore } from "src/store/interfaces/store.interface";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFormSelectedPTypeId } from "src/store/actions";

interface Props {
  id: number;
  value: number;
  name: string;
  label: string;
}

export default function FiltersRadio({ id, name, value, label }: Props) {
  const formSelectedPTypeId = useSelector(
    (store: IStore) => store.filters.formSelectedPTypeId
  );
  const dispatch = useDispatch();

  return (
    <Label className='label' htmlFor={`${id.toString()}-radio`}>
      <Input
        type='radio'
        id={`${id.toString()}-radio`}
        name={name}
        value={value}
        checked={formSelectedPTypeId === id}
        onChange={() => dispatch(setFormSelectedPTypeId(id))}
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
  border-radius: 50%;
  position: relative;
  margin-right: 0.5rem;
  transition: border-color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 0.55em;
    height: 0.55em;
    border-radius: 50%;
    transition: 0.12s transform ease-in-out;
    background-color: #fff;
  }
  &:checked {
    background-color: #08f;
    border-color: #08f;
  }
  &:checked::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
