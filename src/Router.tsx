import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart/ConfirmedOrder" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
