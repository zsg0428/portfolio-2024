import Accordion from "@mui/material/Accordion";
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ArrowDownward} from "@mui/icons-material";

export const ButtonShowMore = ({onClick, children, desc}) => {
    // return <button className='bg-yellow rounded-md w-[200px] h-auto p-4 text-center' onClick={onClick}>
    //     {children}
    // </button>
    return <div>
        <Accordion sx={{backgroundColor:'#3C79B4'}}>
            <AccordionSummary expandIcon={<ArrowDownward/>}>
            <Typography>Project Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{desc}</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
}