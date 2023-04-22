import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mpic from "../src/poze/M.png";
import Mziuke from "../src/poze/a.jpg";
import Pictures from "../src/pictures.json";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container ">
          <a class="navbar-brand " href="#">
            {" "}
            <img className="size" src={Mpic}></img>
            <h3 className="d-inline align-middle">Mizuke</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* // section main// */}

      <section id="mainsection" className="text-white text-center">
        <div className="bg-mainsection">
          <div className="container py-5 ">
            <div className="row">
              <div className="col-lg-6 py-5">
                <h1 className="display-1"> So What You Dream Of.....</h1>
                <p>
                  Auto-layout for flexbox grid columns also means you can set
                  the width of one column and have the sibling columns
                  automatically resize around it. You may use predefined grid
                  classes (as shown below), grid mixins, or inline widths. Note
                  that the other columns will resize no matter the width of the
                  center column.
                </p>
                <button className="btn btn-outline-light">Find Out More</button>
              </div>
              <div className="col-lg-6 py-2 d-flex justify-content-center">
                <img
                  className="size-Mziuke img-fluid d-none d-lg-block"
                  src={Mziuke}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section form */}

      <section id="newsletter" className="bg-dark py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-md-4 py-1">
              <input
                type="text"
                class=" form-control form-control-lg"
                placeholder="First name"
              />
            </div>
            <div className="col-md-4 py-1">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </div>
            <div className="col-md-4 py-2">
              <button className="btn btn-primary btn-lg btn-block form-control">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* boxes */}

      <section className=" py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 py-2 ">
              <div className=" card py-4 border border-info ">
                <div className="card-body  ">
                  <h3 className="card-title text-info">Be Better</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-2">
              <div className="card bg-info py-4">
                <div className="card-body text-white">
                  <h3 className="card-title ">Be Better</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-2">
              <div className="card py-4 border border-info ">
                <div className="card-body  ">
                  <h3 className="card-title text-info">Be Better</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-2 ">
              <div className="card bg-info py-4">
                <div className="card-body text-white">
                  <h3 className="card-title ">Be Better</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="bg-light">
        <div className="container text-center py-4">
          <div className="row">
            <div className="col">
              <div className="info-header">
                <h1 className="py-4 text-primary">Why This Book</h1>
                <p className="text-muted w-50 m-auto mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Inline help text can be
                  flexibly implemented using any inline.
                </p>
              </div>
              {/* Accordion */}
              <div
                class="accordion accordion-flush py-5"
                id="accordionFlushExample"
              >
                <div class="accordion-item  ">
                  <h2 class="accordion-header " id="flush-headingOne">
                    <button
                      className="form-control bg-light fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Get Inspired
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      className="form-control  bg-light fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Gain the Knowledge
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>
                <div class="accordion-item ">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      className="form-control  bg-light fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Open Your Mind
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Meet the authors */}
      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="info-header">
                <h1 className="py-4 text-primary">Meet The Authors</h1>
                <p className="text-muted   m-auto mb-4">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Inline help text can be
                  flexibly implemented using any inline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* user contacts */}
      <section className="py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 py-5">
              <div className="card cdhover">
                <div className="card-body ">
                  <img
                    className=" rounded-circle "
                    src={Pictures.susan}
                  ></img>
                  <h3 className="fw-bold">Susan Wiliam</h3>
                  <h5>Lead writer</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Inline help text can be
                    flexibly implemented using any inline.
                  </p>
                  <div className="container">
                    <div className="row pb-4">
                      <div className="col">
                        <i class="fa-brands fa-facebook-f text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-twitter text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-google-plus-g text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 py-5">
              <div className="card cdhover">
                <div className="card-body ">
                  <img
                    className="rounded-circle "
                    src={Pictures.grace}
                  ></img>
                  <h3 className="fw-bold">Grace Wiliam</h3>
                  <h5>Lead writer</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Inline help text can be
                    flexibly implemented using any inline.
                  </p>
                  <div className="container">
                    <div className="row pb-4">
                      <div className="col">
                        <i class="fa-brands fa-facebook-f text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-twitter text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-google-plus-g text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 py-5">
              <div className="card cdhover">
                <div className="card-body ">
                  <img
                    className=" rounded-circle  "
                    src={Pictures.kevin}
                  ></img>
                  <h3 className="fw-bold">Kevin Shotrham</h3>
                  <h5>Lead writer</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Inline help text can be
                    flexibly implemented using any inline.
                  </p>
                  <div className="container">
                    <div className="row pb-4">
                      <div className="col">
                        <i class="fa-brands fa-facebook-f text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-twitter text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-google-plus-g text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-5">
              <div className="card cdhover">
                <div className="card-body ">
                  <img
                    className=" rounded-circle  "
                    src={Pictures.john}
                  ></img>
                  <h3 className="fw-bold">John Doehte</h3>
                  <h5>Lead writer</h5>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Inline help text can be
                    flexibly implemented using any inline.
                  </p>
                  <div className="container">
                    <div className="row pb-4">
                      <div className="col ">
                        <i class="fa-brands fa-facebook-f text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-twitter text-primary"></i>
                      </div>
                      <div className="col">
                        <i class="fa-brands fa-google-plus-g text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get in tochu */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-9">
              <h2>Get In Touch</h2>
              <p className="text-muted">
                Inline help text can be flexibly implemented using any inline.
              </p>
              <form>
                <div className="form-group py-2">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="form-group py-2">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="form-group py-2">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-pencil"></i>
                    </span>
                    <textarea
                      rows="5"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="form-group py-3 ">
                  <div class="input-group input-group-lg">
                    <input
                      type="submit"
                      class="form-control bg-primary text-white"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 d-flex align-items-center d-flex justify-content-center ">
              <img className="w-50 d-none d-lg-block " src={Mpic}></img>
            </div>
          </div>
        </div>
      </section>
     <footer className="bg-primary py-2">
     <div className="container  ">
        <div className="row  ">
          <div className="col-lg-9 d-flex justify-content-end align-items-center text-white">
            <p>Copy:@ 2017 Mziuke</p>
          </div>
          <div className="col-lg-3 d-flex justify-content-center  ">
            <img className="w-25 ft-size d-none d-lg-block" src={Mpic}></img>
          </div>
        </div>
      </div>
     </footer>
    </div>
  );
}

export default App;
