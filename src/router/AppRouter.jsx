import { Contacts, Dashboard, Invoices, Team } from '@/scenes'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/team' element={<Team />} />
      <Route path='/contact' element={<Contacts />} />
      <Route path='/invoices' element={<Invoices />} />
      <Route path='/form' element={<h2>form</h2>} />
      <Route path='/bar' element={<h2>bar</h2>} />
      <Route path='/pie' element={<h2>pie</h2>} />
      <Route path='/line' element={<h2>line</h2>} />
      <Route path='/faq' element={<h2>faq</h2>} />
      <Route path='/geography' element={<h2>geography</h2>} />
      <Route path='/calendar' element={<h2>calendar</h2>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
