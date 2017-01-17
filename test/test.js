var supertest = require("supertest");
var should = require("should");
// This agent refers to PORT where the program is running.
var server = supertest.agent("http://localhost:8081");
// UNIT test begin
describe("Unit test",function(){
  // #1 should return home page
  it("Server is runnig",function(done){
    // calling home page
    server = supertest.agent("http://localhost:8081");
    console.log(server);
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(404) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      /*console.log("RES -->");
      console.log(res);
      console.log("<-- RES");
      console.log("res2:-->" + res.text + "<--");
      console.log("false");*/
      res.status.should.equal(404);
      done();
    });
  });
});
