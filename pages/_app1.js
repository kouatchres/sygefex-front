import App, { Container } from "next/app";
import Page from "../src/components/Page";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import withData from "../lib/withData";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProviderHooks client={apollo}   >

          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProviderHooks>
      </Container>
    );
  }
}

export default withData(MyApp);
