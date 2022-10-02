const author_signature = {
  name: 'Edwin',
  last_name: 'Jorge'
}

const showItem = ({
  id,
  title,
  condition,
  shipping,
  thumbnail: picture,
  currency_id: currency
}) => ({
  id,
  title,
  price: {
    currency,
    amount,
    decimals
  },
  picture,
  condition,
  free_shipping: shipping?.free_shipping
})

const constraintItems = (items = []) => {
  return items?.slice(0, 4)?.map(showItem)
}

const getCategories = (filters = []) => {
  const categories = filters?.find(({ id }) => id === "category")?.values[0]?.path_from_root
  const mapped_categories = categories.map(({ name }) => name)

  if (categories) return mapped_categories
  return []
}

module.exports = {
  author_signature,
  showItem,
  constraintItems,
  getCategories
}
