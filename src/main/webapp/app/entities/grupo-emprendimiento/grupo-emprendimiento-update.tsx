import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './grupo-emprendimiento.reducer';
import { IGrupoEmprendimiento } from 'app/shared/model/grupo-emprendimiento.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IGrupoEmprendimientoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GrupoEmprendimientoUpdate = (props: IGrupoEmprendimientoUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { grupoEmprendimientoEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/grupo-emprendimiento');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...grupoEmprendimientoEntity,
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
          <h2 id="jhipsterFlutterApp.grupoEmprendimiento.home.createOrEditLabel">
            <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.home.createOrEditLabel">
              Create or edit a GrupoEmprendimiento
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : grupoEmprendimientoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="grupo-emprendimiento-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="grupo-emprendimiento-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="descripcionLabel" for="grupo-emprendimiento-descripcion">
                  <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.descripcion">Descripcion</Translate>
                </Label>
                <AvField id="grupo-emprendimiento-descripcion" type="text" name="descripcion" />
              </AvGroup>
              <AvGroup check>
                <Label id="esProtegidoLabel">
                  <AvInput id="grupo-emprendimiento-esProtegido" type="checkbox" className="form-check-input" name="esProtegido" />
                  <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.esProtegido">Es Protegido</Translate>
                </Label>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/grupo-emprendimiento" replace color="info">
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
  grupoEmprendimientoEntity: storeState.grupoEmprendimiento.entity,
  loading: storeState.grupoEmprendimiento.loading,
  updating: storeState.grupoEmprendimiento.updating,
  updateSuccess: storeState.grupoEmprendimiento.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoEmprendimientoUpdate);
