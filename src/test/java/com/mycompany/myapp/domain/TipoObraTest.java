package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class TipoObraTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TipoObra.class);
        TipoObra tipoObra1 = new TipoObra();
        tipoObra1.setId(1L);
        TipoObra tipoObra2 = new TipoObra();
        tipoObra2.setId(tipoObra1.getId());
        assertThat(tipoObra1).isEqualTo(tipoObra2);
        tipoObra2.setId(2L);
        assertThat(tipoObra1).isNotEqualTo(tipoObra2);
        tipoObra1.setId(null);
        assertThat(tipoObra1).isNotEqualTo(tipoObra2);
    }
}
