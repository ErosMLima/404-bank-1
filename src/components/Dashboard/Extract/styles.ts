import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 99vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  justify-self: center;
  justify-content: center;
  color: #3f3f3f;
  line-height: 1.7rem;
  font-family: 'Concert One', cursive;
`

export const CardDashboard = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  width: 85%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  height: 300px;
  overflow-y: scroll;

    .title {
        display: flex;
        margin: 0.25rem 0 1rem 0;
        p {
            margin: 0.5rem 0 0 0.75rem;
        }
        img {
            margin-left: 0.5rem;
        }
    }
    p {
        margin-left: 0.75em;
    }
    h3 {
        margin-left: 0.75em;
    }

    .title-container {
        display: flex;
        margin: 0.5rem 0 1rem 0;
        p {
            margin-top: 0.3rem;
        }
    }
    .receipts {
        flex: 1;
        text-align: center;
        justify-content: space-evenly;
        padding: 0.5rem 0;
        display: flex;
        margin-bottom: 1rem;
    }
    @media only screen and (min-width: 768px) {
        .receipts {
            padding: 0 2rem;
            justify-content: space-between;
        }
    }
`
