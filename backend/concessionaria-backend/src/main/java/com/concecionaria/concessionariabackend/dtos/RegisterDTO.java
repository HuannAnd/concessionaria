package com.concecionaria.concessionariabackend.dtos;

import com.concecionaria.concessionariabackend.Services.UserRoles;

public record RegisterDTO(String nome,String email,String phone, UserRoles role) {

}
