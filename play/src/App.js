import "./App.css";
import iyanu from "./../src/iyanu.jpeg";

function App() {
  return (
    <div id="page" data-theme="bumblebee">
      <div className="navbar bg-base-100" id="navbar" data-theme="dark">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="google.com">Homepage</a>
              </li>
              <li>
                <a href="google.com">Portfolio</a>
              </li>
              <li>
                <a href="google.com">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="google.com" className="btn btn-ghost normal-case text-xl">
            CarpEx
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <br />
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5" class="text-xl font-medium">
              I'm Iyanuoluwa Dada, a frontend developer. I build websites that
              makes it easy for users to interact with your business and value
              it more
            </p>
            <br />
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn">
              About Me
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="my-modal"
              className="modal-toggle secondary"
              data-theme="light"
            />
            <div className="modal" data-theme="dark">
              <div className="modal-box">
                <div className="mockup-phone border-info" id="phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <header>Welcome to my website</header>
                      <br />
                      <div className="avatar online">
                        <div className="w-24 rounded-full">
                          <img src={iyanu} alt="me" />
                        </div>
                      </div>
                      <br />
                      <p>I'm Iyanuoluwa Dada, a frontend developer</p>
                      <br />
                      <div className="carousel w-full">
                        <div
                          id="slide1"
                          className="carousel-item relative w-full"
                        >
                          <img
                            src="https://placeimg.com/800/200/arch"
                            alt="slide"
                            className="w-full"
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide2"
                          className="carousel-item relative w-full"
                        >
                          <img
                            src="https://placeimg.com/800/200/arch"
                            alt="slide"
                            className="w-full"
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide3"
                          className="carousel-item relative w-full"
                        >
                          <img
                            src="https://placeimg.com/800/200/arch"
                            alt="slide"
                            className="w-full"
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide4"
                          className="carousel-item relative w-full"
                        >
                          <img
                            src="https://placeimg.com/800/200/arch"
                            alt="slide"
                            className="w-full"
                          />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="btm-nav" data-theme="light">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Warnings</span>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Statics</span>
        </button>
      </div>
    </div>
  );
}

export default App;
