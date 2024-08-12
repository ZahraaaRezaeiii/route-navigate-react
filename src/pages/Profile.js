import { useParams } from "react-router-dom"

export const Profile = () => {
    const {name} = useParams()
    return (
        <p>This is Profile page of {name}</p>
    )
}