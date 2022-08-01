import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CourseCard({ name }) {
  return (
    <Card sx={{ minWidth: 275, my: 2 }} raised>
      <CardContent>
        <Typography variant="h4">{name}</Typography>
      </CardContent>
    </Card>
  );
}
