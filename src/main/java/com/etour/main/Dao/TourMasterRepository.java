package com.etour.main.Dao;

import com.etour.main.models.TourMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourMasterRepository extends JpaRepository<TourMaster, Integer> {
    // Additional query methods (if needed) can be defined here
}
