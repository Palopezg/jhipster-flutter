package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Pauta;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Pauta entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PautaRepository extends JpaRepository<Pauta, Long> {
}
