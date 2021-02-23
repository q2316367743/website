package com.esion.personal.base.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 博客配置
 *
 * @author qiao shengda
 * @since 2021/2/23
 */
@Setter
@Getter
public class ConfigBlog {

    private String id;
    private LocalDateTime createTime;
    private String background;
    private List<MusicInfo> music;

}
