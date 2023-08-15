package com.concecionaria.concessionariabackend;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.EntidadeDeConsulta.Carros;

public interface RepositorioDaConcessionaria extends MongoRepository<Carros, String> {

}
