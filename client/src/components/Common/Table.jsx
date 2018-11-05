import styled from 'styled-components';
import React from 'react';
import Span from './Span';
import Icon from './Icon';

const TableHead = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  border-collapse: collapse;
  background: #ccc;
  color: #4a5972;
`;

const TableRow = styled.tr`
  border: 1px solid #ccc;
  padding: 10px;
  border-collapse: collapse;

  &:nth-child(even) {
    background: ${props =>
      props.theme[props.background]
        ? props.theme[props.background]
        : props.background};
    color: #fff;
  }
`;
const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  border-collapse: collapse;
`;

const TableContainer = styled.table`
  border: 1px solid #ccc;
  padding: 10px;
  border-collapse: collapse;
`;

const Table = props => {
  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Langauge</TableHead>
          <TableHead>License</TableHead>
          <TableHead>Stars</TableHead>
          <TableHead>Pulblic</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {props.experience.map(e => (
          <TableRow background="primary" key={e.id}>
            <TableData>{e.name}</TableData>
            <TableData>
              {e.language ? e.language : <Span color="dark">None</Span>}
            </TableData>
            <TableData>
              {e.license ? e.license.name : <Span color="dark">None</Span>}
            </TableData>
            <TableData>
              {e.watchers ? e.watchers.toString() : '0'}{' '}
              <Icon color="gold" className="fas fa-star" />
            </TableData>
            <TableData>
              {e.private ? (
                <Icon className="fa fa-times" color="danger" />
              ) : (
                <Icon className="fa fa-check" color="#019934" />
              )}
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
