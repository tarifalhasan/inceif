import Link from "next/link";
import Container from "../Container";

const Header = () => {
  return (
    <div className="fixed z-50 top-3 left-0 right-0">
      <Container>
        <header className="flex items-center justify-between ">
          <div>
            <Link href={"/"}>
              <span className="text-t-32 text-white font-bold font-open_sans">
                INCEIF.
              </span>
            </Link>
          </div>
          <ul className=" hidden md:inline-flex items-center gap-5">
            <li>
              <Link href={"#contact-us"}>
                <span className="text-base text-white font-inter font-semibold">
                  Contact Us
                </span>
              </Link>
            </li>
            <li>
              <Link href={"#contact-us"}>
                <span className="text-base text-white font-inter font-semibold">
                  Sign Up
                </span>
              </Link>
            </li>
            <li>
              <button className="login_btn">
                <span>Log In</span>
              </button>
            </li>
          </ul>
        </header>
      </Container>
    </div>
  );
};

export default Header;
