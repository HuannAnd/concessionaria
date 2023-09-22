package com.concecionaria.concessionariabackend.Repositorios;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.EntidadesDeConsulta.Carros;

public interface CarroRepository extends MongoRepository<Carros, String> {
     List<Carros> findByMarca(String marca);
}
