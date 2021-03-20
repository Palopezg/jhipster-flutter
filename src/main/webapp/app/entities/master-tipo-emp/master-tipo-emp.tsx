import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './master-tipo-emp.reducer';
import { IMasterTipoEmp } from 'app/shared/model/master-tipo-emp.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMasterTipoEmpProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const MasterTipoEmp = (props: IMasterTipoEmpProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { masterTipoEmpList, match, loading } = props;
  return (
    <div>
      <h2 id="master-tipo-emp-heading">
        <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.home.title">Master Tipo Emps</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.home.createLabel">Create new Master Tipo Emp</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {masterTipoEmpList && masterTipoEmpList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.descripcion">Descripcion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.sobreLote">Sobre Lote</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.sobreVivienda">Sobre Vivienda</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {masterTipoEmpList.map((masterTipoEmp, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${masterTipoEmp.id}`} color="link" size="sm">
                      {masterTipoEmp.id}
                    </Button>
                  </td>
                  <td>{masterTipoEmp.descripcion}</td>
                  <td>{masterTipoEmp.sobreLote}</td>
                  <td>{masterTipoEmp.sobreVivienda}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${masterTipoEmp.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${masterTipoEmp.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${masterTipoEmp.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.masterTipoEmp.home.notFound">No Master Tipo Emps found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ masterTipoEmp }: IRootState) => ({
  masterTipoEmpList: masterTipoEmp.entities,
  loading: masterTipoEmp.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MasterTipoEmp);
