// import axios from '../utils/axios'

/**
 * 获取评论
 */
export function getComment(success) {
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            items: [{
                id: '1',
                email: '1583720084@qq.com',
                nickname: '浅梦凉城',
                website: 'javascript:;',
                type: '1',
                brower: 'Edge 86.0.622.51',
                system: 'Windows 10.0',
                createTime: '2021-02-03',
                content: '真强',
                reply: {
                    id: '3',
                    email: '2316367743@qq.com',
                    nickname: '落雨不悔',
                    website: 'javascript:;',
                    type: '3',
                    target: {
                        nickname: '落雨不悔',
                        website: 'javascript:;',
                    },
                    brower: 'Edge 86.0.622.51',
                    system: 'Windows 10.0',
                    createTime: '2021-02-03',
                    content: '真强',
                }
            }, {
                id: '1',
                email: '1583720084@qq.com',
                nickname: '剑锋寒',
                website: 'javascript:;',
                type: '2',
                brower: 'Edge 86.0.622.51',
                system: 'Windows 10.0',
                createTime: '2021-02-03',
                content: '真强'

            }],
            total: 2,
        }
    });
}

/**
 * 新增评论
 */
export function addComment(data, success) {
    data = null;
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {}
    });
}

/**
 * 回复评论
 */
export function addReply(data, success) {
    data = null;
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {}
    });
}