import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from 'assets/logo.png';
import Avatar from 'assets/avatar.jpg';
import { getProducts } from 'store/products/actions';
import { Container, Header, HeaderContent, Profile, Content } from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
      <Content>Olá</Content>
    </Container>
  );
};

export default Main;
