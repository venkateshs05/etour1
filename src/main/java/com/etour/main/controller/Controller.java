package com.etour.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etour.main.models.CategoryMaster;
import com.etour.main.service.Category.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class Controller {
	 private CategoryService categoryService;
	 
	@Autowired
	public Controller(CategoryService categoryService) {
		super();
		this.categoryService = categoryService;
	}
	
	 @GetMapping
	 public List<CategoryMaster>getCategoryAll(){
		return categoryService.getCategory();
		 
	 }

}
