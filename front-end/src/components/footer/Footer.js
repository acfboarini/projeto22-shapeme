import { IoMdHome, IoMdToday } from "react-icons/io";
import { MdLunchDining } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {

    return (
            <Navbar>
                <Link style={linkStyle} to={`/home`}> 
                    <IoMdHome/>
                </Link>

                <Link style={linkStyle} to={`/today`}>
                    <IoMdToday/>
                </Link>


                <Link style={linkStyle} to={`/foods`}>
                    <MdLunchDining/>
                </Link>
            </Navbar>
    )
}

const Navbar = styled.footer`
    z-index: 2;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    background-color: #52B6FF;
    font-size: 30px;
`;

const linkStyle = {
    textDecoration: "none",
}