<<<<<<< HEAD
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const {loadActivities, activityRegistry} = activityStore;

  useEffect(() => {
    if (activityRegistry.size === 0) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h1>activities</h1>
      </Grid.Column>
    </Grid>
  );
});
=======
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activitities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
