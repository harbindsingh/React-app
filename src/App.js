import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MainNav from "./Components/mainNav";
import SmallNav from "./Components/smallNav";
import Footer from "./Components/footer";
import Services from "./Pages/Services";
import ComingSoon from "./Pages/ComingSoon";
import CareerPage from "./Pages/Career";
import NotFound from "./Pages/notFound";
import BlogList from "./Components/blogListView";
import BlogDetail from "./Components/blogDetailView";
import IdeaSubmission from "./Pages/IdeaSubmissionForm";
import JobApplicationForm from "./Components/jobApplicationForm";

function App() {
  return (
    <Router>
      <SmallNav />
      <MainNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/ourServices" component={Services} />
        <Route path="/careers" component={CareerPage} />
        <Route exact path="/blogs" component={BlogList} />
        <Route exact path="/blogs/:blogId" component={BlogDetail} />
        <Route path="/ideaSubmission" component={IdeaSubmission} />
        <Route
          exact
          path="/jobApplication/:jobId"
          component={JobApplicationForm}
        />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
