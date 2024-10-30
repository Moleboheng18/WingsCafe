import React, { useState } from 'react';

function ProductManagement({ setCurrentUser, productList, onAddProduct, onEditProduct, onDeleteProduct }) {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdateProduct = () => {
    const newProduct = { productName, category, price, quantity };

    if (isEditing) {
      onEditProduct(editIndex, newProduct);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      onAddProduct(newProduct);
    }

    setProductName('');
    setCategory('');
    setPrice('');
    setQuantity('');
  };

  const handleEditProduct = (index) => {
    const product = productList[index];
    setProductName(product.productName);
    setCategory(product.category);
    setPrice(product.price);
    setQuantity(product.quantity);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="product-management">
      <header>
        <h2>Product Management</h2>
        <button id="signout" onClick={() => setCurrentUser(null)}>Sign Out</button>
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="button" onClick={handleAddOrUpdateProduct}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEditProduct(index)}>Edit</button>
                <button onClick={() => onDeleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
