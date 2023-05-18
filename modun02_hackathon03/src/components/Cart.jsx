import React from "react";

function Cart({ product, setProduct }) {
  const handleSell = (i) => {
    let newProduct = [...product];
    newProduct[i].qty >= 1 && (newProduct[i].qty -= 1);
    setProduct(newProduct);
  };
  const handleBuy = (i) => {
    let newProduct = [...product];
    newProduct[i].qty += 1;
    setProduct(newProduct);
  };
  const handleDelete = (i) => {
    let newProduct = [...product];
    newProduct[i].qty = 0;
    setProduct(newProduct);
  };
  const handleClear = () => {};
  const handleNow = () => {};
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <table className="nubProduct">
              {product.map(
                (e, i) =>
                  e.qty >= 1 && (
                    <tr key={i}>
                      <td>
                        <img src={e.imageUrl} alt="" />
                      </td>
                      <td>{e.name}</td>
                      <td>
                        <i
                          class="fa-solid fa-chevron-left"
                          onClick={() => handleSell(i)}
                        ></i>
                        <span>{e.qty}</span>
                        <i
                          class="fa-solid fa-chevron-right"
                          onClick={() => handleBuy(i)}
                        ></i>
                      </td>
                      <td>{e.qty * e.price} $</td>
                      <td>
                        <i
                          class="fa-solid fa-trash"
                          style={{ color: "rgb(236, 99, 92)" }}
                          onClick={() => handleDelete(i)}
                        ></i>
                      </td>
                    </tr>
                  )
              )}
            </table>
            <div className="footer_modal">
              <p>
                total <span>tổng tiền</span>
              </p>
              <button className="buyNow" onClick={handleNow}>
                Buy now
              </button>
              <button className="clearCart" onClick={handleClear}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
