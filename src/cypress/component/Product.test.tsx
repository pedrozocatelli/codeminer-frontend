import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Product from 'components/Product';

describe('Product', () => {
  it('renders', () => {
    mount(
      <Product
        id={10}
        image="image"
        price={66}
        quantity={15}
        name="Produto"
        onClick={() => {}}
        updateProduct={() => {}}
      />,
    );
    cy.contains('Produto').should('be.visible');
  });
});
