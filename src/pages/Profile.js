import {ChangeProfile} from '../components/ChangeProfile';



export const Profile = (props) => {
    return (
        <div>
            <p>This is Profile page of {props.username}</p>
            <ChangeProfile setUsername={props.setUsername}/>
        </div>
    )
}
