import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { IUnit } from "../../models/unit";
import { RootStoreContext } from "../../Stores/rootStore";
import UnitForm from "./UnitForm";
import UnitList from "./UnitList";

const unitStyle = { marginLeft: "20%", marginTop: 60 };

const Unit = () => {
  const rootStore = useContext(RootStoreContext);
  const { units, listUnits, addUnit, editUnit } = rootStore.unitStore;

  useEffect(() => {
    listUnits();
  }, [listUnits]);

  const [form, setForm] = useState(false);
  const [unit, setUnit] = useState<IUnit | null>(null);

  return (
    <div style={unitStyle}>
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
        <UnitList
          units={units}
          setUnit={setUnit}
          editMode={form}
          setEditMode={setForm}
        />
      ) : (
        <UnitForm unit={unit} onSubmit={!unit ? addUnit : editUnit} setEditMode={setForm} />
      )}
    </div>
  );
};

export default observer(Unit);
