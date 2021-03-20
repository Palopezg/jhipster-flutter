package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Obra;
import com.mycompany.myapp.repository.ObraRepository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Obra}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ObraResource {

    private final Logger log = LoggerFactory.getLogger(ObraResource.class);

    private static final String ENTITY_NAME = "obra";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ObraRepository obraRepository;

    public ObraResource(ObraRepository obraRepository) {
        this.obraRepository = obraRepository;
    }

    /**
     * {@code POST  /obras} : Create a new obra.
     *
     * @param obra the obra to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new obra, or with status {@code 400 (Bad Request)} if the obra has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/obras")
    public ResponseEntity<Obra> createObra(@RequestBody Obra obra) throws URISyntaxException {
        log.debug("REST request to save Obra : {}", obra);
        if (obra.getId() != null) {
            throw new BadRequestAlertException("A new obra cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Obra result = obraRepository.save(obra);
        return ResponseEntity.created(new URI("/api/obras/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /obras} : Updates an existing obra.
     *
     * @param obra the obra to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated obra,
     * or with status {@code 400 (Bad Request)} if the obra is not valid,
     * or with status {@code 500 (Internal Server Error)} if the obra couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/obras")
    public ResponseEntity<Obra> updateObra(@RequestBody Obra obra) throws URISyntaxException {
        log.debug("REST request to update Obra : {}", obra);
        if (obra.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Obra result = obraRepository.save(obra);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, obra.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /obras} : get all the obras.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of obras in body.
     */
    @GetMapping("/obras")
    public List<Obra> getAllObras() {
        log.debug("REST request to get all Obras");
        return obraRepository.findAll();
    }

    /**
     * {@code GET  /obras/:id} : get the "id" obra.
     *
     * @param id the id of the obra to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the obra, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/obras/{id}")
    public ResponseEntity<Obra> getObra(@PathVariable Long id) {
        log.debug("REST request to get Obra : {}", id);
        Optional<Obra> obra = obraRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(obra);
    }

    /**
     * {@code DELETE  /obras/:id} : delete the "id" obra.
     *
     * @param id the id of the obra to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/obras/{id}")
    public ResponseEntity<Void> deleteObra(@PathVariable Long id) {
        log.debug("REST request to delete Obra : {}", id);
        obraRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
