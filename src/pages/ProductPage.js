import { useParams, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function ProductPage(props) {
  const { id } = useParams()
  const { data: product, isLoading, error } = useFetch(`products/${id}`)

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Error fetch product data!</h2>

  return (
    <div className="product-page">
      <Link to="/products" className="go-back-link">
        &#8592; Back to catalog
      </Link>

      <h2>{product.title}</h2>
      <img src={product.image} alt="Image missing" />
      <p className="product-description">{product.description}</p>

      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPage
