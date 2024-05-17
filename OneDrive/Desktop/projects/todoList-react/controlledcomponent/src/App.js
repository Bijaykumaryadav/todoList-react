import "./App.css";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

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
  };

  return (
    <Container fluid>
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
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.uname}</td>
                    <td>{user.uemail}</td>
                    <td>{user.uphone}</td>
                    <td>{user.umessage}</td>
                    <td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
