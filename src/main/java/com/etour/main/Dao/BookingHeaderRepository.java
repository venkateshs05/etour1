package com.etour.main.Dao;

import com.etour.main.models.BookingHeader;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingHeaderRepository extends JpaRepository<BookingHeader, Long> {
}
