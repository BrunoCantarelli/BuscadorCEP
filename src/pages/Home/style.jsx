import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#1d1d1d, #000000) ;
    height: 100vh;
    flex-direction: column;
`

export const Search = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #00ffff;
    border-radius: 5px;
    width: 400px;
    box-shadow: 0px 0px 7px #ffffff;
` 

export const Title = styled.h1 `
    color: #00ffff;
    padding: 10px;
    font-size: 70px;
    animation: titleAnimation 2s;
    text-shadow: 3px 1px #ffffff;

    @keyframes titleAnimation {
     from{
        transform: rotateY(90deg);
     }  
     to{
        transform: rotateY(0deg);
     } 
    }

    @media (max-width: 650px) {
        font-size: 60px;
    }
`

export const Input = styled.input `
    color: #fff;
    border: none;
    background: transparent;
    border-radius: 5px;
    outline: none;
    height: 30px;
    margin-left: 5px;
    width: 350px;

    &::placeholder{
        color: #fff;
    }
`

export const ButtonSearch = styled.button `
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
    background: transparent;
    transition: transform 0.5s;

    &:hover{
        transform: scale(1.2);
    }
`

export const Main = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    color: #ffffff;
    background-color: #303030;
    border-radius: 5px;
    padding: 20px;

    h2{
        margin: 16px 0;
        font-size: 35px;
    }

    span{
        margin-bottom: 16px;
        font-weight: bold;
    }
`