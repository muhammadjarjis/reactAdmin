import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label>Username</label>
          <input type="text" placeholder="Jack" />
        </div>
        <div className="newUserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="Jack Dunn" />
        </div>
        <div className="newUserFormItem">
          <label>Email</label>
          <input type="email" placeholder="jackdun@gmail.com" />
        </div>
        <div className="newUserFormItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserFormItem">
          <label>Phone</label>
          <input type="text" placeholder=" +62 832 122 111" />
        </div>
        <div className="newUserFormItem">
          <label>Address</label>
          <input type="text" placeholder="Bandung | Indonesia" />
        </div>
        <div className="newUserFormItem">
          <label>Gender</label>
          <div className="newUserFormItemGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserFormItem">
          <label>Active</label>
          <select className="newUserFormItemSelect" name="" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserFormItemButton">Create</button>
      </form>
    </div>
  );
}
