import React from "react"
import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"
import LoadingIcon from "../components/LoadingIcon"

function Catalog() {
  const { data: products, isLoading, error } = useFetch("/products?limit=15")

  if (isLoading) return <LoadingIcon />
  if (error) return <h2>Error fetching data!</h2>

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default Catalog
