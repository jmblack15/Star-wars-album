import { Sheet } from "../components/Sheet";

import { Container, Stack } from "@mui/material";


const SheetsPage = () => {
  return (
    <Container sx={{
      marginTop: '100px'
    }}>
      <Stack direction={'row'} sx={{
        justifyContent: 'space-around',
      }}>
        <Sheet />
        <Sheet />
        <Sheet />
        <Sheet />
      </Stack>
    </Container>
  )
}

export { SheetsPage }