import React from 'react';
import PropTypes from 'prop-types';
import { sortable } from 'react-sortable';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/fontawesome-free-solid'


const SortableItem = (props) => {
  const Item = styled.li`
    border: 1px dotted #333;
    margin: 5px 0;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  `;

  const DeleteIcon = styled.div`
    padding 3px;
    cursor: pointer;
  `;

  const Text = styled.div`
    padding-left: 10px;
    padding-top: 3px;
  `;

  return (
    <Item {...props}>
      <Text>
        {props.children}
      </Text>
      <DeleteIcon onClick={props.onDelete} >
        <FontAwesomeIcon icon={faTimesCircle} />
      </DeleteIcon>
    </Item>
  );
};

SortableItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default sortable(SortableItem);
