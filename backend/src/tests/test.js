const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');
const request = require('supertest');
const WorkshopProposal = require('../models/workshopProposalModel');
const Reviewer = require('../models/reviewerModel');

//import APIs
const adminAPI = require('../apis/admin.api');
const attendeeAPI = require('../apis/attendee.api');
const presenterAPI = require('../apis/presenter.api');
const loginAPI = require('../apis/login.api');

const reviewerAPI = require('../apis/reviewer.api');
const approvedWorkshopProposalAPI = require('./src/api/reviewedWorkshopProposal.api');
const workshopProposalAPI = require('./src/api/workshopProposal.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
jest.setTimeout(18000);

//port no for run backend server
const PORT = process.env.TESTPORT || 8067;
const MONGODB_URI = process.env.TESTMONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI || '&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

//open connection
mongoose.connection.once('open', () => {
    console.log('Test Database Synced');
});

//root route
app.route('/').get((req, res) => {
    res.send('SLIIT AF FINAL TEST');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});

//register router - testcase 1
app.use('/admin', adminAPI());
app.use('/attendee', attendeeAPI());
app.use('/presenter', presenterAPI());
app.use('/login', loginAPI());


//test case 1- Hiddalarachchi J. - IT19007502
test('should insert a new administrator', async () => {
    await request(app).post('/admin/create').send({
        name:"Kamal22 Hettiwaththa",
        email:"Kamal22@gmail.com",
        nicNo:"965887475V",
        address:"59,new road,Ampara",
        mobileNumber:87878,
        userName:"kamal22",
        password:"33333",
        salary:25000,
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//register router - testcase 2
app.use('/reviewer', reviewerAPI());

//test case 2- Hiddalarachchi J. - IT19007502
test('should insert a new administrator', async () => {
    await request(app).post('/reviewer/create').send({
        name:"Kamal22 Hettiwaththa",
        email:"Kamal22@gmail.com",
        nicNo:"965887475V",
        address:"59,new road,Ampara",
        mobileNumber:87878,
        userName:"kamal22",
        password:"33333",
        reviewerSalary:25000,
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//IT19051826 Test Case1
app.use('/workshopProposal', workshopProposalAPI());
test('should delete a workshop proposal', async () => {
    await request(app).delete('/workshopProposal/60d81ff5825f181d4c81451d').send({
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//IT19051826 Test Case2
app.use('/approvedWorkshopProposal', approvedWorkshopProposalAPI());
test('should save approved workshop proposal', async () => {
    await request(app).post('approvedWorkshopProposal/create').send({
        content: "Interoperability, Availability in Instagram",
        title: "Instagram",
        venue: "Provincial Council Auditorium Colombo",
        date:  "2020-10-05",
        organizers: "Dilan Senanayake",
        duration: "2 hour",
        type: "regular",
        status: "Pending",
        document: "/file_uploads/cloud_Computing.doc"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})
//IT19051826 TestCase 3
app.use('/reviewer', reviewerAPI());
test('should edit reviewer user profile', async () => {
    await request(app).put('/reviewer/60dc9eaa4bf5640020d14d6b').send({
     name: "Madura Ganearachchi2",
     email: "madura@gmail.com2",
     nicNo: "546856854V222333",
     address: "21/1,new road,kandy2",
     mobileNumber: 77545425111222,
     userName: "madura134",
     password: "11223312",
     reviewerSalary: 300001333       
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})
//IT19051826 Test Case 4
app.use('/reviewer', reviewerAPI());
test('should get all reviewer profile details', async () => {
    await request(app).get('/reviewer').send({
     name: "Madura Ganearachchi2",
     email: "madura@gmail.com2",
     nicNo: "546856854V222333",
     address: "21/1,new road,kandy2",
     mobileNumber: 77545425111222,
     userName: "madura134",
     password: "11223312",
     reviewerSalary: 300001333       
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//test case 1 -De Seram E.M.A.P. - IT19021058
 
const editorApi = require('../apis/editor.api');
app.use('/editor',editorApi());
 
test('add new editor to the system', async () => {
    await request(app).post('/editor/create').send({
     name: "Namal Karunarathne",
     email: "namal@gmail.com",
     nicNo: "787415454V",
     address: "colombo 7",
     mobileNumber: 77588995,
     userName: "namal",
     password: "444444",
     editorSalary: 165000       
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})
 
//test case 2 - De Seram E.M.A.P. - IT19021058
test('Login validation', async () => {
  await request(app).post('/login').send({
      username: "namal",
      password: "444444"
  }).expect(200).then((res) => {
      id = res.body._id;
  });
})

//test case 1 IT19059150
test('Should register a new attendee', async () => {
  await request(app).post('/attendee/create').send({
      name: "Tom Wen",
      email: "tom@gmail.com",
      mobileNo: "0778596456",
      username: "tom",
      password: "147",
      workplace: "X Company",
      jobRole: "CEO",
      type: "virtual",
      country: "India",
      emergencyContactNo: "0778545999",
      emergencyContactName: "Tim Wen"
  }).expect(200).then((res) => {
      id = res.body._id;
  });
})

//test case 2 IT19059150
test('Should register a new presenter', async () => {
  await request(app).post('/presenter/create').send({
      name: "Jim Wen",
      email: "jim@gmail.com",
      mobileNo: "0778596456",
      username: "jim",
      password: "177",
      workplace: "X Company",
      presenterType: "Researcher",
      sessionType: "Virtual",
      jobRole: "Manager",
      researchArea: "IT",
      country: "India"
  }).expect(200).then((res) => {
      id = res.body._id;
  });
})

//test case 3 IT19059150
test('Should validate login', async () => {
  await request(app).post('/login').send({
      username: "tom",
      password: "147"
  }).expect(200).then((res) => {
      id = res.body._id;
  });
})

//test case 4 IT19059150
test('Should update attendee', async () => {
  await request(app).patch('/attendee/update/:id').send({
      name: "Tom Yuan",
      email: "tom@gmail.com",
      mobileNo: "0778596456",
      username: "tom",
      password: "147",
      workplace: "X Company",
      jobRole: "CEO",
      type: "virtual",
      country: "India",
      emergencyContactNo: "0778545999",
      emergencyContactName: "Tim Yuan"
  }).expect(200).then((res) => {
      id = res.body._id;
  });
})