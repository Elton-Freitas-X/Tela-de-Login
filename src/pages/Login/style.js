import styled from 'styled-components'

 export const Div = styled.div`
    &{
        display: flex;
        align-items: center ;
        justify-content:  center;
        height: 100vh;
        width: 100%;
    }

    div:nth-child(1) svg{
        width: 400px;
        height: 400px ;
        color: #5b2be2;
    }

    div:nth-child(2) h1 {
        font-family: 'Roboto Slab';
        font-size: 50px;
        margin-bottom: 20px;
    }

    div:nth-child(2) h4 {
        font-family: 'Roboto Slab';
        font-size: 15px;
        font-weight: 300;
        margin-top: 40px;
        color: #e1e1e6;
    } 

    button{
        width: 98%;
        background-color: #202024;
        color: #eff2f5;
        font-weight: 800;
        height: 50px;
        border-radius: 5px;
        font-size: 18px;
        margin-top: 5px;
        border: none;
        outline-width: 0;
    }

    button:hover{
        background-color:#171719 ;
        color: #eff2f5;
        cursor: pointer;
    }
 `

 export const LoginRight = styled.div`

    &{
        background-color: #29292e;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        padding: 20px;
        width: 500px;
        height: 500px;
    }
 `

 export const Email = styled.div`
        & {
        display: flex;
        align-items: center;
        color: gray;
        background-color: #1a1a1d;
        border-radius: 3px;
        padding: 3px;
        width: 98%;
        height: 50px;
        border-radius: 5px;
        }

        & svg {
            margin-left: 10px;
            font-size: 25px;
        }

        & input {
            background:  transparent;
            width: 100%;
            outline-width: 0;
            color: #e1e1e6;
            border: none;
            font-size: 17px;
            margin-left: 10px;
            margin-right: 10px;
        }
 `

 export const Password = styled.div`
        & {
        display: flex;
        align-items: center;
        color: gray;
        background-color: #1a1a1d;
        border-radius: 3px;
        padding: 3px;
        width: 98%;
        height: 50px;
        border-radius: 5px;
        margin: 5px 0;
        }

        & svg {
            margin-left: 10px;
            font-size: 25px;
        }

        & input {
            background:  transparent;
            width: 100%;
            outline-width: 0;
            color: #e1e1e6;
            border: none;
            font-size: 17px;
            margin-left: 10px;
            margin-right: 10px;
        }
 
 `

export const Eye = styled.div`
    cursor: pointer;
`

