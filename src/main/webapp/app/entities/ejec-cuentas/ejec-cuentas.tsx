import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './ejec-cuentas.reducer';
import { IEjecCuentas } from 'app/shared/model/ejec-cuentas.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEjecCuentasProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const EjecCuentas = (props: IEjecCuentasProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { ejecCuentasList, match, loading } = props;
  return (
    <div>
      <h2 id="ejec-cuentas-heading">
        <Translate contentKey="jhipsterFlutterApp.ejecCuentas.home.title">Ejec Cuentas</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.ejecCuentas.home.createLabel">Create new Ejec Cuentas</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {ejecCuentasList && ejecCuentasList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.telefono">Telefono</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.apellido">Apellido</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.celular">Celular</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.mail">Mail</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.nombre">Nombre</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.repcom1">Repcom 1</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.repcom2">Repcom 2</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.ejecCuentas.segmento">Segmento</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {ejecCuentasList.map((ejecCuentas, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${ejecCuentas.id}`} color="link" size="sm">
                      {ejecCuentas.id}
                    </Button>
                  </td>
                  <td>{ejecCuentas.telefono}</td>
                  <td>{ejecCuentas.apellido}</td>
                  <td>{ejecCuentas.celular}</td>
                  <td>{ejecCuentas.mail}</td>
                  <td>{ejecCuentas.nombre}</td>
                  <td>{ejecCuentas.repcom1}</td>
                  <td>{ejecCuentas.repcom2}</td>
                  <td>
                    {ejecCuentas.segmento ? <Link to={`segmento/${ejecCuentas.segmento.id}`}>{ejecCuentas.segmento.descripcion}</Link> : ''}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${ejecCuentas.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${ejecCuentas.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${ejecCuentas.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.ejecCuentas.home.notFound">No Ejec Cuentas found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ ejecCuentas }: IRootState) => ({
  ejecCuentasList: ejecCuentas.entities,
  loading: ejecCuentas.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EjecCuentas);
