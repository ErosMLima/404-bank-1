import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100vw;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E5E5;
  padding: 73px;

  @media screen and (max-width: 900px){
    width: 90%;
    height: 100%;
  }
`

export const CardDashboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 42px;
  border-radius: 10px;
  background-color: #fdf9f9;
  box-shadow: #1d385699 1px 1px 4px 1px;

  .container {
    width: 100%;
    height: 100%;
  }

  .header {
    p {
      font-size: 30px;
    }
  }

  form {
    width: 100%;
    display: block;
  }
  input {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #9e9e9e;
    background-color: #fdf9f9;
  }

  .button-transferir {
    width: 200px;
    height: 40px;
    border: 0;
    margin-top: 30px;
    border-radius: 10px;
    color: #ffff;
    background-color: #3c92fd;
  }
`
