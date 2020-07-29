var chai = require("chai");
var should = require("should");
let chaiHttp = require('chai-http');
var urlBase = "http://localhost:3000";

chai.use(chaiHttp);

describe("Testing of Chess API", () => {
    it("POST /movement/knight", (done) => {
       let position = {
           "position": "H5"
       }

       chai.request(urlBase)
        .post('/movement/knight')
        .send(position)
        .end((err, res) => {
            res.status.should.have.be.equal(200);
            done();
        });
    });
});