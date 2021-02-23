# 网站基础信息
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
)

# 测试数据
insert into t_config_blog (id, create_time, background)
values ('1', '2020-02-23 20:41', 'http://119.29.7.47/image/background.jpg');

insert into t_music_info (id, url, cover, name, artist)
values ('1', 'https://music.163.com/song/media/outer/url?id=458333550.mp3',
        'http://p3.music.126.net/cTEm__BYVBwNyPwzUg7ZfA==/109951162856342375.jpg?param=300y300',
        'Start',
        'Childsion'),
       ('2', 'https://music.163.com/song/media/outer/url?id=20744788.mp3',
        'http://p3.music.126.net/SmlOg2u7RvopE1fQCUr7qw==/3228166139193288.jpg?param=300y300',
        'With An Orchid',
        'Yanni');

insert into t_blog_music (music_id, blog_id)
values ('1', '1'),
       ('2', '1');
