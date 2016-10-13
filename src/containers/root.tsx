import * as React from 'react';
import { Provider } from 'react-redux';
import { Layout, Header, Content } from 'react-mdl';
import App from './app';

export interface RootProps {
    store: any; // todo
}

class Root extends React.Component<RootProps, void> {
    render(): JSX.Element {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Layout fixedHeader>
                    <Header title='Redux Middleware Playground' />
                    <Content>
                        <App />
                    </Content>
                </Layout>
            </Provider>
        );
    }
}

export default Root;

