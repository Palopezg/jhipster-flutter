import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IGrupoEmprendimiento } from 'app/shared/model/grupo-emprendimiento.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './grupo-emprendimiento.reducer';

export interface IGrupoEmprendimientoDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const GrupoEmprendimientoDeleteDialog = (props: IGrupoEmprendimientoDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/grupo-emprendimiento');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.grupoEmprendimientoEntity.id);
  };

  const { grupoEmprendimientoEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="jhipsterFlutterApp.grupoEmprendimiento.delete.question">
        <Translate contentKey="jhipsterFlutterApp.grupoEmprendimiento.delete.question" interpolate={{ id: grupoEmprendimientoEntity.id }}>
          Are you sure you want to delete this GrupoEmprendimiento?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button id="jhi-confirm-delete-grupoEmprendimiento" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ grupoEmprendimiento }: IRootState) => ({
  grupoEmprendimientoEntity: grupoEmprendimiento.entity,
  updateSuccess: grupoEmprendimiento.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GrupoEmprendimientoDeleteDialog);
