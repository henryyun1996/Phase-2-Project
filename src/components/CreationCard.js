import { Button, Icon, Label } from "semantic-ui-react";

export default function CreationCard({creation}) {
    return (
    //     <Card className="ui four wide column">
    //     <Image src={creation.image} />
    //     <Card.Content>
    //       <Card.Header>
    //         {creation.title}
    //       </Card.Header>
    //       <Card.Description>
    //         {creation.author}
    //       </Card.Description>
    //     </Card.Content>
    //     </Card>
     <div>
        <img src={creation.image} alt={creation.title} />
        <h4>Title: {creation.title}</h4>
        <h4>Artist: {creation.artist}</h4>
        <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {creation.likes}
      </Label>
    </Button>
     </div>

    )
}