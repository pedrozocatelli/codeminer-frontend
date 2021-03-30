/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { StoreState } from 'store';
import { Cart } from 'store/products/types';
import { calculateShipping } from 'utils/calculateShipping';

import ProductCart from 'components/ProductCart';
import { Container, Content, Title, Line, CheckoutButton } from './styles';

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state: StoreState) => state.products);

  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const cartItems = cart.map((ca: Cart) => {
        return {
          price: ca.price,
          quantity: ca.quantity,
        };
      });

      const sum = cartItems.reduce(
        (n, { price, quantity }) => n + price * quantity,
        0,
      );
      const weight = cartItems.reduce((n, { quantity }) => n + quantity, 0);

      setShipping(calculateShipping(weight, sum, false));

      setSubTotal(sum);
    }
  }, [cart]);

  useEffect(() => {
    if (subTotal) {
      setTotal(subTotal + shipping);
    }
  }, [subTotal, shipping]);

  return (
    <Container>
      <Content>
        <Title>
          <h2>Shopping Cart</h2>
          <FaShoppingCart fontSize={22} />
        </Title>
        <ProductCart
          image="https://www.jasminealimentos.com/wp-content/uploads/2017/11/banana-860x485.jpg"
          name="Produto"
          price={50}
          quantity={10}
        />
        <Line>
          <span>SubTotal</span>
          <span>
            {subTotal
              ? Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(subTotal))
              : '-'}
          </span>
        </Line>
        <Line>
          <span>Shipping</span>
          <span>
            {shipping === 0
              ? subTotal > 400
                ? 'FREE'
                : '-'
              : Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(shipping))}
          </span>
        </Line>
        <Line>
          <span>Discount</span>
          <span>55</span>
        </Line>
        <Line>
          <strong>Total</strong>
          <strong>
            {total
              ? Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(total))
              : '-'}
          </strong>
        </Line>
      </Content>
      <CheckoutButton>Checkout</CheckoutButton>
    </Container>
  );
};

export default ShoppingCart;
