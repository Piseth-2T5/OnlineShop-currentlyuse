package org.pisey.IMP.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long productID;
	@Column(name =  "product_name")
	private String productName;
	@Column(name = "price")
	private double price;
	private double cost;
	private String unit;
	private int inStock;
	
	// OnetoOne between of product and product_brand

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "brand_id_fk")
	private Brand brand;
	// OnetoOne between of product and category 
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id_fk")
	private Category category;
	
	// OneToMany between of product and sale
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "product" )
	private List<SaleProduct> saleProducts = new ArrayList<>();
	
	// ManyToMany between of Order
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "product")
	private List<Order> orders = new ArrayList<>();	
	
	
	
	
	// Constructor and getter and setter. 
	public Product() {		
	}
	public Product(long id,String productName, double price, double cost, String unit, int inStock, Brand brand,
			Category category, List<SaleProduct> saleProducts, List<Order> orders) {
		super();
		this.productID = id;
		this.productName = productName;
		this.price = price;
		this.cost = cost;
		this.unit = unit;
		this.inStock = inStock;
		this.brand = brand;
		this.category = category;
		this.saleProducts = saleProducts;
		this.orders = orders;
	}


	
	public long getProductID() {
		return productID;
	}
	public void setProductID(long productID) {
		this.productID = productID;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public int getInStock() {
		return inStock;
	}
	public void setInStock(int inStock) {
		this.inStock = inStock;
	}
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<SaleProduct> getSaleProducts() {
		return saleProducts;
	}
	public void setSaleProducts(List<SaleProduct> saleProducts) {
		this.saleProducts = saleProducts;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	
}
