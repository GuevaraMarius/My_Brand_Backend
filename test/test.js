import chai  from 'chai'
import server from '../index.js'
import chaiHttp from 'chai-http'
let should = chai.should();
chai.use(chaiHttp);
let id;
 describe('CRUD operations',()=>{
         it("should get all articles ",(done)=>{
             chai.request(server)
             .get("/articles")
             .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                 done();
             })
         })
        it("should get one article ",(done)=>{
            const articleId='5f96e7237d53c500173c565b'
            chai.request(server)
           
            .get("/articles/getOnePost/"+articleId)
            .end((err,response)=>{
               response.body.should.be.a('object');

                 done();
            })
        })
        it("should create an article ",(done)=>{
            const article={"title":"Hello ","description":" Hello Welt"}
            chai.request(server)
            .post("/articles")
            .send(article)
            .end((err,response)=>{
                
                console.log(response.result)
                response.should.have.status(201);
                 done();
            })
        })
        it("should update an article ",(done)=>{
            const articleId="5f96e7237d53c500173c565b"
            const article={"title":"Hallo","description":"Hallo Welt"}
            chai.request(server)
            .patch("/articles/update/"+articleId)
            .send(article)
            .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.have.property('success');
                 done();
            })
        })
       
        it("should delete an article ",(done)=>{
            chai.request(server)
            .delete(`/articles/delete/${id}`)
            .end((err,response)=>{
                 if(err) done(err);
                response.should.have.status(200);
                response.body.should.have.property('success');
                 done();
            })
        })     
 })
 
