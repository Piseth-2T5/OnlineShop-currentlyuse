package org.pisey.IMP.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.pisey.IMP.model.Product;
import org.pisey.IMP.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable long id) {
		Product product = productService.getProductById(id);
		return ResponseEntity.ok(product);
	}

	// add Product
	@PostMapping
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
		Product product2 = productService.addProduct(product);
		return ResponseEntity.ok(product2);
	}

	// Edit product By Id
	@PutMapping("/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product product) {
		Product uddatedProduct = productService.updateProductByID(id, product);
		return ResponseEntity.ok(uddatedProduct);
	}

	// Delete Product By Id
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable long id) {
		productService.deleteProductById(id);
		Map<String, Boolean> responce = new HashMap<>();
		responce.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(responce);
	}

}
