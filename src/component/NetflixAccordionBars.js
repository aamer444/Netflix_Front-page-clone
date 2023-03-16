import Accordion from 'react-bootstrap/Accordion';
import style from "../component/Accordion.module.css"

export default function AccordionBars({ details: { heading, p1, p2, id } }) {

    return (

        <div className="container-fluid w-50">

            <Accordion className=' text-center mt-2  '>
                <Accordion.Item eventKey={id} >
                    <Accordion.Header  className={style.customClass} >{heading}</Accordion.Header>
                    <Accordion.Body className='bg-dark text-light'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
        //     <div className="container-fluid  w-50 " >
        //     <div className="accordion ">
        //         <div className="accordion-item bg-secondary text-light ">
        //             <div className="accordion-header ">
        //                 <button data-bs-target={id1} data-bs-toggle="collapse" className="accordion-button bg-dark text-light fs-3">{heading}   </button>
        //             </div>
        //             <div className="accordion-collapse collapse" id={id1}>
        //                 <div className="accordion-body">
        //                     <p>{p1}</p>
        //                     <p>{p2}</p>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>

    )
}