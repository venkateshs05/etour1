package com.etour.main.service.Category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etour.main.Dao.CategoryDao;
import com.etour.main.models.CategoryMaster;
@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryDao categoryDao;

	@Override
	public List<CategoryMaster> getCategory() {
		// TODO Auto-generated method stub
		return categoryDao.findAll();
	}

}
