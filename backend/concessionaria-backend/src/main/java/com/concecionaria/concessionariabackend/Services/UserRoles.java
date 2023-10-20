package com.concecionaria.concessionariabackend.Services;

public enum UserRoles {
    ADMIN("admin"),
    USER("user");

    private String roles;

    UserRoles(String roles){
        this.roles = roles;
    }

    public String getRoles() {
        return roles;
    }
    
}