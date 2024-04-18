package com.backend.BE.Classes;

import jakarta.persistence.*;

@Entity
@Table(name="car")
public class Car {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private int yearOfManufacture;
    private String engineCapacity;
    private String fuel;
    private int performance;
    private String color;
    private int wheelSize;
    private String extras;
    private String description;

    // Getter és Setter az 'id' mezőhöz
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter és Setter a 'name' mezőhöz
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter és Setter a 'type' mezőhöz
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    // Getter és Setter a 'yearOfManufacture' mezőhöz
    public int getYearOfManufacture() {
        return yearOfManufacture;
    }

    public void setYearOfManufacture(int yearOfManufacture) {
        this.yearOfManufacture = yearOfManufacture;
    }

    // Getter és Setter az 'engineCapacity' mezőhöz
    public String getEngineCapacity() {
        return engineCapacity;
    }

    public void setEngineCapacity(String engineCapacity) {
        this.engineCapacity = engineCapacity;
    }

    // Getter és Setter a 'fuel' mezőhöz
    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    // Getter és Setter a 'performance' mezőhöz
    public int getPerformance() {
        return performance;
    }

    public void setPerformance(int performance) {
        this.performance = performance;
    }

    // Getter és Setter a 'color' mezőhöz
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    // Getter és Setter a 'wheelSize' mezőhöz
    public int getWheelSize() {
        return wheelSize;
    }

    public void setWheelSize(int wheelSize) {
        this.wheelSize = wheelSize;
    }

    // Getter és Setter az 'extras' mezőhöz
    public String getExtras() {
        return extras;
    }

    public void setExtras(String extras) {
        this.extras = extras;
    }

    // Getter és Setter a 'description' mezőhöz
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
