import { useState } from "react"
import Cards from "./components/Cards"
import Cart from "./components/Cart"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const [selectedData , setSelectedData] = useState({})
  console.log(selectedData);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="font-bold text-3xl underline underline-offset-8">
        Create your own custom pack
      </div>
      <div className="flex gap-10">
        <Cards setSelectedData={setSelectedData} selectedData={selectedData} />
        <Cart  selectedData={selectedData}/>
      </div>
      <ToastContainer />
    </div>
  )
}