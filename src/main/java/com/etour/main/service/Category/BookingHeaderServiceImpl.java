package com.etour.main.service.Category;

import com.etour.main.models.BookingHeader;
import com.etour.main.Dao.BookingHeaderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingHeaderServiceImpl implements BookingHeaderService {

    private final BookingHeaderRepository bookingHeaderRepository;

    @Autowired
    public BookingHeaderServiceImpl(BookingHeaderRepository bookingHeaderRepository) {
        this.bookingHeaderRepository = bookingHeaderRepository;
    }

    @Override
    public List<BookingHeader> findAll() {
        return bookingHeaderRepository.findAll();
    }

    @Override
    public Optional<BookingHeader> findById(Long id) {
        return bookingHeaderRepository.findById(id);
    }

    @Override
    public BookingHeader save(BookingHeader bookingHeader) {
        return bookingHeaderRepository.save(bookingHeader);
    }

    @Override
    public BookingHeader updateById(Long id, BookingHeader updatedBookingHeader) {
        if (bookingHeaderRepository.existsById(id)) {
            updatedBookingHeader.setBookingId(id);
            return bookingHeaderRepository.save(updatedBookingHeader);
        } else {
            throw new RuntimeException("BookingHeader not found with id: " + id);
        }
    }

    @Override
    public void deleteById(Long id) {
        if (bookingHeaderRepository.existsById(id)) {
            bookingHeaderRepository.deleteById(id);
        } else {
            throw new RuntimeException("BookingHeader not found with id: " + id);
        }
    }
}
