import { useEffect, useState } from 'react';
import CatElement from '../CatElementComponent/CatElement';
import './MainCats.css';
import { getCatFact} from  '../../api/APIcats'
import styled from 'styled-components';


const FlexGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 10px;
  border: 3px;
  justify-content: center;
`;

const Shuffle = styled.div`
  font-family: Chango;
  background-color: #ff8b4e;
  color: white;
  font-size: 15px;
  border-radius: 25px;
  padding: 10px;
  height: 20px;
  cursor: pointer;
`;


function MainCatsComponent() {

  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    getCatFact(setCatFacts);
  }, []);

  return (
    <div>
      <FlexGrid >
        {catFacts && catFacts.map((element : any,index) => {
          return <CatElement fact={element.fact} length={element.length}  key={index} uniqueKey={Math.random()} />
        })}
        
      </FlexGrid>
      <Shuffle  onClick={() => getCatFact(setCatFacts)}>SHUFFLE </Shuffle>
    </div>
    
  );
}

export default MainCatsComponent;
