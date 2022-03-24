import React from "react";

import { Todo } from '@todo-list/shared-types'
import DeleteButton from "./DeleteButton";
import Button from "./Button";

interface Props {
  onChange: () => void;
  onClick: () => void;
  onClickSecond?: () => void;
  width?: string;
  color?: string;
  heightDelete?: string;
  widthDelete?: string;
  msgDelete?: string;
  radiusDelete?: string;
  letterColor?: string;
  children?: React.ReactNode;
  checked?: boolean;
  checkboxMsg?: string;

  secondText?: string;
  letterColorSecond?: string
  colorSecond?: string
  widthSecond?: string
  heightSecond?: string
  fontSizeSecond?: string
  radiusSecond?: string
}

const InfoCard: React.FC<Props> = (
  {
    onChange,
    onClick,
    onClickSecond,
    width,
    color,
    letterColor,
    heightDelete,
    widthDelete,
    radiusDelete,
    children,
    checked,
    msgDelete,
    checkboxMsg,

    secondText,
    letterColorSecond,
    colorSecond,
    widthSecond,
    heightSecond,
    fontSizeSecond,
    radiusSecond,
  }
) => { 
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: letterColor?letterColor:"black",
      margin: "16px auto",
      backgroundColor: color?color:"#e6e5e8",
      padding: "16px",
      borderRadius: "28px",
      width: width?width:"76%",
    }}>
      <div>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span style={{position: "absolute"}}>{checkboxMsg&&checkboxMsg}</span>
      </div>
      {children}

        {(onClickSecond || secondText)&&(<div style={{flex: "0 0 4%", display: "flex", justifyContent: "center", alignItems:"center", position:"absolute", marginLeft:"310px"}}>

          <Button letterColor={letterColorSecond} 
                  color={colorSecond}
                  width={widthSecond}
                  height={heightSecond} 
                  fontSize={fontSizeSecond}
                  radius={radiusSecond}
                  onClick={onClickSecond}>{secondText}</Button>
        </div>)}
      <DeleteButton radius = {radiusDelete?radiusDelete:"14%"} width = {widthDelete?widthDelete:"40px"} children = {msgDelete?msgDelete:"Delete"} border="none" height = {heightDelete?heightDelete:"30px"} onClick={onClick}/>
    </div>
  );
}

export default InfoCard;