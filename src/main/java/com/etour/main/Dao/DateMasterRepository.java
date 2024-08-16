package com.etour.main.Dao;

import com.etour.main.models.DateMaster;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DateMasterRepository extends JpaRepository<DateMaster, Integer> {
	 List<DateMaster> findByDepartDateBetween(Date startDate, Date endDate);
	 List<DateMaster> findBySubCategoryMaster_SubCatId(Integer subCategoryId);

}
