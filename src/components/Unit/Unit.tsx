import { observer } from "mobx-react-lite";
import { Fragment, useContext, useEffect, useState } from "react";
import { IUnit } from "../../models/unit";
import { RootStoreContext } from "../../Stores/rootStore";
import ConfirmationModal from "./DeleteUnitConfirmDiv";
import UnitForm from "./UnitForm";
import UnitList from "./UnitList";
import "./unit.css";

const Unit = () => {
  const rootStore = useContext(RootStoreContext);
  const { units, listUnits, addUnit, editUnit } = rootStore.unitStore;

  useEffect(() => {
    listUnits();
  }, [listUnits]);

  const [form, setForm] = useState(false);
  const [unit, setUnit] = useState<IUnit | null>(null);

  return (
    <div className="unittop">
    <div className="unitdash">
      <button
        type="button"
        style={{ marginBottom: 20 }}
        onClick={() => {
          setUnit(null);
          setForm(!form);
        }}
      >
        {!form ? "Add new flat" : "Go back"}
      </button>
      {!form ? (
        <Fragment>
          <UnitList
            units={units}
            setUnit={setUnit}
            editMode={form}
            setEditMode={setForm}
          />
        </Fragment>

      ) : (
        <UnitForm unit={unit} onSubmit={!unit ? addUnit : editUnit} setEditMode={setForm} />
      )}
    </div></div>
  );
};

export default observer(Unit);
