import React from "react";
import noImage from "../../img/noImage.jpeg";
import placeholderhome from "../../img/placeholderhome.jpeg";


const Home = () => {
  return (
    <>
      <div class="container">
        {/* this will be the main image. make image bigger using css, then use absolute position to have text overlap the image*/}
        <img src={placeholderhome}></img> </div>


        <div class="container">
        {/* tabs are centered.. use css to style.. */}
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Articles and Essays
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Art & Film
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Clubs
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Discord
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tutoring
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Other
            </a>
          </li>
        </ul>
      </div>

      {/* need to add styling
      make the images or carousel smaller */}
      <div id="carouselExampleSlidesOnly" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <div class="card">
          <img src={noImage} class="d-block w-100" alt="..."></img>
          <div class="container">
          <h4><b>Title</b></h4>
          <p>Description</p>
          </div>
          </div>
          </div>

          <div class="carousel-item">
          <div class="card">
          <img src={noImage} class="d-block w-100" alt="..."></img>
          <div class="container">
          <h4><b>Title</b></h4>
          <p>Description</p>
          </div>
          </div>
          </div>
          
          <div class="carousel-item">
          <div class="card">
          <img src={noImage} class="d-block w-100" alt="..."></img>
          <div class="container">
          <h4><b>Title</b></h4>
          <p>Description</p>
          </div>
          </div>
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <i
            className="fa-solid fa-chevron-left"
            style={{ color: "black" }}
          ></i>

          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <i
            className="fa-solid fa-chevron-right"
            style={{ color: "black" }}
          ></i>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
