import React, { useState, useCallback } from 'react';

import { Container, ImageContainer, ItemContent, BuyButton } from './styles';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  onClick: () => void;
  updateProduct: () => void;
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  price,
  quantity,
  onClick,
  updateProduct,
}) => {
  const [added, setAdded] = useState(false);

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
        {added && quantity > 0 ? 'Added' : 'Add to cart'}
      </BuyButton>
    </Container>
  );
};

export default Product;
