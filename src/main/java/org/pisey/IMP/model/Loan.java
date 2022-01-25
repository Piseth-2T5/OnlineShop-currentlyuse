package org.pisey.IMP.model;

import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.pisey.IMP.Utilities.Helper;
import org.pisey.IMP.model.Borrower;
import org.pisey.IMP.model.Item;


@Entity
@Table(name = "loan")
public class Loan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "loan_id")
	private long id;
	@Column(name = "loan_duration")
	private long loanDuration;
	@Column(name = "issue_date")
	private String issueDate;
	@Column(name = "return_date")
	private String returnDate;
	@Column(name = "total_fine")
	private double totalFine;

	@ManyToOne(fetch = FetchType.LAZY)
	private Item item;

	@ManyToOne(fetch = FetchType.LAZY)
	private Borrower borrower;

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public Borrower getBorrower() {
		return borrower;
	}

	public void setBorrower(Borrower borrower) {
		this.borrower = borrower;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getLoanDuration() {
		return loanDuration;
	}

	public void setLoanDuration(long loanDuration) {
		this.loanDuration = loanDuration;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}

	public String getReturnDate() {
		return returnDate;
	}


	public double getTotalFine() {
		return totalFine;
	}

	public void setTotalFine(double totalFine) {
		this.totalFine = totalFine;
	}
	
	
	//Add More Method
	
	public void setReturnDate() {
		returnDate = Helper.getCurrentTime();
	}

	public double calculateFine() {
		double _totalFine = 0;
		double fineRate = 0;
		try {
			if (!returnDate.isEmpty()) {
				if (item.getItemType().getTypename().equalsIgnoreCase("High Precedence")) {
					fineRate = Helper.highPrecedenceFineRate;
				}
				fineRate = Helper.lowPrecedenceFineRate;
				Date _issueDate = Helper.convertStringToDate(issueDate);
				Date _returnDate = Helper.convertStringToDate(returnDate);
				long daysBetween = ChronoUnit.DAYS.between(_issueDate.toInstant(), _returnDate.toInstant());
				if (daysBetween > 0) {
					_totalFine = daysBetween * fineRate;
				} else {
					_totalFine = 0;
				}

			}
		} catch (NullPointerException e) {
			System.out.println("Null Pointer Exception Caught");
		}
		totalFine = _totalFine;
		return _totalFine;
	}
}
