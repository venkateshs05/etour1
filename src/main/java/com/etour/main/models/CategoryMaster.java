package com.etour.main.models;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CategoryMaster {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int catmaster_id;
	String cat_id;
	String cat_name;
	String cat_image_path;
	boolean flag;
	public int getCatmaster_id() {
		return catmaster_id;
	}
	public void setCatmaster_id(int catmaster_id) {
		this.catmaster_id = catmaster_id;
	}
	public String getCat_id() {
		return cat_id;
	}
	public void setCat_id(String cat_id) {
		this.cat_id = cat_id;
	}
	public String getCat_name() {
		return cat_name;
	}
	public void setCat_name(String cat_name) {
		this.cat_name = cat_name;
	}
	public String getCat_image_path() {
		return cat_image_path;
	}
	public void setCat_image_path(String cat_image_path) {
		this.cat_image_path = cat_image_path;
	}
	public boolean isFlag() {
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	
	
	

}
