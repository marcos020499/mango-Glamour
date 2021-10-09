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

const OrderSummary = ({ basket, subtotal }) => {
  useDocumentTitle('Check Out Step 1 | Mango Glamour');
  useScrollTop();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickPrevious = () => history.push('/');
  const onClickNext = () => history.push(CHECKOUT_STEP_2);
  const priceForStripe = subtotal * 100;
  const publishableKey = "pk_live_51JNOllHIeXAWLdU8gva4bRhxOcGKmbtJlk9MrvtbSu1MIkOnNhKpymESaijN7925BVd5Kq5FffkvMY6j8lkew4TT00K9OunEpE";

  // Create a new checkout session in the subollection inside this users document
  // Wait for the CheckoutSession to get attached by the extension
  const onToken = ()=>{
  firebase.checkoutSessionRef()
  }
  
  return (
    <div className="checkout">
      <StepTracker current={1} />
      <div className="checkout-step-1">
        <h3 className="text-center">Resumen del pedido</h3>
        <span className="d-block text-center">Revisar productos en tu canasta</span>
        <br />
        <div className="checkout-items">
          {basket.map((product) => (
            <BasketItem
              basket={basket}
              dispatch={dispatch}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <br />
        <div className="basket-total text-right">
          <p className="basket-total-title">Subtotal:</p>
          <h2 className="basket-total-amount">{displayMoney(subtotal)}</h2>
        </div>
        <br />
        <div className="checkout-shipping-action">
          <button
            className="button button-muted"
            onClick={onClickPrevious}
            type="button"
          >
            <ShopOutlined />
            &nbsp;
            Continuar comprando
          </button>
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
            &nbsp;
            <ArrowRightOutlined />
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
