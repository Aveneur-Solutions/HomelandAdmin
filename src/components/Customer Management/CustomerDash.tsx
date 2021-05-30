import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/rootStore'
import CustomerList from './CustomerList'
import "./customer.css"
import MyLoader from '../Common/MyLoader'
const CustomerDash = () => {
    const rootStore = useContext(RootStoreContext)
    const { customerList, getCustomerList ,loading} = rootStore.customerStore;

    useEffect(() => {
        if (!customerList) {
            getCustomerList();
        }
    }, [customerList, getCustomerList])
    return (
        <div className="customertop">
            <Container>
                {loading ? <MyLoader /> : <CustomerList customer={customerList!} />}
                
            </Container>

        </div>
    )
}

export default observer(CustomerDash)
