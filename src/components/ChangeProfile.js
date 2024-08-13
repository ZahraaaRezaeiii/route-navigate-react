import { useState } from "react"

export const ChangeProfile = (props) => {
    const [newname, setNewname] = useState("")
    return(
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <form class="input-group">
                    <input class="form-control me-2" type="Enter New Name" placeholder="Search" aria-label="Search" onChange={(event) => setNewname(event.target.value)} />
                    <button class="btn btn-outline-success" type="button" onClick={() => props.setUsername(newname)}>Cahnge Name</button>
                </form>
            </div>
        </nav>


    )
}