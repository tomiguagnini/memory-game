import React, {useState , useEffect} from 'react';
import Card from '../Card/Card';
import Fondos from '../../assets/Fondos'
import Frutas from '../../assets/Cards'

console.log(Frutas)



const Tablero = ({bkg}) => { 
    const [cards, setCards] = useState([]);
    const [card1, setCard1] = useState({});
    const [card2, setCard2] = useState({});
    const [disbledCards, setDisabledCards] = useState([]);
    const [unflippedCards, setUnflippedCards]= useState([]);


   


    useEffect(()=>{
        shuffle(Frutas)
        setCards(Frutas)
    },[])

    useEffect(()=>{
        checkMatch()
    },[card2])

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const flipCard = (name ,index) =>{
        if(card1.name === name && card1.index === index){
            return 0;
        }
        if (!card1.name){
            setCard1({name,index})
        }
        else if (!card2.name){
            setCard2({name,index})
        }
        return 1
    }

    const checkMatch = (card)=>{
        if (card1.name && card2.name){
            const match = card1.name === card2.name
            match ? disableCard(): unflipCards()
        }
    }

    const disableCard = () => {
        setDisabledCards([card1.index, card2.index]);
        resetCards();
      };
    
      const unflipCards = () => {
        setUnflippedCards([card1.index, card2.index]);
        resetCards();
      };
    
      const resetCards = () => {
        setCard1({});
        setCard2({});
      }

    

    return (
    <>       
        <div className='tablero'>
            
            {
                cards.map((card, index)=>(
                    <Card 
                    index={index}
                    name={card.name} 
                    src={card.src}
                    backImg={Fondos[bkg]}
                    match={checkMatch}
                    flipCard={flipCard} 
                    unflippedCards={unflippedCards}
                    disabledCards={disbledCards}
                    />
                ))
            } 
        </div>
    </>    
    );
}

export default Tablero;
