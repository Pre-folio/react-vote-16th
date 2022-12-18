import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import GlobalStyle from './styles/GlobalStyle';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Vote } from './pages/Vote';
import { Result } from './pages/Result';
import { PartLeaderResult } from './pages/PartLeaderResult';
import { DemoDayResult } from './pages/DemoDayResult';
import { PartLeaderVote } from './pages/PartLeaderVote';
import { DemoDayVote } from './pages/DemoDayVote';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/vote" element={<Vote />}>
              <Route path="part-leader" element={<PartLeaderVote />} />
              <Route path="demo-day" element={<DemoDayVote />} />
            </Route>
            <Route path="/result" element={<Result />}>
              <Route path="part-leader" element={<PartLeaderResult />} />
              <Route path="demo-day" element={<DemoDayResult />} />
            </Route>
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
