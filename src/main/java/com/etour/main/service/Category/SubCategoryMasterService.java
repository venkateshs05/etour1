package com.etour.main.service.Category;

import com.etour.main.models.SubCategoryMaster;
import java.util.List;
import java.util.Optional;

public interface SubCategoryMasterService {
    List<SubCategoryMaster> findAll();
    Optional<SubCategoryMaster> findById(Integer id);
    SubCategoryMaster save(SubCategoryMaster subCategoryMaster);
    SubCategoryMaster updateById(Integer id, SubCategoryMaster updatedSubCategoryMaster);
    void deleteById(Integer id);
}
