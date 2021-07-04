import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';    //make routes
import Navbar from './components/navBar/navBar';
import ViewEditors from './components/views/editor.view';
import ViewReviewers from './components/views/reviewer.view';
import ViewAdmins from './components/views/admin.view';
import AdminRegistration from './components/registrationViews/admin.registrationView';
import EditorRegistration from './components/registrationViews/editor.registrationView';
import ReviewerRegistration from './components/registrationViews/reviewer.registrationView';
import UpdateAdmin from './components/updateViews/admin.updateView';
import UpdateEditor from './components/updateViews/editor.updateView';
import UpdateReviewer from './components/updateViews/reviewer.updateViews';
import AdminSubcategories from './components/subCategorizedViews/administrational.subCategory';
import NonAdminSubcategories from './components/subCategorizedViews/nonAdministrational.subCategory';
import AdminDashboard from './components/dashboards/admin.dashboard';
import OtherFacilities from './components/subCategorizedViews/otherFacilities.subCategorized';
import PostAdminView from './components/views/postAdminApproval.view';
import ApprovePostByAdmin from './components/approvalViews/approvePost.approvalViews';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import ResearchPaperUpload from './components/Reviewer/researchPaperUploads';
import editResearchPaperUpload from './components/Reviewer/editResearchPaperUpload';
import editRevieweProfile from './components/Reviewer/editProfile';
import ConfirmApproveWorkshopProposals from './components/Reviewer/confirmWorkshopProposal';
import ReviewedResearchPaperUpload from './components/Reviewer/reviewedResearchPaperUploads';
import workshopProposal from './components/Reviewer/workshopProposal';
import EditWorkshopProposals from './components/Reviewer/editworkshopProposals';
import viewAttendees from './components/Reviewer/attendee';
import AllAttendeeDetails from './components/Reviewer/viewAttendeeDetails';
import CreatePost from './components/createPost/createPost';
import Posts from './components/Posts/posts';
import updatePosts from './components/updatePost/updatePost';
import editEditorProfile from './components/editEditorProfile/editEditorProfile';
import postAdminView from './components/views/post.view';
//import postAdminView from './components/views/post.view';
import Login from './components/userLogin/login';
import CreateAttendee from './components/attendee/attendeeRegister';
import UpdateAttendee from './components/attendee/attendeeUpdate';
import UpdatePresenter from './components/presenter/presenterUpdate';
import CreatePresenter from './components/presenter/presenterRegister';
import AttendeeDashboard from './components/attendee/attendeeDashboard';
import PresenterDashboard from './components/presenter/presenterDashboard';
import AddAttendeePayment from './components/attendeePayment/makeAttendeePayment';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <section>
          <Switch>
            <Route path="/adminSubcategories" component={AdminSubcategories} />
            <Route path="/nonAdminSubcategories" component={NonAdminSubcategories} />
            <Route path="/adminDashboard" component={AdminDashboard} />
            <Route path="/otherFacilities" component={OtherFacilities} />
            <Route path="/editor" component={ViewEditors} />
            <Route path="/reviewer" component={ViewReviewers} />
            <Route path="/admin" component={ViewAdmins} />
            <Route path="/adminRegistration" component={AdminRegistration} />
            <Route path="/editorRegistration" component={EditorRegistration} />
            <Route path="/reviewerRegistration" component={ReviewerRegistration} />
            <Route path="/updateAdmin/:id" component={UpdateAdmin} />
            <Route path="/updateEditor/:id" component={UpdateEditor} />
            <Route path="/updateReviewer/:id" component={UpdateReviewer} />
            <Route path="/postadminview" component={PostAdminView} />
            <Route path="/approvepost/:id" component={ApprovePostByAdmin} />
            <Route path="/postAdView" component={postAdminView} />
            <Route path="/workshop" component={workshopProposal} />
            <Route path="/paperupload" component={ResearchPaperUpload} />
            <Route path="/attendeeView" component={viewAttendees} />
            <Route path="/edit/:id" component={EditWorkshopProposals} />
            <Route path="/view/:id" component={editResearchPaperUpload} />
            <Route path="/attendee-view/:id" component={AllAttendeeDetails} />
            <Route path="/profile/:id" component={editRevieweProfile} />
            <Route path="/configure/:id" component={ReviewedResearchPaperUpload} />
            <Route path="/confirm/:id" component={ConfirmApproveWorkshopProposals} />
            <Route path="/" component={Home} exact />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/updatePost/:id" component={updatePosts} />
            <Route path="/profile-update/:id" component={editEditorProfile} />
            <Route path='/attendee/create' component={CreateAttendee} />
            <Route path='/presenter/create' component={CreatePresenter} />
            <Route path='/login' component={Login} />
            <Route path='/post' component={Posts} />
            <Route path='/attendee/pay/store' component={AddAttendeePayment} />
            <Route path='/attendee/dashboard' component={AttendeeDashboard} />
            <Route path='/presenter/dashboard' component={PresenterDashboard} />
            <Route path='/attendee/:id' component={UpdateAttendee} />
            <Route path='/presenter/:id' component={UpdatePresenter} />


          </Switch>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;