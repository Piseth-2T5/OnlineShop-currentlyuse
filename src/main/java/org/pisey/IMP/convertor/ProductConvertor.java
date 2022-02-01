package org.pisey.IMP.convertor;

import org.springframework.stereotype.Component;

import java.util.List;

import org.pisey.IMP.dto.ProductDto;
import org.pisey.IMP.model.Product;

@Component
public class ProductConvertor {

	public ProductDto modelToDto(Product product) {
		ProductDto dto = new ProductDto();
		dto.setProductName(product.getProductName());
		dto.setPrice(product.getPrice());
		dto.setCost(product.getCost());
		
		
		return null;
	}
	public List<ProductDto> modelToDtos(){
		return null;
	}
	
	public ProductDto dtoToModel() {
	return null;
	}
	
}