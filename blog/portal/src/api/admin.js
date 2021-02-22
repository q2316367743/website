// import axios from '../utils/axios'

/**
 * 获取作者信息
 * 
 */
export function getAdmin(success) {
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            item: {
                avatar: 'https://portrait.gitee.com/uploads/avatars/user/1786/5358547_qiaoshengda_1578985319.png!avatar200',
                name: '落雨不悔',
                describe: '主要是Java技术栈，略带部分源码，随笔',
                gitee: 'https://gitee.com/qiaoshengda',
                other: [{
                    name: 'CSDN',
                    icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                    href: 'https://blog.csdn.net/q2316367743'
                }]
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
                    '关于',
                    '关于',
                    '关于'
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
        message: 'success',
        data: {
            item: {
                background: './image/background.jpg',
                music: [{
                    src: 'https://music.163.com/song/media/outer/url?id=458333550.mp3',
                    imageurl: 'http://p3.music.126.net/cTEm__BYVBwNyPwzUg7ZfA==/109951162856342375.jpg?param=300y300',
                    name: 'Start',
                    singer: 'Childsion'
                }, {
                    src: 'https://music.163.com/song/media/outer/url?id=20744788.mp3',
                    imageurl: 'http://p3.music.126.net/SmlOg2u7RvopE1fQCUr7qw==/3228166139193288.jpg?param=300y300',
                    name: 'With An Orchid',
                    singer: 'Yanni'
                }]
            }
        }
    })
}