import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './nse.reducer';
import { INSE } from 'app/shared/model/nse.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface INSEDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const NSEDetail = (props: INSEDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { nSEEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.nSE.detail.title">NSE</Translate> [<b>{nSEEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="descripcion">
              <Translate contentKey="jhipsterFlutterApp.nSE.descripcion">Descripcion</Translate>
            </span>
          </dt>
          <dd>{nSEEntity.descripcion}</dd>
          <dt>
            <span id="activo">
              <Translate contentKey="jhipsterFlutterApp.nSE.activo">Activo</Translate>
            </span>
          </dt>
          <dd>{nSEEntity.activo ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/nse" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/nse/${nSEEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ nSE }: IRootState) => ({
  nSEEntity: nSE.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(NSEDetail);
