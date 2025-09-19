import { Stack, Typography } from '@mui/material';
import { StyledProgress } from './styled';

const ProgressBar = ({ progress = 0, error = false }: { progress?: number; error?: boolean }) => {
  const isFinish = progress === 100;
  return (
    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
      <StyledProgress sx={{ flex: 1 }} variant="determinate" value={progress} />
      {error ? (
        <Typography variant="header-small" color={'text.negative.primary'}>
          Failed!
        </Typography>
      ) : (
        <Typography variant="header-small" color={isFinish ? 'brand.main' : 'text.main'}>
          {progress.toFixed(2)}%
        </Typography>
      )}
    </Stack>
  );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
