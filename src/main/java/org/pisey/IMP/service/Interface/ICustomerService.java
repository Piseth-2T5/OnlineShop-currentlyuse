package org.pisey.IMP.service.Interface;

import java.util.List;

import org.pisey.IMP.model.Customer;
import org.pisey.IMP.model.Product;

public interface ICustomerService {
	
	// CRUD Operation
	Customer getCustomerById(long Id);
	
	String validationCustomerId(long Id);
	String validationCustomerName(String name,long Id);
	List<Customer> getAllCustomers();
	void deleteCustomerById(long id);
	Customer addCustomer(Customer customer);
	Customer updateCustomerByID(long id, Customer data);
	void deleteAllCustomer();
//	long fineProductByOrderId(long orderId);
//	long fineProductBySaleId(long saleId);
	
	
	

}
