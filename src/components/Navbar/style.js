import styled from "styled-components"

export const NavDiv = styled.div`
  @keyframes nav {
    from {
      opacity: 0;
      transform: translate3d(0, -25px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  nav {
    animation: nav 0.2s ease-in-out forwards;
    display: flex;
    justify-content: space-between;
    max-width: 60em;
    width: 100%;
    margin: 0 auto
    background-color: rgba(255, 255, 255, 1);
    padding: 10px 0;
    /* position: fixed; */
    top: 0;
    left: 0;
    opacity: 0.97;
    z-index: 1003;
  }

  @media screen and (max-width: 768px) {
    nav {
      padding: 1em;
    }
  }

  nav a {
    color: #2e2e40;
    font-weight: 700;
    margin: 0 2em;
    letter-spacing: 0.08em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    nav a {
      margin: 0 1em;
    }
  }

  @keyframes navdot {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  nav a:before {
    border-radius: 50%;
    content: "";
    background-color: #f5c453;
    left: 0;
    height: 10px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-200%, -50%);
    width: 10px;
  }

  @media screen and (max-width: 768px) {
    nav a:before {
      bottom: 150%;
      top: auto;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  nav a.active:before {
    animation: navdot 0.25s ease-in-out forwards 0.25s;
  }
`
