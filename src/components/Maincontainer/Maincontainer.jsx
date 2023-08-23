import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './style'
import { HiSearch } from "react-icons/hi"
import { FaList } from "react-icons/fa"
import { BiSolidGridAlt } from "react-icons/bi"

function Maincontainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle}>프로젝트 대쉬보드</h1>
                <div css={S.SRightcontainer}>
                    <input css={S.SSearch} type="text" placeholder='프로젝트 검색'/>
                    <button css={S.SList}><FaList /></button>
                    <button css={S.SGird}><BiSolidGridAlt /></button>
                </div>
            </div>
        </div>
    );
}

export default Maincontainer;