package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.TipoEmp;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipoEmp entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoEmpRepository extends JpaRepository<TipoEmp, Long> {
}
