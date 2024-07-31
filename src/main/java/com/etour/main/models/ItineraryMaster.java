package com.etour.main.models;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ItineraryMaster")
public class ItineraryMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ItrId")
    private int itrId;

    @ManyToOne
    @JoinColumn(name = "CatmasterId", nullable = false)
    private CategoryMaster categoryMaster;

    @Column(name = "DayNo", nullable = false)
    private int dayNo;

    @Column(name = "ItrDtl", length = 255)
    private String itrDtl;

	public int getItrId() {
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

	public int getDayNo() {
		return dayNo;
	}

	public void setDayNo(int dayNo) {
		this.dayNo = dayNo;
	}

	public String getItrDtl() {
		return itrDtl;
	}

	public void setItrDtl(String itrDtl) {
		this.itrDtl = itrDtl;
	}

	

   
}
