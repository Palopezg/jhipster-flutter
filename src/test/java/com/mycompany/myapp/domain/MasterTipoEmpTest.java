package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class MasterTipoEmpTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MasterTipoEmp.class);
        MasterTipoEmp masterTipoEmp1 = new MasterTipoEmp();
        masterTipoEmp1.setId(1L);
        MasterTipoEmp masterTipoEmp2 = new MasterTipoEmp();
        masterTipoEmp2.setId(masterTipoEmp1.getId());
        assertThat(masterTipoEmp1).isEqualTo(masterTipoEmp2);
        masterTipoEmp2.setId(2L);
        assertThat(masterTipoEmp1).isNotEqualTo(masterTipoEmp2);
        masterTipoEmp1.setId(null);
        assertThat(masterTipoEmp1).isNotEqualTo(masterTipoEmp2);
    }
}
