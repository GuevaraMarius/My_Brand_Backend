  
import chai  from 'chai'
import server from '../index.js'
import chaiHttp from 'chai-http'
import Post from '../models/postModels.js'

let should = chai.should();
chai.use(chaiHttp);
let id;
 describe('CRUD operations',()=>{

    describe('create ',()=>{
        beforeEach(async()=>{
           await Post.deleteMany({});
        })
        it("should create an article ",(done)=>{
            const article={"title":" folll","description":"Run goll test"}
            chai.request(server)
            .post("/articles")
            .send(article)
            .end((err,response)=>{
                response.should.have.status(201);
                 done();
            })
        })
        it("It should not Create an article without title or description", (done) => {
            const article={"description":" Check"}
            chai.request(server)
              .post("/articles")
              .send(article)
              .end((error,response) => {
                response.should.have.status(500);
                response.body.should.have.property('success').eql(false);
              done();
              });
          });



    })
     describe('Read ',()=>{
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
        it("should not get all articles with unknown route ",(done)=>{
            chai.request(server)
            .get("/article")
            .end((err,response)=>{    
               response.should.have.status(404);
                done();
            })
        })
        it("should not get an article with unknown route ",(done)=>{
            chai.request(server)
            .get("/article/getOnePost")
            .end((err,response)=>{    
               response.should.have.status(404);
                done();
            })
        })


     })
         describe('update ',()=>{
            it("should update an article ",(done)=>{
                const articleId="5f96e7237d53c500173c565b"
                const article={"title":"Hallo","description":"Hallo Welt"}
                chai.request(server)
                .patch("/articles/update/"+articleId)
                .send(article)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.have.property('success');
                     done();
                })
            })
            it("should  not update an article without ID ",(done)=>{
                const articleId="";
                const article={"title":"Hallo","description":"Hallo Welt"}
                chai.request(server)
                .patch("/articles/update/"+articleId)
                .send(article)
                .end((err,response)=>{
                    response.should.have.status(404);
                     done();
                })
            })

         })
         describe('delete',()=>{
        it("should delete an article ",async()=>{
            const  article= await Post.create({
                title:"GOOAL",
                description:"Mancity"
            })
            await article.save();
            chai.request(server)
            .delete(`/articles/delete/${article._id}`)
            .end((err,response)=>{
                 if(err) done(err);
                response.should.have.status(201);
                response.body.should.have.property('success');
                 
            })
        }) 
        it("should  not delete an article without id  ",(done)=>{
            const articleId=""
            chai.request(server)
            .delete(`/articles/delete/${articleId}`)
            .end((err,response)=>{
                 if(err) done(err);
                response.should.have.status(404);
                 done();
            })
        })     

         })
       
        
       
        
 })