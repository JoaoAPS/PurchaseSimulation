import { useParams, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import AddToCartButton from "../components/AddToCartButton"
import LoadingIcon from "../components/LoadingIcon"

function ProductPage() {
  const { id } = useParams()
  const { data: product, isLoading, error } = useFetch(`products/${id}`)

  if (isLoading) return <LoadingIcon />
  if (error) return <h2>Error fetching product data!</h2>

  return (
    <div className="product-page">
      <Link to="/products" className="go-back-link">
        &#8592; Back to catalog
      </Link>

      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p className="product-description">{product.description}</p>

      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <AddToCartButton id={parseInt(id)} product={product} />
      </div>
    </div>
  )
}

export default ProductPage
