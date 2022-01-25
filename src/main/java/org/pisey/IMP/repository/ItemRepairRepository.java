package org.pisey.IMP.repository;

import org.pisey.IMP.model.ItemRepair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepairRepository extends JpaRepository<ItemRepair, Long>{
}
