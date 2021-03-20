import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMasterTipoEmp } from 'app/shared/model/master-tipo-emp.model';
import { getEntities as getMasterTipoEmps } from 'app/entities/master-tipo-emp/master-tipo-emp.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tipo-emp.reducer';
import { ITipoEmp } from 'app/shared/model/tipo-emp.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITipoEmpUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TipoEmpUpdate = (props: ITipoEmpUpdateProps) => {
  const [masterTipoEmpId, setMasterTipoEmpId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tipoEmpEntity, masterTipoEmps, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tipo-emp');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getMasterTipoEmps();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...tipoEmpEntity,
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
          <h2 id="jhipsterFlutterApp.tipoEmp.home.createOrEditLabel">
            <Translate contentKey="jhipsterFlutterApp.tipoEmp.home.createOrEditLabel">Create or edit a TipoEmp</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tipoEmpEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tipo-emp-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tipo-emp-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="descripcionLabel" for="tipo-emp-descripcion">
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.descripcion">Descripcion</Translate>
                </Label>
                <AvField id="tipo-emp-descripcion" type="text" name="descripcion" />
              </AvGroup>
              <AvGroup>
                <Label id="valorLabel" for="tipo-emp-valor">
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.valor">Valor</Translate>
                </Label>
                <AvField id="tipo-emp-valor" type="text" name="valor" />
              </AvGroup>
              <AvGroup>
                <Label for="tipo-emp-masterTipoEmp">
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.masterTipoEmp">Master Tipo Emp</Translate>
                </Label>
                <AvInput id="tipo-emp-masterTipoEmp" type="select" className="form-control" name="masterTipoEmp.id">
                  <option value="" key="0" />
                  {masterTipoEmps
                    ? masterTipoEmps.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/tipo-emp" replace color="info">
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
  masterTipoEmps: storeState.masterTipoEmp.entities,
  tipoEmpEntity: storeState.tipoEmp.entity,
  loading: storeState.tipoEmp.loading,
  updating: storeState.tipoEmp.updating,
  updateSuccess: storeState.tipoEmp.updateSuccess,
});

const mapDispatchToProps = {
  getMasterTipoEmps,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TipoEmpUpdate);
