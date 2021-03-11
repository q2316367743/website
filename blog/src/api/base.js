/**
 * 博客全局信息获取，文章排行，分类，归档。。。
 */
// import axios from '../utils/axios'

export function getTags(success) {
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            items: [{
                id: '1',
                name: 'Java'
            }, {
                id: '2',
                name: 'HTML'
            }, {
                id: '3',
                name: 'Javascript'
            }, {
                id: '4',
                name: '微服务'
            }, {
                id: '5',
                name: '随笔'
            }, ]
        }
    })
}

export function getCategory(success) {
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            items: [{
                id: '1',
                name: 'Java',
                count: 2
            }, {
                id: '2',
                name: 'HTML',
                count: 3
            }, {
                id: '3',
                name: 'Javascript',
                count: 5
            }, {
                id: '4',
                name: '微服务',
                count: 4
            }, {
                id: '5',
                name: '随笔',
                count: 1
            }]
        }
    })
}