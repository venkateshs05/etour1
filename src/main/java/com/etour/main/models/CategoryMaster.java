package com.etour.main.models;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "CategoryMaster")
public class CategoryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "catmaster_id", nullable = false, updatable = false)
    private int catmaster_id;

    @Column(name = "cat_id", nullable = false, length = 50)
    private String cat_id;

    @Column(name = "cat_name", nullable = false, length = 100)
    private String cat_name;

    @Column(name = "cat_image_path", length = 255)
    private String cat_image_path;

    @Column(name = "flag", nullable = false)
    private boolean flag;
    
//    @OneToMany(mappedBy = "categoryMaster")
//    private Set<SubCategoryMaster> subCategories;
//    @OneToMany(mappedBy = "categoryMaster")
//    private Set<ItineraryMaster> itineraries;
//    @OneToMany(mappedBy = "categoryMaster")
//	private Set<DateMaster> dates;
//    @OneToMany(mappedBy = "categoryMaster")
//	private Set<CostMaster> costs;
//    @OneToMany(mappedBy = "categoryMaster")
//	private Set<TourMaster> tours;
    
    
//    public Set<SubCategoryMaster> getSubCategories() { return subCategories; }
//    public void setSubCategories(Set<SubCategoryMaster> subCategories) { this.subCategories = subCategories; }

//	public Set<ItineraryMaster> getItineraries() {
//		return itineraries;
//	}
//	public void setItineraries(Set<ItineraryMaster> itineraries) {
//		this.itineraries = itineraries;
//	}
//
//	public Set<DateMaster> getDates() {
//		return dates;
//	}
//	public void setDates(Set<DateMaster> dates) {
//		this.dates = dates;
//	}
//
//	public Set<CostMaster> getCosts() {
//		return costs;
//	}
//	public void setCosts(Set<CostMaster> costs) {
//		this.costs = costs;
//	}
//
//	public Set<TourMaster> gettours() {
//		return tours;
//	}
//	public void setTours(Set<TourMaster> tours) {
//		this.tours = tours;
//	}

    // Getters and setters

    
    
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
