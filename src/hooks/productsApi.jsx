import Api from '../api/AxiosInterceptors.jsx'
import { GET_PRODUCTS } from '../utils/api'

export const ProductsApi = {
    getProducts: requestData => {
        const { category_id, product_filter, page,slug} = requestData
        return Api.get(GET_PRODUCTS, {
            params: {
                page: page,
                category_id: category_id

            },
            authorizationHeader: false,
        })
    }
}


