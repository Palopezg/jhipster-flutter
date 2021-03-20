import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tipo-emp.reducer';
import { ITipoEmp } from 'app/shared/model/tipo-emp.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITipoEmpProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TipoEmp = (props: ITipoEmpProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tipoEmpList, match, loading } = props;
  return (
    <div>
      <h2 id="tipo-emp-heading">
        <Translate contentKey="jhipsterFlutterApp.tipoEmp.home.title">Tipo Emps</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.tipoEmp.home.createLabel">Create new Tipo Emp</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tipoEmpList && tipoEmpList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.descripcion">Descripcion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.valor">Valor</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.tipoEmp.masterTipoEmp">Master Tipo Emp</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tipoEmpList.map((tipoEmp, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tipoEmp.id}`} color="link" size="sm">
                      {tipoEmp.id}
                    </Button>
                  </td>
                  <td>{tipoEmp.descripcion}</td>
                  <td>{tipoEmp.valor}</td>
                  <td>
                    {tipoEmp.masterTipoEmp ? (
                      <Link to={`master-tipo-emp/${tipoEmp.masterTipoEmp.id}`}>{tipoEmp.masterTipoEmp.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tipoEmp.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tipoEmp.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tipoEmp.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.tipoEmp.home.notFound">No Tipo Emps found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tipoEmp }: IRootState) => ({
  tipoEmpList: tipoEmp.entities,
  loading: tipoEmp.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TipoEmp);
