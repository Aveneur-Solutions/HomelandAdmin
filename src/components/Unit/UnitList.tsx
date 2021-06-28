import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Dropdown, DropdownProps, Icon, Input, Table } from "semantic-ui-react";
import { IUnit } from "../../models/unit";
import { RootStoreContext } from "../../Stores/rootStore";
import { history } from "../../";
import { useMediaQuery } from "react-responsive";
import CommonModal from "../../modal/CommonModal";
import './unit.css'

interface IProps {
  units: any[];
}

const UnitList: React.FC<IProps> = ({ units }) => {
  const [unitsTobeDisplayed, setUnits] = useState<IUnit[]>(units);
  const [filter, setFilter] = useState("All");

  const rootStore = useContext(RootStoreContext);
  const {
    bookedUnits,
    availableUnits,
    allotedUnits,
    deleteUnit,
  } = rootStore.unitStore;

  const handleClickDelete = (id: string) => {
    deleteUnit(id);
  };

  const unitFilters = [
    {
      key: 1,
      text: "All",
      value: 1,
    },
    {
      key: 2,
      text: "Available",
      value: 2,
    },
    {
      key: 3,
      text: "Booked",
      value: 3,
    },
    {
      key: 4,
      text: "Alloted",
      value: 4,
    },
  ];

  useEffect(() => {
    setUnits(units);
    console.log("in");
  }, [units]);

  const handleChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    console.log(data.value);
    switch (data.value) {
      case 1:
        setUnits(units);
        setFilter("All");
        break;
      case 2:
        setUnits(availableUnits);
        setFilter("Available");
        break;
      case 3:
        setUnits(bookedUnits);
        setFilter("Booked");
        break;
      case 4:
        setUnits(allotedUnits);
        setFilter("Alloted");
        break;
    }
  };

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="tblpc">
          <div className="filter-unit-div">
            <Dropdown
              placeholder=" Filter Units"
              onChange={handleChange}
              options={unitFilters}
              selection
            />
            <Input icon="search" placeholder="Search..." />
          </div>
          <Container className="unit-container">
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
                    SIZE
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  >
                    PRICE
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  >
                    BOOKING PRICE
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  >
                    Level
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  >
                    STATUS
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  >
                    Action
                  </Table.HeaderCell>
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
                      <p>{item.isBooked ? "Booked" : item.isSold ? "Sold" : "Available"}</p>
                    </Table.Cell>
                    <Table.Cell>
                      {(!item.isBooked && !item.isSold) && (
                        <Fragment>
                          <button
                            onClick={() => history.push(`/unitForm/${item.id}`)}
                            className="action-button"
                          >
                            <Icon color="blue" name="edit outline"></Icon>
                          </button>
                          <CommonModal
                            header={`Are you sure you want to delete unit ${item.id}?`}
                            trigger={
                              <button className="action-button">
                                <Icon color="red" name="delete"></Icon>
                              </button>
                            }
                            btnColor="red"
                            buttonText="Yes, Delete permanently"
                            action={() => handleClickDelete(item.id)}
                          />
                        </Fragment>
                      )}

                      <button
                        className="action-button"
                        onClick={() => history.push(`/unit/${item.id}`)}
                      >
                        <Icon color="yellow" name="eye"></Icon>
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Container>
        </div>
      ) : (
        <div className="tbl">
          <table>
            <tr className="tbmh">
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                UNIT ID
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                SIZE
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                PRICE
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                BOOKING
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                Select
              </th>
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
          <div className="projectbottommobile buttondiv"></div>
        </div>
      )}
    </>
  );
};

export default observer(UnitList);
