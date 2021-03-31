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

  const { products } = useSelector((state: StoreState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getVouchers());
  }, [dispatch]);

  const renderProducts = useCallback(() => {
    if (products) {
      return products.map((product) => (
        <ProductItem
          id={product.id}
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
  }, [products, dispatch]);

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
