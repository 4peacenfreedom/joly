import { useState, useMemo } from 'react'
import { products as allProducts } from '../data/products'

export function useProducts() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    let result = allProducts

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.ingredients.some((i) => i.toLowerCase().includes(q))
      )
    }

    return result
  }, [search, activeCategory])

  const counts = useMemo(() => {
    return allProducts.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {})
  }, [])

  return {
    products: filtered,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    counts,
    total: allProducts.length,
  }
}
