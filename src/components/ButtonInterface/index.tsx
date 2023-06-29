import React from "react"
import {TouchableOpacity, TouchableOpacityProps} from "react-native"

export function ButtonInterface({onPress, children, ...rest}:TouchableOpacityProps){
    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            {children}
        </TouchableOpacity>
    )
}