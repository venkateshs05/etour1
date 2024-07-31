package com.etour.main.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class SubCategoryMaster {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int SubCat_id;
	public int getSubCat_id() {
		return SubCat_id;
	}
	public void setSubCat_id(int subCat_id) {
		SubCat_id = subCat_id;
	}
	public String getCat_id() {
		return cat_id;
	}
	public void setCat_id(String cat_id) {
		this.cat_id = cat_id;
	}
	public String getSubCat_name() {
		return SubCat_name;
	}
	public void setSubCat_name(String subCat_name) {
		SubCat_name = subCat_name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getCat_Image_Path() {
		return Cat_Image_Path;
	}
	public void setCat_Image_Path(String cat_Image_Path) {
		Cat_Image_Path = cat_Image_Path;
	}
	public boolean isFlag() {
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	@JoinColumn(name="cat_id")
	private String cat_id;
	private String SubCat_name;
	private String Description;
	private String Cat_Image_Path;
	boolean flag;
}
