const { reqProduct, reqProducts } = require('../services/services')
const { author_signature, showItem, constraintItems, getCategories } = require('../utils/utils')

const getProducts = async (req, res) => {
  try {
    const { q } = req?.query
    const { results, filters } = await reqProducts(q)

    res.json({
      author_signature,
      categories: getCategories(filters),
      items: constraintItems(results)
    })
  } catch (err) {
    console.log(err)
  }
}

const getProductDetail = async (req, res) => {
  try {
    const { id } = req?.params
    const { product, description, sold_quantity, error } = await reqProduct(id)

    if (error) return res.json({error})

    res.json({
      author_signature,
      item: {
        ...showItem(product),
        sold_quantity,
        description
      }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getProducts,
  getProductDetail
}