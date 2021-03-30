import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store';

import Logo from 'assets/logo.png';

import Avatar from 'assets/avatar.jpg';

import {
  addToCart,
  getProducts,
  getVouchers,
  updateProducts,
  setError,
} from 'store/products/actions';

import Spin from 'components/Spin';
import ProductItem from 'components/Product';
import ShoppingCart from './container/ShoppingCart';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  ItemsContainer,
  CartContainer,
} from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const { products: productError, vouchers: voucherError } = useSelector(
    (state: StoreState) => state.products.error,
  );

  const { products, vouchers } = useSelector(
    (state: StoreState) => state.products,
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getVouchers());
  }, [dispatch]);

  useEffect(() => {
    if (productError || !products) {
      dispatch(getProducts());
    }
    if (voucherError || !vouchers) {
      dispatch(getVouchers());
    }
  }, [dispatch, productError, voucherError, products, vouchers]);

  useEffect(() => {
    if (products) {
      dispatch(setError('products'));
    }
    if (vouchers) {
      dispatch(setError('vouchers'));
    }
  }, [dispatch, products, vouchers]);

  const renderProducts = useCallback(() => {
    if (products && !productError) {
      return products.map((product) => (
        <ProductItem
          name={product.name}
          price={product.price}
          quantity={product.available}
          image={product.image}
          onClick={() => dispatch(addToCart(product))}
          updateProduct={() => dispatch(updateProducts(product.id, 1))}
        />
      ));
    }
    return (
      <div>
        <Spin />
      </div>
    );
  }, [productError, products, dispatch]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="gobarber-logo" />
          <Profile>
            <img src={Avatar} alt="avatar" />

            <div>
              <strong>Pedro Zocatelli</strong>
            </div>
          </Profile>
        </HeaderContent>
      </Header>
      <Content>
        <ItemsContainer>{renderProducts()}</ItemsContainer>
        <CartContainer>
          <ShoppingCart />
        </CartContainer>
      </Content>
    </Container>
  );
};

export default Main;
