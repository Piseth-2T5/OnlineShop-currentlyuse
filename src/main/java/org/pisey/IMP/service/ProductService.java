package org.pisey.IMP.service;
import java.util.List;
import java.util.Optional;

import org.pisey.IMP.exception.ResourceNotFoundException;
import org.pisey.IMP.model.Product;
import org.pisey.IMP.repository.ProductReposity;
import org.pisey.IMP.service.Interface.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
	@Autowired
	private ProductReposity productReposity;
	
	
	@Override
	public List<Product> getAllProducts() {
		return productReposity.findAll();
	}
	@Override
	public Product getProductById(long Id) {
		Optional<Product> optional = productReposity.findById(Id);
		Product product = null;
		if(optional.isPresent()) {
			product = optional.get();
		}else {
			//Exception of Not match Id..
		}
		return product;
	}

	@Override
	public String validationProductId(long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String validationProductName(String name, long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public long fineProductByOrderId(long orderId) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public long fineProductBySaleId(long saleId) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public void deleteProductById(long id) {
		
		Product product = productReposity.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not exist with id:"+ id));
		productReposity.delete(product);
	}
	@Override
	public Product addProduct(Product product) {
		return productReposity.save(product);
	}
	@Override
	public Product updateProductByID(long id, Product data) {
		Product product = productReposity.findById(id).orElseThrow(() ->new ResourceNotFoundException("Product not exist with Id:" + id));
		product.setProductName(data.getProductName());
		product.setInStock(data.getInStock());
		product.setPrice(data.getPrice());
		product.setCost(data.getCost());
		
		Product updatedProduct = productReposity.save(product);
		return updatedProduct;
	}
	@Override
	public void deleleAllproduct() {
		List<Product> products = getAllProducts();
		if(!products.isEmpty()) {
			productReposity.deleteAll();
		}
	}

	
}
