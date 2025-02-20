import { resizeFile } from "@/utils/resizeImage"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useAuth } from "@clerk/clerk-react"
import { uploadImage } from "@/api/uploadfile"

// rafce
const FormUploadImage = () => {
  const { getToken } = useAuth();
  const hdlOnchange = async (e) => {
    const token = await getToken()
    const file = e.target.files[0]
    if (!file) return;
    try {
      const resizeImage = await resizeFile(file)
      const res = await uploadImage(token, resizeImage)
      console.log(res)
      // console.log(resizeImage)
    } catch (error) {
      console.log(error)
    }
    console.log(e)
  }
  return (
    <div>
      <Label>Upload Image</Label>
      <div>
        <Input 
        type = "file" onChange={hdlOnchange}
        />
      </div>
    </div>
  )
}
export default FormUploadImage