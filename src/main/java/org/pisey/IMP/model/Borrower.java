package org.pisey.IMP.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.pisey.IMP.model.Loan;

@Entity
@Table(name = "borrower")
public class Borrower {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "borrower_id")
	private Long id;
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	private String email;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "borrower")
	private List<Loan> loan = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Loan> getLoan() {
		return loan;
	}

	public void setLoan(List<Loan> loan) {
		this.loan = loan;
	}

	
	
	// Add more Method
//	public double totalFine() {
//		double totalFine = 0;
//		for (Loan l : loan) {
//			totalFine += l.calculateFine();
//		}
//		return totalFine;
//	}
//
//	public void updateFine(double finePaid) {
//		double fine = 0;
//		for (Loan l : loan) {
//			if (finePaid < 0) {
//				break;
//			} else {
//				fine = l.getTotalFine();
//				l.setTotalFine(fine);
//				finePaid -= fine;
//			}
//		}
//	}
//
//	public void addLoan(Loan newLoan) {
//		this.loan.add(newLoan);
//		newLoan.setBorrower(this);
//	}
//
//	public void removeLoan(Loan reLoan) {
//		this.loan.remove(reLoan);
//		reLoan.setBorrower(null);
//	}
}
