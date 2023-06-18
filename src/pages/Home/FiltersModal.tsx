import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Close as CloseIcon } from "../../static";
import FiltersRadio from "./FiltersRadio";
import FiltersCheckbox from "./FiltersCheckbox";
import { toggleFiltersModal } from "src/store/actions";

const productTypes = [
  {
    id: 1,
    name: "pizza",
    nameRu: "пицца",
  },
  {
    id: 2,
    name: "shaurma",
    nameRu: "шаурма",
  },
  {
    id: 3,
    name: "sushi",
    nameRu: "суши",
  },
  {
    id: 4,
    name: "burgers",
    nameRu: "бургеры",
  },
  {
    id: 5,
    name: "soups",
    nameRu: "супы",
  },
  {
    id: 6,
    name: "hot meals",
    nameRu: "горячие блюда",
  },
  {
    id: 7,
    name: "sashlik",
    nameRu: "шашлык",
  },
  {
    id: 8,
    name: "salads",
    nameRu: "салаты",
  },
  {
    id: 6,
    name: "hot meals",
    nameRu: "горячие блюда",
  },
  {
    id: 7,
    name: "sashlik",
    nameRu: "шашлык",
  },
  {
    id: 8,
    name: "salads",
    nameRu: "салаты",
  },
  {
    id: 6,
    name: "hot meals",
    nameRu: "горячие блюда",
  },
  {
    id: 7,
    name: "sashlik",
    nameRu: "шашлык",
  },
  {
    id: 8,
    name: "salads",
    nameRu: "салаты",
  },
];

interface IPaymentMethods {
  cash: boolean;
  online: boolean;
  courier: boolean;
}

interface IState {
  selectedPaymentMethods: IPaymentMethods;
  selectedMenu: string;
}

interface IFormState {
  initialState: IState;
  currentState: IState;
  stateChanged: boolean;
}

export default function FiltersModal() {
  const [formState, setFormState] = useState<IFormState>();
  const dispatch = useDispatch();

  useEffect(() => {
    const newState: IState = {
      selectedPaymentMethods: {
        cash: false,
        online: false,
        courier: false,
      },
      selectedMenu: "all",
    };

    const newFormState: IFormState = {
      initialState: { ...newState },
      currentState: { ...newState },
      stateChanged: false,
    };

    setFormState(newFormState);
  }, []);

  const onChangeHandler = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.name === "menu") {
      setFormState((prevState) => {
        if (prevState) {
          const newState = { ...prevState };
          newState.currentState.selectedMenu = target.value;

          newState.stateChanged =
            newState.currentState.selectedMenu !==
            newState.initialState.selectedMenu;

          return newState;
        }

        return prevState;
      });
    } else if (target.name === "payment-method") {
      setFormState((prevState) => {
        if (prevState) {
          const newState = { ...prevState };

          newState.currentState.selectedPaymentMethods["cash"] = true;

          if (target.value === "cash") {
            newState.currentState.selectedPaymentMethods.cash =
              !newState.currentState.selectedPaymentMethods.cash;
          } else if (target.value === "online") {
            newState.currentState.selectedPaymentMethods.online =
              !newState.currentState.selectedPaymentMethods.online;
          } else if (target.value === "courier") {
            newState.currentState.selectedPaymentMethods.courier =
              !newState.currentState.selectedPaymentMethods.courier;
          }

          newState.stateChanged =
            newState.currentState.selectedMenu !==
            newState.initialState.selectedMenu;

          return newState;
        }

        return prevState;
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <ModalHeader>
          <CloseModalButton onClick={() => dispatch(toggleFiltersModal(false))}>
            <SvgWrapper>
              <CloseIcon />
            </SvgWrapper>
          </CloseModalButton>
        </ModalHeader>
        <Form onChange={onChangeHandler}>
          <Fieldset name='payment-method'>
            <h2 className='fs__title'>Способы оплаты</h2>
            <div className='fs__divider'></div>
            <div className='fs__form-controls'>
              <FiltersCheckbox
                id={"cash"}
                name={"payment-method"}
                value={"cash"}
                isChecked={
                  !!formState?.currentState.selectedPaymentMethods.cash
                }
                label={"Наличными"}
              />
            </div>
          </Fieldset>
          <Fieldset name='menu'>
            <h2 className='fs__title'>В меню</h2>
            <div className='fs__divider'></div>
            <div className='fs__form-controls'>
              <FiltersRadio
                id={"all-deliveries"}
                name={"menu"}
                value={"all"}
                isChecked={formState?.currentState.selectedMenu === "all"}
                label={"Все доставки"}
              />
              {productTypes.map((productType) => (
                <FiltersRadio
                  id={productType.id.toString()}
                  name={"menu"}
                  value={`menu-${productType.id}`}
                  isChecked={
                    formState?.currentState.selectedMenu ===
                    `menu-${productType.id}`
                  }
                  label={productType.nameRu}
                />
              ))}
            </div>
          </Fieldset>
        </Form>
        <ModalFooter>
          <ApplyFiltersButton>Применить</ApplyFiltersButton>
          {formState?.stateChanged && (
            <ResetFiltersButton>
              <SvgWrapper>
                <CloseIcon />
              </SvgWrapper>
            </ResetFiltersButton>
          )}
        </ModalFooter>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;
const Container = styled.div`
  background-color: #fff;
  width: 330px;
  min-height: 200px;
  max-height: 600px;
  border-radius: 10px;
  font-size: 1rem;
  position: relative;
  margin: 25px auto;
  overflow-y: scroll;
`;
const ModalHeader = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 1.25em 1.25em 0;
`;
const Form = styled.form`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1.25em;
`;
const Fieldset = styled.fieldset`
  border: none;
  overflow-y: scroll;

  .fs__title {
    font-size: 1.25em;
    font-weight: 500;
  }

  .fs__divider {
    height: 1px;
    background-color: #ccc;
    width: 100%;
    margin: 0.3rem 0 1.25rem;
  }

  .fs__form-controls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.5rem;
    overflow-y: scroll;
  }
`;
const SvgWrapper = styled.div`
  width: 1.5em;
  height: 1.5em;
`;
const CloseModalButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25em;
  background-color: #f2f2f2;
`;
const FooterButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.05rem;
  min-height: 45px;
  // padding: 0.6em;
  color: #fff;
  border-radius: 4px;
`;
const ApplyFiltersButton = styled(FooterButton)`
  background-color: #2dc36a;
  width: 100%;
`;
const ResetFiltersButton = styled(FooterButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  min-width: 45px;

  path {
    fill: #fff;
  }
`;
