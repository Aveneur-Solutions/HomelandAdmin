import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'
import IBooking from '../../../models/booking'

const UnitsBooked: React.FC<{ bookedUnits: IBooking[] }> = ({ bookedUnits }) => {
    return (
        <Fragment>
            {bookedUnits.length > 0 ? (

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Unit ID</Table.HeaderCell>
                            <Table.HeaderCell>Date of Booking</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {bookedUnits.map((booking) => (
                            <Table.Row key={booking.flatId}>
                                <Table.Cell>{booking.flatId}</Table.Cell>
                                <Table.Cell>{format(new Date(booking.dateBooked), "dd MMM yyyy")}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            ) : <div>No bookings</div>}
        </Fragment>
    )
}

export default observer(UnitsBooked)
