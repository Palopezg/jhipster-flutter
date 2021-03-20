package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.EjecCuentas;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the EjecCuentas entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EjecCuentasRepository extends JpaRepository<EjecCuentas, Long> {
}
