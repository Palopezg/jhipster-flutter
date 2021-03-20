package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.TipoObra;
import com.mycompany.myapp.repository.TipoObraRepository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.TipoObra}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class TipoObraResource {

    private final Logger log = LoggerFactory.getLogger(TipoObraResource.class);

    private static final String ENTITY_NAME = "tipoObra";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TipoObraRepository tipoObraRepository;

    public TipoObraResource(TipoObraRepository tipoObraRepository) {
        this.tipoObraRepository = tipoObraRepository;
    }

    /**
     * {@code POST  /tipo-obras} : Create a new tipoObra.
     *
     * @param tipoObra the tipoObra to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new tipoObra, or with status {@code 400 (Bad Request)} if the tipoObra has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/tipo-obras")
    public ResponseEntity<TipoObra> createTipoObra(@RequestBody TipoObra tipoObra) throws URISyntaxException {
        log.debug("REST request to save TipoObra : {}", tipoObra);
        if (tipoObra.getId() != null) {
            throw new BadRequestAlertException("A new tipoObra cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TipoObra result = tipoObraRepository.save(tipoObra);
        return ResponseEntity.created(new URI("/api/tipo-obras/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /tipo-obras} : Updates an existing tipoObra.
     *
     * @param tipoObra the tipoObra to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated tipoObra,
     * or with status {@code 400 (Bad Request)} if the tipoObra is not valid,
     * or with status {@code 500 (Internal Server Error)} if the tipoObra couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/tipo-obras")
    public ResponseEntity<TipoObra> updateTipoObra(@RequestBody TipoObra tipoObra) throws URISyntaxException {
        log.debug("REST request to update TipoObra : {}", tipoObra);
        if (tipoObra.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        TipoObra result = tipoObraRepository.save(tipoObra);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, tipoObra.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /tipo-obras} : get all the tipoObras.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of tipoObras in body.
     */
    @GetMapping("/tipo-obras")
    public List<TipoObra> getAllTipoObras() {
        log.debug("REST request to get all TipoObras");
        return tipoObraRepository.findAll();
    }

    /**
     * {@code GET  /tipo-obras/:id} : get the "id" tipoObra.
     *
     * @param id the id of the tipoObra to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the tipoObra, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/tipo-obras/{id}")
    public ResponseEntity<TipoObra> getTipoObra(@PathVariable Long id) {
        log.debug("REST request to get TipoObra : {}", id);
        Optional<TipoObra> tipoObra = tipoObraRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(tipoObra);
    }

    /**
     * {@code DELETE  /tipo-obras/:id} : delete the "id" tipoObra.
     *
     * @param id the id of the tipoObra to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/tipo-obras/{id}")
    public ResponseEntity<Void> deleteTipoObra(@PathVariable Long id) {
        log.debug("REST request to delete TipoObra : {}", id);
        tipoObraRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
