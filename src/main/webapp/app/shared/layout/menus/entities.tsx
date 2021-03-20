import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/despliegue">
      <Translate contentKey="global.menu.entities.despliegue" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/segmento">
      <Translate contentKey="global.menu.entities.segmento" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tecnologia">
      <Translate contentKey="global.menu.entities.tecnologia" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/competencia">
      <Translate contentKey="global.menu.entities.competencia" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/estado">
      <Translate contentKey="global.menu.entities.estado" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/nse">
      <Translate contentKey="global.menu.entities.nse" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tipo-obra">
      <Translate contentKey="global.menu.entities.tipoObra" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/obra">
      <Translate contentKey="global.menu.entities.obra" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tipo-emp">
      <Translate contentKey="global.menu.entities.tipoEmp" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/ejec-cuentas">
      <Translate contentKey="global.menu.entities.ejecCuentas" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/direccion">
      <Translate contentKey="global.menu.entities.direccion" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/emprendimiento">
      <Translate contentKey="global.menu.entities.emprendimiento" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/grupo-alarma">
      <Translate contentKey="global.menu.entities.grupoAlarma" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/grupo-emprendimiento">
      <Translate contentKey="global.menu.entities.grupoEmprendimiento" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/grupo-usuario">
      <Translate contentKey="global.menu.entities.grupoUsuario" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/pauta">
      <Translate contentKey="global.menu.entities.pauta" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/master-tipo-emp">
      <Translate contentKey="global.menu.entities.masterTipoEmp" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
