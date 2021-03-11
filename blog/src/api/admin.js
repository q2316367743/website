// import axios from '@/utils/axios'

/**
 * 获取作者信息
 * 
 */
export function getAdmin(success) {
    success({
        success: true,
        code: 200,
        message: "成功",
        data: {
            item: {
                other: "[{\"name\": \"CSDN\",\"icon\": \"https://g.csdnimg.cn/static/logo/favicon32.ico\",\"href\": \"https://blog.csdn.net/q2316367743\"}]",
                name: "落雨不悔",
                description: "主要是Java技术栈，略带部分源码，随笔",
                avatar: "https://portrait.gitee.com/uploads/avatars/user/1786/5358547_qiaoshengda_1578985319.png!avatar200",
                gitee: "https://gitee.com/qiaoshengda"
            }
        }
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
    success({
        success: true,
        code: 200,
        message: "成功",
        data: {
            item: {
                "id": "1",
                "createTime": "2020-02-23T20:41:00",
                "background": "http://esion.xyz/image/background.jpg",
                "music": [{
                    "url": "http://esion.xyz/music/刘瑞琦 - 房间 (新版).flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "房间",
                    "artist": "刘瑞琪"
                }, {
                    "url": "http://esion.xyz/music/陈粒 - 走马.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "走马",
                    "artist": "陈粒"
                }, {
                    "url": "http://esion.xyz/music/水木年华 - 一生有你.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "一生有你",
                    "artist": "水木年华"
                }, {
                    "url": "http://esion.xyz/music/程jiajia - 山楂树の恋.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "山楂树之恋",
                    "artist": "程佳佳"
                }, {
                    "url": "http://esion.xyz/music/蒋雪儿 - 燕无歇.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "燕无歌",
                    "artist": "蒋雪儿"
                }, {
                    "url": "http://esion.xyz/music/火箭少女101段奥娟 - 陪我长大.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "陪我长大",
                    "artist": "段奥娟"
                }, {
                    "url": "http://esion.xyz/music/陈一发儿 - 童话镇.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "童话镇",
                    "artist": "陈一发"
                }, {
                    "url": "http://esion.xyz/music/汪苏泷、By2 - 有点甜.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "有点甜",
                    "artist": "汪苏泷、By2"
                }, {
                    "url": "http://esion.xyz/music/王力宏 - 需要人陪.flac",
                    "cover": "http://esion.xyz/image/default.jpg",
                    "name": "需要人陪",
                    "artist": "王力宏"
                }]
            }
        }
    })
}