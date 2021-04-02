import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  max-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #E5E5E5;
  padding: 73px;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  padding: 42px;
  border-radius: 10px;

  background-color: #fdf9f9;

  .container {
    width: 100%;
    height: 100%;
  }

  .header-form {
    p {
      font-size: 36px;
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

  .button-Deposit {
    width: 200px;
    height: 40px;
    border: 0;
    margin-top: 30px;
    border-radius: 10px;
    color: #ffff;
    background-color: #3c92fd;
  }
`
