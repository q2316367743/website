package xyz.esion.personal.base.entity;

import lombok.Getter;
import lombok.Setter;

/**
 * @author qiao shengda
 * @since 2021/2/23
 */
@Getter
@Setter
public class Admin {

    private String avatar;
    private String name;
    private String describe;
    private String gitee;
    /**
     * 额外连接的数组
     *
     * @param name 名称
     * @param icon 图标
     * @param href 连接
     * */
    private String other;

}
