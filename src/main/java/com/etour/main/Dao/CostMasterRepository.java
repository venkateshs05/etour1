package com.etour.main.Dao;

import com.etour.main.models.CostMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CostMasterRepository extends JpaRepository<CostMaster,Long> {
    // You can define custom query methods here if needed
}
