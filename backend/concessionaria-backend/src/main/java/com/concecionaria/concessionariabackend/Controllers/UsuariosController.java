package com.concecionaria.concessionariabackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.concecionaria.concessionariabackend.Repositorios.UsuariosRepository;
import com.concecionaria.concessionariabackend.Usuarios.CadastroDTO;
import com.concecionaria.concessionariabackend.Usuarios.Usuarios;

@RestController
@RequestMapping("/concessionaria")
public class UsuariosController {

   @Autowired
   private UsuariosRepository userRepository;

   @PostMapping("/registrar")
   public ResponseEntity cadastro(@RequestBody @Validated CadastroDTO data) {

      if (this.userRepository.findByEmail(data.email()) != null) {
         return ResponseEntity.badRequest().build();
      }

      Usuarios novoUsuario = new Usuarios(data.primeiroNome(), data.email(), data.role());

      this.userRepository.save(novoUsuario);

      return ResponseEntity.ok().build();
   }

}