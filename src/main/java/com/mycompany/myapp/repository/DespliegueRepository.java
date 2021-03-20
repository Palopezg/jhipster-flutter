package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Despliegue;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Despliegue entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DespliegueRepository extends JpaRepository<Despliegue, Long> {
}
