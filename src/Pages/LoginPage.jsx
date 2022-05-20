import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        width: "800px",
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "100px",
      }}
    >
      
      {" "}
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          username
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">
          Password
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">
          Login
        </button>
      </div>
      {/* <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div> */}
    </div>
  );
};

export default LoginPage;
