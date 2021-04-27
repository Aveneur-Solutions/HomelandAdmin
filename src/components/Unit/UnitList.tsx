import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { IUnit } from "../../models/unit";
import { RootStoreContext } from "../../Stores/rootStore";
import DeleteUnitConfirmDiv from "./DeleteUnitConfirmDiv";

interface IProps {
  units: any[];
  setUnit: React.Dispatch<React.SetStateAction<IUnit | null>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnitList: React.FC<IProps> = ({
  units,
  setUnit,
  editMode,
  setEditMode,
}) => {
  const [confirmationDiv, showConfirmationDiv] = useState(false);
  const [unitId,setUnitId] = useState("");
  const rootStore = useContext(RootStoreContext);
  const { unitDetails } = rootStore.unitStore;
  const handleClickDelete = (id : string) => {
    showConfirmationDiv(true)
    setUnitId(id)
  }
   const handleClickDetails = (id : string) => {
    setUnitId(id)
    unitDetails(id)

  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Size</th>
            <th>Level</th>
            <th>Building No.</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => {
            const { id, size, level, buildingNumber, price  } = unit;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{size}</td>
                <td>{level}</td>
                <td>{buildingNumber}</td>
                <td>{price}</td>
                <td>
                  <button
                    onClick={() => {
                      setUnit(unit);
                      setEditMode(!editMode);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleClickDelete(id)}>Delete</button>
                  <button onClick={ () => handleClickDetails(id)} >Details</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     {confirmationDiv &&  <DeleteUnitConfirmDiv id={unitId} showModal={showConfirmationDiv} />}
    </div>
  );
};

export default observer(UnitList);
