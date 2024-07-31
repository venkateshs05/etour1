package com.etour.main.controller;

import com.etour.main.models.CostMaster;
import com.etour.main.service.Category.CostMasterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/costs")
public class CostMasterController {

    @Autowired
    private CostMasterService costMasterService;

    @GetMapping
    public List<CostMaster> getAllCosts() {
        return costMasterService.getAllCosts();
    }

    @GetMapping("/{id}")
    public Optional<CostMaster> getCostById(@PathVariable Long id) {
        return costMasterService.getCostById(id);
    }

    @PostMapping
    public CostMaster createCost(@RequestBody CostMaster costMaster) {
        return costMasterService.saveCost(costMaster);
    }

    @PutMapping("/{id}")
    public CostMaster updateCost(@PathVariable Long id, @RequestBody CostMaster costMaster) {
        costMaster.setCostId(id);
        return costMasterService.saveCost(costMaster);
    }

    @DeleteMapping("/{id}")
    public void deleteCost(@PathVariable Long id) {
        costMasterService.deleteCost(id);
    }
}
