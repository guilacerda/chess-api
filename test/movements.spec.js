var chai = require("chai");
var should = require("should");
let chaiHttp = require('chai-http');

var urlBase = "http://localhost:3000";
var position = {
    "position": "H5"
}

chai.use(chaiHttp);

describe("Testing of Chess API", () => {
    it("POST /movement/knight", (done) => {
       chai.request(urlBase)
         .post('/movement/knight')
         .send(position)
         .end((err, res) => {
            res.status.should.have.be.equal(200);
            done();
        });
    });

    it("POST /movement/rook", (done) => {
        chai.request(urlBase)
         .post('/movement/rook')
         .send(position)
         .end((err, res) => {
            res.status.should.have.be.equal(200);
            done();
         });
    });

    it("POST /movement/queen", (done) => {
        chai.request(urlBase)
         .post('/movement/queen')
         .send(position)
         .end((err, res) => {
            res.status.should.have.be.equal(404)
            done();
         });
    });
});