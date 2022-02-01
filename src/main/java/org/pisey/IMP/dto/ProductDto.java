package org.pisey.IMP.dto;


import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class ProductDto {
	
	private long productId;
	
	@NotNull(message = "Item name is mandatory.")
	@Pattern(regexp = "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?", message = "Item name can only contain alphabets.")
	private String productName;
	
	@NotNull(message = "Product Price is mandatory")
	@Min(value = 1, message = "Product Price must be greater than 0.")
	@Max(value =  (long) Double.MAX_VALUE, message = "Item price must be lesser than" + Double.MAX_VALUE)
	private Double price;
	
	@NotNull(message = "Product cost is mandatory")
	@Min(value = 1, message = "Product cost must be greater than 0.")
	@Max(value =  (long) Double.MAX_VALUE, message = "Item price must be lesser than" + Double.MAX_VALUE)
	private Double cost;
	
	@NotNull(message = "Product quantity is mandatory.")
	@Min(value = 1, message = "Product quantity must be greater than 0.")
	@Max(value = Integer.MAX_VALUE, message = "Invoice number must be lesser than" + Integer.MAX_VALUE)
	private int inStock;
	
	@NotNull(message = "category is mandatory.")
	@Pattern(regexp = "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?", message = "Category name can only contain alphabets.")
	private String category;
	
	@NotNull(message = "Brand is mandatory")
	@Pattern(regexp = "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?", message = "Category name can only contain alphabets.")
	private String brand;
	
	@NotNull(message = "Brand is mandatory")
	@Pattern(regexp = "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?", message = "Category name can only contain alphabets.")
	private String unit;
	
	
	public ProductDto() {
	}





	public ProductDto(long productId, String productName,Double price,Double cost,int inStock,String category,String brand, String unit) {
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.cost = cost;
		this.inStock =inStock;
		this.category = category;
		this.brand = brand;
		this.unit = unit;
	}





	public long getProductId() {
		return productId;
	}


	public void setProductId(long productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public Double getCost() {
		return cost;
	}


	public void setCost(Double cost) {
		this.cost = cost;
	}


	public int getInStock() {
		return inStock;
	}


	public void setInStock(int inStock) {
		this.inStock = inStock;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public String getUnit() {
		return unit;
	}


	public void setUnit(String unit) {
		this.unit = unit;
	}
	

}
