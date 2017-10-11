const neo4j = require('neo4j-driver').v1;
const database = require('../../config/database');
const route = require('./routes');

const session = database.driver.session();
/*    var signUpUser = function(userRole,userName,userPass,userEmail,userPhno,callback){
        session.run("CREATE (SignUP:SignupDetails{SignupID:2001,UserRole:'"+userRole+"',Email:'"+userEmail+"',FullName:'"+userName+"',Password:'"+userPass+"',PhoneNumber:'"+userPhno+"'})")
			.then(function(result){
                callback('success');
                session.close();
			})
			.catch(function(error){
                callback('failure');
				console.log(error);
			});
    }*/
    
const matchRide = function(bookDetails, callback){
    //book the ride and send the feedback
    /**
     * check the route from bookDetails
     * get the middle stopages
     * find pickup will be nearer to which stopage
     * find drop will be nearer to which stopage
     * find stogages in d middle of pickup and drop-
     * create route map{
     *          pickup - truck
     *          affective stopage - truck(1...._....n)
     *          drop - truck
     * }
     */
    callback('Success');

}
module.exports.matchRide = matchRide;