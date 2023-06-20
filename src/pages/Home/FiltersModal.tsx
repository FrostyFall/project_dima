import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Close as CloseIcon } from "../../static";
import FiltersRadio from "./FiltersRadio";
import FiltersCheckbox from "./FiltersCheckbox";
import {
  resetSelectedProductTypeIds,
  setFormSelectedPTypeId,
  setFullFormPaymentMethods,
  setFullSelectedPaymentMethods,
  setSelectedProductTypeId,
  toggleFiltersModal,
} from "src/store/actions";
import { IStore } from "src/store/interfaces/store.interface";

export default function FiltersModal() {
  const productTypes = useSelector((store: IStore) => store.productTypes.data);
  const paymentMethods = useSelector(
    (store: IStore) => store.paymentMethods.data
  );
  const selectedFormPTypeId = useSelector(
    (store: IStore) => store.filters.formSelectedPTypeId
  );
  const selectedProductTypeId = useSelector(
    (store: IStore) => store.filters.selectedProductTypeId
  );
  const formPaymentMethods = useSelector(
    (store: IStore) => store.filters.formPaymentMethods
  );
  const selectedPaymentMethods = useSelector(
    (store: IStore) => store.filters.selectedPaymentMethods
  );
  const dispatch = useDispatch();

  const onApplyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedProductTypeId !== selectedFormPTypeId)
      dispatch(setSelectedProductTypeId(selectedFormPTypeId));

    dispatch(setFullSelectedPaymentMethods(formPaymentMethods));

    dispatch(toggleFiltersModal(false));
  };

  const onResetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(resetSelectedProductTypeIds());
    dispatch(toggleFiltersModal(false));
  };

  useEffect(() => {
    dispatch(setFormSelectedPTypeId(selectedProductTypeId));
    dispatch(setFullFormPaymentMethods(selectedPaymentMethods));
  }, [dispatch, selectedProductTypeId, selectedPaymentMethods]);

  return (
    <Wrapper onClick={() => dispatch(toggleFiltersModal(false))}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseModalButton onClick={() => dispatch(toggleFiltersModal(false))}>
            <SvgWrapper>
              <CloseIcon />
            </SvgWrapper>
          </CloseModalButton>
        </ModalHeader>
        <Form>
          <Fieldset name='payment-method'>
            <h2 className='fs__title'>Способы оплаты</h2>
            <div className='fs__divider'></div>
            <div className='fs__form-controls'>
              {paymentMethods.map((method) => (
                <FiltersCheckbox
                  key={method.id}
                  id={method.id}
                  name={"payment-method"}
                  value={method.id}
                  label={method.nameRu}
                />
              ))}
            </div>
          </Fieldset>
          <Fieldset name='menu'>
            <h2 className='fs__title'>В меню</h2>
            <div className='fs__divider'></div>
            <div className='fs__form-controls'>
              <FiltersRadio
                id={-1}
                name={"menu"}
                value={-1}
                label={"Все доставки"}
              />
              {productTypes.map((productType) => (
                <FiltersRadio
                  key={productType.id}
                  id={productType.id}
                  name={"menu"}
                  value={productType.id}
                  label={productType.nameRu}
                />
              ))}
            </div>
          </Fieldset>
        </Form>
        <ModalFooter>
          <ApplyFiltersButton type='button' onClick={onApplyHandler}>
            Применить
          </ApplyFiltersButton>
          {(-1 !== selectedFormPTypeId ||
            selectedPaymentMethods.length !== formPaymentMethods.length) && (
            <ResetFiltersButton onClick={onResetHandler}>
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
  width: 300px;
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
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 1.25em;
`;
const Fieldset = styled.fieldset`
  border: none;

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
  bottom: -1px;
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
