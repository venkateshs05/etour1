package com.etour.main.models;

import jakarta.persistence.*;

@Entity
@Table(name = "customer_master")
public class CustomerMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cust_id")
    private Integer custId;

    @Column(name = "cust_name", nullable = false, length = 255)
    private String custName;

    @Column(name = "cust_details", columnDefinition = "TEXT")
    private String custDetails;

    @Column(name = "username", length = 20)
    private String username;

    @Column(name = "password", length = 20)
    private String password;

    @Column(name = "mobile_no")
    private Long mobileNo;

    // Getters and Setters

    public Integer getCustId() {
        return custId;
    }

    public void setCustId(Integer custId) {
        this.custId = custId;
    }

    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

    public String getCustDetails() {
        return custDetails;
    }

    public void setCustDetails(String custDetails) {
        this.custDetails = custDetails;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(Long mobileNo) {
        this.mobileNo = mobileNo;
    }
}
