import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

import { FETCH } from '../middleware/fetch-middleware';

interface MappedState {}
interface MappedDispatch {
    sendFetch(): void;
    sendOther(): void;
}

export type AppState = MappedState & MappedDispatch;

class App extends React.Component<AppState, void> {
    render(): JSX.Element {
        const { sendFetch, sendOther } = this.props;

        return (
            <section>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0}>
                            <CardTitle>Fetch middleware</CardTitle>
                            <CardText>
                                This is where I'm going to stick all the stuff that you can do with the fetch-middleware.
                            </CardText>
                            <CardActions border>
                                <Button raised ripple primary onClick={sendFetch}>Send Fetch</Button>
                                <Button raised ripple onClick={sendOther}>Send Other Action</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>): MappedDispatch {
    return {
        sendFetch() {
            dispatch({
                type: 'SEND_FETCH',
                [FETCH]: {
                    url: 'http://jsonstub.com/pickles'
                }
            });
        },
        sendOther() {
            dispatch({ type: 'SEND_OTHER' });
        }
    };
}

export default connect(noop => noop, mapDispatchToProps)(App);