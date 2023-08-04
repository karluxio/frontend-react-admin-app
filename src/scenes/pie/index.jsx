import { Header, PieChart } from '@/components'
import { Box } from '@mui/material'

export const Pie = () => {
  return (
    <Box m='20px'>
      <Header title='Pie Chart' subtitle='Simple Pie Chart' />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  )
}
