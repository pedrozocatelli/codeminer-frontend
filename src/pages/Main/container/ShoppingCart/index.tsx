/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { StoreState } from 'store';
import { calculateShipping } from 'utils/calculateShipping';

import ProductCart from 'components/ProductCart';
import Empty from 'assets/empty.png';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  Title,
  Line,
  CheckoutButton,
  EmptyDiv,
  DiscountContainer,
} from './styles';

const ShoppingCart: React.FC = () => {
  const { cart, vouchers } = useSelector((state: StoreState) => state.products);

  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState('');
  const [voucher, setVoucher] = useState<Record<string, any>>({});
  const [voucherCode, setVoucherCode] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const sum = cart.reduce(
        (n, { price, quantity }) => n + price * quantity,
        0,
      );

      const weight = cart.reduce((n, { quantity }) => n + quantity, 0);

      const hasFreeShipping = voucher && voucher.type === 'shipping';
      setShipping(calculateShipping(weight, sum, hasFreeShipping));
      setSubTotal(sum);
      setDiscount(
        voucher && voucher.type === 'fixed'
          ? 'US$ 100,00'
          : voucher && voucher.type === 'percentual'
          ? '30%'
          : '',
      );
    } else {
      setTotal(0);
      setDiscount('');
      setVoucherCode('');
      setSubTotal(0);
      setShipping(0);
    }
  }, [cart, cart?.length, voucher]);

  useEffect(() => {
    if (subTotal) {
      const hasFixedDiscount = voucher && voucher.type === 'fixed';
      const hasPercentDiscount = voucher && voucher.type === 'percentual';
      let calculateTotal = subTotal + shipping;

      if (hasFixedDiscount) calculateTotal -= voucher.amount;
      if (hasPercentDiscount) calculateTotal *= 1 - voucher.amount / 100;

      setTotal(calculateTotal < 0 ? 0 : calculateTotal);
    }
  }, [subTotal, shipping, voucher]);

  const renderCart = useCallback(() => {
    if (cart && cart.length > 0) {
      return cart.map((item) => (
        <ProductCart
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          max={item.max}
          id={item.id}
        />
      ));
    }
    return (
      <EmptyDiv>
        <img src={Empty} alt="empty" />
      </EmptyDiv>
    );
  }, [cart]);

  const validateCupom = useCallback(() => {
    if (voucherCode && vouchers) {
      const newVoucher =
        vouchers.find((vou) => vou.code === voucherCode) ||
        ({} as Record<string, any>);
      setVoucher(newVoucher);

      if (Object.keys(newVoucher).length === 0) {
        toast.error('Invalid cupom code');
        setVoucherCode('');
      }

      if (
        Object.keys(newVoucher).length > 0 &&
        subTotal < 300.5 &&
        newVoucher.type === 'shipping'
      ) {
        toast.warn(
          'This cupom is valid for purchases above $300,50 (without shipping)',
        );
      }
    }
  }, [subTotal, voucherCode, vouchers]);

  return (
    <Container>
      <Content>
        <Title>
          <h2>Shopping Cart</h2>
          <FaShoppingCart fontSize={22} />
        </Title>
        {renderCart()}
        <DiscountContainer>
          <input
            width="80"
            placeholder="Cupom code"
            disabled={!cart}
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
          />
          <button
            type="button"
            disabled={!cart}
            onClick={() => validateCupom()}
          >
            Apply
          </button>
        </DiscountContainer>
        <Line style={{ marginTop: 10 }}>
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
              ? subTotal > 400 ||
                (voucher && voucher.type === 'shipping' && subTotal > 300.5)
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
          <span>{discount || '-'}</span>
        </Line>
        <Line>
          <strong>Total</strong>
          <strong>
            {total === 0
              ? subTotal > 1
                ? 'FREE'
                : '-'
              : Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(total))}
          </strong>
        </Line>
      </Content>
      <CheckoutButton>Checkout</CheckoutButton>
    </Container>
  );
};

export default ShoppingCart;
