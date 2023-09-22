package com.concecionaria.concessionariabackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.concecionaria.concessionariabackend.Repositorios.UsuariosRepository;

@Service
public class AuthorizationServices implements UserDetailsService{

    @Autowired
    UsuariosRepository Repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return Repository.findByEmail(username);
    }

}