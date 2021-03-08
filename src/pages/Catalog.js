import React from "react"
import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"

function Catalog() {
  const { data, isLoading, error } = useFetch("/products?limit=5")

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Error fetching data!</h2>

  return (
    <section className="product-list">
      {data.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default Catalog
