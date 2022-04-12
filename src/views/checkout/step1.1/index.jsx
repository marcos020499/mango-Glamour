import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import { BasketItem } from 'components/basket';
import { CHECKOUT_STEP_2 } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import { useDocumentTitle, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';
import StripeCheckout from 'react-stripe-checkout';
import {firebase} from '../../../services/firebase'
import { Field, useFormikContext } from 'formik';

const OrderSummary = ({ basket, subtotal }) => {
  useDocumentTitle('Check Out Step 1 | Mango Glamour');
  useScrollTop();
  const { values, setValues } = useFormikContext();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickPrevious = () => history.push('/');
  const onClickNext = () => history.push(CHECKOUT_STEP_2);
  const priceForStripe = subtotal * 100;
  const publishableKey = "pk_test_51JNOllHIeXAWLdU8EZdfkqQZDYWox2aFOYkQalggWSUwCHjFuZhr4h2vzkXvJwoWzJwaJxX4ZVYVdD8FQLE0lfvM00d18P9uXb";

  // Create a new checkout session in the subollection inside this users document
  // Wait for the CheckoutSession to get attached by the extension
  const onToken = ()=>{
  firebase.checkoutSessionRef()
  }
  
  return (
    <div className={`checkout-fieldset-collapse ${values.type === 'credit' ? 'is-selected-payment' : ''}`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === 'credit'}
            id="modePayPal"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: 'credit' });
              }
            }}
            type="radio"
          />
          <label
            className="d-flex w-100"
            htmlFor="modePayPal"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Tarjeta de credito/debito</h4>
              <StripeCheckout
           label='Paga ahora'
           name='Mango Glamour'
           billingAddress
           shippingAddress
           currency="MX"
           image="https://res.cloudinary.com/marcos020499/image/upload/v1628720611/MANGO_GLAMOUR_sdfave.png"
           description={`Your total is $${subtotal}`}
           amount={priceForStripe}
           panelLabel='Pagar ahora'
           token={onToken}
           stripeKey={publishableKey}
        />
            </div>
            <div className="payment-img payment-img-paypal" />
          </label>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  basket: PropType.arrayOf(PropType.object).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(OrderSummary);
