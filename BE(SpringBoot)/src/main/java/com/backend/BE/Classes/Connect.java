package com.backend.BE.Classes;

import jakarta.persistence.*;

@Entity
@Table(name= "connect")
public class Connect {
    
    @EmbeddedId
    private ConnectId id;

    @ManyToMany
    @MapsId("userId")
    @JoinColumn(name="user_id")
    private User user;

    @ManyToMany
    @MapsId("carId")
    @JoinColumn(name="car_id")
    private Car car;

}
