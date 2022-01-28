package org.pisey.IMP.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.pisey.IMP.model.Customer;
import org.pisey.IMP.model.Product;
import org.pisey.IMP.repository.CustomerRepository;
import org.pisey.IMP.service.CustomerService;
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
@RequestMapping("/api/customers")
public class CustomerController {
	
	
	@Autowired
	private CustomerService customerService;
	
	// View All Customer
	@GetMapping
	public List<Customer> getAllCustomer(){
		return customerService.getAllCustomers();
	}
	
	// Get Customer by ID
	@GetMapping("/{id}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable long id) {
		Customer customer = customerService.getCustomerById(id);
		return ResponseEntity.ok(customer);
	}
	
	// Create Customer
	@PostMapping
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer data) {
		Customer customer = customerService.addCustomer(data);
		return ResponseEntity.ok(customer);
	}
	
	// Edit Customer By ID 
	@PutMapping("/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable long id, @RequestBody Customer customer) {
		Customer uddatedCustomer = customerService.updateCustomerByID(id, customer);
		return ResponseEntity.ok(uddatedCustomer);
	}
	
	
	// Delete Customer/
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable long id) {
		customerService.deleteCustomerById(id);
		Map<String, Boolean> responce = new HashMap<>();
		responce.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(responce);
	}
	// Delete All Customer. 
	@DeleteMapping
	public ResponseEntity<Map<String, Boolean>> deleteAll(){
		customerService.deleteAllCustomer();
		Map<String, Boolean> responce = new HashMap<>();
		responce.put("Deleted All Products In DB", Boolean.TRUE);
		return ResponseEntity.ok(responce);
	}
	
}
