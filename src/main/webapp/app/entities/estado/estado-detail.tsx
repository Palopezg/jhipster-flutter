import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './estado.reducer';
import { IEstado } from 'app/shared/model/estado.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEstadoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EstadoDetail = (props: IEstadoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { estadoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.estado.detail.title">Estado</Translate> [<b>{estadoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="descripcion">
              <Translate contentKey="jhipsterFlutterApp.estado.descripcion">Descripcion</Translate>
            </span>
          </dt>
          <dd>{estadoEntity.descripcion}</dd>
        </dl>
        <Button tag={Link} to="/estado" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/estado/${estadoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ estado }: IRootState) => ({
  estadoEntity: estado.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EstadoDetail);
