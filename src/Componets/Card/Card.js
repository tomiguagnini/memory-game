import {useState, useEffect} from 'react';
import ReactCardFlip from 'react-card-flip';


const Card = ({index,name,src,backImg,flipCard,unflippedCards,disabledCards}) => {
    const [flip, setFlip] = useState(false);
    const [hasEvent,setHasEvent] = useState(true);

    const imgFondo = <img className='img-card-fondo' src={backImg} alt="sin imagen"></img>
    const imgContent = <img className='img-card-content' src={src} alt="sin imagen"></img> 
    
    
    useEffect(() => {
        if(unflippedCards.includes(index)){
            setTimeout(()=>setFlip(false),700)
        }
       
    }, [unflippedCards]);
    
    useEffect(() => {
        if (disabledCards.includes(index)) {
          setHasEvent(false);
        }
      }, [disabledCards])
    
    const handleClick=()=>{
        const value = flipCard(name,index)
        if ( value !== 0){
            setFlip(!flip)
        }
    }
    
    return (
        <>
            
            <div className='celda' 
                 onClick={hasEvent ? handleClick : null}>
                 <ReactCardFlip isFlipped={flip}>
                     {imgFondo}
                     {imgContent}
                 </ReactCardFlip>
                 
            </div>
        </>
    );
};





export default Card;
