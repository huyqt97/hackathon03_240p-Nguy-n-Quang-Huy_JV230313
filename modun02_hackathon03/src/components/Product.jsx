import React, { useState } from "react";

function Product({ product, setProduct }) {
  const handleOnmouseover = (i) => {
    let newProduct = [...product];
    newProduct[i].check = true;
    setProduct(newProduct);
    console.log(product);
  };
  const handleOnmouseout = (i) => {
    let newProduct = [...product];
    newProduct[i].check = false;
    setProduct(newProduct);
  };
  const handleSell = (i) => {
    let newProduct = [...product];
    {
      newProduct[i].qty > 0 && (newProduct[i].qty -= 1);
    }
    setProduct(newProduct);
  };
  const handleBuy = (i) => {
    let newProduct = [...product];
    newProduct[i].qty += 1;
    setProduct(newProduct);
  };
  return (
    <>
      {product.map((e, i) =>
        e.check ? (
          <div
            className="hide color"
            onMouseOver={() => handleOnmouseover(i)}
            onMouseOut={() => handleOnmouseout(i)}
          >
            <img src={e.imageUrl} alt="" />
            <p>{e.name}</p>
            <p>{e.price}</p>
            <p>{e.heading}</p>
            <p>{e.des}</p>
            <div className="footer">
              <button className="sell" onClick={() => handleSell(i)}>
                sell
              </button>
              <span>{e.qty}</span>
              <button className="buy" onClick={() => handleBuy(i)}>
                buy
              </button>
            </div>
          </div>
        ) : (
          <div
            className="show1 color"
            onMouseOver={() => handleOnmouseover(i)}
            onMouseOut={() => handleOnmouseout(i)}
          >
            <img src={e.imageUrl} alt="" />
            <p>{e.name}</p>
          </div>
        )
      )}
    </>
  );
}

export default Product;
