import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  letterColor?: string
  color?: string
  width?: string
  height?: string
  fontSize?: string
  radius?: string
}



const DeleteButton: React.FC<Props> = ({ 
    children,
    onClick,
    letterColor,
    color,
    width,
    height,
    fontSize,
    radius,
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color?color:"black",
        color: letterColor?letterColor:"white",
        fontSize: fontSize?fontSize:"20px",
        borderRadius: radius?radius:"5px",
        margin: "0px 0px",
        cursor: "pointer",
        height: height&&height,
        width: width?width : "40px",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        }}
    >
    <h5>{children}</h5>
    </button>
  );
}

export default DeleteButton;