package com.etour.main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "sub_category_master")
public class SubCategoryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sub_cat_id")
    private int subCatId;

    @ManyToOne
    @JoinColumn(name = "cat_id", referencedColumnName = "cat_id", nullable = false)
    private CategoryMaster categoryMaster;

    @Column(name = "sub_cat_name")
    private String subCatName;

    @Column(name = "description")
    private String description;

    @Column(name = "sub_cat_image_path")
    private String subCatImagePath;

    @Column(name = "flag")
    private boolean flag;

    // Getters and Setters

    public int getSubCat_id() {
        return subCatId;
    }

    public void setSubCat_id(int subCatId) {
        this.subCatId = subCatId;
    }

    public CategoryMaster getCategoryMaster() {
        return categoryMaster;
    }

    public void setCategoryMaster(CategoryMaster categoryMaster) {
        this.categoryMaster = categoryMaster;
    }

    public String getSubCat_name() {
        return subCatName;
    }

    public void setSubCat_name(String subCatName) {
        this.subCatName = subCatName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSubCatImagePath() {
        return subCatImagePath;
    }

    public void setSubCatImagePath(String subCatImagePath) {
        this.subCatImagePath = subCatImagePath;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
