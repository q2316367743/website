import axios from '@/utils/axios'

/**
 * 根据文章ID获取评论
 * 
 * @param {String} id 文章ID
 * @param {Function} success 成功回调
 */
export function getComment(id, success) {
    axios({
        url: `/blog/comment/${id}`,
        method: 'GET'
    }).then(res => {
        success(res.data)
    })
}

/**
 * 新增评论
 * 
 * @param {Object} data
 * 
 * @param {String} brower 浏览器版本
 * @param {String} content 评论内容
 * @param {String} email 邮箱
 * @param {String} nickname 昵称
 * @param {String} system 系统版本
 * @param {String} website 个人网站
 * 
 * @param {Function} success 成功回调
 */
export function addComment(data, success) {
    axios({
        url: '/blog/comment',
        method: 'POST',
        data: data
    }).then(res => {
        success(res.data)
    })
}

/**
 * 回复评论
 * 
 * @param {Object} data 参数
 * 
 * @param {String} brower 浏览器版本
 * @param {String} content 评论内容
 * @param {String} email 邮箱
 * @param {String} nickname 昵称
 * @param {String} system 系统版本
 * @param {String} website 个人网站
 * @param {String} commentId 评论ID
 */
export function addReply(data, success) {
    axios({
        url: '/blog/comment/reply',
        method: 'POST',
        data: data
    }).then(res => {
        success(res.data)
    })
}