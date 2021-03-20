package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Emprendimiento;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Emprendimiento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EmprendimientoRepository extends JpaRepository<Emprendimiento, Long> {
}
