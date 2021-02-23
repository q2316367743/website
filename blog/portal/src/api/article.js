// import axios from '../utils/axios'

export function getList(data, success) {
    data = null;
    success({
        success: true,
        code: 200,
        message: 'success',
        data: {
            items: [{
                id: '1',
                image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                title: '学习计划及写作计划',
                createTime: '2020-02-23',
                updateTime: '2020-02-23',
                categoryId: '1',
                categoryName: '随笔',
                tags: [],
                describe: '建议读者可以看一下，里面有近期准备写的内容。',
                stick: true
            }, {
                id: '1',
                image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                title: '学习计划及写作计划',
                createTime: '2020-02-23',
                updateTime: '2020-02-23',
                categoryId: '1',
                categoryName: '随笔',
                tags: [{
                    'id': '1',
                    'name': '个人'
                }, {
                    'id': '2',
                    'name': '杂谈'
                }],
                describe: '建议读者可以看一下，里面有近期准备写的内容。',
                stick: true
            }, {
                id: '1',
                image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                title: '学习计划及写作计划',
                createTime: '2020-02-23',
                updateTime: '2020-02-23',
                categoryId: '1',
                categoryName: '随笔',
                tags: [{
                    'id': '1',
                    'name': '个人'
                }, {
                    'id': '2',
                    'name': '杂谈'
                }],
                describe: '建议读者可以看一下，里面有近期准备写的内容。',
                stick: false
            }],
            total: 3
        }
    })
}