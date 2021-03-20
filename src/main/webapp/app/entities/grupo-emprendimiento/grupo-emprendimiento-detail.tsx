import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './grupo-emprendimiento.reducer';
import { IGrupoEmprendimiento } from 'app/shared/model/grupo-emprendimiento.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGrupoEmprendimientoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GrupoEmprendimientoDetail = (props: IGrupoEmprendimientoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { grupoEmprendimientoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.detail.title">GrupoEmprendimiento</Translate> [
          <b>{grupoEmprendimientoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="descripcion">
              <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.descripcion">Descripcion</Translate>
            </span>
          </dt>
          <dd>{grupoEmprendimientoEntity.descripcion}</dd>
          <dt>
            <span id="esProtegido">
              <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.esProtegido">Es Protegido</Translate>
            </span>
          </dt>
          <dd>{grupoEmprendimientoEntity.esProtegido ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/grupo-emprendimiento" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/grupo-emprendimiento/${grupoEmprendimientoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ grupoEmprendimiento }: IRootState) => ({
  grupoEmprendimientoEntity: grupoEmprendimiento.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoEmprendimientoDetail);
