import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { IUnit } from "../../models/unit";

interface IProps {
  unit: IUnit | null;
  onSubmit: (data: IUnit) => Promise<void>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UnitForm: React.FC<IProps> = ({ unit, onSubmit, setEditMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUnit>();

  const onSubmitHandler = (data: IUnit) => {
    console.log(data)
    // data.images = [];
    // if(data.images[0]) data.images.push(data.images[0]);
    onSubmit(data).then(() => setEditMode(false));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {unit ? (
          <>
            <p>{unit.id}</p>
            <input type="hidden" defaultValue={unit.id} {...register("id")} />
          </>
        ) : (
          <>
            <label htmlFor="id">ID</label>
            <br />
            <input
              id="id"
              {...register("id", { required: "ID must be assigned" })}
            />
            <br />
            {errors.id && <p>{errors.id.message}</p>}
          </>
        )}
        <label htmlFor="size">Size</label>
        <br />
        <input
          id="size"
          defaultValue={unit?.size}
          {...register("size", { required: "This field is required" })}
        />
        <br />
        {errors.size && <p>{errors.size.message}</p>}
        <label htmlFor="price">Price</label>
        <br />
        <input
          id="price"
          defaultValue={unit?.price}
          {...register("price", { required: "This field is required" })}
        />
        <br />
        {errors.price && <p>{errors.price.message}</p>}
        <label htmlFor="level">Level</label>
        <br />
        <input
          id="level"
          defaultValue={unit?.level}
          {...register("level", { required: "This field is required" })}
        />
        <br />
        {errors.level && <p>{errors.level.message}</p>}
        <label htmlFor="buildingNumber">Building Number</label>
        <br />
        <input
          id="buildingNumber"
          defaultValue={unit?.buildingNumber}
          {...register("buildingNumber", {
            required: "This field is required",
          })}
        />
        <br />
        {errors.buildingNumber && <p>{errors.buildingNumber.message}</p>}
        <label htmlFor="noOfBedrooms">No. of Bedrooms</label>
        <br />
        <input
          id="noOfBedrooms"
          defaultValue={unit?.noOfBedrooms}
          {...register("noOfBedrooms", { required: "This field is required" })}
        />
        <br />
        {errors.noOfBedrooms && <p>{errors.noOfBedrooms.message}</p>}
        <label htmlFor="noOfBaths">No. of Baths</label>
        <br />
        <input
          id="noOfBaths"
          defaultValue={unit?.noOfBaths}
          {...register("noOfBaths", { required: "This field is required" })}
        />
        <br />
        {errors.noOfBaths && <p>{errors.noOfBaths.message}</p>}
        <label htmlFor="noOfBalconies">No. of Balconies</label>
        <br />
        <input
          id="noOfBalconies"
          defaultValue={unit?.noOfBalconies}
          {...register("noOfBalconies", { required: "This field is required" })}
        />
        <br />
        {errors.noOfBalconies && <p>{errors.noOfBalconies.message}</p>}
        <label htmlFor="netArea">Net Area</label>
        <br />
        <input
          id="netArea"
          defaultValue={unit?.netArea}
          {...register("netArea", { required: "This field is required" })}
        />
        <br />
        {errors.netArea && <p>{errors.netArea.message}</p>}
        <label htmlFor="commonArea">Common Area</label>
        <br />
        <input
          id="commonArea"
          defaultValue={unit?.commonArea}
          {...register("commonArea", { required: "This field is required" })}
        />
        <br />
        {errors.commonArea && <p>{errors.commonArea.message}</p>}
        <label htmlFor="bookingPrice">Booking Price</label>
        <br />
        <input
          id="bookingPrice"
          defaultValue={unit?.bookingPrice}
          {...register("bookingPrice", { required: "This field is required" })}
        />
        <br />
        {errors.bookingPrice && <p>{errors.bookingPrice.message}</p>}
        <label htmlFor="downPaymentDays">Down Payment Days</label>
        <br />
        <input
          id="downPaymentDays"
          defaultValue={unit?.downPaymentDays}
          {...register("downPaymentDays", {
            required: "This field is required",
          })}
        />
        <br />
        <label htmlFor="images">Upload picture</label>
        <br />
        <input id="images" type="file" {...register("images")} />
        <br />
        {errors.downPaymentDays && <p>{errors.downPaymentDays.message}</p>}
        <input style={{ marginTop: 10 }} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default observer(UnitForm);
