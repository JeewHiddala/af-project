import React, { Component } from 'react';
import carousal1 from '../images/carousal1.png';
import carousal2 from '../images/carousal2.jpg';
import carousal3 from '../images/carousal3.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.loadLogin = this.loadLogin.bind(this);
  }

  loadLogin(e) {
    window.location = '/login'
  }

  render() {
    return (
      <div>
        <br/><br/>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn btn-primary me-md-2" onClick={e => this.loadLogin(e)} >Login</button>
        </div>
        <h1>International Conference Application Framework</h1>
        <br />

        <br />
        <div className="row">

          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carousal1} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Meet with international Speakers</h5>
                    <p>You can share your ideas with local and international speakers</p>
                  </div>
    </div>
                <div class="carousel-item">
                  <img src={carousal2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Achieve your targets</h5>
                      <p>Build your knowledge with professional advices and guidance</p>
                    </div>
    </div>
                  <div class="carousel-item">
                    <img src={carousal3} class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Present your Research work</h5>
                        <p>A platform to present and share your research related activities with a vast audience</p>
                      </div>
    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Register as an Attendee</h5>
                      <p className="card-text">Join with us for our research paper sessions and workshops</p>
                      <a href="/attendee/create" className="btn btn-primary">Register</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Register as a Presenter</h5>
                      <p className="card-text">Join with us to share your knowledge as a researcher or a workshop conductor</p>
                      <a href="/presenter/create" className="btn btn-primary">Register</a>
                    </div>
                  </div>
                </div>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
              </div>
            </div>
            )
    }
}

            export default Home;