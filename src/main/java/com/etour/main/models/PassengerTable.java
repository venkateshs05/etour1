package com.etour.main.models;



import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "passenger_table")
public class PassengerTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paxId;

    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    private BookingHeaderTable bookingHeaderTable;

    @Column(name = "pax_name")
    private String paxName;

    
    public Long getPaxId() {
		return paxId;
	}

	public void setPaxId(Long paxId) {
		this.paxId = paxId;
	}

	public BookingHeaderTable getBookingHeaderTable() {
		return bookingHeaderTable;
	}

	public void setBookingHeaderTable(BookingHeaderTable bookingHeaderTable) {
		this.bookingHeaderTable = bookingHeaderTable;
	}

	public String getPaxName() {
		return paxName;
	}

	public void setPaxName(String paxName) {
		this.paxName = paxName;
	}

	public Date getPaxBirthdate() {
		return paxBirthdate;
	}

	public void setPaxBirthdate(Date paxBirthdate) {
		this.paxBirthdate = paxBirthdate;
	}

	public String getPaxType() {
		return paxType;
	}

	public void setPaxType(String paxType) {
		this.paxType = paxType;
	}

	public Double getPaxAmount() {
		return paxAmount;
	}

	public void setPaxAmount(Double paxAmount) {
		this.paxAmount = paxAmount;
	}

	private Date paxBirthdate;

    @Column(name = "pax_type")
    private String paxType;

    @Column(name = "pax_amount")
    private Double paxAmount;

    
}
