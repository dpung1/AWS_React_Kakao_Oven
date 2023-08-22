import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './style'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
            <header css={S.SLayout}>
                <div css={S.SContainer}>
                    <div>
                        <Link to="/main" css={S.STitle}>
                            Oven
                            <small css={S.SStitle}>BETA</small>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <span>userName</span>
                        </li>
                    </ul>
                </div>
            </header>
    );
}

export default Header;