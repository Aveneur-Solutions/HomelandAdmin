import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import ITransfer from '../../models/transfers'
interface IProps{
    transfers : ITransfer[] | null
}
const TransferList : React.FC<IProps> = ({transfers}) => {
    return (
        <div>
            <Header>List of all Transfers</Header>
            <Table celled textAlign="center" padded >
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>UNIT ID</Table.HeaderCell>
                        <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>Transferer's Name</Table.HeaderCell>
                        <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>Reciever's Name</Table.HeaderCell>
                        <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>Date Transfered</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {transfers!.map((item) => (
                        <Table.Row key={item.flatId}>
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
                                <p>{item.transferDate}</p>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default TransferList
