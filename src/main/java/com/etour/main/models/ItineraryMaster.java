package com.etour.main.models;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity(name = "ControllerItineraryMaster")
public class ItineraryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ItrId")
    private Integer itrId;

    private CategoryMaster categoryMaster;

    @Column(name = "DayNo", nullable = false)
    private Integer dayNo;

    @Column(name = "ItrDtl", length = 255)
    private String itrDtl;
    @ManyToOne
    @JoinColumn(name = "CatmasterId", nullable = false)
	public Integer getItrId() {
		return itrId;
	}

	public void setItrId(Integer itrId) {
		this.itrId = itrId;
	}

	public CategoryMaster getCategoryMaster() {
		return categoryMaster;
	}

	public void setCategoryMaster(CategoryMaster categoryMaster) {
		this.categoryMaster = categoryMaster;
	}

	public Integer getDayNo() {
		return dayNo;
	}

	public void setDayNo(Integer dayNo) {
		this.dayNo = dayNo;
	}

	public String getItrDtl() {
		return itrDtl;
	}

	public void setItrDtl(String itrDtl) {
		this.itrDtl = itrDtl;
	}

	

   
}
