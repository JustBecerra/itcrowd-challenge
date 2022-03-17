import AddProd from "../AddProd/AddProd.jsx"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className="background">
          <header className="header">
            List of products:
          </header>
          <AddProd />
        </div>
    )
}