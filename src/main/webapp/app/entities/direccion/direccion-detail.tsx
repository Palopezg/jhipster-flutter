import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './direccion.reducer';
import { IDireccion } from 'app/shared/model/direccion.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDireccionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DireccionDetail = (props: IDireccionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { direccionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.direccion.detail.title">Direccion</Translate> [<b>{direccionEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="identification">
              <Translate contentKey="jhipsterFlutterApp.direccion.identification">Identification</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.identification}</dd>
          <dt>
            <span id="pais">
              <Translate contentKey="jhipsterFlutterApp.direccion.pais">Pais</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.pais}</dd>
          <dt>
            <span id="provincia">
              <Translate contentKey="jhipsterFlutterApp.direccion.provincia">Provincia</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.provincia}</dd>
          <dt>
            <span id="partido">
              <Translate contentKey="jhipsterFlutterApp.direccion.partido">Partido</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.partido}</dd>
          <dt>
            <span id="localidad">
              <Translate contentKey="jhipsterFlutterApp.direccion.localidad">Localidad</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.localidad}</dd>
          <dt>
            <span id="calle">
              <Translate contentKey="jhipsterFlutterApp.direccion.calle">Calle</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.calle}</dd>
          <dt>
            <span id="altura">
              <Translate contentKey="jhipsterFlutterApp.direccion.altura">Altura</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.altura}</dd>
          <dt>
            <span id="region">
              <Translate contentKey="jhipsterFlutterApp.direccion.region">Region</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.region}</dd>
          <dt>
            <span id="subregion">
              <Translate contentKey="jhipsterFlutterApp.direccion.subregion">Subregion</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.subregion}</dd>
          <dt>
            <span id="hub">
              <Translate contentKey="jhipsterFlutterApp.direccion.hub">Hub</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.hub}</dd>
          <dt>
            <span id="barriosEspeciales">
              <Translate contentKey="jhipsterFlutterApp.direccion.barriosEspeciales">Barrios Especiales</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.barriosEspeciales}</dd>
          <dt>
            <span id="codigoPostal">
              <Translate contentKey="jhipsterFlutterApp.direccion.codigoPostal">Codigo Postal</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.codigoPostal}</dd>
          <dt>
            <span id="tipoCalle">
              <Translate contentKey="jhipsterFlutterApp.direccion.tipoCalle">Tipo Calle</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.tipoCalle}</dd>
          <dt>
            <span id="zonaCompetencia">
              <Translate contentKey="jhipsterFlutterApp.direccion.zonaCompetencia">Zona Competencia</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.zonaCompetencia}</dd>
          <dt>
            <span id="intersectionLeft">
              <Translate contentKey="jhipsterFlutterApp.direccion.intersectionLeft">Intersection Left</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.intersectionLeft}</dd>
          <dt>
            <span id="intersectionRight">
              <Translate contentKey="jhipsterFlutterApp.direccion.intersectionRight">Intersection Right</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.intersectionRight}</dd>
          <dt>
            <span id="streetType">
              <Translate contentKey="jhipsterFlutterApp.direccion.streetType">Street Type</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.streetType}</dd>
          <dt>
            <span id="latitud">
              <Translate contentKey="jhipsterFlutterApp.direccion.latitud">Latitud</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.latitud}</dd>
          <dt>
            <span id="longitud">
              <Translate contentKey="jhipsterFlutterApp.direccion.longitud">Longitud</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.longitud}</dd>
          <dt>
            <span id="elementosDeRed">
              <Translate contentKey="jhipsterFlutterApp.direccion.elementosDeRed">Elementos De Red</Translate>
            </span>
          </dt>
          <dd>{direccionEntity.elementosDeRed}</dd>
        </dl>
        <Button tag={Link} to="/direccion" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/direccion/${direccionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ direccion }: IRootState) => ({
  direccionEntity: direccion.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DireccionDetail);
