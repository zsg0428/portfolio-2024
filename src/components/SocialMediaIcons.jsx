function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dempsey-zhang/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedinlogo" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 w-[30px] h-[30px] "
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
