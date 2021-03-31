import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import {
  removeFromCart,
  updateProducts,
  updateCart,
} from 'store/products/actions';

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
  max: number;
  id: number;
}

const ProductCart: React.FC<ProductCartProps> = ({
  image,
  name,
  price,
  quantity,
  max,
  id,
}) => {
  const dispatch = useDispatch();

  const handleChangeCart = useCallback(
    (e) => {
      if (e > max) {
        return;
      }
      dispatch(updateProducts(id, e > quantity ? 1 : -1));
      dispatch(updateCart(id, e > quantity ? -1 : 1));
    },
    [dispatch, id, max, quantity],
  );

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={image} alt={name} />
          <FaPlus onClick={() => dispatch(removeFromCart(id))} />
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
        <InputNumber
          min="1"
          max={max}
          value={quantity}
          type="number"
          onChange={(e) => handleChangeCart(e.target.value)}
        />
      </Content>
    </Container>
  );
};

export default ProductCart;
