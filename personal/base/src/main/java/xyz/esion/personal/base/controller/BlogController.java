package xyz.esion.personal.base.controller;

import xyz.esion.personal.base.mapper.ConfigBlogMapper;
import xyz.esion.personal.common.view.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * 博客相关公共配置
 *
 * @author qiao shengda
 * @since 2021/2/23
 */
@RestController
@RequestMapping("base/blog")
public class BlogController {

    private ConfigBlogMapper configBlogMapper;

    @Autowired
    public BlogController(ConfigBlogMapper configBlogMapper) {
        this.configBlogMapper = configBlogMapper;
    }

    @GetMapping("config")
    public Mono<R> config(){
        return Mono.justOrEmpty(R.success().data("item", configBlogMapper.selectAll()));
    }

}
