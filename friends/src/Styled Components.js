import styled from 'styled-components';

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputStyle = styled.input`
    align-self: center;
    height: 5vh;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 2%;
    margin-bottom: 15px;
`;

export const Submit = styled.button`
    font-size: 16px;
    font-weight: bold;
    background-color: lightblue;
    width: 20%;
    height: 5vh;
    border: 1px solid darkgray;
    border-radius: 5px;
    align-self: center;

    &:hover{
        background-color: lightgreen;
    }
`;

export const FriendStyle = styled.div`
    background-color: lightblue;
    border: 1px solid darkgray;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 40px auto;
    padding: 0 0 15px 0;
`;

export const FriendHeader = styled.h1`
    font-size: 30px;
    margin-bottom: 13px;
    margin-top: -15px;
`;

export const Text = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const X = styled.p`
    text-align: right;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    color: rbg(45,45,45);
    margin-bottom: 0;
    width: 5%;
    align-self: flex-end;

    &:hover{
        color: gray;
        cursor: pointer;
    }
`;

export const Email = styled.a`
    color: black;

    &:hover{
        color: gray;
        cursor: pointer;
    }
`;