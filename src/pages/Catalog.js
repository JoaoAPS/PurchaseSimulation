import React from "react"
import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"

function Catalog() {
  const { data: products, isLoading, error } = useFetch("/products?limit=3")

  if (isLoading) return <h2>Loading...</h2>
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
