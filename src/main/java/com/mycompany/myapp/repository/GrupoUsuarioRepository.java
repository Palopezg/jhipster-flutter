package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.GrupoUsuario;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the GrupoUsuario entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GrupoUsuarioRepository extends JpaRepository<GrupoUsuario, Long> {
}
