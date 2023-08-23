import { css } from "@emotion/react";

export const SLayout = css`
    display: block;

    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 51px;
    background-color: #383d40;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0px auto;
    padding: 0px 15px;
    width: 1170px;
    height: 50px;
`;

export const STtilelogo = css`
    display: flex;
`;

export const SBTitle = css`
    font-size: 23px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    cursor: pointer;
`;

export const SStitle = css`
    margin-left: 1px;
    padding: 1px 3px;
    font-size: 12px;
    font-weight: 600;
    color: #aaaaaa;
    cursor: pointer;
`;

export const SMenus = css`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export const SProfile = css`
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        color: #fafafa;
    }
`;

export const SProfilimgeBox = css`
    display: flex;

    border-radius: 50%;
    width: 30px;
    height: 30px;
    overflow: hidden;
`;

export const SUsername = css`   
    align-self: center;
    padding: 0px 7px;
    font-size: 15px;
    font-weight: 600;
`;