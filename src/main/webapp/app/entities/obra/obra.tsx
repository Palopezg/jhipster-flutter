import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './obra.reducer';
import { IObra } from 'app/shared/model/obra.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IObraProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Obra = (props: IObraProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { obraList, match, loading } = props;
  return (
    <div>
      <h2 id="obra-heading">
        <Translate contentKey="jhipsterFlutterApp.obra.home.title">Obras</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.obra.home.createLabel">Create new Obra</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {obraList && obraList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.obra.descripcion">Descripcion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.obra.habilitada">Habilitada</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.obra.fechaFinObra">Fecha Fin Obra</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.obra.tipoObra">Tipo Obra</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {obraList.map((obra, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${obra.id}`} color="link" size="sm">
                      {obra.id}
                    </Button>
                  </td>
                  <td>{obra.descripcion}</td>
                  <td>{obra.habilitada ? 'true' : 'false'}</td>
                  <td>{obra.fechaFinObra ? <TextFormat type="date" value={obra.fechaFinObra} format={APP_LOCAL_DATE_FORMAT} /> : null}</td>
                  <td>{obra.tipoObra ? <Link to={`tipo-obra/${obra.tipoObra.id}`}>{obra.tipoObra.descripcion}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${obra.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${obra.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${obra.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.obra.home.notFound">No Obras found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ obra }: IRootState) => ({
  obraList: obra.entities,
  loading: obra.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Obra);
