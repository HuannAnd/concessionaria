package com.concecionaria.concessionariabackend.Usuarios;

import java.util.Collection;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Id;

@Document(collection = "Cliente")
public class Usuarios implements UserDetails {

    @Id
    private String id;
    private String email;
    private String primeiroNome;
    private UserRoles role;

    public Usuarios(String primeiroNome, String email, UserRoles role) {
        this.primeiroNome = primeiroNome;
        this.email = email;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getprimeiroNome() {
        return primeiroNome;
    }

    public void setprimeiroNome(String primeiroNome) {
        this.primeiroNome = primeiroNome;
    }

    public UserRoles getRole() {
        return role;
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

        return primeiroNome;
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
