import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './grupo-alarma.reducer';
import { IGrupoAlarma } from 'app/shared/model/grupo-alarma.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGrupoAlarmaDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GrupoAlarmaDetail = (props: IGrupoAlarmaDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { grupoAlarmaEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterFlutterApp.grupoAlarma.detail.title">GrupoAlarma</Translate> [<b>{grupoAlarmaEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="nombreGrupo">
              <Translate contentKey="jhipsterFlutterApp.grupoAlarma.nombreGrupo">Nombre Grupo</Translate>
            </span>
          </dt>
          <dd>{grupoAlarmaEntity.nombreGrupo}</dd>
          <dt>
            <span id="alarmaTiempo">
              <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaTiempo">Alarma Tiempo</Translate>
            </span>
          </dt>
          <dd>{grupoAlarmaEntity.alarmaTiempo}</dd>
          <dt>
            <span id="alarmaSva">
              <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaSva">Alarma Sva</Translate>
            </span>
          </dt>
          <dd>{grupoAlarmaEntity.alarmaSva}</dd>
          <dt>
            <span id="alarmaBusinesscase">
              <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaBusinesscase">Alarma Businesscase</Translate>
            </span>
          </dt>
          <dd>{grupoAlarmaEntity.alarmaBusinesscase}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoEmprendimiento">Grupo Emprendimiento</Translate>
          </dt>
          <dd>{grupoAlarmaEntity.grupoEmprendimiento ? grupoAlarmaEntity.grupoEmprendimiento.descripcion : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoUsuario">Grupo Usuario</Translate>
          </dt>
          <dd>{grupoAlarmaEntity.grupoUsuario ? grupoAlarmaEntity.grupoUsuario.usuario : ''}</dd>
        </dl>
        <Button tag={Link} to="/grupo-alarma" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/grupo-alarma/${grupoAlarmaEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ grupoAlarma }: IRootState) => ({
  grupoAlarmaEntity: grupoAlarma.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoAlarmaDetail);
