function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 items-center gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dempsey-zhang/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedinlogo" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-[35px] h-[35px] "
        href="https://github.com/zsg0428"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full"
          src="../assets/github.png"
          alt="githublogo"
        />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
