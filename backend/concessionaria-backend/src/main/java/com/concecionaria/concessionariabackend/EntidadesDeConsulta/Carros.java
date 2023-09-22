package com.concecionaria.concessionariabackend.EntidadesDeConsulta;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection = "carros")
public class Carros {

    @Id
    private String id;

    private String marca;

    private int ano;

    private String modelo;

    private double preco;

    private String imagemCarro;

    public Carros(String id, String marca, int ano, String modelo, double preco, String imagemCarro) {
        this.id = id;
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.preco = preco;
        this.imagemCarro = imagemCarro;
    }

    public String getID() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public int getAno() {
        return ano;
    }

    public String getModelo() {
        return modelo;
    }

    public double getPreco() {
        return preco;
    }

    public String getImagemCarro() {
        return imagemCarro;
    }
}