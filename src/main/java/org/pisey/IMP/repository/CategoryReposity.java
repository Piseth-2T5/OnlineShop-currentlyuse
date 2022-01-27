package org.pisey.IMP.repository;

import org.pisey.IMP.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryReposity extends JpaRepository<Category, Long> {
}
