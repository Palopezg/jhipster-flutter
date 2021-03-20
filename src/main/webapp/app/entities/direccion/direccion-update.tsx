import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './direccion.reducer';
import { IDireccion } from 'app/shared/model/direccion.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDireccionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DireccionUpdate = (props: IDireccionUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { direccionEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/direccion');
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
        ...direccionEntity,
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
          <h2 id="jhipsterFlutterApp.direccion.home.createOrEditLabel">
            <Translate contentKey="jhipsterFlutterApp.direccion.home.createOrEditLabel">Create or edit a Direccion</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : direccionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="direccion-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="direccion-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="identificationLabel" for="direccion-identification">
                  <Translate contentKey="jhipsterFlutterApp.direccion.identification">Identification</Translate>
                </Label>
                <AvField id="direccion-identification" type="text" name="identification" validate={{}} />
              </AvGroup>
              <AvGroup>
                <Label id="paisLabel" for="direccion-pais">
                  <Translate contentKey="jhipsterFlutterApp.direccion.pais">Pais</Translate>
                </Label>
                <AvField
                  id="direccion-pais"
                  type="text"
                  name="pais"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="provinciaLabel" for="direccion-provincia">
                  <Translate contentKey="jhipsterFlutterApp.direccion.provincia">Provincia</Translate>
                </Label>
                <AvField
                  id="direccion-provincia"
                  type="text"
                  name="provincia"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="partidoLabel" for="direccion-partido">
                  <Translate contentKey="jhipsterFlutterApp.direccion.partido">Partido</Translate>
                </Label>
                <AvField
                  id="direccion-partido"
                  type="text"
                  name="partido"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localidadLabel" for="direccion-localidad">
                  <Translate contentKey="jhipsterFlutterApp.direccion.localidad">Localidad</Translate>
                </Label>
                <AvField
                  id="direccion-localidad"
                  type="text"
                  name="localidad"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="calleLabel" for="direccion-calle">
                  <Translate contentKey="jhipsterFlutterApp.direccion.calle">Calle</Translate>
                </Label>
                <AvField
                  id="direccion-calle"
                  type="text"
                  name="calle"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="alturaLabel" for="direccion-altura">
                  <Translate contentKey="jhipsterFlutterApp.direccion.altura">Altura</Translate>
                </Label>
                <AvField
                  id="direccion-altura"
                  type="string"
                  className="form-control"
                  name="altura"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="regionLabel" for="direccion-region">
                  <Translate contentKey="jhipsterFlutterApp.direccion.region">Region</Translate>
                </Label>
                <AvField id="direccion-region" type="text" name="region" />
              </AvGroup>
              <AvGroup>
                <Label id="subregionLabel" for="direccion-subregion">
                  <Translate contentKey="jhipsterFlutterApp.direccion.subregion">Subregion</Translate>
                </Label>
                <AvField id="direccion-subregion" type="text" name="subregion" />
              </AvGroup>
              <AvGroup>
                <Label id="hubLabel" for="direccion-hub">
                  <Translate contentKey="jhipsterFlutterApp.direccion.hub">Hub</Translate>
                </Label>
                <AvField id="direccion-hub" type="text" name="hub" />
              </AvGroup>
              <AvGroup>
                <Label id="barriosEspecialesLabel" for="direccion-barriosEspeciales">
                  <Translate contentKey="jhipsterFlutterApp.direccion.barriosEspeciales">Barrios Especiales</Translate>
                </Label>
                <AvField id="direccion-barriosEspeciales" type="text" name="barriosEspeciales" />
              </AvGroup>
              <AvGroup>
                <Label id="codigoPostalLabel" for="direccion-codigoPostal">
                  <Translate contentKey="jhipsterFlutterApp.direccion.codigoPostal">Codigo Postal</Translate>
                </Label>
                <AvField id="direccion-codigoPostal" type="text" name="codigoPostal" />
              </AvGroup>
              <AvGroup>
                <Label id="tipoCalleLabel" for="direccion-tipoCalle">
                  <Translate contentKey="jhipsterFlutterApp.direccion.tipoCalle">Tipo Calle</Translate>
                </Label>
                <AvField id="direccion-tipoCalle" type="text" name="tipoCalle" />
              </AvGroup>
              <AvGroup>
                <Label id="zonaCompetenciaLabel" for="direccion-zonaCompetencia">
                  <Translate contentKey="jhipsterFlutterApp.direccion.zonaCompetencia">Zona Competencia</Translate>
                </Label>
                <AvField id="direccion-zonaCompetencia" type="text" name="zonaCompetencia" />
              </AvGroup>
              <AvGroup>
                <Label id="intersectionLeftLabel" for="direccion-intersectionLeft">
                  <Translate contentKey="jhipsterFlutterApp.direccion.intersectionLeft">Intersection Left</Translate>
                </Label>
                <AvField id="direccion-intersectionLeft" type="text" name="intersectionLeft" />
              </AvGroup>
              <AvGroup>
                <Label id="intersectionRightLabel" for="direccion-intersectionRight">
                  <Translate contentKey="jhipsterFlutterApp.direccion.intersectionRight">Intersection Right</Translate>
                </Label>
                <AvField id="direccion-intersectionRight" type="text" name="intersectionRight" />
              </AvGroup>
              <AvGroup>
                <Label id="streetTypeLabel" for="direccion-streetType">
                  <Translate contentKey="jhipsterFlutterApp.direccion.streetType">Street Type</Translate>
                </Label>
                <AvField id="direccion-streetType" type="text" name="streetType" />
              </AvGroup>
              <AvGroup>
                <Label id="latitudLabel" for="direccion-latitud">
                  <Translate contentKey="jhipsterFlutterApp.direccion.latitud">Latitud</Translate>
                </Label>
                <AvField id="direccion-latitud" type="text" name="latitud" />
              </AvGroup>
              <AvGroup>
                <Label id="longitudLabel" for="direccion-longitud">
                  <Translate contentKey="jhipsterFlutterApp.direccion.longitud">Longitud</Translate>
                </Label>
                <AvField id="direccion-longitud" type="text" name="longitud" />
              </AvGroup>
              <AvGroup>
                <Label id="elementosDeRedLabel" for="direccion-elementosDeRed">
                  <Translate contentKey="jhipsterFlutterApp.direccion.elementosDeRed">Elementos De Red</Translate>
                </Label>
                <AvField id="direccion-elementosDeRed" type="text" name="elementosDeRed" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/direccion" replace color="info">
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
  direccionEntity: storeState.direccion.entity,
  loading: storeState.direccion.loading,
  updating: storeState.direccion.updating,
  updateSuccess: storeState.direccion.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DireccionUpdate);
