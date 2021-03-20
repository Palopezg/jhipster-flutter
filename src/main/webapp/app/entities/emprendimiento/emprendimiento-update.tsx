import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IObra } from 'app/shared/model/obra.model';
import { getEntities as getObras } from 'app/entities/obra/obra.reducer';
import { ITipoObra } from 'app/shared/model/tipo-obra.model';
import { getEntities as getTipoObras } from 'app/entities/tipo-obra/tipo-obra.reducer';
import { ITipoEmp } from 'app/shared/model/tipo-emp.model';
import { getEntities as getTipoEmps } from 'app/entities/tipo-emp/tipo-emp.reducer';
import { IEstado } from 'app/shared/model/estado.model';
import { getEntities as getEstados } from 'app/entities/estado/estado.reducer';
import { ICompetencia } from 'app/shared/model/competencia.model';
import { getEntities as getCompetencias } from 'app/entities/competencia/competencia.reducer';
import { IDespliegue } from 'app/shared/model/despliegue.model';
import { getEntities as getDespliegues } from 'app/entities/despliegue/despliegue.reducer';
import { INSE } from 'app/shared/model/nse.model';
import { getEntities as getNSes } from 'app/entities/nse/nse.reducer';
import { ISegmento } from 'app/shared/model/segmento.model';
import { getEntities as getSegmentos } from 'app/entities/segmento/segmento.reducer';
import { ITecnologia } from 'app/shared/model/tecnologia.model';
import { getEntities as getTecnologias } from 'app/entities/tecnologia/tecnologia.reducer';
import { IEjecCuentas } from 'app/shared/model/ejec-cuentas.model';
import { getEntities as getEjecCuentas } from 'app/entities/ejec-cuentas/ejec-cuentas.reducer';
import { IDireccion } from 'app/shared/model/direccion.model';
import { getEntities as getDireccions } from 'app/entities/direccion/direccion.reducer';
import { getEntity, updateEntity, createEntity, reset } from './emprendimiento.reducer';
import { IEmprendimiento } from 'app/shared/model/emprendimiento.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEmprendimientoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmprendimientoUpdate = (props: IEmprendimientoUpdateProps) => {
  const [obraId, setObraId] = useState('0');
  const [tipoObraId, setTipoObraId] = useState('0');
  const [tipoEmpId, setTipoEmpId] = useState('0');
  const [estadoId, setEstadoId] = useState('0');
  const [competenciaId, setCompetenciaId] = useState('0');
  const [despliegueId, setDespliegueId] = useState('0');
  const [nSEId, setNSeId] = useState('0');
  const [segmentoId, setSegmentoId] = useState('0');
  const [tecnologiaId, setTecnologiaId] = useState('0');
  const [ejecCuentasId, setEjecCuentasId] = useState('0');
  const [direccionId, setDireccionId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const {
    emprendimientoEntity,
    obras,
    tipoObras,
    tipoEmps,
    estados,
    competencias,
    despliegues,
    nSES,
    segmentos,
    tecnologias,
    ejecCuentas,
    direccions,
    loading,
    updating,
  } = props;

  const handleClose = () => {
    props.history.push('/emprendimiento');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getObras();
    props.getTipoObras();
    props.getTipoEmps();
    props.getEstados();
    props.getCompetencias();
    props.getDespliegues();
    props.getNSes();
    props.getSegmentos();
    props.getTecnologias();
    props.getEjecCuentas();
    props.getDireccions();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...emprendimientoEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="jhipsterFlutterApp.emprendimiento.home.createOrEditLabel">
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.home.createOrEditLabel">Create or edit a Emprendimiento</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : emprendimientoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="emprendimiento-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="emprendimiento-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nombreLabel" for="emprendimiento-nombre">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.nombre">Nombre</Translate>
                </Label>
                <AvField id="emprendimiento-nombre" type="text" name="nombre" />
              </AvGroup>
              <AvGroup>
                <Label id="contactoLabel" for="emprendimiento-contacto">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.contacto">Contacto</Translate>
                </Label>
                <AvField id="emprendimiento-contacto" type="text" name="contacto" />
              </AvGroup>
              <AvGroup>
                <Label id="fechaFinObraLabel" for="emprendimiento-fechaFinObra">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFinObra">Fecha Fin Obra</Translate>
                </Label>
                <AvField id="emprendimiento-fechaFinObra" type="date" className="form-control" name="fechaFinObra" />
              </AvGroup>
              <AvGroup>
                <Label id="elementosDeRedLabel" for="emprendimiento-elementosDeRed">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.elementosDeRed">Elementos De Red</Translate>
                </Label>
                <AvField id="emprendimiento-elementosDeRed" type="text" name="elementosDeRed" />
              </AvGroup>
              <AvGroup>
                <Label id="clientesCatvLabel" for="emprendimiento-clientesCatv">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCatv">Clientes Catv</Translate>
                </Label>
                <AvField id="emprendimiento-clientesCatv" type="text" name="clientesCatv" />
              </AvGroup>
              <AvGroup>
                <Label id="clientesFibertelLabel" for="emprendimiento-clientesFibertel">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertel">Clientes Fibertel</Translate>
                </Label>
                <AvField id="emprendimiento-clientesFibertel" type="text" name="clientesFibertel" />
              </AvGroup>
              <AvGroup>
                <Label id="clientesFibertelLiteLabel" for="emprendimiento-clientesFibertelLite">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertelLite">Clientes Fibertel Lite</Translate>
                </Label>
                <AvField id="emprendimiento-clientesFibertelLite" type="text" name="clientesFibertelLite" />
              </AvGroup>
              <AvGroup>
                <Label id="clientesFlowLabel" for="emprendimiento-clientesFlow">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFlow">Clientes Flow</Translate>
                </Label>
                <AvField id="emprendimiento-clientesFlow" type="text" name="clientesFlow" />
              </AvGroup>
              <AvGroup>
                <Label id="clientesComboLabel" for="emprendimiento-clientesCombo">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCombo">Clientes Combo</Translate>
                </Label>
                <AvField id="emprendimiento-clientesCombo" type="text" name="clientesCombo" />
              </AvGroup>
              <AvGroup>
                <Label id="lineasVozLabel" for="emprendimiento-lineasVoz">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.lineasVoz">Lineas Voz</Translate>
                </Label>
                <AvField id="emprendimiento-lineasVoz" type="text" name="lineasVoz" />
              </AvGroup>
              <AvGroup>
                <Label id="mesesDeFinalizadoLabel" for="emprendimiento-mesesDeFinalizado">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.mesesDeFinalizado">Meses De Finalizado</Translate>
                </Label>
                <AvField id="emprendimiento-mesesDeFinalizado" type="text" name="mesesDeFinalizado" />
              </AvGroup>
              <AvGroup>
                <Label id="altasBCLabel" for="emprendimiento-altasBC">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.altasBC">Altas BC</Translate>
                </Label>
                <AvField id="emprendimiento-altasBC" type="text" name="altasBC" />
              </AvGroup>
              <AvGroup>
                <Label id="penetracionVivLotLabel" for="emprendimiento-penetracionVivLot">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionVivLot">Penetracion Viv Lot</Translate>
                </Label>
                <AvField id="emprendimiento-penetracionVivLot" type="text" name="penetracionVivLot" />
              </AvGroup>
              <AvGroup>
                <Label id="penetracionBCLabel" for="emprendimiento-penetracionBC">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionBC">Penetracion BC</Translate>
                </Label>
                <AvField id="emprendimiento-penetracionBC" type="text" name="penetracionBC" />
              </AvGroup>
              <AvGroup>
                <Label id="demanda1Label" for="emprendimiento-demanda1">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda1">Demanda 1</Translate>
                </Label>
                <AvField id="emprendimiento-demanda1" type="text" name="demanda1" />
              </AvGroup>
              <AvGroup>
                <Label id="demanda2Label" for="emprendimiento-demanda2">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda2">Demanda 2</Translate>
                </Label>
                <AvField id="emprendimiento-demanda2" type="text" name="demanda2" />
              </AvGroup>
              <AvGroup>
                <Label id="demanda3Label" for="emprendimiento-demanda3">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda3">Demanda 3</Translate>
                </Label>
                <AvField id="emprendimiento-demanda3" type="text" name="demanda3" />
              </AvGroup>
              <AvGroup>
                <Label id="demanda4Label" for="emprendimiento-demanda4">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda4">Demanda 4</Translate>
                </Label>
                <AvField id="emprendimiento-demanda4" type="text" name="demanda4" />
              </AvGroup>
              <AvGroup>
                <Label id="lotesLabel" for="emprendimiento-lotes">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.lotes">Lotes</Translate>
                </Label>
                <AvField id="emprendimiento-lotes" type="text" name="lotes" />
              </AvGroup>
              <AvGroup>
                <Label id="viviendasLabel" for="emprendimiento-viviendas">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.viviendas">Viviendas</Translate>
                </Label>
                <AvField id="emprendimiento-viviendas" type="text" name="viviendas" />
              </AvGroup>
              <AvGroup>
                <Label id="comProfLabel" for="emprendimiento-comProf">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.comProf">Com Prof</Translate>
                </Label>
                <AvField id="emprendimiento-comProf" type="text" name="comProf" />
              </AvGroup>
              <AvGroup>
                <Label id="habitacionesLabel" for="emprendimiento-habitaciones">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.habitaciones">Habitaciones</Translate>
                </Label>
                <AvField id="emprendimiento-habitaciones" type="text" name="habitaciones" />
              </AvGroup>
              <AvGroup>
                <Label id="manzanasLabel" for="emprendimiento-manzanas">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.manzanas">Manzanas</Translate>
                </Label>
                <AvField id="emprendimiento-manzanas" type="text" name="manzanas" />
              </AvGroup>
              <AvGroup>
                <Label id="demandaLabel" for="emprendimiento-demanda">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda">Demanda</Translate>
                </Label>
                <AvField id="emprendimiento-demanda" type="text" name="demanda" />
              </AvGroup>
              <AvGroup>
                <Label id="fechaDeRelevamientoLabel" for="emprendimiento-fechaDeRelevamiento">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaDeRelevamiento">Fecha De Relevamiento</Translate>
                </Label>
                <AvField id="emprendimiento-fechaDeRelevamiento" type="date" className="form-control" name="fechaDeRelevamiento" />
              </AvGroup>
              <AvGroup>
                <Label id="telefonoLabel" for="emprendimiento-telefono">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.telefono">Telefono</Translate>
                </Label>
                <AvField id="emprendimiento-telefono" type="text" name="telefono" />
              </AvGroup>
              <AvGroup>
                <Label id="anoPriorizacionLabel" for="emprendimiento-anoPriorizacion">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.anoPriorizacion">Ano Priorizacion</Translate>
                </Label>
                <AvField id="emprendimiento-anoPriorizacion" type="date" className="form-control" name="anoPriorizacion" />
              </AvGroup>
              <AvGroup>
                <Label id="contratoOpenLabel" for="emprendimiento-contratoOpen">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.contratoOpen">Contrato Open</Translate>
                </Label>
                <AvField id="emprendimiento-contratoOpen" type="text" name="contratoOpen" />
              </AvGroup>
              <AvGroup check>
                <Label id="negociacionLabel">
                  <AvInput id="emprendimiento-negociacion" type="checkbox" className="form-check-input" name="negociacion" />
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.negociacion">Negociacion</Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="estadoBCLabel" for="emprendimiento-estadoBC">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoBC">Estado BC</Translate>
                </Label>
                <AvField id="emprendimiento-estadoBC" type="text" name="estadoBC" />
              </AvGroup>
              <AvGroup>
                <Label id="fechaLabel" for="emprendimiento-fecha">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fecha">Fecha</Translate>
                </Label>
                <AvField id="emprendimiento-fecha" type="date" className="form-control" name="fecha" />
              </AvGroup>
              <AvGroup>
                <Label id="codigoDeFirmaLabel" for="emprendimiento-codigoDeFirma">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.codigoDeFirma">Codigo De Firma</Translate>
                </Label>
                <AvField id="emprendimiento-codigoDeFirma" type="text" name="codigoDeFirma" />
              </AvGroup>
              <AvGroup>
                <Label id="fechaFirmaLabel" for="emprendimiento-fechaFirma">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFirma">Fecha Firma</Translate>
                </Label>
                <AvField id="emprendimiento-fechaFirma" type="date" className="form-control" name="fechaFirma" />
              </AvGroup>
              <AvGroup>
                <Label id="observacionesLabel" for="emprendimiento-observaciones">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.observaciones">Observaciones</Translate>
                </Label>
                <AvField id="emprendimiento-observaciones" type="text" name="observaciones" />
              </AvGroup>
              <AvGroup>
                <Label id="comentarioLabel" for="emprendimiento-comentario">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.comentario">Comentario</Translate>
                </Label>
                <AvField id="emprendimiento-comentario" type="text" name="comentario" />
              </AvGroup>
              <AvGroup>
                <Label id="estadoFirmaLabel" for="emprendimiento-estadoFirma">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoFirma">Estado Firma</Translate>
                </Label>
                <AvField id="emprendimiento-estadoFirma" type="text" name="estadoFirma" />
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-obra">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.obra">Obra</Translate>
                </Label>
                <AvInput id="emprendimiento-obra" type="select" className="form-control" name="obra.id">
                  <option value="" key="0" />
                  {obras
                    ? obras.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-tipoObra">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoObra">Tipo Obra</Translate>
                </Label>
                <AvInput id="emprendimiento-tipoObra" type="select" className="form-control" name="tipoObra.id">
                  <option value="" key="0" />
                  {tipoObras
                    ? tipoObras.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-tipoEmp">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoEmp">Tipo Emp</Translate>
                </Label>
                <AvInput id="emprendimiento-tipoEmp" type="select" className="form-control" name="tipoEmp.id">
                  <option value="" key="0" />
                  {tipoEmps
                    ? tipoEmps.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-estado">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estado">Estado</Translate>
                </Label>
                <AvInput id="emprendimiento-estado" type="select" className="form-control" name="estado.id">
                  <option value="" key="0" />
                  {estados
                    ? estados.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-competencia">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.competencia">Competencia</Translate>
                </Label>
                <AvInput id="emprendimiento-competencia" type="select" className="form-control" name="competencia.id">
                  <option value="" key="0" />
                  {competencias
                    ? competencias.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-despliegue">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.despliegue">Despliegue</Translate>
                </Label>
                <AvInput id="emprendimiento-despliegue" type="select" className="form-control" name="despliegue.id">
                  <option value="" key="0" />
                  {despliegues
                    ? despliegues.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-nSE">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.nSE">N SE</Translate>
                </Label>
                <AvInput id="emprendimiento-nSE" type="select" className="form-control" name="nSE.id">
                  <option value="" key="0" />
                  {nSES
                    ? nSES.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-segmento">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.segmento">Segmento</Translate>
                </Label>
                <AvInput id="emprendimiento-segmento" type="select" className="form-control" name="segmento.id">
                  <option value="" key="0" />
                  {segmentos
                    ? segmentos.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-tecnologia">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tecnologia">Tecnologia</Translate>
                </Label>
                <AvInput id="emprendimiento-tecnologia" type="select" className="form-control" name="tecnologia.id">
                  <option value="" key="0" />
                  {tecnologias
                    ? tecnologias.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-ejecCuentas">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.ejecCuentas">Ejec Cuentas</Translate>
                </Label>
                <AvInput id="emprendimiento-ejecCuentas" type="select" className="form-control" name="ejecCuentas.id">
                  <option value="" key="0" />
                  {ejecCuentas
                    ? ejecCuentas.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.nombre}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="emprendimiento-direccion">
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.direccion">Direccion</Translate>
                </Label>
                <AvInput id="emprendimiento-direccion" type="select" className="form-control" name="direccion.id">
                  <option value="" key="0" />
                  {direccions
                    ? direccions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.calle}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/emprendimiento" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  obras: storeState.obra.entities,
  tipoObras: storeState.tipoObra.entities,
  tipoEmps: storeState.tipoEmp.entities,
  estados: storeState.estado.entities,
  competencias: storeState.competencia.entities,
  despliegues: storeState.despliegue.entities,
  nSES: storeState.nSE.entities,
  segmentos: storeState.segmento.entities,
  tecnologias: storeState.tecnologia.entities,
  ejecCuentas: storeState.ejecCuentas.entities,
  direccions: storeState.direccion.entities,
  emprendimientoEntity: storeState.emprendimiento.entity,
  loading: storeState.emprendimiento.loading,
  updating: storeState.emprendimiento.updating,
  updateSuccess: storeState.emprendimiento.updateSuccess,
});

const mapDispatchToProps = {
  getObras,
  getTipoObras,
  getTipoEmps,
  getEstados,
  getCompetencias,
  getDespliegues,
  getNSes,
  getSegmentos,
  getTecnologias,
  getEjecCuentas,
  getDireccions,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmprendimientoUpdate);
