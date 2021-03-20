import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './master-tipo-emp.reducer';
import { IMasterTipoEmp } from 'app/shared/model/master-tipo-emp.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMasterTipoEmpDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const MasterTipoEmpDetail = (props: IMasterTipoEmpDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { masterTipoEmpEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.detail.title">MasterTipoEmp</Translate> [<b>{masterTipoEmpEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="descripcion">
              <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.descripcion">Descripcion</Translate>
            </span>
          </dt>
          <dd>{masterTipoEmpEntity.descripcion}</dd>
          <dt>
            <span id="sobreLote">
              <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.sobreLote">Sobre Lote</Translate>
            </span>
          </dt>
          <dd>{masterTipoEmpEntity.sobreLote}</dd>
          <dt>
            <span id="sobreVivienda">
              <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.sobreVivienda">Sobre Vivienda</Translate>
            </span>
          </dt>
          <dd>{masterTipoEmpEntity.sobreVivienda}</dd>
        </dl>
        <Button tag={Link} to="/master-tipo-emp" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/master-tipo-emp/${masterTipoEmpEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ masterTipoEmp }: IRootState) => ({
  masterTipoEmpEntity: masterTipoEmp.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MasterTipoEmpDetail);
