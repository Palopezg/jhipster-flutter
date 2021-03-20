import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './emprendimiento.reducer';
import { IEmprendimiento } from 'app/shared/model/emprendimiento.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmprendimientoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EmprendimientoDetail = (props: IEmprendimientoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { emprendimientoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.emprendimiento.detail.title">Emprendimiento</Translate> [
          <b>{emprendimientoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nombre">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.nombre}</dd>
          <dt>
            <span id="contacto">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.contacto">Contacto</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.contacto}</dd>
          <dt>
            <span id="fechaFinObra">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFinObra">Fecha Fin Obra</Translate>
            </span>
          </dt>
          <dd>
            {emprendimientoEntity.fechaFinObra ? (
              <TextFormat value={emprendimientoEntity.fechaFinObra} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="elementosDeRed">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.elementosDeRed">Elementos De Red</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.elementosDeRed}</dd>
          <dt>
            <span id="clientesCatv">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCatv">Clientes Catv</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.clientesCatv}</dd>
          <dt>
            <span id="clientesFibertel">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertel">Clientes Fibertel</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.clientesFibertel}</dd>
          <dt>
            <span id="clientesFibertelLite">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertelLite">Clientes Fibertel Lite</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.clientesFibertelLite}</dd>
          <dt>
            <span id="clientesFlow">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFlow">Clientes Flow</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.clientesFlow}</dd>
          <dt>
            <span id="clientesCombo">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCombo">Clientes Combo</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.clientesCombo}</dd>
          <dt>
            <span id="lineasVoz">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.lineasVoz">Lineas Voz</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.lineasVoz}</dd>
          <dt>
            <span id="mesesDeFinalizado">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.mesesDeFinalizado">Meses De Finalizado</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.mesesDeFinalizado}</dd>
          <dt>
            <span id="altasBC">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.altasBC">Altas BC</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.altasBC}</dd>
          <dt>
            <span id="penetracionVivLot">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionVivLot">Penetracion Viv Lot</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.penetracionVivLot}</dd>
          <dt>
            <span id="penetracionBC">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionBC">Penetracion BC</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.penetracionBC}</dd>
          <dt>
            <span id="demanda1">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda1">Demanda 1</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.demanda1}</dd>
          <dt>
            <span id="demanda2">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda2">Demanda 2</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.demanda2}</dd>
          <dt>
            <span id="demanda3">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda3">Demanda 3</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.demanda3}</dd>
          <dt>
            <span id="demanda4">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda4">Demanda 4</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.demanda4}</dd>
          <dt>
            <span id="lotes">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.lotes">Lotes</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.lotes}</dd>
          <dt>
            <span id="viviendas">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.viviendas">Viviendas</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.viviendas}</dd>
          <dt>
            <span id="comProf">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.comProf">Com Prof</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.comProf}</dd>
          <dt>
            <span id="habitaciones">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.habitaciones">Habitaciones</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.habitaciones}</dd>
          <dt>
            <span id="manzanas">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.manzanas">Manzanas</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.manzanas}</dd>
          <dt>
            <span id="demanda">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda">Demanda</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.demanda}</dd>
          <dt>
            <span id="fechaDeRelevamiento">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaDeRelevamiento">Fecha De Relevamiento</Translate>
            </span>
          </dt>
          <dd>
            {emprendimientoEntity.fechaDeRelevamiento ? (
              <TextFormat value={emprendimientoEntity.fechaDeRelevamiento} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="telefono">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.telefono">Telefono</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.telefono}</dd>
          <dt>
            <span id="anoPriorizacion">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.anoPriorizacion">Ano Priorizacion</Translate>
            </span>
          </dt>
          <dd>
            {emprendimientoEntity.anoPriorizacion ? (
              <TextFormat value={emprendimientoEntity.anoPriorizacion} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="contratoOpen">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.contratoOpen">Contrato Open</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.contratoOpen}</dd>
          <dt>
            <span id="negociacion">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.negociacion">Negociacion</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.negociacion ? 'true' : 'false'}</dd>
          <dt>
            <span id="estadoBC">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoBC">Estado BC</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.estadoBC}</dd>
          <dt>
            <span id="fecha">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.fecha">Fecha</Translate>
            </span>
          </dt>
          <dd>
            {emprendimientoEntity.fecha ? (
              <TextFormat value={emprendimientoEntity.fecha} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="codigoDeFirma">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.codigoDeFirma">Codigo De Firma</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.codigoDeFirma}</dd>
          <dt>
            <span id="fechaFirma">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFirma">Fecha Firma</Translate>
            </span>
          </dt>
          <dd>
            {emprendimientoEntity.fechaFirma ? (
              <TextFormat value={emprendimientoEntity.fechaFirma} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="observaciones">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.observaciones">Observaciones</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.observaciones}</dd>
          <dt>
            <span id="comentario">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.comentario">Comentario</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.comentario}</dd>
          <dt>
            <span id="estadoFirma">
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoFirma">Estado Firma</Translate>
            </span>
          </dt>
          <dd>{emprendimientoEntity.estadoFirma}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.obra">Obra</Translate>
          </dt>
          <dd>{emprendimientoEntity.obra ? emprendimientoEntity.obra.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoObra">Tipo Obra</Translate>
          </dt>
          <dd>{emprendimientoEntity.tipoObra ? emprendimientoEntity.tipoObra.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoEmp">Tipo Emp</Translate>
          </dt>
          <dd>{emprendimientoEntity.tipoEmp ? emprendimientoEntity.tipoEmp.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.estado">Estado</Translate>
          </dt>
          <dd>{emprendimientoEntity.estado ? emprendimientoEntity.estado.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.competencia">Competencia</Translate>
          </dt>
          <dd>{emprendimientoEntity.competencia ? emprendimientoEntity.competencia.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.despliegue">Despliegue</Translate>
          </dt>
          <dd>{emprendimientoEntity.despliegue ? emprendimientoEntity.despliegue.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.nSE">N SE</Translate>
          </dt>
          <dd>{emprendimientoEntity.nSE ? emprendimientoEntity.nSE.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.segmento">Segmento</Translate>
          </dt>
          <dd>{emprendimientoEntity.segmento ? emprendimientoEntity.segmento.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.tecnologia">Tecnologia</Translate>
          </dt>
          <dd>{emprendimientoEntity.tecnologia ? emprendimientoEntity.tecnologia.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.ejecCuentas">Ejec Cuentas</Translate>
          </dt>
          <dd>{emprendimientoEntity.ejecCuentas ? emprendimientoEntity.ejecCuentas.nombre : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.emprendimiento.direccion">Direccion</Translate>
          </dt>
          <dd>{emprendimientoEntity.direccion ? emprendimientoEntity.direccion.calle : ''}</dd>
        </dl>
        <Button tag={Link} to="/emprendimiento" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/emprendimiento/${emprendimientoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ emprendimiento }: IRootState) => ({
  emprendimientoEntity: emprendimiento.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EmprendimientoDetail);
