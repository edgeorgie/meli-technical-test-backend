const author_signature = {
  name: 'Edwin',
  last_name: 'Jorge'
}

const showItem = ({
  id,
  title,
  condition,
  shipping,
  thumbnail,
  price,
  currency_id
}) => ({
  id,
  title,
  price: { price, currency_id },
  thumbnail,
  condition,
  free_shipping: shipping?.free_shipping
});

const constraintItems = (items = []) => {
  return items?.slice(0, 4)?.map(showItem)
}

const getCategories = (filters = []) => {
  const categories = filters?.find(({ id }) => id === 'category')?.values[0]?.path_from_root

  if (categories) return categories.map(({ name }) => name)
  return []
}

module.exports = {
  author_signature,
  showItem,
  constraintItems,
  getCategories
}
