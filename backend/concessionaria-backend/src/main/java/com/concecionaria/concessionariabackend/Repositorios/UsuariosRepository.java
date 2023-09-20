package com.concecionaria.concessionariabackend.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.concecionaria.concessionariabackend.Usuarios.Usuarios;

public interface UsuariosRepository extends MongoRepository<Usuarios, String>{
    UserDetails findByEmail(String email);
}