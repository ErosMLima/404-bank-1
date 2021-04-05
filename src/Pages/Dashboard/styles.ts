import styled from 'styled-components'

export const DashboardContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 3rem 0;
  min-height: 99vh;
  background: #7cc5ea;
`

export const DashMainMobile = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  overflow-y: auto;
  background: #7cc5ea;
`

export const DashNavigationMobile= styled.div`
  position: fixed;
  bottom: 0;
  background: #7cc5ea;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  nav {
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    padding: 0.15rem;
    height: 85px;
    overflow: auto;
    div {
      padding: 0.1rem;
    }
    button {
      height: 4rem;
      background: transparent;
      border: none;
      padding: 0 0.5rem;
    }
  }
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DashMain = styled.div`
  display: flex;
  width: 100%;
  background: #7cc5ea;
  justify-content: center;
`

export const DashNavBottom = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  div {
      padding: 0 1rem;
  }
`

export const DashNavigation = styled.div`
  background:#7CC5EA;
  width: 100%;
  nav {
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin: 10px;
      ul {
        display:flex;
        align-items:center;
        li {
          list-style:none;
          color:white;
          font-size:1.6rem;
          margin: 0 20px;
          a {
              cursor: pointer;
              transition: 0.5s;
            svg {
              vertical-align: bottom;
              } &:hover{
                background: #1da0e2;
                padding: 0.4rem;
                border-radius: 50%;
          }
          }
        }
    }
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    max-width: 1260px;
  }
}


  /**
  .top {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    div {
      padding: 1rem;
    }
    button {
      height: 4rem;
      border: none;
      padding: 0 0.5rem;
  }
    }*/
`
