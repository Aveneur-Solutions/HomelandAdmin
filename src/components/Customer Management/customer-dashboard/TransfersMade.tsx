import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'
import ITransfer from '../../../models/transfers'

const TransfersMade: React.FC<{ transfers: ITransfer[] }> = ({ transfers }) => {
    return (
        <Fragment>
            {transfers.length > 0 ? (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Unit ID</Table.HeaderCell>
                        <Table.HeaderCell>Transferred To</Table.HeaderCell>
                        <Table.HeaderCell>Transfer Date</Table.HeaderCell>
                        <Table.HeaderCell>Download Invoice</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {transfers.map((transfer) => (
                        <Table.Row key={transfer.flatId}>
                            <Table.Cell>{transfer.flatId}</Table.Cell>
                            <Table.Cell>{transfer.transferredTo}</Table.Cell>
                            <Table.Cell>{format(new Date(transfer.transferDate), "dd MMM yyyy")}</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>) : <div>Haven't transferred any units yet</div>}
            
        </Fragment>

    )
}

export default observer(TransfersMade)
