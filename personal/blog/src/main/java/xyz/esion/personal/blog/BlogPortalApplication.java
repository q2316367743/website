package com.esion.personal.blog.portal;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author qiao shengda
 * @since 2021/2/21
 */
@SpringBootApplication
@EnableDiscoveryClient
@ComponentScan("com.esion.personal.blog")
@MapperScan("com.esion.personal.blog.portal.mapper")
@EnableTransactionManagement
@EnableFeignClients
public class BlogPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlogPortalApplication.class, args);
    }

}
