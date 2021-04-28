import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Dropdown, DropdownProps, Icon, Input, Table } from "semantic-ui-react";
import { IUnit } from "../../models/unit";
import { RootStoreContext } from "../../Stores/rootStore";
import DeleteUnitConfirmDiv from "./DeleteUnitConfirmDiv";
import { history } from "../../";
import { useMediaQuery } from 'react-responsive'


interface IProps {
  units: any[];
}

const UnitList: React.FC<IProps> = ({
  units
}) => {
  const [confirmationDiv, showConfirmationDiv] = useState(false);
  const [unitsTobeDisplayed, setUnits] = useState<IUnit[]>(units);
  const [filter, setFilter] = useState("All");
  const [unitId, setUnitId] = useState("");
  const rootStore = useContext(RootStoreContext);
  const { unitDetails, bookedUnits, availableUnits, allotedUnits, setCurrentUnit } = rootStore.unitStore;
  const handleClickDelete = (id: string) => {
    showConfirmationDiv(true)
    setUnitId(id)
  }
  const handleClickDetails = (id: string) => {
    setUnitId(id)
    unitDetails(id)
  }

  const unitFilters = [
    {
      key: 1, text: "All", value: 1
    },
    {
      key: 2, text: "Available", value: 2
    },
    {
      key: 3, text: "Booked", value: 3
    },
    {
      key: 4, text: "Alloted", value: 4
    }
  ];
  useEffect(() => {
    setUnits(units)
    console.log("in")
  }, [units])

  const handleChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    console.log(data.value);
    switch (data.value) {
      case 1: setUnits(units); setFilter("All"); break;
      case 2: setUnits(availableUnits); setFilter("Available"); break;
      case 3: setUnits(bookedUnits); setFilter("Booked"); break;
      case 4: setUnits(allotedUnits); setFilter("Alloted"); break;
    }
  }
  // return (
  //   <div>
  //     <Dropdown placeholder=" Filter Units" onChange={handleChange}  options={unitFilters} selection />
  //     {unitsTobeDisplayed.length !== 0 ? <Fragment>
  //       <h1>{filter} Units</h1>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Id</th>
  //             <th>Size</th>
  //             <th>Level</th>
  //             <th>Building No.</th>
  //             <th>Price</th>
  //             <th>Status</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {unitsTobeDisplayed.map((unit) => {
  //             const { id, size, level, buildingNumber, price, isBooked } = unit;
  //             return (
  //               <tr key={id}>
  //                 <td>{id}</td>
  //                 <td>{size}</td>
  //                 <td>{level}</td>
  //                 <td>{buildingNumber}</td>
  //                 <td>{price}</td>
  //                 <td>{isBooked ? "Booked" : "Available"}</td>
  //                 <td>
  //                   {(filter === "All" || filter === "Available") && <Fragment>
  //                     <button
  //                       onClick={() => {
  //                         setCurrentUnit(unit);
  //                         history.push("/unitForm")
  //                       }}
  //                     >
  //                       Edit
  //                 </button>
  //                     <button onClick={() => handleClickDelete(id)}>Delete</button></Fragment>}

  //                   <button onClick={() => handleClickDetails(id)}>Details</button>
  //                 </td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </Fragment> : <div>No Units Do Display </div>}

  //     {confirmationDiv && <DeleteUnitConfirmDiv id={unitId} showModal={showConfirmationDiv} />}
  //   </div>
  // );
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="tblpc">
          <div className="filter-unit-div">
          <Dropdown placeholder=" Filter Units" onChange={handleChange} options={unitFilters} selection />
          <Input icon='search' placeholder='Search...' />
          </div>
          
          <Table celled textAlign="center" padded >
            <Table.Header >
              <Table.Row >
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>UNIT ID</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>SIZE</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>PRICE</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>BOOKING PRICE</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>Level</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>STATUS</Table.HeaderCell>
                <Table.HeaderCell style={{ backgroundColor: "#1e212d", color: "goldenrod" }}>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {unitsTobeDisplayed.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <p>{item.id}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.size}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.price}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.bookingPrice}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.level}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{item.isBooked ? "Booked":"Available"}</p>
                  </Table.Cell>
                  <Table.Cell>
                    {(filter === "All" || filter === "Available")
                      &&
                      <Fragment>
                        <button
                          onClick={() => {
                            setCurrentUnit(item);
                            history.push("/unitForm")
                          }}
                          className="action-button"
                        >
                          <Icon color="blue" name="edit outline"></Icon>
                        </button>

                        <button  className="action-button" onClick={() => handleClickDelete(item.id)}><Icon color="red" name="delete"> </Icon></button>
                      </Fragment>}

                    <button   className="action-button" onClick={() => handleClickDetails(item.id)}><Icon color="yellow" name="eye"></Icon></button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {confirmationDiv && <DeleteUnitConfirmDiv id={unitId} showModal={showConfirmationDiv} />}
        </div>
      ) :
        <div className="tbl">
          <table>
            <tr className="tbmh">
              <th style={{ backgroundColor: "#1e212d", color: "goldenrod", textAlign: "center" }}>UNIT ID</th>
              <th style={{ backgroundColor: "#1e212d", color: "goldenrod", textAlign: "center" }}>SIZE</th>
              <th style={{ backgroundColor: "#1e212d", color: "goldenrod", textAlign: "center" }}>PRICE</th>
              <th style={{ backgroundColor: "#1e212d", color: "goldenrod", textAlign: "center" }}>BOOKING</th>
              <th style={{ backgroundColor: "#1e212d", color: "goldenrod", textAlign: "center" }}>Select</th>
            </tr>
            <tbody>
              {unitsTobeDisplayed.map((item) => (
                <tr key={item.id}>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.id}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.size}</p>
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <p>{item.price}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.noOfBalconies}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.level}</p>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
          <div className="projectbottommobile buttondiv">
          </div>
        </div>
      }

    </>
  );
};

export default observer(UnitList);
