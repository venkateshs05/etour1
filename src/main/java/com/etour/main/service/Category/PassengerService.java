package com.etour.main.service.Category;

import com.etour.main.models.Passenger;
import java.util.List;
import java.util.Optional;

public interface PassengerService {
    List<Passenger> findAll();
    Optional<Passenger> findById(Integer id);
    Passenger save(Passenger passenger);
    Passenger updateById(Integer id, Passenger updatedPassenger);
    void deleteById(Integer id);
//    void updatePassengerWithBooking(Integer passengerId, Integer bookingId);
}
