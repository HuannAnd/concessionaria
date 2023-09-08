package com.concecionaria.concessionariabackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concecionaria.concessionariabackend.Repositorios.UsuariosRepository;
import com.concecionaria.concessionariabackend.Usuarios.AuthenticationDTO;
import com.concecionaria.concessionariabackend.Usuarios.CadastroDTO;
import com.concecionaria.concessionariabackend.Usuarios.Usuarios;

@RestController
@RequestMapping("/concessionaria/autenticacao")
public class UsuariosController {

   @Autowired
   private AuthenticationManager authenticationManager;

   @Autowired
   private UsuariosRepository userRepository;

   @PostMapping("/login")
   public ResponseEntity login(@RequestBody @Validated AuthenticationDTO data) {
      var senhaUsuario = new UsernamePasswordAuthenticationToken(data.login(), data.senha());
         
         var autenticacao = this.authenticationManager.authenticate(senhaUsuario);
     
      return ResponseEntity.ok().build();
   }

   @PostMapping("/cadastro")
   public ResponseEntity cadastro(@RequestBody @Validated CadastroDTO data) {

      if (this.userRepository.findByLogin(data.login()) != null) {
         return ResponseEntity.badRequest().build();
      }

      String senhaCriptografada = new BCryptPasswordEncoder().encode(data.senha());
      Usuarios novoUsuario = new Usuarios(data.login(), senhaCriptografada, data.role());

      this.userRepository.save(novoUsuario);

      return ResponseEntity.ok().build();
   }

}