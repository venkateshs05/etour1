package com.etour.main.service.Category;

import com.etour.main.Dao.PassengerRepository;
import com.etour.main.models.Passenger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PassengerServiceImpl implements PassengerService {

    private final PassengerRepository passengerRepository;

    @Autowired
    public PassengerServiceImpl(PassengerRepository passengerRepository) {
        this.passengerRepository = passengerRepository;
    }

    @Override
    public List<Passenger> findAll() {
        return passengerRepository.findAll();
    }

    @Override
    public Optional<Passenger> findById(Integer id) {
        return passengerRepository.findById(id);
    }

    @Override
    public Passenger save(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    @Override
    public Passenger updateById(Integer id, Passenger updatedPassenger) {
        if (passengerRepository.existsById(id)) {
            updatedPassenger.setPaxId(id);
            return passengerRepository.save(updatedPassenger);
        } else {
            throw new RuntimeException("Passenger not found with id: " + id);
        }
    }

    @Override
    public void deleteById(Integer id) {
        if (passengerRepository.existsById(id)) {
            passengerRepository.deleteById(id);
        } else {
            throw new RuntimeException("Passenger not found with id: " + id);
        }
    }
}
