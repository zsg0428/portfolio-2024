import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Link = ({ page, selectedPage, setSelectedPage, logoColor }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage ? lowerCasePage : "home"}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page ? (
        page
      ) : (
        <img
          src="assets/logo-transparent.png"
          alt="logo"
          className={`w-9 h-9 hover:cursor-pointer ${logoColor}`}
        />
      )}
    </AnchorLink>
  );
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? " " : "bg-light-blue";
  const logoColor = isTopOfPage ? "bg-white rounded-full" : "";

  const handleGoTop = () => {
    setSelectedPage("home");
  };
  return (
    <nav className={`z-40 w-full fixed top-0 py-6 ${navbarBackground}`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* Logo */}

        <Link
          page=""
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          logoColor={logoColor}
        >
          <img
            onClick={handleGoTop}
            src="assets/logo-transparent.png"
            alt="logo"
            className={`w-9 h-9 hover:cursor-pointer ${logoColor}`}
          />
        </Link>

        {/* Desktop NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Skills"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
            <Link
              page="Projects"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />

            <Link
              page="Contact"
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled((prev) => !prev)}
          >
            <MenuIcon />
          </button>
        )}

        {/* Mobile menu popup */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <CloseIcon />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue ">
              <Link
                page="Home"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Skills"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <Link
                page="Projects"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />

              <Link
                page="Contact"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
