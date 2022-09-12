import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="/">
            WeCare
          </a>
          {/* <ul class="nav navbar-nav navbar-right">
            <li>Call Us:0802233447</li>
          </ul> */}
          <span class="navbar-text text-bg-dark fs-6  fw-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <span> </span>
            Call Us : 080 2233447
          </span>
        </div>
      </nav>
      {props.children}
      <footer class="fixed-bottom py-2 text-bg-dark ">
        <p class="text-center mb-0 ">
          <>Copyright © 2020, WeCare. All rights reserved</>
        </p>
      </footer>
    </div>
  );
};

export default Navbar;
