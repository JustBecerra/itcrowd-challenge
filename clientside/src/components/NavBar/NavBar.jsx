import AddProd from "../AddProd/AddProd.jsx"
import DeleteProd from "../DeleteProd/DeleteProd.jsx"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className="background">
          <header className="header">
            List of products:
          </header>
          <AddProd />
          <DeleteProd />
        </div>
    )
}