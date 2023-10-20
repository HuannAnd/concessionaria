package com.concecionaria.concessionariabackend.DTO;

import com.concecionaria.concessionariabackend.Services.UserRoles;

public record RegisterDTO(String nome,String email,String phone, UserRoles role) {

}
