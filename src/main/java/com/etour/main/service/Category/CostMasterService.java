package com.etour.main.service.Category;

import com.etour.main.models.CostMaster;

import java.util.List;
import java.util.Optional;

public interface CostMasterService {
    List<CostMaster> findAll();
    Optional<CostMaster> findById(Long id);
    CostMaster save(CostMaster costMaster);
    CostMaster updateById(Long id, CostMaster updatedCostMaster);
    void deleteById(Long id);
}
