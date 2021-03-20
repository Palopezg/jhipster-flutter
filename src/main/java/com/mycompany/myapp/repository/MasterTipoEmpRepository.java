package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.MasterTipoEmp;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the MasterTipoEmp entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MasterTipoEmpRepository extends JpaRepository<MasterTipoEmp, Long> {
}
