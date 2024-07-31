package com.etour.main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "cost_master")
public class CostMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long costId;

    public Long getCostId() {
		return costId;
	}

	public void setCostId(Long costId) {
		this.costId = costId;
	}

	public CategoryMaster getCategoryMaster() {
		return categoryMaster;
	}

	public void setCategoryMaster(CategoryMaster categoryMaster) {
		this.categoryMaster = categoryMaster;
	}

	@ManyToOne
    @JoinColumn(name = "catmaster_id", nullable = false)
    private CategoryMaster categoryMaster;

    // Other fields
    // Getters and Setters
}
