import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" />
          <Span>Porfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink>Projects</NavLink>
      </li>
      <li>
        <NavLink>Technologies</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/nguyenvothuan">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vo-thuan-nguyen-711626187/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/nguyenvothuan">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
); 

export default Header;
