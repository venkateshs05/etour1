package com.etour.main.service.Category;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.etour.main.Dao.CategoryMasterRepository;
import com.etour.main.models.CategoryMaster;
@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryMasterRepository categoryMasterRepository;

	@Override
	public List<CategoryMaster> getCategory() {
		
		return categoryMasterRepository.findAll();
	}

	@Override
	public CategoryMaster findById(Integer id) {
		
		 Optional<CategoryMaster> result = categoryMasterRepository.findById(id);
	        return result.orElse(null);
	}

	@Override
	public CategoryMaster save(CategoryMaster categoryMaster) {
		
		return categoryMasterRepository.save(categoryMaster);
	}

	@Override
	public void deleteById(Integer id) {
		categoryMasterRepository.deleteById(id);
		
	}

	







}
