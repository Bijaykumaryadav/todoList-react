import "./App.css";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);

  const getValue = (event) => {
    const oldData = { ...formData };
    const inputName = event.target.name; //uname
    const inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.uemail == formData.uemail || v.uphone == formData.uphone
      );

      if (checkFilterUser.length == 1) {
        toast.error("Email id or phone no already exists !!");
      } else {
        const oldUserData = [...userData, currentUserFormdata]; // Old Array + New Array Elements
        setUserData(oldUserData);

        // Clear form after submission
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      let editIndex = formData.index;
      let oldData = userData;
      oldData[editIndex]["uname"] = formData.uname;
      oldData[editIndex]["uemail"] = formData.uemail;
      oldData[editIndex]["uphone"] = formData.uphone;
      oldData[editIndex]["umessage"] = formData.umessage;

      setUserData(oldData);
    }
  };

  // note: filter gives us a new array after each update
  let deleteRow = (indexNumber) => {
    let filterDataafterDelete = userData.filter((v, i) => i != indexNumber);
    toast.success("Data deleted successfully");
    setUserData(filterDataafterDelete);
  };

  let editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i == indexNumber)[0];
    // toast.success("Data updated successfully");
    editData["index"] = indexNumber;
    setFormData(editData);
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <form action="" onSubmit={handleSubmit}>
              <div className="pb-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uname}
                  name="uname"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={getValue}
                  value={formData.uemail}
                  name="uemail"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uphone}
                  name="uphone"
                  className="form-control"
                />
              </div>
              <div className="pb-3">
                <label htmlFor="" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  onChange={getValue}
                  value={formData.umessage}
                  name="umessage"
                  id=""
                  rows="3"
                ></textarea>
              </div>

              <button className="btn btn-primary">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.uname}</td>
                      <td>{user.uemail}</td>
                      <td>{user.uphone}</td>
                      <td>{user.umessage}</td>
                      <td>
                        <button onClick={() => deleteRow(index)}>Delete</button>
                        <button onClick={() => editRow(index)}>Update</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6}>No Data found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
