import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../http-common";
import noImage from "../../img/noImage.jpeg";
import Spinner from "./Spinner";
import moment from "moment";
import test from "../../img/Articles&Essays-header.jpg";
import header from "../../img/Articles&Essays-header.jpg";

const Articles = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const links = [
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post1",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post2",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post3",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post4",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post5",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post6",
    },
    {
      id: 1,
      link: "https://library.sfsu.edu/new-books",
      content: "Articles and Essays",
      title: "Articles & Essays Post7",
    },
  ];

  return (
    <>
      <div>
        <div class="header-image">
	
          
            <h1 className="header-text"> Articles & Essays </h1>
          
        </div>
        {/* <h1>Articles & Essays</h1> */}
        <div id="sort">
          <div className="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle sort-btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Alphabetically
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Most recent
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Most popular
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {links.map((link, i) => {
              return (
                <div key={`links-link-${i}`} className="col">
                  <div className="card posts">
                    <img
                      src={test}
                      className="card-img-top"
                      alt="No image..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <i>{link.title ? link.title : "No title..."}</i>
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "500px",
                        }}
                      >
                        {link.content ? link.content : "No description..."}
                      </p>
                      <button className="btn btn-light posts-btn">
                        <a href={link.link}>Find out more!</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;