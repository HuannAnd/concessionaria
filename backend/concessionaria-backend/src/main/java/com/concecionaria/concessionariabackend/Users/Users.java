package com.concecionaria.concessionariabackend.Users;

import java.util.Collection;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Id;

@Document(collection = "Cliente")
public class Users implements UserDetails {

    @Id
    private String id;
    
    private String email;
    private String nome;
    private UserRoles role;
    private String phone;

    public Users(String nome, String email,String phone, UserRoles role) {
        this.nome = nome;
        this.email = email;
        this.role = role;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }


    public String getNome() {
        return nome;
    }

    public UserRoles getRole() {
        return role;
    }

    public String getPhone(){
        return phone;
    }

    public void setRole(UserRoles role) {
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        if (this.role == UserRoles.ADMIN)
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {

        return null;
    }

    @Override
    public String getUsername() {

        return nome;
    }

    @Override
    public boolean isAccountNonExpired() {

        return true;
    }

    @Override
    public boolean isAccountNonLocked() {

        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {

        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
