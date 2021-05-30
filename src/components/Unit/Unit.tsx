import { observer } from "mobx-react-lite";
import { Fragment, useContext, useEffect } from "react";
import { RootStoreContext } from "../../Stores/rootStore";
import { history } from "../../";
import UnitList from "./UnitList";
import "./unit.css";
import { Container } from "semantic-ui-react";
import BookingsList from "./BookingsList";
import TransferList from "./TransferList";
import MyLoader from "../Common/MyLoader";

const Unit = () => {
  const rootStore = useContext(RootStoreContext);
  const { units, listUnits, bookings, transfers, setCurrentUnit, listAllBookings, listAllTransfers, loading } = rootStore.unitStore;
  const { token } = rootStore.commonStore;
  useEffect(() => {
    if (token) {
      listUnits();
      listAllBookings();
      listAllTransfers();
    }
  }, [listUnits, listAllBookings, listAllTransfers,token]);

  const buttonStyle = { backgroundColor: "#1e212d", color: "goldenrod" }
  return (
    <div className="unittop">
      <Container >
        <button
          type="button"
          className="homeLandButton"
          style={buttonStyle}
          onClick={() => {
            setCurrentUnit(null);
            history.push("/unitForm")
          }}
        >
          Add new flat
      </button>

        <Fragment>
          {loading ? <MyLoader /> : <UnitList units={units} />}
          {loading ? <MyLoader /> :
            <div className="list">
              <BookingsList bookings={bookings} />
              <TransferList transfers={transfers} />
            </div>}

        </Fragment>
      </Container></div>
  );
};

export default observer(Unit);
