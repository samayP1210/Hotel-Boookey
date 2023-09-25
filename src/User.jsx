import "./User.css";
import {
  getAuth,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { app } from "./config";
import profile from "./african-man.png";
import edit from "./editing.png";

export default function User({ setLoggedIn, name, setName }) {
  const auth = getAuth(app);

  function changeDisplayName() {
    let tempName = prompt("Enter new name");
    if (tempName === "" || tempName === null) {
      toast.error("Name must not be empty");
      return;
    }

    updateProfile(auth.currentUser, { displayName: tempName })
      .then(() => {
        setName(tempName);
        toast.success("Name updated!!");
      })
      .catch((err) => {
        toast.error("Cannot update name!!");
      });
  }

  return (
    <>
      <h3 className="heading">User details</h3>
      <div className="container userContainer">
        <img src={profile} className="row profile" />
        <div className="row my-2 detail">
          <b>Name : </b>
          {name}
          <img src={edit} className="edit mx-2" onClick={changeDisplayName} />
        </div>
        <div className="row my-2 detail">
          <b>Email : </b>
          {auth.currentUser.email}{" "}
        </div>
        {/* <div className="row my-2">
          <button className="btn" onClick={() => {changePassword('123456', 'qwerty')}}>
            Change Password
          </button>
          <button className="btn" onClick={dltUser}>
            Delete Account
          </button>
        </div> */}
      </div>
    </>
  );
}
