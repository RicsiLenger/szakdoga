package com.backend.BE.Classes;

import java.io.Serializable;
import java.util.*;

import jakarta.persistence.Column;

public class ConnectId implements Serializable {
    
    @Column(name= "user_id")
    private Long userId;

    @Column(name = "car_id")
    private Long carId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ConnectId)) return false;
        ConnectId connectId = (ConnectId) o;
        return Objects.equals(getUserId(), connectId.getUserId()) &&
               Objects.equals(getCarId(), connectId.getCarId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUserId(), getCarId());
    }
}

