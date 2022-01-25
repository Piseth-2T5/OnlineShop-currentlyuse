package org.pisey.IMP.repository;

import org.pisey.IMP.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemIssuanceRepository extends JpaRepository<Loan, Long>{
}
