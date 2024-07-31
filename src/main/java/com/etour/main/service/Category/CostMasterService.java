package com.etour.main.service.Category;

import com.etour.main.models.CostMaster;

import java.util.List;
import java.util.Optional;

public interface CostMasterService {
    List<CostMaster> getAllCosts();
    Optional<CostMaster> getCostById(Long id);
    CostMaster saveCost(CostMaster costMaster);
    void deleteCost(Long id);
}
