package com.etour.main.controller;

import com.etour.main.models.Passenger;
import com.etour.main.service.Category.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/passengers")
public class PassengerController {

    private final PassengerService passengerService;

    @Autowired
    public PassengerController(PassengerService passengerService) {
        this.passengerService = passengerService;
    }

    // Get all passengers
    @GetMapping
    public ResponseEntity<List<Passenger>> getAllPassengers() {
        List<Passenger> passengers = passengerService.findAll();
        return ResponseEntity.ok(passengers);
    }

    // Get a specific passenger by ID
    @GetMapping("/{id}")
    public ResponseEntity<Passenger> getPassengerById(@PathVariable Integer id) {
        Optional<Passenger> passenger = passengerService.findById(id);
        return passenger.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new passenger
    @PostMapping
    public ResponseEntity<Passenger> createPassenger(@RequestBody Passenger passenger) {
        Passenger savedPassenger = passengerService.save(passenger);
        return ResponseEntity.ok(savedPassenger);
    }

    // Update an existing passenger by ID
    @PutMapping("/{id}")
    public ResponseEntity<Passenger> updatePassenger(@PathVariable Integer id, @RequestBody Passenger passenger) {
        Passenger updatedPassenger = passengerService.updateById(id, passenger);
        return ResponseEntity.ok(updatedPassenger);
    }

    // Delete a passenger by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePassenger(@PathVariable Integer id) {
        passengerService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
