import {Box, Grid2} from "@mui/material";
import {Carousel} from "./Carousel";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

function ProjectComponent({ project }) {
  const { title, techstacks, desc, demo, link } = project;
  const [isShowMore, setIsShowMore] = useState(false)


    const handleShowMore = () => {
      setIsShowMore(true)
    }
    const handleCloseMore = () => {
      setIsShowMore(false)
    }
  return (
      <Grid2 item size={{sm: 12, md: 6, lg: 6}} className="md:flex md:flex-col gap-2 md:w-1/2 items-center h-auto">
          <div className=' bg-light-blue h-20 w-auto rounded-md text-center items-center flex px-6 justify-center'>
              <p className='text-2xl'>

                  {title}
              </p>
          </div>
          {/*  Tech Stacks section */}
          <ul>

              {techstacks.map((item, index) => {
                  return <li key={index}>{item}</li>;
              })}
          </ul>

          <Box>

              {!isShowMore ? (
                  <button onClick={handleShowMore}>
                     <p className='text-center'>

                      Show More Details
                     </p>
                  </button>
              ) : (
                  <button onClick={handleCloseMore}>
                      <p className='text-center'>

                          Hide Details
                      </p>
                  </button>
              )}
              {/* Animated Description */}
              <AnimatePresence>
              {isShowMore && (
                      <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="p-4"
                      >
                          {desc}
                      </motion.div>
                  )}
              </AnimatePresence>
          </Box>
          {/* images */}
          <div className="flex gap-4 flex-wrap w-full">

              {demo.length > 1 ? <Carousel images={demo}/> : demo.map((item, index) => {
                  return (
                      <img
                          className="w-full h-[400px] object-cover"
                          src={item}
                          alt={`${item}-pic`}
                      />
                  );
              })}

          </div>
          {link && (
              <button className='mt-4 w-auto h-auto bg-yellow p-3 rounded-md text-center '>
                  <a className='font-bold text-lg text-black' target="_blank" rel="noreferrer" href={link}>
                      Link to project
                  </a>
              </button>
          )}

      </Grid2>
  );
}

export default ProjectComponent;
