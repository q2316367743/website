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

export function getSjz(data, success) {
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
                tags: [{
                    'id': '1',
                    'name': '个人'
                }, {
                    'id': '2',
                    'name': '杂谈'
                }],
                describe: '建议读者可以看一下，里面有近期准备写的内容。',
            }, {
                id: '1',
                image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                title: '学习计划及写作计划',
                createTime: '2020-02-23',
                updateTime: '2020-02-23',
                categoryId: '1',
                categoryName: '随笔',
                tags: [],
                describe: '建议读者可以看一下，里面有近期准备写的内容。',
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
            }],
            total: 3
        }
    })
}

/**
 * 根据标签ID获取标签下文章列表
 * 
 * @param {Object} data ID，页码，每页数目
 * @param {Function} success 回调函数
 */
export function getByTag(data, success) {
    setTimeout(() => {
        success({
            success: true,
            code: 200,
            message: 'success',
            data: {
                item: {
                    id: '1',
                    name: 'Java'
                },
                items: [{
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
                }, {
                    id: '1',
                    image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                    title: '学习计划及写作计划',
                    createTime: '2020-02-23',
                    updateTime: '2020-02-23',
                    categoryId: '1',
                    categoryName: '随笔',
                    tags: [],
                    describe: '建议读者可以看一下，里面有近期准备写的内容。',
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
                }],
                total: 3
            }
        }, 1000)
    })
}

/**
 * 根据分类ID获取标签下文章列表
 * 
 * @param {Object} data ID，页码，每页数目
 * @param {Function} success 回调函数
 */
export function getByCategory(data, success) {
    setTimeout(() => {
        success({
            success: true,
            code: 200,
            message: 'success',
            data: {
                item: {
                    id: '1',
                    name: 'Java'
                },
                items: [{
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
                }, {
                    id: '1',
                    image: 'https://cdn.jsdelivr.net/gh/youthlql/lql_img/blog/avatar.jpg',
                    title: '学习计划及写作计划',
                    createTime: '2020-02-23',
                    updateTime: '2020-02-23',
                    categoryId: '1',
                    categoryName: '随笔',
                    tags: [],
                    describe: '建议读者可以看一下，里面有近期准备写的内容。',
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
                }],
                total: 3
            }
        }, 1000)
    })
}

export function getArticle(id, success) {
    setTimeout(() => {
        success({
            success: true,
            code: 200,
            message: 'success',
            data: {
                article: {
                    title: "学习计划和写作计划",
                    createTime: "2021-03-01",
                    updateTime: "2021-03-01",
                    count: 129,
                    readTime: 1,
                    viewCount: 95,
                    commentCount: 2,
                    content: '<h1>垃圾回收算法</h1>' +
                        '<img' +
                        '    src="https://cdn.jsdelivr.net/gh/youthlql/lql_img_002/JVM/chapter_010/0001.png"' +
                        '/>' +
                        '<p>html代码</p>' +
                        '<pre>' +
                        '    <code class="language-java">' +
                        '/**\n' +
                        '* @author John Smith &lt;john.smith@example.com&gt;\n' +
                        '*/\n' +
                        'package l2f.gameserver.model;\n' +
                        '' +
                        'public abstract strictfp class L2Char extends L2Object {\n' +
                        '\tpublic static final Short ERROR = 0x0001;\n' +
                        '' +
                        '\tpublic void moveTo(int x, int y, int z) {\n' +
                        '\t\t_ai = null;\n' +
                        '\t\tlog("Should not be called");\n' +
                        '\t\tif (1 > 5) { // wtf!?\n' +
                        '\t\t\treturn;\n' +
                        '\t\t}\n' +
                        '\t}\n' +
                        '}\n' +
                        '</code>\n' +
                        '</pre>'
                },
                catalog: [{
                        name: "近期学习计划",
                        children: [{
                                name: "网络通信相关【优先级-10】",
                                children: [],
                            },
                            {
                                name: "OS和数据库相关【优先级-5】",
                                children: [],
                            },
                            {
                                name: "前端【优先级-1】",
                                children: [],
                            },
                        ],
                    },
                    {
                        name: "近期学习计划",
                        children: [],
                    },
                ]
            }
        }, 1000)
    })
}