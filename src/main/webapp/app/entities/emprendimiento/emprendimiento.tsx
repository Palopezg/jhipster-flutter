import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './emprendimiento.reducer';
import { IEmprendimiento } from 'app/shared/model/emprendimiento.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmprendimientoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Emprendimiento = (props: IEmprendimientoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { emprendimientoList, match, loading } = props;
  return (
    <div>
      <h2 id="emprendimiento-heading">
        <Translate contentKey="jhipsterFlutterApp.emprendimiento.home.title">Emprendimientos</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="jhipsterFlutterApp.emprendimiento.home.createLabel">Create new Emprendimiento</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {emprendimientoList && emprendimientoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.nombre">Nombre</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.contacto">Contacto</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFinObra">Fecha Fin Obra</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.elementosDeRed">Elementos De Red</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCatv">Clientes Catv</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertel">Clientes Fibertel</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFibertelLite">Clientes Fibertel Lite</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesFlow">Clientes Flow</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.clientesCombo">Clientes Combo</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.lineasVoz">Lineas Voz</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.mesesDeFinalizado">Meses De Finalizado</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.altasBC">Altas BC</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionVivLot">Penetracion Viv Lot</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.penetracionBC">Penetracion BC</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda1">Demanda 1</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda2">Demanda 2</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda3">Demanda 3</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda4">Demanda 4</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.lotes">Lotes</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.viviendas">Viviendas</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.comProf">Com Prof</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.habitaciones">Habitaciones</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.manzanas">Manzanas</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.demanda">Demanda</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaDeRelevamiento">Fecha De Relevamiento</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.telefono">Telefono</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.anoPriorizacion">Ano Priorizacion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.contratoOpen">Contrato Open</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.negociacion">Negociacion</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoBC">Estado BC</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fecha">Fecha</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.codigoDeFirma">Codigo De Firma</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.fechaFirma">Fecha Firma</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.observaciones">Observaciones</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.comentario">Comentario</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estadoFirma">Estado Firma</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.obra">Obra</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoObra">Tipo Obra</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tipoEmp">Tipo Emp</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.estado">Estado</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.competencia">Competencia</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.despliegue">Despliegue</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.nSE">N SE</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.segmento">Segmento</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.tecnologia">Tecnologia</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.ejecCuentas">Ejec Cuentas</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterFlutterApp.emprendimiento.direccion">Direccion</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {emprendimientoList.map((emprendimiento, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${emprendimiento.id}`} color="link" size="sm">
                      {emprendimiento.id}
                    </Button>
                  </td>
                  <td>{emprendimiento.nombre}</td>
                  <td>{emprendimiento.contacto}</td>
                  <td>
                    {emprendimiento.fechaFinObra ? (
                      <TextFormat type="date" value={emprendimiento.fechaFinObra} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{emprendimiento.elementosDeRed}</td>
                  <td>{emprendimiento.clientesCatv}</td>
                  <td>{emprendimiento.clientesFibertel}</td>
                  <td>{emprendimiento.clientesFibertelLite}</td>
                  <td>{emprendimiento.clientesFlow}</td>
                  <td>{emprendimiento.clientesCombo}</td>
                  <td>{emprendimiento.lineasVoz}</td>
                  <td>{emprendimiento.mesesDeFinalizado}</td>
                  <td>{emprendimiento.altasBC}</td>
                  <td>{emprendimiento.penetracionVivLot}</td>
                  <td>{emprendimiento.penetracionBC}</td>
                  <td>{emprendimiento.demanda1}</td>
                  <td>{emprendimiento.demanda2}</td>
                  <td>{emprendimiento.demanda3}</td>
                  <td>{emprendimiento.demanda4}</td>
                  <td>{emprendimiento.lotes}</td>
                  <td>{emprendimiento.viviendas}</td>
                  <td>{emprendimiento.comProf}</td>
                  <td>{emprendimiento.habitaciones}</td>
                  <td>{emprendimiento.manzanas}</td>
                  <td>{emprendimiento.demanda}</td>
                  <td>
                    {emprendimiento.fechaDeRelevamiento ? (
                      <TextFormat type="date" value={emprendimiento.fechaDeRelevamiento} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{emprendimiento.telefono}</td>
                  <td>
                    {emprendimiento.anoPriorizacion ? (
                      <TextFormat type="date" value={emprendimiento.anoPriorizacion} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{emprendimiento.contratoOpen}</td>
                  <td>{emprendimiento.negociacion ? 'true' : 'false'}</td>
                  <td>{emprendimiento.estadoBC}</td>
                  <td>
                    {emprendimiento.fecha ? <TextFormat type="date" value={emprendimiento.fecha} format={APP_LOCAL_DATE_FORMAT} /> : null}
                  </td>
                  <td>{emprendimiento.codigoDeFirma}</td>
                  <td>
                    {emprendimiento.fechaFirma ? (
                      <TextFormat type="date" value={emprendimiento.fechaFirma} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{emprendimiento.observaciones}</td>
                  <td>{emprendimiento.comentario}</td>
                  <td>{emprendimiento.estadoFirma}</td>
                  <td>{emprendimiento.obra ? <Link to={`obra/${emprendimiento.obra.id}`}>{emprendimiento.obra.descripcion}</Link> : ''}</td>
                  <td>
                    {emprendimiento.tipoObra ? (
                      <Link to={`tipo-obra/${emprendimiento.tipoObra.id}`}>{emprendimiento.tipoObra.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.tipoEmp ? (
                      <Link to={`tipo-emp/${emprendimiento.tipoEmp.id}`}>{emprendimiento.tipoEmp.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.estado ? (
                      <Link to={`estado/${emprendimiento.estado.id}`}>{emprendimiento.estado.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.competencia ? (
                      <Link to={`competencia/${emprendimiento.competencia.id}`}>{emprendimiento.competencia.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.despliegue ? (
                      <Link to={`despliegue/${emprendimiento.despliegue.id}`}>{emprendimiento.despliegue.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>{emprendimiento.nSE ? <Link to={`nse/${emprendimiento.nSE.id}`}>{emprendimiento.nSE.descripcion}</Link> : ''}</td>
                  <td>
                    {emprendimiento.segmento ? (
                      <Link to={`segmento/${emprendimiento.segmento.id}`}>{emprendimiento.segmento.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.tecnologia ? (
                      <Link to={`tecnologia/${emprendimiento.tecnologia.id}`}>{emprendimiento.tecnologia.descripcion}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.ejecCuentas ? (
                      <Link to={`ejec-cuentas/${emprendimiento.ejecCuentas.id}`}>{emprendimiento.ejecCuentas.nombre}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {emprendimiento.direccion ? (
                      <Link to={`direccion/${emprendimiento.direccion.id}`}>{emprendimiento.direccion.calle}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${emprendimiento.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${emprendimiento.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${emprendimiento.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="jhipsterFlutterApp.emprendimiento.home.notFound">No Emprendimientos found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ emprendimiento }: IRootState) => ({
  emprendimientoList: emprendimiento.entities,
  loading: emprendimiento.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Emprendimiento);
