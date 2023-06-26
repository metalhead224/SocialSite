import React, { SyntheticEvent, useState } from "react";
import { Button, Item, ItemContent, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  activities: Activity[];
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default observer(function ActivityList({
  activities,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  const { activityStore } = useStore();

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
                  onClick={() => activityStore.selectActivity(activity.id)}
                  floated="right"
                  content="view"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  loading={submitting && target === activity.id}
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
});
