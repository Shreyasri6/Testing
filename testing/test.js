const chai = require("chai");
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
const server = require("./server");

let chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Task-api", function () {
  it("get user", function (done) {
    chai
      .request(server)
      .get("/")

      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        // res.body.should.have.property('name')

        done();
      });
  });
});

describe("/users", function () {
  it("post user", function (done) {
    let user = {
      name: "ABCDE",
      department: "mean",
      phone: 1234,
      
    };

    chai
      .request(server)
      .post("/user")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });
});
console.log("working");
