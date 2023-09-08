package com.concecionaria.concessionariabackend.Usuarios;

import java.util.Collection;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Id;

@Document(collection = "Cliente")
public class Usuarios implements UserDetails{

    @Id
    private String id;
    private String login;
    private String senha;
    private UserRoles role;

    
    public Usuarios(String login, String senha, UserRoles role) {
        this.login = login;
        this.senha = senha;
        this.role = role;
    }

    public Usuarios(String id, String login,String senha,UserRoles role) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.role = role;
    }

    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    
    public UserRoles getRole() {
        return role;
    }

    public void setRole(UserRoles role) {
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       
        if(this.role == UserRoles.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }
    
    @Override
    public String getPassword() {
       
        return senha;
    }

    @Override
    public String getUsername() {
       
        return login;
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
