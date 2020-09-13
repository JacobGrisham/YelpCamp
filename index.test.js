const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

// ============================================
// Obtaining up models and creating mock data
// ============================================

const CampgroundModel = require('./models/campground.js');
const CampgroundData = {name: "Upper Pines Campground", price: 30, image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", description: "Upper Pines campground is a backpacking campground site with no amenities", location: "Yosemite", createdAt: new Date()} // Want to add author and its keys: id and username.

const CommentModel = require('./models/comment.js');
const CommentData = {text: "Test comment text", createdAt: new Date()} // Want to add author and its keys: id and username.

const ReviewModel = require('./models/review.js');
const ReviewData = {rating: 5, text: "Test review text", createdAt: new Date()} // Want to add author and its keys: id and username. Want to add campground with its objectId

const UserModel = require('./models/user.js');
const UserData = {username: "Tester", password: "I love unit tests", avatar: "https://camo.githubusercontent.com/f6414ee20933d5fb8b06dc32ed38c8aa175da559/687474703a2f2f64702e68616e6c6f6e2e696f2f3331337933753244307033382f6a6573742e706e67", firstName: "Jest", lastName: "Jr", email: "tester@gmail.com", isAdmin: false}




// ====================================================
// Test example provided in the documentation of Jest
// ====================================================
describe('Test insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
	  useUnifiedTopology: true
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});


// ======================
// Test Campground Model
// ======================
describe('Campground Model Test', () => {
	
    // Connect to the MongoDB Memory Server by using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create & save a campground successfully', async () => {
		expect.assertions(7);
        const validCampground = new CampgroundModel(CampgroundData);
        const savedCampground = await validCampground.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedCampground._id).toBeDefined();
        expect(savedCampground.name).toBe(CampgroundData.name);
        expect(savedCampground.price).toBe(CampgroundData.price);
        expect(savedCampground.image).toBe(CampgroundData.image);
        expect(savedCampground.description).toBe(CampgroundData.description);
		expect(savedCampground.location).toBe(CampgroundData.location);
		expect(savedCampground.createdAt).toBe(CampgroundData.createdAt);
    });

    // Test Schema is working
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('should insert campground successfully, but the field that is not defined in schema should be undefined', async () => {
		expect.assertions(2);
        const campgroundWithInvalidField = new CampgroundModel({ name: "Upper Pines Campground", image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", nickname: "Bear-ridden pines" });
        const savedCampgroundWithInvalidField = await campgroundWithInvalidField.save();
        expect(savedCampgroundWithInvalidField._id).toBeDefined();
        expect(savedCampgroundWithInvalidField.nickkname).toBeUndefined();
    });

    // Test Validation is working
    // It should tell us the errors in name field.
    it('should create campground without required image field, which should cause a fail', async () => {
		expect.assertions(2);
        const campgroundWithoutRequiredField = new CampgroundModel({ name: "Upper Pines Campground" });
        let err;
        try {
            const savedCampgroundWithoutRequiredField = await campgroundWithoutRequiredField.save();
            error = savedCampgroundWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.image).toBeDefined();
    });
	
	// Close MongoDB server once complete
	afterAll( async () =>{
        await mongoose.connection.close()
    });
})


// ======================
// Test Comment Model
// ======================
describe('Comment Model Test', () => {
	
    // Cconnect to the MongoDB Memory Server by using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create & save a comment successfully', async () => {
		expect.assertions(3);
        const validComment = new CommentModel(CommentData);
        const savedComment = await validComment.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedComment._id).toBeDefined();
        expect(savedComment.text).toBe(CommentData.text);
        expect(savedComment.createdAt).toBe(CommentData.createdAt);
    });

    // Test Schema is working
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('should insert comment successfully, but the field that is not defined in schema should be undefined', async () => {
		expect.assertions(4);
        const commentWithInvalidField = new CommentModel({ text: "Just another test comment", createdAt: new Date(), moreText: "Bear-ridden pines" });
        const savedCommentWithInvalidField = await commentWithInvalidField.save();
        expect(savedCommentWithInvalidField._id).toBeDefined();
		expect(savedCommentWithInvalidField.text).toBeDefined();
		expect(savedCommentWithInvalidField.createdAt).toBeDefined();
        expect(savedCommentWithInvalidField.moreText).toBeUndefined();
    });
	
	// Close MongoDB server once complete
	afterAll( async () =>{
        await mongoose.connection.close()
    });
})


// ======================
// Test Review Model
// ======================
describe('Review Model Test', () => {
	
    // Cconnect to the MongoDB Memory Server by using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create & save a review successfully', async () => {
		expect.assertions(4);
        const validReview = new ReviewModel(ReviewData);
        const savedReview = await validReview.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedReview._id).toBeDefined();
        expect(savedReview.text).toBe(ReviewData.text);
        expect(savedReview.rating).toBe(ReviewData.rating);
		expect(savedReview.createdAt).toBe(ReviewData.createdAt);
    });

    // Test Schema is working
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('should insert review successfully, but the field that is not defined in schema should be undefined', async () => {
		expect.assertions(5);
        const reviewWithInvalidField = new ReviewModel({ rating: 5, text: "Test review text", createdAt: new Date(), additionalRating: 4 });
        const savedReviewWithInvalidField = await reviewWithInvalidField.save();
        expect(savedReviewWithInvalidField._id).toBeDefined();
		expect(savedReviewWithInvalidField.rating).toBeDefined();
		expect(savedReviewWithInvalidField.text).toBeDefined();
		expect(savedReviewWithInvalidField.createdAt).toBeDefined();
        expect(savedReviewWithInvalidField.additionalRating).toBeUndefined();
    });

    // Test Validation is working
    // It should tell us the errors in rating field.
    it('should create review with non-number, which should cause a fail', async () => {
		expect.assertions(2);
        const reviewWithoutRequiredField = new ReviewModel({ rating: "string" });
        let err;
        try {
            const savedReviewWithoutRequiredField = await reviewWithoutRequiredField.save();
            error = savedReviewWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.rating).toBeDefined();
    });
	
	// Close MongoDB server once complete
	afterAll( async () =>{
        await mongoose.connection.close()
    });
})


// ======================
// Test User Model
// ======================
describe('User Model Test', () => {
	
    // Cconnect to the MongoDB Memory Server by using mongoose.connect
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create & save a user successfully', async () => {
		expect.assertions(8);
        const validUser = new UserModel(UserData);
        const savedUser = await validUser.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser._id).toBeDefined();
        expect(savedUser.username).toBe(UserData.username);
        expect(savedUser.password).toBe(UserData.password);
        expect(savedUser.avatar).toBe(UserData.avatar);
        expect(savedUser.firstName).toBe(UserData.firstName);
		expect(savedUser.lastName).toBe(UserData.lastName);
		expect(savedUser.email).toBe(UserData.email);
		expect(savedUser.isAdmin).toBe(UserData.isAdmin);
    });

    // Test Schema is working
    // You shouldn't be able to add in any field that isn't defined in the schema
    it('should insert user successfully, but the field that is not defined in schema should be undefined', async () => {
		expect.assertions(9);
        const userWithInvalidField = new UserModel({ username: "Tester", password: "I love unit tests", avatar: "https://camo.githubusercontent.com/f6414ee20933d5fb8b06dc32ed38c8aa175da559/687474703a2f2f64702e68616e6c6f6e2e696f2f3331337933753244307033382f6a6573742e706e67", firstName: "Jest", lastName: "Jr", email: "tester@gmail.com", isAdmin: false, extraField: "Hey! This isn't supposed to be here." });
        const savedUserWithInvalidField = await userWithInvalidField.save();
        expect(savedUserWithInvalidField._id).toBeDefined();
		expect(savedUserWithInvalidField.username).toBeDefined();
		expect(savedUserWithInvalidField.password).toBeDefined();
		expect(savedUserWithInvalidField.avatar).toBeDefined();
		expect(savedUserWithInvalidField.firstName).toBeDefined();
		expect(savedUserWithInvalidField.lastName).toBeDefined();
		expect(savedUserWithInvalidField.email).toBeDefined();
		expect(savedUserWithInvalidField.isAdmin).toBeDefined();
        expect(savedUserWithInvalidField.extraField).toBeUndefined();
    });

    // Test Validation is working
    // It should tell us the errors in name field.
    it('should create user without required username value data type, which should cause a fail', async () => {
		expect.assertions(2);
        const userWithoutRequiredField = new UserModel({ username: [3] });
        let err;
        try {
            const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
            error = savedUserWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.username).toBeDefined();
    });
	
	// Close MongoDB server once complete
	afterAll( async () =>{
        await mongoose.connection.close()
    });
})