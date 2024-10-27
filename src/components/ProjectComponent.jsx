function ProjectComponent({ project }) {
  const { title, techstacks, desc, demo, link } = project;
  return (
    <div className="md:flex md:flex-col gap-2 md:w-1/2 items-center">
      <h3>{title}</h3>
      {techstacks.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      <div>{desc}</div>
      {/* images */}
      <div className="flex gap-4 flex-wrap w-full">
        {demo &&
          demo.map((item, index) => {
            return (
              <img
                className="w-full md:w-1/2 lg:w1-/3 h-auto object-cover"
                src={item}
                alt={`${item}-pic`}
              />
            );
          })}
      </div>
      {link && (
        <button>
          <a target="_blank" rel="noreferrer" href={link}>
            Link to project
          </a>
        </button>
      )}
    </div>
  );
}

export default ProjectComponent;
