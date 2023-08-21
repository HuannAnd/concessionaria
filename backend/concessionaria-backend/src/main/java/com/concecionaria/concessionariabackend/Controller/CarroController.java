package com.concecionaria.concessionariabackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.concecionaria.concessionariabackend.CarroRepository;
import com.concecionaria.concessionariabackend.EntidadeDeConsulta.Carros;

@RestController
@RequestMapping("carros")
@Service
public class CarroController {

    @Autowired
    private CarroRepository Repository;

    @GetMapping
    public List<Carros> getTodosOsCarro() {

        List<Carros> listaCarros = Repository.findAll();

        return listaCarros;
    }

    @GetMapping("/marcas/{marca}")
    public List<Carros> procurarPorMarca(@PathVariable String marca) {
        List<Carros> CarrosPorMarca = Repository.findByMarca(marca);

        return CarrosPorMarca;
    }

}