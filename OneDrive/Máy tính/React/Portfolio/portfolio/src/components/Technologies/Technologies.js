import React from 'react';
import { DiFirebase, DiJava, DiMsqlServer, DiMysql, DiReact, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Some shit about this techniques
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="4rem"/>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br/>
            SQL and Power BI
          </ListParagraph>          
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size="4rem"/>
        <ListContainer>
          <ListTitle>Data structure and Algorithm</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Java, C#, and Python
          </ListParagraph>          
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
