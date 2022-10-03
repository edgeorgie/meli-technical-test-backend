const { AxiosInstance, MELI_API } = require('../utils/AxiosInstance')

const reqProducts = async (query) => {
  const response = await AxiosInstance.get(
    `${MELI_API}/sites/MLA/search?q=${query}`, query)
  return response
}

const reqDetail = async (id) => {
  const response = await AxiosInstance.get(`${MELI_API}/items/${id}`, id)
    
  return response
}

const reqDescription = async (id) => {
  const response = await AxiosInstance.get(
    `${MELI_API}/items/${id}/description`, id)
    
  return response
}

const reqProduct = async (id) => {
  try {
    const [product, description] = await Promise.all([
      reqDetail(id),
      reqDescription(id)
    ])

    if (product?.error || description?.error) {
      return {
        error: `¡Oups!, ese producto no existe o el id ingresado es inválido por favor intenta con otro id :)`
      }
    }

    return {
      product,
      sold_quantity: product?.sold_quantity,
      description: description?.plain_text
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  reqProducts,
  reqProduct,
  reqDetail,
  reqDescription,
}