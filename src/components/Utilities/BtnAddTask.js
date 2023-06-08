import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddTask = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Add task
      </button>
    </>
  );
};

export default BtnAddTask;
