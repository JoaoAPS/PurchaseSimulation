function ProductCard({ title, image, price }) {
  return (
    <article className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <div className="product-footer">
        <span className="product-price">${price}</span>
        <button type="button" className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
