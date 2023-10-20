package com.concecionaria.concessionariabackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.concecionaria.concessionariabackend.model.Users;
import com.concecionaria.concessionariabackend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private final UserRepository clienteRepository;

    public UserService(UserRepository clienteRepository) {
        this.clienteRepository = clienteRepository;}

    public Users newUsers(Users users) {
        users.setRole(UserRoles.USER);
        return clienteRepository.save(users);
    }

    public UserDetails findUsers(String users) {
        return clienteRepository.findByEmail(users);
    }
}
