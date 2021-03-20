package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class GrupoEmprendimientoTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(GrupoEmprendimiento.class);
        GrupoEmprendimiento grupoEmprendimiento1 = new GrupoEmprendimiento();
        grupoEmprendimiento1.setId(1L);
        GrupoEmprendimiento grupoEmprendimiento2 = new GrupoEmprendimiento();
        grupoEmprendimiento2.setId(grupoEmprendimiento1.getId());
        assertThat(grupoEmprendimiento1).isEqualTo(grupoEmprendimiento2);
        grupoEmprendimiento2.setId(2L);
        assertThat(grupoEmprendimiento1).isNotEqualTo(grupoEmprendimiento2);
        grupoEmprendimiento1.setId(null);
        assertThat(grupoEmprendimiento1).isNotEqualTo(grupoEmprendimiento2);
    }
}
