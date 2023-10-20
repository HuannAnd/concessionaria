package com.concecionaria.concessionariabackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concecionaria.concessionariabackend.dtos.RegisterDTO;
import com.concecionaria.concessionariabackend.model.Users;
import com.concecionaria.concessionariabackend.repository.UserRepository;

@RestController
@RequestMapping("/concessionaria")
public class UserController {

   @Autowired
   private UserRepository userRepository;

   @PostMapping("/sign-up")
   public ResponseEntity register(@RequestBody @Validated RegisterDTO data) {

      if (this.userRepository.findByEmail(data.email()) != null) {
         return ResponseEntity.badRequest().build();
      }

      Users newUser = new Users(data.nome(), data.email(),data.phone(),data.role());

      this.userRepository.save(newUser);

      return ResponseEntity.ok().build();
   }

}