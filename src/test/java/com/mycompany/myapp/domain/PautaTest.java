package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class PautaTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Pauta.class);
        Pauta pauta1 = new Pauta();
        pauta1.setId(1L);
        Pauta pauta2 = new Pauta();
        pauta2.setId(pauta1.getId());
        assertThat(pauta1).isEqualTo(pauta2);
        pauta2.setId(2L);
        assertThat(pauta1).isNotEqualTo(pauta2);
        pauta1.setId(null);
        assertThat(pauta1).isNotEqualTo(pauta2);
    }
}
