package com.etour.main.models;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "booking_header_table")
public class BookingHeaderTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "cust_id", nullable = false)
    private CustomerMaster customerMaster;

    @ManyToOne
    @JoinColumn(name = "tour_id", nullable = false)
    private TourMaster tourMaster;

    @Column(name = "booking_date")
    private Date bookingDate;

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public CustomerMaster getCustomerMaster() {
		return customerMaster;
	}

	public void setCustomerMaster(CustomerMaster customerMaster) {
		this.customerMaster = customerMaster;
	}

	public TourMaster getTourMaster() {
		return tourMaster;
	}

	public void setTourMaster(TourMaster tourMaster) {
		this.tourMaster = tourMaster;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

   
}
