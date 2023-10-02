package com.concecionaria.concessionariabackend.ConsultEntity;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection = "carros")
public class Cars {

    @Id
    private String id;

    private String brand;

    private int year;

    private String model;

    private double price;

    private String image;

    public Cars(String id, String brand, int year, String model, double price, String image) {
        this.id = id;
        this.brand = brand;
        this.year = year;
        this.model = model;
        this.price = price;
        this.image = image;
    }

    public String getID() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public int getYear() {
        return year;
    }

    public String getModel() {
        return model;
    }

    public double getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }
}