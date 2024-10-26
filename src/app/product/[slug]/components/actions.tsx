import { Button } from "antd";
import React from "react";

interface ActionProps {
  type: string;
  className: string;
  handleClick: (id: number | string | undefined) => void;
  id?: number;
  buttonColor?: any;
  isDanger?: boolean | false;
  icon?: React.ReactNode;
}

const Actions = ({ type, className, handleClick, id, buttonColor, isDanger = false, icon }: ActionProps) => {
  return (
    <Button
      className={`${className}`}
      onClick={() => handleClick(id)}
      type="primary"
      color={buttonColor}
      danger={isDanger}
      icon={icon}
      iconPosition={"start"}
    >
      {type}
    </Button>
  );
};

export default Actions;
