package org.pisey.IMP.service;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
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
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCustomerById(long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Customer addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customer updateCustomerByID(long id, Customer customer) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
