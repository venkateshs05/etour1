package com.etour.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.etour.main.models.SubCategoryMaster;
import com.etour.main.service.Category.SubCategoryMasterService;

@RestController
@RequestMapping("/api/subCategories")
public class SubCategoryController {

    private final SubCategoryMasterService subCategoryMasterService;

    @Autowired
    public SubCategoryController(SubCategoryMasterService subCategoryMasterService) {
        this.subCategoryMasterService = subCategoryMasterService;
    }

    @GetMapping
    public List<SubCategoryMaster> getAllSubCategories() {
        return subCategoryMasterService.findAll();
    }
}
