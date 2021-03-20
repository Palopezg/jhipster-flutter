package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Competencia;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Competencia entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CompetenciaRepository extends JpaRepository<Competencia, Long> {
}
