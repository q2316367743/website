module.exports = function(app) {
    app.get('/api/blog/comment/:id', function(req, res) {
        /**
         * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
         */
        res.json({
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
    });

    app.post('/api/blog/comment', function(req, res) {
        /**
         * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
         */
        res.json({
            success: true,
            code: 200,
            message: 'success',
            data: {}
        });
    });

    app.post('/api/blog/comment/reply', function(req, res) {
        /**
         * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
         */
        res.json({
            success: true,
            code: 200,
            message: 'success',
            data: {}
        });
    });
}