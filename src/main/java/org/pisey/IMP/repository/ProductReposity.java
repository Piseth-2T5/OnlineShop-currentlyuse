package org.pisey.IMP.repository;

import org.pisey.IMP.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductReposity extends JpaRepository<Product,Long> {
}
