import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './grupo-alarma.reducer';
import { IGrupoAlarma } from 'app/shared/model/grupo-alarma.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IGrupoAlarmaProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const GrupoAlarma = (props: IGrupoAlarmaProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { grupoAlarmaList, match, loading } = props;
  return (
    <div>
      <h2 id="grupo-alarma-heading">
        <Translate contentKey="jhipsterFlutterApp.grupoAlarma.home.title">Grupo Alarmas</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.grupoAlarma.home.createLabel">Create new Grupo Alarma</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {grupoAlarmaList && grupoAlarmaList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.nombreGrupo">Nombre Grupo</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaTiempo">Alarma Tiempo</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaSva">Alarma Sva</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.alarmaBusinesscase">Alarma Businesscase</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoEmprendimiento">Grupo Emprendimiento</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.grupoAlarma.grupoUsuario">Grupo Usuario</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {grupoAlarmaList.map((grupoAlarma, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${grupoAlarma.id}`} color="link" size="sm">
                      {grupoAlarma.id}
                    </Button>
                  </td>
                  <td>{grupoAlarma.nombreGrupo}</td>
                  <td>{grupoAlarma.alarmaTiempo}</td>
                  <td>{grupoAlarma.alarmaSva}</td>
                  <td>{grupoAlarma.alarmaBusinesscase}</td>
                  <td>
                    {grupoAlarma.grupoEmprendimiento ? (
                      <Link to={`grupo-emprendimiento/${grupoAlarma.grupoEmprendimiento.id}`}>
                        {grupoAlarma.grupoEmprendimiento.descripcion}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {grupoAlarma.grupoUsuario ? (
                      <Link to={`grupo-usuario/${grupoAlarma.grupoUsuario.id}`}>{grupoAlarma.grupoUsuario.usuario}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${grupoAlarma.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${grupoAlarma.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${grupoAlarma.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.grupoAlarma.home.notFound">No Grupo Alarmas found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ grupoAlarma }: IRootState) => ({
  grupoAlarmaList: grupoAlarma.entities,
  loading: grupoAlarma.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoAlarma);
