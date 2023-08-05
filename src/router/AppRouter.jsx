import {
  Bar,
  Calendar,
  Contacts,
  Dashboard,
  FAQ,
  Form,
  Geography,
  Invoices,
  Line,
  Pie,
  Team
} from '@/scenes'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/team' element={<Team />} />
      <Route path='/contact' element={<Contacts />} />
      <Route path='/invoices' element={<Invoices />} />
      <Route path='/form' element={<Form />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/bar' element={<Bar />} />
      <Route path='/pie' element={<Pie />} />
      <Route path='/line' element={<Line />} />
      <Route path='/geography' element={<Geography />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
