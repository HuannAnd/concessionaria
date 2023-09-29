package com.concecionaria.concessionariabackend.Repositorios;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.EntidadesDeConsulta.Cars;

public interface CarRepository extends MongoRepository<Cars, String> {
     List<Cars> findByBrand(String brand);
}
