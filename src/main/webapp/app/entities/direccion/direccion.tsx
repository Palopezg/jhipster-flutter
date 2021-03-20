import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './direccion.reducer';
import { IDireccion } from 'app/shared/model/direccion.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDireccionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Direccion = (props: IDireccionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { direccionList, match, loading } = props;
  return (
    <div>
      <h2 id="direccion-heading">
        <Translate contentKey="jhipsterFlutterApp.direccion.home.title">Direccions</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.direccion.home.createLabel">Create new Direccion</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {direccionList && direccionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.identification">Identification</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.pais">Pais</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.provincia">Provincia</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.partido">Partido</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.localidad">Localidad</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.calle">Calle</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.altura">Altura</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.region">Region</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.subregion">Subregion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.hub">Hub</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.barriosEspeciales">Barrios Especiales</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.codigoPostal">Codigo Postal</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.tipoCalle">Tipo Calle</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.zonaCompetencia">Zona Competencia</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.intersectionLeft">Intersection Left</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.intersectionRight">Intersection Right</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.streetType">Street Type</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.latitud">Latitud</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.longitud">Longitud</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.direccion.elementosDeRed">Elementos De Red</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {direccionList.map((direccion, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${direccion.id}`} color="link" size="sm">
                      {direccion.id}
                    </Button>
                  </td>
                  <td>{direccion.identification}</td>
                  <td>{direccion.pais}</td>
                  <td>{direccion.provincia}</td>
                  <td>{direccion.partido}</td>
                  <td>{direccion.localidad}</td>
                  <td>{direccion.calle}</td>
                  <td>{direccion.altura}</td>
                  <td>{direccion.region}</td>
                  <td>{direccion.subregion}</td>
                  <td>{direccion.hub}</td>
                  <td>{direccion.barriosEspeciales}</td>
                  <td>{direccion.codigoPostal}</td>
                  <td>{direccion.tipoCalle}</td>
                  <td>{direccion.zonaCompetencia}</td>
                  <td>{direccion.intersectionLeft}</td>
                  <td>{direccion.intersectionRight}</td>
                  <td>{direccion.streetType}</td>
                  <td>{direccion.latitud}</td>
                  <td>{direccion.longitud}</td>
                  <td>{direccion.elementosDeRed}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${direccion.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${direccion.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${direccion.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="jhipsterFlutterApp.direccion.home.notFound">No Direccions found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ direccion }: IRootState) => ({
  direccionList: direccion.entities,
  loading: direccion.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Direccion);
