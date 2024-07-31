package com.etour.main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "date_master")
public class DateMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departureId;

    @ManyToOne
    @JoinColumn(name = "catmaster_id", nullable = false)
    private CategoryMaster categoryMaster;

	public Long getDepartureId() {
		return departureId;
	}

	public void setDepartureId(Long departureId) {
		this.departureId = departureId;
	}

	public CategoryMaster getCategoryMaster() {
		return categoryMaster;
	}

	public void setCategoryMaster(CategoryMaster categoryMaster) {
		this.categoryMaster = categoryMaster;
	}

   
}
