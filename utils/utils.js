const author = {
  name: 'Edwin',
  lastname: 'Jorge'
}

const showItem = ({
  id,
  title,
  condition,
  shipping,
  thumbnail: picture,
  price,
  currency_id: currency
}) => ({
  id,
  title,
  price: {
    currency,
    amount: Math.trunc(price),
    decimals: Number(num?.toString().split('.')[1])
  },
  picture,
  condition,
  free_shipping: shipping?.free_shipping
})

const constraintItems = (items = []) => {
  return items?.slice(0, 4)?.map(showItem)
}

const getCategories = (filters = []) => {
  const categories = filters?.find(({ id }) => id === 'category')?.values[0]?.path_from_root

  if (categories) return categories.map(({ name }) => name)
  return []
}

module.exports = {
  author,
  showItem,
  constraintItems,
  getCategories
}
