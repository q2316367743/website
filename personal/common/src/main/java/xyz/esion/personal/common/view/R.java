package com.esion.personal.common.view;

import java.util.HashMap;
import java.util.Map;

/**
 * @author qiao shengda
 * @since 2021/2/24
 */
public class R {

    private Boolean success;
    private Integer code;
    private String message;
    private Map<String, Object> data = new HashMap<>();

    private R(){}

    private R(Boolean success, ResultCode resultCode) {
        this.success = success;
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

    public R code(ResultCode resultCode){
        this.code = resultCode.getCode();
        this.message = resultCode.getMessage();
        return this;
    }

    public R message(String message){
        this.message = message;
        return this;
    }

    public R data(String key, Object value){
        this.data.put(key, value);
        return this;
    }

    public R data(Map<String, Object> data){
        this.data = data;
        return this;
    }

    public static R success(){
        R r = new R(true, ResultCode.SUCCESS);
        return r;
    }

    public static R fail(){
        R r = new R(false, ResultCode.FAIL);
        return r;
    }

    public static R choose(boolean flag){
        return flag ? success() : fail();
    }

    public enum ResultCode{
        SUCCESS(200, "成功"),
        FAIL(500, "失败"),
        UNAUTHENTICATION(401, "未认证"),
        UNAUTHORIZE(403, "未授权");

        private Integer code;
        private String message;

        ResultCode(Integer code, String message) {
            this.code = code;
            this.message = message;
        }

        public Integer getCode() {
            return code;
        }

        public void setCode(Integer code) {
            this.code = code;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }

}
