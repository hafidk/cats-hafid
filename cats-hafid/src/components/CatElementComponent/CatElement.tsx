
import React from "react";
import styled from 'styled-components';
import { usePopoverState, PopoverDisclosure } from "reakit/Popover";
import { Popover as BasePopover, } from "reakit/Popover";

import {
  isMobile
} from "react-device-detect";

const GridItem = styled.div`
  height: 35vh;
  width: 20vw;
  @media(max-width: 768px) {
    width: 45vw;
    height: 40vh;
  }
  margin: 5px;
  box-shadow: 1px 5px 5px whitesmoke;
  border-radius: 13px;
  background-color: white;
`;

const CatImage = styled.div`
  width: 20vw;
  height: 10vw;
  @media(max-width: 768px) {
    width: unset;
    height: 17vh;
  }
  border-radius: 13px 13px 0px 0px;
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  -webkit-transition: background 0.5s linear;
  -moz-transition: background 0.5s linear;
  -o-transition: background 0.5s linear;
  transition: background 0.5s linear;
`;

const CatDescription = styled.div`
  margin: 20px 10px;
  text-align: justify;
`;

const PopOverClass = styled.div`
  color: white;
  background-color: #3696e4;
  width: 20vw;
  padding: 10px;
  @media(max-width: 768px) {
    width: unset;
  }
  text-align: justify;
  border-radius: 13px;
`;

const ReadMore = styled.div`
  color: #54abf2;
  cursor: pointer;
  text-align: left;
  margin: 0px 10px;

`;

function Popover({ disclosure, ...props }) {
  const popover = usePopoverState();
  return (
    <>
      <PopoverDisclosure
        {...popover}
        ref={disclosure.ref}
        {...disclosure.props}
      >
        {(disclosureProps) => React.cloneElement(disclosure, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        {props.children}
      </BasePopover>
    </>
  );
}

function CatElement(props : any) {
  const getLimitedFact = (fact: string) => {
    let len = isMobile ? 70 : 100
    return fact.length >= len ? fact.substring(0, len - 3) + "..." : fact;
  }

  const getLimitedLen = () => {
    let len = isMobile ? 70 : 100
    return props.fact.length >= len;
  }
  return (
    <GridItem>
      <CatImage style={{ backgroundImage: `url(${"https://cataas.com/cat?timestamp=" + props.uniqueKey})`}}></CatImage>
      <CatDescription>{getLimitedFact(props.fact)}</CatDescription>
      {getLimitedLen() && <Popover aria-label="Custom popover" disclosure={<ReadMore>Read More</ReadMore>}>
        <PopOverClass>{props.fact}</PopOverClass>
      </Popover>}
    </GridItem>
  );
}




export default CatElement;
