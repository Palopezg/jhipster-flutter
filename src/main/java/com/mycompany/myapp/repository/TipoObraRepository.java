package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.TipoObra;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipoObra entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoObraRepository extends JpaRepository<TipoObra, Long> {
}
