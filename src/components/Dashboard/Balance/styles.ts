import styled from 'styled-components'

export const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0;
    color: #3f3f3f;
    background: #7cc5ea;
    line-height: 1.7rem;
    font-family: 'Concert One', cursive;
`

export const BalanceMiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
        div {
            margin: 1rem;
        }
    }
`

export const IdentificaUser = styled.div`
    display: flex;
    margin: 0.5rem auto;
    font-size: 1.1rem;
    height: 45px;
    width: 100%;
    background-color: #7cc5ea;
    color: white;
    justify-content: space-around;
    align-items: center;
    div {
        span {
            cursor: pointer;
            vertical-align: bottom;
            transition: all 0.5s;
            &:hover {
                background: #1da0e2;
                padding: 0.5rem;
                border-radius: 50%;
          }
        }
    }
    @media only screen and (min-width: 768px) {
        justify-content: center;
        p {
            margin-right: 1rem;
        }
    }
`

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
`

export const CardDashboard = styled.div`
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
    max-height: 250px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
    p  {
        margin-left: 1em;
    }
    h3  {
        margin-left: 1em;
    }
    .hide {
        background: gray;
        color: gray;
        border-radius: 5px;
        width: 80%;
        transition: all 0.2s;
    }
    @media only screen and (min-width: 768px) {
        height: 230px;
        margin: 0;
        padding: 0;
    }
`
