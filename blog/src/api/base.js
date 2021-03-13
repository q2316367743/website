/**
 * 博客全局信息获取，文章排行，分类，归档。。。
 */
import axios from '@/utils/axios'

/**
 * 获取全部标签
 * 
 * @param {Function} success 成功回调
 */
export function getTags(success) {
    axios({
        url: '/blog/base/tag',
        method: 'GET'
    }).then(res => {
        success(res.data)
    })
}

/**
 * 获取全部分类
 * 
 * @param {Function} success 成功回调
 */
export function getCategory(success) {
    axios({
        url: '/blog/category',
        method: 'GET'
    }).then(res => {
        success(res.data)
    })
}