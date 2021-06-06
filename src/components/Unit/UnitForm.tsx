import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { IUnit } from "../../models/unit";
import "../shared/shared.css"
import { RootStoreContext } from "../../Stores/rootStore";
import { useContext, useState } from "react"
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";


const UnitForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUnit>();

  const rootStore = useContext(RootStoreContext);
  const { currentUnit: unit, addUnit, editUnit } = rootStore.unitStore;

  const [submitting,setSubmitting] = useState(false);
  
  const onSubmitHandler = (data: IUnit) => {
    setSubmitting(true);
    console.log(data)
    if (!unit) addUnit(data).then(() => setSubmitting(false));
    else editUnit(data).then(() => setSubmitting(false));
  };

  return (
    <div className="unittop">
      <Container>
        <Link to="/units">  <button className="homeLandButton">Go to List</button></Link>
      
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          {unit ? (
            <>
              <p>{unit.id}</p>
              <input className="uiInput" type="hidden" defaultValue={unit.id} {...register("id")} />
            </>
          ) : (
            <>
              <label htmlFor="id">ID</label>
              <br />
              <input
                id="id"
                className="uiInput"
                {...register("id", { required: "ID must be assigned" })}
              />
              <br />
              {errors.id && <p className="errorMsg">{errors.id.message}</p>}
            </>
          )}
          <label htmlFor="size">Size</label>
          <br />
          <input
            id="size"
            className="uiInput"
            defaultValue={unit?.size}
            {...register("size", { required: "This field is required" })}
          />
          <br />
          {errors.size && <p className="errorMsg">{errors.size.message}</p>}
          <label htmlFor="price">Price</label>
          <br />
          <input
            id="price"
            className="uiInput"
            defaultValue={unit?.price}
            {...register("price", { required: "This field is required" })}
          />
          <br />
          {errors.price && <p className="errorMsg">{errors.price.message}</p>}
          <label htmlFor="level">Level</label>
          <br />
          <input
            id="level"
            className="uiInput"
            defaultValue={unit?.level}
            {...register("level", { required: "This field is required" })}
          />
          <br />
          {errors.level && <p className="errorMsg">{errors.level.message}</p>}
          <label htmlFor="buildingNumber">Building Number</label>
          <br />
          <input
            id="buildingNumber"
            className="uiInput"
            defaultValue={unit?.buildingNumber}
            {...register("buildingNumber", {
              required: "This field is required",
            })}
          />
          <br />
          {errors.buildingNumber && <p className="errorMsg">{errors.buildingNumber.message}</p>}
          <label htmlFor="noOfBedrooms">No. of Bedrooms</label>
          <br />
          <input
            id="noOfBedrooms"
            className="uiInput"
            defaultValue={unit?.noOfBedrooms}
            {...register("noOfBedrooms", { required: "This field is required" })}
          />
          <br />
          {errors.noOfBedrooms && <p className="errorMsg">{errors.noOfBedrooms.message}</p>}
          <label htmlFor="noOfBaths">No. of Baths</label>
          <br />
          <input
            id="noOfBaths"
            className="uiInput"
            defaultValue={unit?.noOfBaths}
            {...register("noOfBaths", { required: "This field is required" })}
          />
          <br />
          {errors.noOfBaths && <p className="errorMsg">{errors.noOfBaths.message}</p>}
          <label htmlFor="noOfBalconies">No. of Balconies</label>
          <br />
          <input
            id="noOfBalconies"
            className="uiInput"
            defaultValue={unit?.noOfBalconies}
            {...register("noOfBalconies", { required: "This field is required" })}
          />
          <br />
          {errors.noOfBalconies && <p className="errorMsg">{errors.noOfBalconies.message}</p>}
          <label htmlFor="netArea">Net Area</label>
          <br />
          <input
            id="netArea"
            className="uiInput"
            defaultValue={unit?.netArea}
            {...register("netArea", { required: "This field is required" })}
          />
          <br />
          {errors.netArea && <p className="errorMsg">{errors.netArea.message}</p>}
          <label htmlFor="commonArea">Common Area</label>
          <br />
          <input
            id="commonArea"
            className="uiInput"
            defaultValue={unit?.commonArea}
            {...register("commonArea", { required: "This field is required" })}
          />
          <br />
          {errors.commonArea && <p className="errorMsg">{errors.commonArea.message}</p>}
          <label htmlFor="bookingPrice">Booking Price</label>
          <br />
          <input
            id="bookingPrice"
            className="uiInput"
            defaultValue={unit?.bookingPrice}
            {...register("bookingPrice", { required: "This field is required" })}
          />
          <br />
          {errors.bookingPrice && <p className="errorMsg">{errors.bookingPrice.message}</p>}
          <label htmlFor="downPaymentDays">Down Payment Days</label>
          <br />
          <input
            id="downPaymentDays"
            className="uiInput"
            defaultValue={unit?.downPaymentDays}
            {...register("downPaymentDays", {
              required: "This field is required",
            })}
          />
          <br />
          <label htmlFor="images">Upload picture</label>
          <br />
          <input className="uiInput" id="images" type="file" {...register("images")} />
          <br />
          {errors.downPaymentDays && <p>{errors.downPaymentDays.message}</p>}
          <Button loading={submitting} color="black" style={{ marginTop: 10,cursor:"pointer" }}>Submit</Button>

        </form>
      </Container>

    </div>
  );
};

export default observer(UnitForm);
