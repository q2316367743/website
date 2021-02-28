package xyz.esion.personal.blog;

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
@MapperScan("xyz.esion.personal.blog.mapper")
@ComponentScan("xyz.esion.personal")
@EnableDiscoveryClient
@EnableFeignClients
public class BlogPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlogPortalApplication.class, args);
    }

}
