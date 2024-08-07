package com.etour.main.Dao;

import com.etour.main.models.*;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryMasterRepository extends JpaRepository<CategoryMaster,Integer> {
	


}
