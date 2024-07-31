package com.etour.main.service.Category;

import com.etour.main.Dao.CostMasterRepository;
import com.etour.main.models.CostMaster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CostMasterServiceImpl implements CostMasterService {

    @Autowired
    private CostMasterRepository costMasterRepository;

    @Override
    public List<CostMaster> getAllCosts() {
        return costMasterRepository.findAll();
    }

    @Override
    public Optional<CostMaster> getCostById(Long id) {
        return costMasterRepository.findById(id);
    }

    @Override
    public CostMaster saveCost(CostMaster costMaster) {
        return costMasterRepository.save(costMaster);
    }

    @Override
    public void deleteCost(Long id) {
        costMasterRepository.deleteById(id);
    }
}
