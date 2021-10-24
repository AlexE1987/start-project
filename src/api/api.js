export const cart = {
  count: 0,
  amount: 0,
};

export const updateCart = async (cost) => {
  cart.count += 1;
  cart.amount = +cart.amount + cost;
  const response = await fetch('http://localhost:3000/cart', {
    method: 'PUT',
    body: JSON.stringify(cart),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateProduct = async (product, setProduct = null) => {
  product.inStock -= 1;
  if (product.inStock < 0) return;
  const response = await fetch(`http://localhost:3000/products/${product.id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data);

  if (setProduct) {
    setProduct(response);
    updateCart(response.cost);
  } else {
    updateCart(response.cost);
  }
};

export const updateEditProduct = async (product, editedProduct, setProduct) => {
  console.log('prod', product);
  console.log('editProd', editedProduct);

  const data = {
    a: 0,
    b: 0,
  };
  const response = await fetch(`http://localhost:3000/products/${product.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
