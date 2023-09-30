package com.concecionaria.concessionariabackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.concecionaria.concessionariabackend.Repository.UserRepository;
import com.concecionaria.concessionariabackend.Users.UserRoles;
import com.concecionaria.concessionariabackend.Users.Users;

@Service
public class UsuariosServices {

    @Autowired
    private final UserRepository clienteRepository;

    public UsuariosServices(UserRepository clienteRepository) {
        this.clienteRepository = clienteRepository;}

    public Users novoUsuario(Users usuarios) {
        usuarios.setRole(UserRoles.USER);
        return clienteRepository.save(usuarios);
    }

    public UserDetails buscaUsuarios(String usuario) {
        return clienteRepository.findByEmail(usuario);
    }
}
