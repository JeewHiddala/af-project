const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');   
//const presenterAPI = require('./src/api/presenter.api');
const researchPaperAPI = require('./src/api/researchPaper.api');
const workshopProposalAPI = require('./src/api/workshopProposal.api');
//const reviewerAPI = require('./src/api/reviewer.api');
//const attendeeAPI = require('./src/api/attendee.api');
const approvedWorkshopProposalAPI = require('./src/api/reviewedWorkshopProposal.api');
const reviewedResearchPaperUploadAPI = require('./src/api/reviewedResearchPaperUpload.api');

//import APIs
const adminAPI = require('./src/apis/admin.api');
const editorAPI = require('./src/apis/editor.api');
const reviewerAPI = require('./src/apis/reviewer.api');
const postAPI = require('./src/apis/post.api');
const attendeeAPI = require('./src/apis/attendee.api');
const presenterAPI = require('./src/apis/presenter.api');
const loginAPI = require('./src/apis/login.api');
const attendeePaymentAPI = require('./src/apis/attendeePayment.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

//port no for run backend server
const PORT = process.env.PORT || 8066;
const MONGODB_URI = process.env.MONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI, {
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
  console.log('Database Synced');
});

//root route
app.route('/').get((req, res) => {
  res.send('SLIIT AF FINAL API BY SE2021 BATCH');
});

//register router

app.use('/presenter', presenterAPI());

app.use('/reviewer', reviewerAPI());
app.use('/post', postAPI());
app.use('/admin', adminAPI());

app.use('/attendee', attendeeAPI());
app.use('/editor', editorAPI());
app.use('/approvedWorkshopProposal', approvedWorkshopProposalAPI());

app.use('/reviewedResearchPaperUpload', reviewedResearchPaperUploadAPI());

app.use('/workshopProposal', workshopProposalAPI());

app.use('/researchPaper', researchPaperAPI());

app.use('/presenter', presenterAPI());
app.use('/login', loginAPI());
app.use('/attendee/pay', attendeePaymentAPI());

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});