import axios from '@/utils/axios'

/**
 * 获取全部文章列表并分页，要求有置顶
 * 
 * @param {Object} data page 页码，limit 每页数目
 * @param {Function} success 成功回调
 */
export function getList(data, success) {
    axios({
        url: '/blog/article',
        method: 'GET',
        data: data
    }).then(res => {
        success(res.data)
    })
}

/**
 * 获取全部文章，根据时间排序，分页
 * 
 * @param {Object} data page 页码，limit 每页数目
 * @param {Function} success 成功回调
 */
export function getSjz(data, success) {
    axios({
        url: '/blog/article/sjz',
        method: 'GET',
        data: data
    }).then(res => {
        success(res.data)
    })
}

/**
 * 根据标签ID获取标签下文章列表
 * 
 * @param {String} id 标签ID
 * @param {Object} data page 页码，limit 每页数目
 * @param {Function} success 成功回调
 */
export function getByTag(id, data, success) {
    axios({
        url: `/blog/article/tag/${id}`,
        method: 'GET',
        data: data
    }).then(res => {
        success(res.data)
    })
}

/**
 * 根据分类ID获取标签下文章列表
 * 
 * @param {String} id 分类ID
 * @param {Object} data page 页码，limit 每页数目
 * @param {Function} success 成功回调
 */
export function getByCategory(id, data, success) {
    axios({
        url: `/blog/article/category/${id}`,
        method: 'GET',
        data: data
    }).then(res => {
        success(res.data)
    })
}

/**
 * 根据文章ID获取文章
 * 
 * @param {String} id 文章ID
 * @param {Function} success 成功回调
 */
export function getArticle(id, success) {
    axios({
        url: `/blog/article/info/${id}`,
        method: 'GET'
    }).then(res => {
        success(res.data)
    })
}