package com.esion.personal.base.service.impl;

import com.esion.personal.base.entity.ConfigBlog;
import com.esion.personal.base.mapper.ConfigBlogMapper;
import com.esion.personal.base.service.ConfigBlogService;
import com.esion.personal.common.dao.RedisDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author qiao shengda
 * @since 2021/2/26
 */
@Service
public class ConfigBlogServiceImpl implements ConfigBlogService {

    private ConfigBlogMapper configBlogMapper;
    private RedisDao redisDao;

    @Autowired
    public ConfigBlogServiceImpl(ConfigBlogMapper configBlogMapper, RedisDao redisDao) {
        this.configBlogMapper = configBlogMapper;
        this.redisDao = redisDao;
    }

    @Override
    public ConfigBlog getAll() {
        ConfigBlog configBlog = (ConfigBlog) redisDao.get("config:blog");
        if (null == configBlog){
            configBlog = configBlogMapper.selectAll();
            redisDao.set("config:blog", configBlog);
        }
        return configBlog;
    }

}
