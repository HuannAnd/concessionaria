package com.concecionaria.concessionariabackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.concecionaria.concessionariabackend.Repositorios.UsuariosRepository;
import com.concecionaria.concessionariabackend.Usuarios.UserRoles;
import com.concecionaria.concessionariabackend.Usuarios.Usuarios;

@Service
public class UsuariosServices {

    @Autowired
    private final UsuariosRepository clienteRepository;

    public UsuariosServices(UsuariosRepository clienteRepository) {
        this.clienteRepository = clienteRepository;}

    public Usuarios novoUsuario(Usuarios usuarios) {
        usuarios.setRole(UserRoles.USER);
        return clienteRepository.save(usuarios);
    }

    public UserDetails buscaUsuarios(String usuario) {
        return clienteRepository.findByEmail(usuario);
    }
}
