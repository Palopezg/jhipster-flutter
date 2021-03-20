package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Tecnologia;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Tecnologia entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long> {
}
