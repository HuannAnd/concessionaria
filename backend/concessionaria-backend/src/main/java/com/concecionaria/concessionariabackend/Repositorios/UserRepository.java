package com.concecionaria.concessionariabackend.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.concecionaria.concessionariabackend.Usuarios.Users;

public interface UserRepository extends MongoRepository<Users, String>{
    UserDetails findByEmail(String email);
}