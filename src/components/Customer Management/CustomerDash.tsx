import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/rootStore'
import CustomerList from './CustomerList'
import { history } from "../..";

import "./customer.css"
import MyLoader from '../Common/MyLoader'
const CustomerDash = () => {
    const rootStore = useContext(RootStoreContext)
    const { customerList, getCustomerList, loading, getCustomerDetails } = rootStore.customerStore;

    useEffect(() => {
        if (!customerList) {
            getCustomerList();
        }
    }, [customerList, getCustomerList])
    return (
        <div className="customertop" style={{ marginTop: "5%" }}>
            <Container>
                <button
                    className="gall-go-back-btn"
                    onClick={() => history.push("/dashboard")}
                >
                    Go back
                </button>
                <Header size="large" style={{ marginTop: "5vh", textAlign: "center" }}>Customer List</Header>
                {loading ? <MyLoader /> : <CustomerList getCustomerDetails={getCustomerDetails} customer={customerList!} />}

            </Container>

        </div>
    )
}

export default observer(CustomerDash)
