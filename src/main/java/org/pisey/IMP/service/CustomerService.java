package org.pisey.IMP.service;

import org.pisey.IMP.repository.CustomerRepository;
import org.pisey.IMP.service.Interface.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService implements ICustomerService{
	@Autowired
	private CustomerRepository repository;
	
	

}
