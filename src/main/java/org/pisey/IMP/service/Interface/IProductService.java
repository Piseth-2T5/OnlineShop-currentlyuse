package org.pisey.IMP.service.Interface;

import java.util.List;

import org.pisey.IMP.model.Product;

public interface IProductService {

	Product getProductById(long Id);
	
	String validationProductId(long Id);
	String validationProductName(String name,long Id);
	long fineProductByOrderId(long orderId);
	long fineProductBySaleId(long saleId);
	List<Product> getAllProducts();
	void deleteProductById(long id);
	Product addProduct(Product product);
	Product updateProductByID(long id, Product data);
}
