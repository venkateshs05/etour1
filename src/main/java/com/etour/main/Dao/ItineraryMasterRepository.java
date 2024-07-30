package com.etour.main.Dao;




import org.springframework.data.jpa.repository.JpaRepository;

import com.etour.main.models.ItineraryMaster;

public interface ItineraryMasterRepository extends JpaRepository<ItineraryMaster,Integer> {
}

