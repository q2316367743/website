package com.esion.personal.base.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * @author qiao shengda
 * @since 2021/2/23
 */
@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/one")
    public Mono<String> one(){
        return Mono.justOrEmpty("/test/one");
    }

}
