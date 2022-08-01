import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CourseCard({ name }) {
  // [stateVariable, updateFunction] = useState(initialState)
  const [isSelected, setSelected] = useState(false);
  return (
    <Card
      sx={{
        minWidth: 275,
        my: 2,
        cursor: 'pointer',
        background: isSelected ? 'yellow' : 'white',
      }}
      raised={isSelected}
      onClick={() => setSelected(!isSelected)}
    >
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
}
