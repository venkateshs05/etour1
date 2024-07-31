package com.etour.main.Dao;

import com.etour.main.models.CustomerMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMasterRepository extends JpaRepository<CustomerMaster, Integer> {
    
}
