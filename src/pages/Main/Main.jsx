import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './style'
import Header from '../../components/Header/Header';
import Maincontainer from '../../components/Maincontainer/Maincontainer';

function Main(props) {
    return (
        <div>
            <Header />
            <Maincontainer />
        </div>
    );
}

export default Main;