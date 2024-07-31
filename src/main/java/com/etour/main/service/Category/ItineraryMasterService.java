package com.etour.main.service.Category;




import java.util.List;

import com.etour.main.models.ItineraryMaster;



public interface ItineraryMasterService {
    List<ItineraryMaster> findAll();
    ItineraryMaster findById(Integer id);
    ItineraryMaster save(ItineraryMaster itineraryMaster);
    void deleteById(Integer id);
}

