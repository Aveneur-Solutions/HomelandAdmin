import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Table, Header } from "semantic-ui-react";
import { RootStoreContext } from "../../Stores/rootStore";

const AllotmentList = () => {
  const rootStore = useContext(RootStoreContext);
  const { listAllotment, allotments } = rootStore.unitStore;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    listAllotment();
  }, [listAllotment]);

  return (
    <div>
      {!isTabletOrMobileDevice ? (
        <Container className="unit-container">
          <Header style={{ marginTop: "5vh", textAlign: "center" }}>
            List of all Allotments
          </Header>
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
                  CUSTOMER NAME
                </Table.HeaderCell>
                <Table.HeaderCell
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                >
                  DATE ALLOTED
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {allotments.map((allotment) => (
                <Table.Row key={allotment.flatId}>
                  <Table.Cell>
                    <p>{allotment.flatId}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{allotment.customerName}</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{format(new Date(allotment.dateAlloted), "dd MMM yyyy")}</p>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
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
                FLAT ID
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                CUSTOMER NAME
              </th>
              <th
                style={{
                  backgroundColor: "#1e212d",
                  color: "goldenrod",
                  textAlign: "center",
                }}
              >
                DATE ALLOTED
              </th>
            </tr>
            <tbody>
              {allotments.map((item) => (
                <tr key={item.flatId}>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.flatId}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{item.customerName}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{format(new Date(item.dateAlloted), "dd MMM yyyy")}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="projectbottommobile buttondiv"></div>
        </div>
      )}
    </div>
  );
};

export default observer(AllotmentList);
