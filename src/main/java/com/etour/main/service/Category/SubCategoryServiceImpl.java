package com.etour.main.service.Category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.main.Dao.SubCategoryDao;
import com.etour.main.controller.ControllerSubCategory;
import com.etour.main.models.SubCategoryMaster;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {
	
	@Autowired
	private SubCategoryDao categoryDao;

	@Override
	public List<SubCategoryMaster> getCategory() {
		// TODO Auto-generated method stub
		return null;
	}

}
