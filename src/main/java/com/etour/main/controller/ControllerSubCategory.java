package com.etour.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etour.main.models.SubCategoryMaster;
import com.etour.main.service.Category.CategoryService;
import com.etour.main.service.Category.SubCategoryService;

@RestController
@RequestMapping("/api/subCategories")
public class ControllerSubCategory {
	private SubCategoryService subCategory;
	
	
	@Autowired
	
	public ControllerSubCategory(SubCategoryService subCategory){
		
		this.subCategory = subCategory;
	}
	@GetMapping
	public List<SubCategoryMaster>getCategoryAll(){
		return subCategory.getCategory();
	}
}
