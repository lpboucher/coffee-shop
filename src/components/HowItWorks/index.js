import React from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'

const HowItWorks = () => (
  <Segment color="grey">
    <Grid>
      <Grid.Row columns={4} divided>
        <Grid.Column>
          <Header as="h2" icon text-align="center">
            <Icon name="user circle" circular />
            <Header.Content>
              Register and choose a subscription level
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon text-align="center">
            <Icon name="check circle" circular />
            <Header.Content>
              Select your preferred coffee and delevery schedule
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon text-align="center">
            <Icon name="coffee" circular />
            <Header.Content>
              Enjoy your coffee delivered right to your door!
            </Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" icon text-align="center">
            <Icon name="thumbs up" circular />
            <Header.Content>Wait... and enjoy some more!</Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default HowItWorks
