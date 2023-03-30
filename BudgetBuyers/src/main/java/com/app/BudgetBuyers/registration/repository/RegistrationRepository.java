
package com.app.BudgetBuyers.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.BudgetBuyers.registration.model.Customer;

public interface RegistrationRepository extends JpaRepository<Customer, Integer>{

	public Customer findByEmailId(String emailId);
	public Customer findByEmailIdAndPassword(String emailId,String password);
}
