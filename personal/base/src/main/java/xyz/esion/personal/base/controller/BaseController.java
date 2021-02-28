package xyz.esion.personal.base.controller;

import xyz.esion.personal.base.service.AdminService;
import xyz.esion.personal.common.view.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

/**
 * 基础信息
 *
 * @author qiao shengda
 * @since 2021/2/23
 */
@RestController
@RequestMapping("base")
public class BaseController {

    private AdminService adminService;

    @Autowired
    public BaseController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("admin")
    public Mono<R> base(){
        return Mono.justOrEmpty(R.success().data("item", adminService.getNew()));
    }

}
