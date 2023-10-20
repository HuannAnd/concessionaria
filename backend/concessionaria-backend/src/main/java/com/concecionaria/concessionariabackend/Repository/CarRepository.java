package com.concecionaria.concessionariabackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.model.Cars;

public interface CarRepository extends MongoRepository<Cars, String> {
     List<Cars> findByMake(String make);
}
