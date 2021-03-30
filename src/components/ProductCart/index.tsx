import React from 'react';

import {
  Container,
  Content,
  ImageContainer,
  ItemContent,
  InputNumber,
} from './styles';

interface ProductCartProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductCart: React.FC<ProductCartProps> = ({
  image,
  name,
  price,
  quantity,
}) => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
        <ItemContent>
          <strong>{name}</strong>
          <span>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(quantity * price))}
          </span>
        </ItemContent>
        <InputNumber />
      </Content>
    </Container>
  );
};

export default ProductCart;
