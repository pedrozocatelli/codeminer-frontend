import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from 'store';
import { Container, ImageContainer, ItemContent, BuyButton } from './styles';

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onClick: () => void;
  updateProduct: () => void;
}

const Product: React.FC<ProductProps> = ({
  id,
  image,
  name,
  price,
  quantity,
  onClick,
  updateProduct,
}) => {
  const { cart } = useSelector((state: StoreState) => state.products);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (cart) {
      setAdded(!!cart.find((item) => item.id === id));
    } else {
      setAdded(false);
    }
  }, [cart, id]);

  const handleClick = useCallback(() => {
    if (!added) {
      setAdded(true);
      onClick();
      updateProduct();
    }
  }, [added, onClick, updateProduct]);

  return (
    <Container>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <ItemContent>
        <strong>{name}</strong>
        <div>
          <span>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'USD',
            }).format(Number(price))}
          </span>
          <span>{quantity} left</span>
        </div>
      </ItemContent>
      <BuyButton type="button" added={added} onClick={handleClick}>
        {added ? 'Added' : 'Add to cart'}
      </BuyButton>
    </Container>
  );
};

export default Product;
