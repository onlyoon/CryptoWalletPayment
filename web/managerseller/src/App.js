import MainHomePage from './routePages/MainHomePage';
import MainWalletManagePage from './routePages/MainWalletManagePage';
import MainNetworkManagePage from './routePages/MainNetworkManagePage';
import MainBlockchainManagePage from './routePages/MainBlockchainManagePage';
import MainPaymentRecordsPage from './routePages/MainPaymentRecordsPage';
import MainMyInfoPage from './routePages/MainMyInfoPage';
import MainWalletViewPage from './routePages/MainWalletViewPage';
import MainEmptyPage from './routePages/MainEmptyPage';
import SignInFormPage from './routePages/SignInFormPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<SignInFormPage />} />
          <Route path="/" element={<MainHomePage />} />
          <Route path="/WalletManage" element={<MainWalletManagePage />} />
          <Route path="/NetworkManage" element={<MainNetworkManagePage />} />
          <Route
            path="/BlockchainManage"
            element={<MainBlockchainManagePage />}
          />
          <Route path="/PaymentRecord" element={<MainPaymentRecordsPage />} />
          <Route path="/WalletView" element={<MainWalletViewPage />} />
          <Route path="/MyInfo" element={<MainMyInfoPage />} />
          <Route path="*" element={<MainEmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
