package com.concecionaria.concessionariabackend.ConsultEntity;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection = "carros")
public class Cars {

    @Id
    private String id;
    private String make;
    private int year;
    private String model;
    private String price;
    private String image;
    private String classification;
    private String color;

    public Cars(String id, String make, int year, String model, String price, String image, String classification,
            String color) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.model = model;
        this.price = price;
        this.image = image;
        this.classification = classification;
        this.color = color;
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

    public String getClassification() {
        return classification;
    }

    public String getColor() {
        return color;
    }
}