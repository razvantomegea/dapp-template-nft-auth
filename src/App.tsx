import React from 'react';
import { DappProvider } from '@elrondnetwork/dapp-core/wrappers';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import routes from 'routes';

const environment = 'devnet';

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
      >
        <Layout>
          <Routes>
            {routes.map((route: any, index: number) => (
              <Route
                path={route.path}
                key={'route-key-' + index}
                element={<route.component />}
              />
            ))}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
