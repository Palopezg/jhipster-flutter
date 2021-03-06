package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class TipoEmpTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TipoEmp.class);
        TipoEmp tipoEmp1 = new TipoEmp();
        tipoEmp1.setId(1L);
        TipoEmp tipoEmp2 = new TipoEmp();
        tipoEmp2.setId(tipoEmp1.getId());
        assertThat(tipoEmp1).isEqualTo(tipoEmp2);
        tipoEmp2.setId(2L);
        assertThat(tipoEmp1).isNotEqualTo(tipoEmp2);
        tipoEmp1.setId(null);
        assertThat(tipoEmp1).isNotEqualTo(tipoEmp2);
    }
}
