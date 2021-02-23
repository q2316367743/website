package com.esion.personal.base.controller;

import com.esion.personal.base.entity.Admin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * 基础信息
 *
 * @author qiao shengda
 * @since 2021/2/23
 */
@RestController
public class BaseController {

    @GetMapping("base")
    public Mono<Admin> base(){
        return Mono.justOrEmpty(new Admin());
    }

}
