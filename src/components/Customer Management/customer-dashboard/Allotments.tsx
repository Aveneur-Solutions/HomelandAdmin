import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'
import { IAllotment } from '../../../models/allotment'

const Allotments: React.FC<{ allotments: IAllotment[] }> = ({ allotments }) => {
    return (
        <Fragment>
            {allotments.length > 0 ? (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Unit ID</Table.HeaderCell>
                            <Table.HeaderCell>Booking Date</Table.HeaderCell>
                            <Table.HeaderCell>Allotment Payment Date</Table.HeaderCell>
                            <Table.HeaderCell>Paid/Unpaid</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {allotments.map((allotment) => (
                            <Table.Row key={allotment.flatId}>
                                <Table.Cell>{allotment.flatId}</Table.Cell>
                                <Table.Cell>{format(new Date(allotment.dateAlloted), "dd MMM yyyy")}</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            ) : <div>No allotments</div>}
        </Fragment>
    )
}
export default observer(Allotments)
