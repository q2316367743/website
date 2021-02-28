package xyz.esion.personal.base.service.impl;

import xyz.esion.personal.base.mapper.AdminMapper;
import xyz.esion.personal.base.service.AdminService;
import xyz.esion.personal.common.dao.RedisDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * @author qiao shengda
 * @since 2021/2/26
 */
@Service
public class AdminServiceImpl implements AdminService {

    private AdminMapper adminMapper;
    private RedisDao redisDao;

    @Autowired
    public AdminServiceImpl(AdminMapper adminMapper, RedisDao redisDao) {
        this.adminMapper = adminMapper;
        this.redisDao = redisDao;
    }

    @Override
    public Map<String, Object> getNew() {
        Map<String, Object> admin = (Map<String, Object>) redisDao.get("admin");
        if (admin == null){
            admin = adminMapper.selectNew();
            redisDao.set("admin", admin);
        }
        return admin;
    }

}
