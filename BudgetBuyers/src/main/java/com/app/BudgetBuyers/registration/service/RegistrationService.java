
package com.app.BudgetBuyers.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.BudgetBuyers.registration.model.Customer;
import com.app.BudgetBuyers.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repo;
	public Customer saveCustomer(Customer customer) {
		return repo.save(customer);
		
	}
	public Customer fetchCustomerByEmailId(String email) {
		return repo.findByEmailId(email);
	}
	
	public Customer fetchCustomerByEmailIdAndPassword(String email,String password) {
		return repo.findByEmailIdAndPassword(email,password);
	}
	

}