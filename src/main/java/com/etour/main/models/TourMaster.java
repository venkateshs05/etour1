package com.etour.main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tour_master")
public class TourMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tourId;

    @ManyToOne
    @JoinColumn(name = "catmaster_id", nullable = false)
    private CategoryMaster categoryMaster;

    @ManyToOne
    @JoinColumn(name = "departure_id", nullable = false)
    private DateMaster dateMaster;

	public Long getTourId() {
		return tourId;
	}

	public void setTourId(Long tourId) {
		this.tourId = tourId;
	}

	public CategoryMaster getCategoryMaster() {
		return categoryMaster;
	}

	public void setCategoryMaster(CategoryMaster categoryMaster) {
		this.categoryMaster = categoryMaster;
	}

	public DateMaster getDateMaster() {
		return dateMaster;
	}

	public void setDateMaster(DateMaster dateMaster) {
		this.dateMaster = dateMaster;
	}

    
}
