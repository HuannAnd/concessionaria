package com.concecionaria.concessionariabackend.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.concecionaria.concessionariabackend.Model.Cars;

public interface CarRepository extends MongoRepository<Cars, String> {
     List<Cars> findByMake(String make);
}
