package org.pisey.IMP.repository;

import org.pisey.IMP.model.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BorrowerRepository extends JpaRepository<Borrower, Long>{
}
