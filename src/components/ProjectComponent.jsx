import {Box, Grid2} from "@mui/material";
import {Carousel} from "./Carousel";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ButtonShowMore} from "./ButtonShowMore";
import {ButtonRedirect} from "./ButtonRedirect";
import {TechStacks} from "./TechStacks";
import Accordion from '@mui/material/Accordion';
function ProjectComponent({ project }) {
  const { title, techstacks, desc, demo, link, github, shortDesc } = project;
  const [isShowMore, setIsShowMore] = useState(false)


    const handleShowMore = () => {
      setIsShowMore(true)
    }
    const handleCloseMore = () => {
      setIsShowMore(false)
    }
  return (
      <Grid2 sx={{border: '#FDCC49 1px solid', padding: "30px"}} item size={{sm: 12, md: 6, lg: 6}}
             className="md:flex md:flex-col gap-2 md:w-1/2 items-center h-auto">

          <div className='flex flex-col gap-4 justify-center items-center'>

              <div className=' bg-light-blue h-20 w-auto rounded-md text-center items-center flex px-6 justify-center'>
                  <p className='text-2xl'>
                      {title}
                  </p>
              </div>

              <p>{shortDesc}</p>
          </div>

          {/*  Tech Stacks section */}
          <div className='flex flex-col justify-center items-center mt-6'>

          <p className='font-bold text-yellow'>
              TechStacks:
          </p>
          <ul className='flex gap-3 my-4' >
              {techstacks.map((item, index) => {
                  return <TechStacks index={index} item={item}/>
              })}
          </ul>
          </div>

          <Box className='flex flex-col justify-center items-center my-4'>

              {!isShowMore ? (
                  <ButtonShowMore desc={desc} onClick={handleShowMore}>
                      {/*<p className='text-center text-black'>*/}

                      {/* Show More Details*/}
                      {/*</p>*/}

                  </ButtonShowMore>
              ) : (
                  <ButtonShowMore onClick={handleCloseMore}>


                      <p className='text-center text-black'>

                          Hide Details
                      </p>
                  </ButtonShowMore>
              )}
              {/* Animated Description */}
              <AnimatePresence>
                  {isShowMore && (
                      <motion.div
                          initial={{opacity: 0, height: 0}}
                          animate={{opacity: 1, height: "auto"}}
                          exit={{opacity: 0, height: 0}}
                          transition={{duration: 0.5, ease: "easeInOut"}}
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
          <div className='flex gap-2 justify-center'>

              {link && (
                  <ButtonRedirect link={link}>Live App</ButtonRedirect>
              )}
              {github && <ButtonRedirect link={github}>GitHub Repo</ButtonRedirect>}
          </div>

      </Grid2>
  );
}

export default ProjectComponent;
