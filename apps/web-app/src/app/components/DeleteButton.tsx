import React from "react";

interface Props {
  border: string;
  color?: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius?: string
  width?: string;
}

const DeleteButton: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color?color: "#ff4949",
         border,
         borderRadius: radius?radius : "14%",
         height,
         width: width?width : "40px",
         display: "flex",
         justifyContent: 'center',
         alignItems: "center",
         textAlign: "center",
         padding: "20px auto",
        }}
    >
    <h5>{children}</h5>
    </button>
  );
}

export default DeleteButton;