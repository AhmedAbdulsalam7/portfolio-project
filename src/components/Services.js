import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAddressCard, faComputer } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
// import { faFile } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <div className="serveces">
      <h1>My Services</h1>
      <section class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div className="card bg-light text-dark services-card">
                <div className="icon-service">
                  <FontAwesomeIcon icon={faComputer} size="lg" />
                </div>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="card-title mb-3 text-dark">Web Development</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                </div>
                <div>
                  <div className="line-service"></div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-light text-dark services-card">
                <div className="icon-service">
                  <FontAwesomeIcon icon={faFileCode} size="lg" />
                </div>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3 text-dark">Portfolio</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                </div>
                <div>
                  <div className="line-service"></div>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-light text-dark services-card">
                <div className="icon-service">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" />
                </div>
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3 text-dark">CV</h3>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                </div>
                <div>
                  <div className="line-service"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
