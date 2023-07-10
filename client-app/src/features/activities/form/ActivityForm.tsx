import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';


export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {  createActivity, updateActivity, 
        loading, loadActivity, loadingInitial } = activityStore;
  const {id} = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then(activity => setActivity(activity!))
  }, [id, loadActivity]);

  function handleSubmit() {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
      activity.id ? updateActivity(activity) : createActivity(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (loadingInitial) return <LoadingComponent content="loading activity"/> 

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          name="title"
          value={activity.title}
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          name="description"
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          name="category"
          value={activity.category}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          name="date"
          type="date"
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          name="city"
          value={activity.city}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          name="venue"
          value={activity.venue}
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          type="button"
          onClick={handleSubmit}
          positive
          floated="right"
          content="Submit"
        />
        <Button
          as={Link}
          to='/activities'
          type="button"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
});
