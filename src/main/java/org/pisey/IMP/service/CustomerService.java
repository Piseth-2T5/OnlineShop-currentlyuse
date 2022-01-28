package org.pisey.IMP.service;

import java.util.List;
import java.util.Optional;

import org.pisey.IMP.exception.ResourceNotFoundException;
import org.pisey.IMP.model.Customer;
import org.pisey.IMP.repository.CustomerRepository;
import org.pisey.IMP.service.Interface.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService implements ICustomerService{
	@Autowired
	private CustomerRepository repository;

	@Override
	public Customer getCustomerById(long id) {
		Customer customer = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The Customer Id" +id + "is not Exist In Db"));
		return customer;
	}

	@Override
	public List<Customer> getAllCustomers() {
		return repository.findAll();
	}
	
	@Override
	public void deleteCustomerById(long id) {
		Customer customer = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The Customer Id" +id + "is not Exist In Db"));
		repository.delete(customer);
	}
	
	@Override
	public Customer addCustomer(Customer customer) {
		return repository.save(customer);
	}

	@Override
	public Customer updateCustomerByID(long id, Customer data) {
		Customer customer = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("The Customer Id" +id + "is not Exist In Db"));
		customer.setFirstName(data.getFirstName());
		customer.setLastName(data.getLastName());
		customer.setEmail(data.getEmail());
		customer.setPhoneNumber(data.getPhoneNumber());
		Customer updateCustomer = repository.save(customer);
		return updateCustomer;
	}
	
	
	
	@Override
	public String validationCustomerId(long Id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String validationCustomerName(String name, long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteAllCustomer() {
		List<Customer> customers = getAllCustomers();
		if (!customers.isEmpty()) {
			repository.deleteAll();
		}
		
	}
	

}
