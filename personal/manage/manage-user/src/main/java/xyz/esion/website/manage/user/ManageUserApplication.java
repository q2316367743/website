package xyz.esion.website.manage.user;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author qiao shengda
 * @since 2021/3/1
 */
@SpringBootApplication
@MapperScan("xyz.esion.personal.manage.user.mapper")
@ComponentScan("xyz.esion.personal")
@EnableDiscoveryClient
@EnableTransactionManagement
public class ManageUserApplication {

    public static void main(String[] args) {
        SpringApplication.run(ManageUserApplication.class, args);
    }

}
