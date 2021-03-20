package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.GrupoEmprendimiento;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the GrupoEmprendimiento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GrupoEmprendimientoRepository extends JpaRepository<GrupoEmprendimiento, Long> {
}
