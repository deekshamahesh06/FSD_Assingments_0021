function Home() {
  return (
    <div className="home">

      <div className="product-slider">

        <button className="arrow left">
          ‹
        </button>

        <div className="product-card">

          <div className="product-image">
            Product Image
          </div>

          <div className="price">
            ₹
          </div>

          <div className="stock">
            In Stock
          </div>

          <button className="cart-button">
            Add to cart
          </button>

        </div>

        <button className="arrow right">
          ›
        </button>

      </div>

    </div>
  );
}

export default Home;