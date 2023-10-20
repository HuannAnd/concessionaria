package com.concecionaria.concessionariabackend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concecionaria.concessionariabackend.Model.Cars;
import com.concecionaria.concessionariabackend.Repository.CarRepository;

@RestController
@RequestMapping("/concessionaria/cars")
@Service
public class CarController {

    @Autowired
    private CarRepository repository;

    @GetMapping
    public List<Cars> getAllCars() {

        List<Cars> carList = repository.findAll();

        return carList;
    }

    @GetMapping("/make/{make}")
    public List<Cars> findByMake(@PathVariable String make) {
        List<Cars> CarByMake = repository.findByMake(make);

        return CarByMake;
    }

}