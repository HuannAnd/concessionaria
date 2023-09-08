package com.concecionaria.concessionariabackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.concecionaria.concessionariabackend.Repositorios.UsuariosRepository;
import com.concecionaria.concessionariabackend.Usuarios.Usuarios;

@Service
public class UsuariosServices {

    @Autowired
    private final UsuariosRepository clienteRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    public UsuariosServices(UsuariosRepository clienteRepository, PasswordEncoder passwordEncoder) {
        this.clienteRepository = clienteRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuarios login(Usuarios usuarios) {
        usuarios.setSenha(passwordEncoder.encode(usuarios.getSenha()));
        return clienteRepository.save(usuarios);
    }

    public UserDetails buscaLogin(String login) {
        return clienteRepository.findByLogin(login);
    }
}
