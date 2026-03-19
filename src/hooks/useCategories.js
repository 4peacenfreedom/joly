import { useMemo } from 'react'
import { categories } from '../data/categories'
import { products } from '../data/products'

export function useCategories() {
  const categoriesWithCount = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      count: products.filter((p) => p.category === cat.slug).length,
    }))
  }, [])

  return { categories: categoriesWithCount }
}
