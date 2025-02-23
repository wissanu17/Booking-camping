import { listBooking } from "@/api/booking";
import { useAuth } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate, formatNumber } from "@/utils/formats";

const MyOrders = () => {

  // JS
  const [bookings, setBookings] = useState([])
  const { getToken } = useAuth();

  useEffect(() => {
    // code
    // [] กัน inf loops
    fetchBooking()
  }, [])

  const fetchBooking = async () => {
    //code
    const token = await getToken();
    try {
      const res = await listBooking(token);
      console.log(res.data.result)
      setBookings(res.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(bookings)
  return <div>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>booking id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>total night</TableHead>
          <TableHead>price</TableHead>
          <TableHead>check in</TableHead>
          <TableHead>check out</TableHead>
        </TableRow>
      </TableHeader>


      <TableBody>

        {
          bookings?.map((item) => {

            console.log(item)
            const { id, total, totalNights, checkIn, checkOut } = item;
            const { title } = item.landmark

            return (
              <TableRow key={item.id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatNumber(total)}</TableCell>
                <TableCell>{formatDate(checkIn)}</TableCell>
                <TableCell>{formatDate(checkOut)}</TableCell>
              </TableRow>
            )
          })
        }

      </TableBody>
    </Table>

  </div>
}
export default MyOrders