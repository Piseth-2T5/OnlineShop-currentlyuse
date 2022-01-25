package org.pisey.IMP.controller;

import java.util.List;

import org.pisey.IMP.model.Customer;
import org.pisey.IMP.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer/")
public class CustomerController {
	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	// Create Customer
	@GetMapping("/customers")
	public List<Customer> getAllCustomer(){
		return customerRepository.findAll();
	}
	
	// View All Customer
	
	// Get Customer by ID
	
	
	// Edit Customer By ID 
	
	// Delete Customer/
	
	
	
}
