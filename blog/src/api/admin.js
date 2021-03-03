import axios from '@/utils/axios'

/**
 * 获取作者信息
 * 
 */
export function getAdmin(success) {
    axios({
        url: 'base/admin',
        method: 'GET',
    }).then(res => {
        success(res.data)
    })
}

/**
 * 获取网站数据
 * 
 */
export function getWebInfo(success) {
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            item: {
                articleCount: 11,
                tagCount: 22,
                classifyCount: 3,
                notices: [
                    '<a target="_blank" href="https://www.baidu.com">百度</a>',
                    '网站测试通知，预祝网站成功完成',
                ],
                runTime: '1',
                personCount: 2,
                AllCount: 15,
                accessCount: 1,
                lastUpdate: '2021-02-22'
            }
        }
    })
}


export function getBaseInfo(success) {
    axios({
        url: 'base/blog/config',
        method: 'GET',
    }).then(res => {
        success(res.data)
    })
}