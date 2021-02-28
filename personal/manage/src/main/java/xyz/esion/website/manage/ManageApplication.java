package xyz.esion.website.manage;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author qiao shengda
 * @since 2021/2/26
 */
@SpringBootApplication
@MapperScan("xyz.esion.personal.manage.mapper")
@ComponentScan("xyz.esion.personal")
@EnableDiscoveryClient
@EnableTransactionManagement
public class ManageApplication {
}
