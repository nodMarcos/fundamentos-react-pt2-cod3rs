import React from "react";
import { childrenWithProps } from "../utils/utils";

export default props => 
    <div>
        <h1>Familia</h1>
        {childrenWithProps(props)}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>