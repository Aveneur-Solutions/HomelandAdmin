import { observer } from "mobx-react-lite";
import { Fragment, useContext, useEffect } from "react";
import { RootStoreContext } from "../../Stores/rootStore";
import { history } from "../../";
import UnitList from "./UnitList";
import "./unit.css";
import { Container } from "semantic-ui-react";
import BookingsList from "./BookingsList";
import TransferList from "./TransferList";

const Unit = () => {
  const rootStore = useContext(RootStoreContext);
  const { units, listUnits,bookings,transfers, setCurrentUnit ,listAllBookings,listAllTransfers} = rootStore.unitStore;

  useEffect(() => {
    listUnits();
    listAllBookings();
    listAllTransfers();
  }, [listUnits,listAllBookings,listAllTransfers]);

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
          <UnitList
            units={units}
          />
          <BookingsList bookings={bookings}/>
          <TransferList transfers={transfers}/>
        </Fragment>


      </Container></div>
  );
};

export default observer(Unit);
