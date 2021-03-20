package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.NSE;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the NSE entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NSERepository extends JpaRepository<NSE, Long> {
}
