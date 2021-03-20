package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class GrupoAlarmaTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(GrupoAlarma.class);
        GrupoAlarma grupoAlarma1 = new GrupoAlarma();
        grupoAlarma1.setId(1L);
        GrupoAlarma grupoAlarma2 = new GrupoAlarma();
        grupoAlarma2.setId(grupoAlarma1.getId());
        assertThat(grupoAlarma1).isEqualTo(grupoAlarma2);
        grupoAlarma2.setId(2L);
        assertThat(grupoAlarma1).isNotEqualTo(grupoAlarma2);
        grupoAlarma1.setId(null);
        assertThat(grupoAlarma1).isNotEqualTo(grupoAlarma2);
    }
}
