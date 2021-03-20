import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './ejec-cuentas.reducer';
import { IEjecCuentas } from 'app/shared/model/ejec-cuentas.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEjecCuentasDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EjecCuentasDetail = (props: IEjecCuentasDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { ejecCuentasEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.ejecCuentas.detail.title">EjecCuentas</Translate> [<b>{ejecCuentasEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="telefono">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.telefono">Telefono</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.telefono}</dd>
          <dt>
            <span id="apellido">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.apellido">Apellido</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.apellido}</dd>
          <dt>
            <span id="celular">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.celular">Celular</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.celular}</dd>
          <dt>
            <span id="mail">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.mail">Mail</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.mail}</dd>
          <dt>
            <span id="nombre">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.nombre}</dd>
          <dt>
            <span id="repcom1">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.repcom1">Repcom 1</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.repcom1}</dd>
          <dt>
            <span id="repcom2">
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.repcom2">Repcom 2</Translate>
            </span>
          </dt>
          <dd>{ejecCuentasEntity.repcom2}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.ejecCuentas.segmento">Segmento</Translate>
          </dt>
          <dd>{ejecCuentasEntity.segmento ? ejecCuentasEntity.segmento.descripcion : ''}</dd>
        </dl>
        <Button tag={Link} to="/ejec-cuentas" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ejec-cuentas/${ejecCuentasEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ ejecCuentas }: IRootState) => ({
  ejecCuentasEntity: ejecCuentas.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EjecCuentasDetail);
