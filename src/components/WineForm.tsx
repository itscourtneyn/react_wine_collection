
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseUpc, chooseType, chooseBrand, chooseColor, chooseAlcoholPercentage } from "../redux/slices/RootSlice"

interface WineFormProps {
  upc?: string[];
  onClose: () => void;
}

const WineForm = ( props:WineFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`UPC: ${typeof props.upc}`);
    console.log(props.upc)
    console.log(data)
    if (props.upc && props.upc.length > 0) {
      server_calls.update(props.upc[0], data)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseUpc(data.upc));
      dispatch(chooseType(data.type));
      dispatch(chooseBrand(data.brand));
      dispatch(chooseColor(data.color));
      dispatch(chooseAlcoholPercentage(data.alcohol_percentage));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="upc">UPC</label>
          <Input {...register('upc')} name='upc' placeholder="UPC" />
        </div>
        <div>
          <label htmlFor="type">Wine Type</label>
          <Input {...register('type')} name='type' placeholder="Type" />
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <Input {...register('brand')} name='brand' placeholder="Brand" />
        </div>
        <div>
          <label htmlFor="color">Wine Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div>
          <label htmlFor="alcohol_percentage">Alcohol Percentage</label>
          <Input {...register('alcohol_percentage')} name='alcohol_percentage' placeholder="Alcohol Percentage" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-rose-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WineForm