
package com.app.BudgetBuyers.registration.controller;

import java.util.List;

import javax.naming.directory.SearchResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.BudgetBuyers.registration.model.Customer;
import com.app.BudgetBuyers.registration.service.RegistrationService;

@RestController
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public Customer registerCustomer(@RequestBody Customer customer) throws Exception {
		String tempEmailId=customer.getEmailId();
		if(tempEmailId !=null && !"".equals(tempEmailId)) {
			Customer customerobj=service.fetchCustomerByEmailId(tempEmailId);
            if (customerobj !=null) {
            	throw new Exception("user with this "+tempEmailId+" is already exist");
            	
            }
		}
		Customer customerObj=null;
		customerObj=service.saveCustomer(customer);
		return customerObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Customer loginUser(@RequestBody Customer customer) throws Exception {
		String tempEmailId=customer.getEmailId();
		String tempPass=customer.getPassword();
		Customer customerObj=null;
		if(tempEmailId !=null && tempPass!=null) {
			customerObj=service.fetchCustomerByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(customerObj==null) {
			throw new Exception("bad credentials");
		}
		return customerObj;
		
	}
	
}
    