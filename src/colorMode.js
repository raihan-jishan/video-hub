/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import {FaMoon,FaSun} from 'react-icons/fa';

const colorMode = props => {
    const {toggleColorMode} = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return(
        <IconButton
        variant="ghost"
        color="current"
        pos={'fixed'}
        top={'4'}
        right={'4'}
        zIndex={'overlay'}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    )
}

export default colorMode;