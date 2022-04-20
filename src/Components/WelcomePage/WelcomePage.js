import './WelcomePage.css';
import * as wp from '../StyledComponents/SC_WelcomePage';
import * as sc from "../StyledComponents/IndexStyledComponents";
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  return (
    <>
    <wp.Container >
      <wp.Title>PACMAN CHALLENGE</wp.Title>
      <Link to="/Player">
      <sc.Button>Start Game</sc.Button>
      </Link>
    </wp.Container>
    </>
  );
};

export default WelcomePage;
