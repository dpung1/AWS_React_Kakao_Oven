import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './style'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isMenusOpenState } from '../../stores/MenusStore';
import profile from "../../assets/profile.png"
import { FaCaretDown } from "react-icons/fa"

function Header(props) {
    const [ isOpen, setIsOpen ] = useRecoilState(isMenusOpenState)
    
    const handleMenusToggleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen)
    }
    
    return (
            <header css={S.SLayout}>
                <div css={S.SContainer}>
                    <Link to="/main">
                        <div css={S.STtilelogo}>
                            <h1 css={S.SBTitle}>Oven</h1>
                            <span css={S.SStitle}>BETA</span>
                        </div>
                    </Link>
                    <div css={S.SMenus} onClick={handleMenusToggleClick}>
                        <div css={S.SProfile}>
                            <div css={S.SProfilimgeBox}>
                                <img src={profile} alt="" />
                            </div>
                            <span css={S.SUsername}>UserName</span>
                            <FaCaretDown />
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;