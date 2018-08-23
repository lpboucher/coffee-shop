import React from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'
import { HOW_IT_WORKS } from '../../constants'

const HowItWorks = () => (
  <Segment color="grey">
    <Grid>
      <Grid.Row columns={4} divided>
        {HOW_IT_WORKS.map(item => (
          <Grid.Column key={item.id}>
            <Header as="h2" icon text-align="center">
              <Icon name={item.icon} circular />
              <Header.Content>{item.explainText}</Header.Content>
            </Header>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </Segment>
)

export default HowItWorks
