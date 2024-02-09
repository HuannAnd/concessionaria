package com.concecionaria.concessionariabackend.EntidadesDeConsulta;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection = "carros")
public class Carros {

    @Id
    private String id;

    private String make;

    private int year;

    private String model;

    private String price;

    private String image;

    public Carros(String id, String make, int year, String model, String price, String image) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.model = model;
        this.price = price;
        this.image = image;
    }

    public String getID() {
        return id;
    }

    public String getMake() {
        return make;
    }

    public int getYear() {
        return year;
    }

    public String getModel() {
        return model;
    }

    public String getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }
}