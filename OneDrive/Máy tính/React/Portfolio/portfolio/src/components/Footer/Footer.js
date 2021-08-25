import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">0907501946</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vothuan464.646@gmail.com">email</LinkItem>          
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>LinkedIn</LinkTitle>
          <LinkItem href="mailto: vothuan464.646@gmail.com">email</LinkItem>          
        </LinkColumn>
        
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Don't fuck me</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/nguyenvothuan">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vo-thuan-nguyen-711626187/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/nguyenvothuan">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
