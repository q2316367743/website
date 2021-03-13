module.exports = function(app) {
    app.all('/api/blog/base/tag', function(req, res) {
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
        });
    });

    app.all('/api/blog/category', function(req, res) {
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
        });
    });
}