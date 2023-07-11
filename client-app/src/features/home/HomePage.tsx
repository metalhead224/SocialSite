<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Home Page</h1>
            <h3>Go to <Link to='/activities'>activities</Link></h3>
        </Container>
    )
}
=======
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content={`Welcome back ${userStore.user?.displayName}`} />
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to activities!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegsiterForm />)} size='huge' inverted>
                            Register
                        </Button>
                    </>

                )}
            </Container>
        </Segment>
    )
})
>>>>>>> 6d95d7812a4120f9ccebc3c681cc74d9a3383583
