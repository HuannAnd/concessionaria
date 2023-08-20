package com.concecionaria.concessionariabackend;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.EntidadeDeConsulta.Carros;
import java.util.List;


public interface CarroRepository extends MongoRepository<Carros, String> {
     List<Carros> findByMarca(String marca);
}
