import chai  from 'chai'
import server from '../index.js'
import chaiHttp from 'chai-http'
let should = chai.should();
chai.use(chaiHttp);

 describe('CRUD operations',()=>{
     describe('Get all articles',()=>{
         it("should get all articles ",(done)=>{
             chai.request(server)
             .get("/articles")
             .end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('object');
                 done();
             })
         })
     })
     describe('Get one article',()=>{
        it("should get one article ",(done)=>{
            const articleId='5f96e7237d53c500173c565b'
            chai.request(server)
           
            .get("/articles/getOnePost/"+articleId)
            .end((err,response)=>{
               response.body.should.be.a('object');

                 done();
            })
        })
    })
    describe('Create an article',()=>{
        it("should create an article ",(done)=>{
            const article={"title":"7rings","description":" Ariana Glande"}
            chai.request(server)
            .post("/articles")
            .send(article)
            .end((err,response)=>{
                response.should.have.status(201);
                 done();
            })
        })
    })
    describe('update an article',()=>{
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
    })

 })
