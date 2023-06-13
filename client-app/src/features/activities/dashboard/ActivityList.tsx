import React from "react";
import { Button, Item, ItemContent, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="view"
                  color="blue"
                />
                <Button
                  onClick={() => deleteActivity(activity.id)}
                  floated="right"
                  content="delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </ItemContent>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
