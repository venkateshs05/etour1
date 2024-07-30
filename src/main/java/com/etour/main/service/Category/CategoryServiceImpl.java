package com.etour.main.service.Category;

import java.util.List;
import java.util.Optional;

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

	@Override
	public CategoryMaster findById(Integer id) {
		// TODO Auto-generated method stub
		 Optional<CategoryMaster> result = categoryDao.findById(id);
	        return result.orElse(null);
	}

	@Override
	public CategoryMaster save(CategoryMaster categoryMaster) {
		// TODO Auto-generated method stub
		return categoryDao.save(categoryMaster);
	}

	@Override
	public void deleteById(Integer id) {
		categoryDao.deleteById(id);
		
	}

}
