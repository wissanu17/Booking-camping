// rafce

import { useForm } from "react-hook-form";
import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";


const Camping = () => {

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create camping</h1>
      <div className="boarder p-8 roundes-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder="Input Your Title"
            />

            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder="Input Your Price"
            />

            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder="Input Your Description"
            />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </section>
  )
}
export default Camping