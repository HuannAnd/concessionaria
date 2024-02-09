package com.concecionaria.concessionariabackend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.concecionaria.concessionariabackend.EntidadesDeConsulta.Carros;
import com.concecionaria.concessionariabackend.Repositorios.CarroRepository;

@RestController
@RequestMapping("/concessionaria/cars")
@Service
public class CarroController {

    @Autowired
    private CarroRepository Repository;

    @GetMapping
    public List<Carros> getAllCars() {

        List<Carros> listaCarros = Repository.findAll();

        return listaCarros;
    }

    @GetMapping("/makes/{make}")
    public List<Carros> findByMake(@PathVariable String make) {
        List<Carros> CarsByMakes = Repository.findByMake(make);

        return CarsByMakes; 
    }

}