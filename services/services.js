const axios = require('axios').default

const MELI_API = 'https://api.mercadolibre.com'

const reqProducts = async (query) => {
  const response = await axios.get(`${MELI_API}/sites/MLA/search?q=${query}`).then(res => res.data)
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
  } catch ({message}) {
    console.error(message)
  }
}

const reqDetail = async (id) => {
  const response = await axios.get(`${MELI_API}/items/${id}`).then(res => res.data)
  return response
}

const reqDescription = async (id) => {
  const response = await axios
    .get(`${MELI_API}/items/${id}/description`)
    .then((res) => res.data);
  return response;
};

module.exports = reqProducts
module.exports = reqProduct
module.exports = reqDetail
module.exports = reqDescription