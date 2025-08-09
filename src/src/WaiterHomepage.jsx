import React from "react";
import styled, { keyframes } from "styled-components";
import { FaClipboardList, FaUtensils, FaReceipt, FaTable, FaBell } from "react-icons/fa";

const colors = {
  richRed: "#8B0000",
  softGold: "#D4AF37",
  creamyWhite: "#FAF5E4",
  darkText: "#3A2C2C",
  shadow: "rgba(0, 0, 0, 0.15)",
};

const fadeInUp = keyframes`
  from {opacity: 0; transform: translateY(10px);}
  to {opacity: 1; transform: translateY(0);}
`;

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${colors.darkText};
  background-color: ${colors.creamyWhite};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: ${colors.richRed};
  color: ${colors.creamyWhite};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 10px ${colors.shadow};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-family: 'Georgia', serif;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  user-select: none;
  cursor: default;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${colors.creamyWhite};
    font-weight: 600;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    &:hover,
    &:focus {
      color: ${colors.softGold};
      outline: none;
    }
  }
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 3rem 2rem;
  background: linear-gradient(
      135deg,
      rgba(139,0,0,0.7),
      rgba(212,175,55,0.6)
    ),
    url("https://images.unsplash.com/photo-1555992336-03a23c9e70f6?auto=format&fit=crop&w=1400&q=80")
      no-repeat center center/cover;
  color: ${colors.creamyWhite};
  border-radius: 0 0 40px 40px;
  box-shadow: 0 10px 25px ${colors.shadow};
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0 0 20px 20px;
  }
`;

const HeroText = styled.div`
  flex: 1 1 400px;
  padding: 1rem 3rem 1rem 1rem;
  animation: ${fadeInUp} 1s ease forwards;
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
  }
  p {
    font-size: 1.3rem;
    font-weight: 600;
    max-width: 400px;
    line-height: 1.3;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }
`;

const HeroImage = styled.img`
  flex: 1 1 400px;
  border-radius: 20px;
  max-width: 100%;
  box-shadow: 0 10px 20px ${colors.shadow};
  animation: ${fadeInUp} 1.4s ease forwards;
  user-select: none;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const QuickAccess = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardButton = styled.button`
  background: ${colors.creamyWhite};
  border: 2.5px solid ${colors.richRed};
  border-radius: 18px;
  padding: 1.8rem 1rem;
  font-weight: 700;
  color: ${colors.richRed};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px ${colors.shadow};
  transition: all 0.3s ease;
  font-size: 1.1rem;
  user-select: none;
  outline-offset: 3px;
  &:hover,
  &:focus {
    background: ${colors.richRed};
    color: ${colors.creamyWhite};
    border-color: ${colors.softGold};
    box-shadow: 0 6px 14px ${colors.softGold};
    transform: translateY(-5px);
    outline: none;
  }
  svg {
    font-size: 3rem;
    margin-bottom: 0.6rem;
  }
`;

const RealTimeOrders = styled.section`
  background: ${colors.softGold};
  border-radius: 20px;
  max-width: 900px;
  margin: 2rem auto 4rem;
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 25px ${colors.shadow};
  color: ${colors.richRed};
  font-weight: 600;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
  svg {
    font-size: 1.8rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0 2rem;
  font-size: 0.9rem;
  color: ${colors.darkText};
  user-select: none;
`;

export default function WaiterHomepage() {
  return (
    <Container>
      <Header>
        <Logo>La Belle Table</Logo>
        <Nav>
          <ul>
            <li><a href="#home" tabIndex={0}>Home</a></li>
            <li><a href="#menu" tabIndex={0}>Menu</a></li>
            <li><a href="#orders" tabIndex={0}>Orders</a></li>
            <li><a href="#profile" tabIndex={0}>Profile</a></li>
            <li><a href="#support" tabIndex={0}>Support</a></li>
          </ul>
        </Nav>
      </Header>

      <main>
        <Hero aria-label="Welcome hero section with waiter and dining table image">
          <HeroText>
            <h2>Serving Excellence at Your Fingertips</h2>
            <p>
              Experience seamless service and delight your guests with
              our elegant waiter app designed for hospitality professionals.
            </p>
          </HeroText>
          <HeroImage
            src="https://images.unsplash.com/photo-1555992336-03a23c9e70f6?auto=format&fit=crop&w=800&q=80"
            alt="Smiling waiter serving guests at a beautifully set dining table"
            loading="lazy"
            draggable={false}
          />
        </Hero>

        <QuickAccess aria-label="Quick access waiter task buttons">
          <CardButton aria-label="Take Order" tabIndex={0}>
            <FaClipboardList />
            Take Order
          </CardButton>
          <CardButton aria-label="View Menu" tabIndex={0}>
            <FaUtensils />
            View Menu
          </CardButton>
          <CardButton aria-label="Current Orders" tabIndex={0}>
            <FaReceipt />
            Current Orders
          </CardButton>
          <CardButton aria-label="Table Management" tabIndex={0}>
            <FaTable />
            Table Management
          </CardButton>
        </QuickAccess>

        <RealTimeOrders aria-live="polite" aria-atomic="true">
          <FaBell aria-hidden="true" />
          New order received at Table 7! Please attend promptly.
        </RealTimeOrders>
      </main>

      <Footer>
        &copy; 2025 La Belle Table. All rights reserved.
      </Footer>
    </Container>
  );
}

