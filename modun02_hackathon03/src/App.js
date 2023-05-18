import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [product, setProduct] = useState([
    {
      name: "Airpods Pro",
      price: 24900,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      qty: 0,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
      check: false,
    },
    {
      name: "Apple Watch",
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 0,
      heading: "You’ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
      check: false,
    },
    {
      name: "Macbook Pro",
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 0,
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
      check: false,
    },
    {
      name: "iPhone 11 pro",
      price: 106600,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 0,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
      check: false,
    },
    {
      name: "iPad Pro",
      price: 71900,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 0,
      heading: "Your next computer is not a computer",
      des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
      check: false,
    },
  ]);
  const [sumProduct, setSumProduct] = useState(0); //tính tổng tất cả sản phẩm nhưng chưa làm :)) thiếu time quá zzzz!
  return (
    <>
      <div className="App">
        <button
          type="button"
          class="btn_cart"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>

        <Product product={product} setProduct={setProduct}></Product>
      </div>
      <Cart product={product} setProduct={setProduct}></Cart>
    </>
  );
}

export default App;
