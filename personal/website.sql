# 网站基础信息

# 管理员信息
create table t_admin
(
    id          int primary key auto_increment comment '主键',
    create_time datetime comment '创建时间',
    avatar      varchar(255) comment '头像',
    name        varchar(255) comment '姓名',
    description longtext comment '描述',
    gitee       varchar(255) comment '码云信息',
    other       longtext comment '额外信息'
);
create table t_config_blog
(
    id          char(19) primary key,
    create_time datetime,
    background  varchar(255)
);

# 音乐相关
create table t_music_info
(
    id     char(19) primary key,
    url    varchar(255),
    cover  varchar(255),
    name   varchar(255),
    artist varchar(255)
);

# 三方表
create table t_blog_music
(
    id       int auto_increment primary key,
    music_id char(19),
    blog_id  char(19)
);

# 测试数据
insert into t_config_blog (id, create_time, background)
values ('1', '2020-02-23 20:41', 'http://119.29.7.47/image/background.jpg');

insert into t_admin (id, create_time, avatar, name, description, gitee,other)
values ('1',
        '2021-02-24 09:11',
        'https://portrait.gitee.com/uploads/avatars/user/1786/5358547_qiaoshengda_1578985319.png!avatar200',
        '落雨不悔',
        '主要是Java技术栈，略带部分源码，随笔',
        'https://gitee.com/qiaoshengda',
        '[{"name": "CSDN","icon": "https://g.csdnimg.cn/static/logo/favicon32.ico","href": "https://blog.csdn.net/q2316367743"}]');
