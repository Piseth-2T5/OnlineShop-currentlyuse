package org.pisey.IMP.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
@Table(name = "order_items")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long orderId;
	@Column(name = "order_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date orderDate;
	// static 
	private String status;
	@Column(name = "total_price")
	private BigDecimal totalPrice;

	// Sale, Product Mapping

	@OneToMany(mappedBy="order")
	public List<Product> products;
	
	@ManyToOne
	@JoinColumn(name="sale_id")
	private SaleProduct saleProduct;
	


//	// Relation Ship with the product. 
	public Order() {
	}

	public Order(long orderId, Date orderDate, String status, BigDecimal totalPrice) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.status = status;
		this.totalPrice = totalPrice;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getQuantity() {
		return totalPrice;
	}

	public void setQuantity(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}
}
