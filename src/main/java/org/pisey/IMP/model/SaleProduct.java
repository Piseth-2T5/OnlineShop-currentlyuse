package org.pisey.IMP.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "sale")
public class SaleProduct {
	private static final CascadeType[] ALL = null;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "_id")
	private long saleId;
	@Column(name = "status")
	private String status;
	@Column(name = "quantiy")
	private int quantity;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "sale_date")
	private Date saleDate;

	// Customer and Order one to one mapping

	@ManyToOne
	@JoinColumn(name="customer_id", nullable = false)
	private Customer customer;
	
	// Order and Sale products
// Errror 
	@OneToMany(cascade=CascadeType.ALL, mappedBy="saleProduct")
	public List<Order> orders = new ArrayList<>();
	
	
	
	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public static CascadeType[] getAll() {
		return ALL;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public SaleProduct() {
		super();
	}

	public SaleProduct(long saleId, String status, int quantity, Date saleDate) {
		super();
		this.saleId = saleId;
		this.status = status;
		this.quantity = quantity;
		this.saleDate = saleDate;
	}

	// Getter and setter
	public long getSaleId() {
		return saleId;
	}

	public void setSaleId(long saleId) {
		this.saleId = saleId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}

}
