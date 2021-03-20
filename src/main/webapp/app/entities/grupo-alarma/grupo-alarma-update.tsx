import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IGrupoEmprendimiento } from 'app/shared/model/grupo-emprendimiento.model';
import { getEntities as getGrupoEmprendimientos } from 'app/entities/grupo-emprendimiento/grupo-emprendimiento.reducer';
import { IGrupoUsuario } from 'app/shared/model/grupo-usuario.model';
import { getEntities as getGrupoUsuarios } from 'app/entities/grupo-usuario/grupo-usuario.reducer';
import { getEntity, updateEntity, createEntity, reset } from './grupo-alarma.reducer';
import { IGrupoAlarma } from 'app/shared/model/grupo-alarma.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IGrupoAlarmaUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GrupoAlarmaUpdate = (props: IGrupoAlarmaUpdateProps) => {
  const [grupoEmprendimientoId, setGrupoEmprendimientoId] = useState('0');
  const [grupoUsuarioId, setGrupoUsuarioId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { grupoAlarmaEntity, grupoEmprendimientos, grupoUsuarios, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/grupo-alarma');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getGrupoEmprendimientos();
    props.getGrupoUsuarios();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...grupoAlarmaEntity,
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
          <h2 id="jhipsterFlutterApp.grupoAlarma.home.createOrEditLabel">
            <Translate contentKey="jhipsterFlutterApp.grupoAlarma.home.createOrEditLabel">Create or edit a GrupoAlarma</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : grupoAlarmaEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="grupo-alarma-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="grupo-alarma-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nombreGrupoLabel" for="grupo-alarma-nombreGrupo">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.nombreGrupo">Nombre Grupo</Translate>
                </Label>
                <AvField
                  id="grupo-alarma-nombreGrupo"
                  type="text"
                  name="nombreGrupo"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="alarmaTiempoLabel" for="grupo-alarma-alarmaTiempo">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaTiempo">Alarma Tiempo</Translate>
                </Label>
                <AvField id="grupo-alarma-alarmaTiempo" type="string" className="form-control" name="alarmaTiempo" />
              </AvGroup>
              <AvGroup>
                <Label id="alarmaSvaLabel" for="grupo-alarma-alarmaSva">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaSva">Alarma Sva</Translate>
                </Label>
                <AvField id="grupo-alarma-alarmaSva" type="string" className="form-control" name="alarmaSva" />
              </AvGroup>
              <AvGroup>
                <Label id="alarmaBusinesscaseLabel" for="grupo-alarma-alarmaBusinesscase">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaBusinesscase">Alarma Businesscase</Translate>
                </Label>
                <AvField id="grupo-alarma-alarmaBusinesscase" type="string" className="form-control" name="alarmaBusinesscase" />
              </AvGroup>
              <AvGroup>
                <Label for="grupo-alarma-grupoEmprendimiento">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoEmprendimiento">Grupo Emprendimiento</Translate>
                </Label>
                <AvInput id="grupo-alarma-grupoEmprendimiento" type="select" className="form-control" name="grupoEmprendimiento.id">
                  <option value="" key="0" />
                  {grupoEmprendimientos
                    ? grupoEmprendimientos.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.descripcion}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="grupo-alarma-grupoUsuario">
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoUsuario">Grupo Usuario</Translate>
                </Label>
                <AvInput id="grupo-alarma-grupoUsuario" type="select" className="form-control" name="grupoUsuario.id">
                  <option value="" key="0" />
                  {grupoUsuarios
                    ? grupoUsuarios.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.usuario}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/grupo-alarma" replace color="info">
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
  grupoEmprendimientos: storeState.grupoEmprendimiento.entities,
  grupoUsuarios: storeState.grupoUsuario.entities,
  grupoAlarmaEntity: storeState.grupoAlarma.entity,
  loading: storeState.grupoAlarma.loading,
  updating: storeState.grupoAlarma.updating,
  updateSuccess: storeState.grupoAlarma.updateSuccess,
});

const mapDispatchToProps = {
  getGrupoEmprendimientos,
  getGrupoUsuarios,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoAlarmaUpdate);
