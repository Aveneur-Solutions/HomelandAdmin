import { format } from 'date-fns'
import React from 'react'
import { Container, Header, Table } from 'semantic-ui-react'
import ITransfer from '../../models/transfers'
import './unit.css'
interface IProps{
    transfers : ITransfer[] | null
}
const TransferList : React.FC<IProps> = ({transfers}) => {
    return (
      <div style={{ margin: "0 auto" }}>
        <Header style={{ marginTop: "5vh", textAlign: "center" }}>
          List of all Transfers
        </Header>
        <Container className="unit-transfer-container" fluid>
          <Table celled textAlign="center" padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                >
                  UNIT ID
                </Table.HeaderCell>
                <Table.HeaderCell
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                >
                  Transferer's Name
                </Table.HeaderCell>
                <Table.HeaderCell
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                >
                  Reciever's Name
                </Table.HeaderCell>
                <Table.HeaderCell
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                >
                  Date Transferred
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {transfers!.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <p>{item.flatId}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.transferredFrom}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.transferredTo}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{format(new Date(item.transferDate), "dd MMM yyyy")}</p>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
}

export default TransferList
