package com.etour.main.Dao;

import com.etour.main.models.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<CategoryMaster,Integer> {

}
